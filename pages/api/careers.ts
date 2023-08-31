import { NextApiRequest, NextApiResponse } from 'next';

export interface LeverJob {
  id: string;
  title: string;
  location: string;
  url: string;
}

/**
 * API Route for getting postings from appreciate lever app
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405);
  }
  try {
    const response = await fetch('https://api.lever.co/v1/postings', {
      headers: {
        Authorization: `Basic OFMrVysrMmdDWjBpSThOOU0wbHd1aHhCVUhYZG5KdmRiM2NLYWQwVlNmWEg3RUhkOg==`,
      },
    });
    const data = await response.json();
    const jobs = data.data.map((d: any) => ({
      id: d.id,
      title: d.text,
      url: d.urls.show,
      location: `${d.categories.location} / ${d.categories.commitment}`,
    }));
    return res.status(200).send({ jobs });
  } catch (err) {
    return res.status(500).send({ jobs: [] });
  }
}
