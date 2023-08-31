import { NextApiRequest, NextApiResponse } from 'next';
import { formatter } from '../../utils/currency';

/**
 *   API Route for getting product price from google api
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405);
  }
  // Kept hard coded url here since it is demo one
  try {
    const response = await fetch(
      `https://appreciate-prices-dyjcvwqkja-uc.a.run.app/resale-price?q=${encodeURIComponent(
        req.query.q.toString(),
      )}&image_url=${encodeURIComponent(req.query.image_url.toString())}`,
    );
    const data = await response.json();
    if (data.status === 'ok') {
      res.status(200).send(formatter.format(data.data.price));
    } else {
      res.status(500).send('…');
    }
  } catch {
    res.status(500).send('…');
  }
}
