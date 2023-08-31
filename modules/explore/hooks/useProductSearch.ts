import { useState, useRef, useCallback } from 'react';
import { GoogleSearchProduct } from '../../../pages/api/image';

async function fetchProducts(
  query: string,
  start: number,
): Promise<{ results: GoogleSearchProduct[]; next: number }> {
  try {
    const data = await fetch(
      `/api/image?q=${encodeURIComponent(query)}&start=${start}`,
    );
    const res = await data.json();
    if (res.success === true) {
      return {
        results: res.results as GoogleSearchProduct[],
        next: res.nextStart,
      };
    } else {
      return { results: [], next: 0 };
    }
  } catch {
    return { results: [], next: 0 };
  }
}

const mockProducts = new Array(6).fill('');

export const useProductSearch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<GoogleSearchProduct[]>([]);
  const [resalePrices, setResalePrices] = useState<Record<string, string>>({});
  const [loadingPrices, setLoadingPrices] = useState<Record<string, boolean>>(
    {},
  );
  const [hasMore, setHasMore] = useState(true);
  const nextStart = useRef(1);

  const initData = () => {
    nextStart.current = 1;
    setData([]);
    setHasMore(true);
  };

  const getProducts = useCallback(async (searchString: string) => {
    setLoading(true);
    const { next, results } = await fetchProducts(
      searchString,
      nextStart.current,
    );
    if (results.length === 0) {
      setHasMore(false);
    } else {
      nextStart.current = next;
      setData((prev) => [...prev, ...results]);
    }
    setLoading(false);
    const initPrices: Record<string, string> = {};
    const initLoading: Record<string, boolean> = {};
    results.forEach((d) => {
      initLoading[d.id] = true;
      initPrices[d.id] = '';
    });
    setResalePrices((prev) => ({ ...prev, ...initPrices }));
    setLoadingPrices((prev) => ({ ...prev, ...initLoading }));
    await Promise.all(
      results.map(async (d) => {
        let price = '…';
        try {
          const data = await fetch(
            `/api/resale-price?q=${encodeURIComponent(
              d.title,
            )}&image_url=${encodeURIComponent(d.link)}`,
          );
          const res = await data.text();
          price = res;
        } catch {
          price = '…';
        }
        setResalePrices((prevPrices) => ({ ...prevPrices, [d.id]: price }));
        setLoadingPrices((prevLoading) => ({
          ...prevLoading,
          [d.id]: false,
        }));
        return price;
      }),
    );
  }, []);

  return {
    loading,
    data,
    resalePrices,
    loadingPrices,
    mockProducts,
    hasMore,
    getProducts,
    initData,
  };
};
