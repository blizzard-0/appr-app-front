import { NextApiRequest, NextApiResponse } from 'next';

export interface GoogleSearchProduct {
  brand_name: string;
  id: string;
  link: string;
  title: string;
  item_id: string;
}

/**
 * API Route for getting image search result from google api
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405);
  }
  try {
    const response = await fetch(
      `https://appreciate-product-search-dyjcvwqkja-uc.a.run.app/search-by-text?q=${encodeURIComponent(
        req.query.q.toString(),
      )}&start=${req.query.start}&size=6`,
    );
    const data = await response.json();
    if (data.status !== 'ok') {
      return res.status(500).send({ success: false });
    }
    return res
      .status(200)
      .send({ success: true, nextStart: data.next_start, results: data.data });
  } catch (err) {
    return res.status(500).send({ success: false });
  }
}
