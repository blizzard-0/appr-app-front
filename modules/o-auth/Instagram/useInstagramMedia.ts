import { useState } from 'react';
import axios from 'axios';
import { InstagramRequestState } from '.';

export interface InstagramMedia {
  id: number;
  media_url: string;
  caption?: string;
}

interface InstagramMediaResponse {
  data: InstagramMedia[];
  paging: {
    cursors: { before: string; after: string };
    next?: string;
    previous?: string;
  };
}

export const useLoadInstagramMedia = (oAuthToken: string) => {
  const [medias, setMedias] = useState<InstagramMedia[]>();
  const [nextPageLink, setNextPageLink] = useState('');
  const [hasMoreMedia, setHasMoreMedia] = useState(true);
  const [loadStatus, setLoadStatus] = useState<InstagramRequestState>({
    status: 'idle',
  });
  const fields: Array<keyof InstagramMedia> = ['id', 'media_url', 'caption'];
  const getExtensionFromUrl = (url: string) => {
    try {
      const parts = url.match(
        /^https?:\/\/.*[\\\/][^\?#]*\.([a-zA-Z0-9]+)\??#?/,
      );
      return parts ? parts[1] : '';
    } catch (err) {
      return '';
    }
  };

  const loadUserMedia = async () => {
    setLoadStatus({ status: 'inprogress' });
    try {
      if (!hasMoreMedia) return;
      let requestUrl = `https://graph.instagram.com/me/media?limit=12&access_token=${oAuthToken}&fields=${fields.join(
        ',',
      )}`;
      if (medias && nextPageLink) {
        requestUrl = nextPageLink;
      }
      const res = await axios.get<InstagramMediaResponse>(requestUrl);
      if (res.status === 200) {
        if (!res.data.paging.next && res.data.paging.previous) {
          setHasMoreMedia(false);
        } else if (res.data.paging.next) {
          setHasMoreMedia(true);
          setNextPageLink(res.data.paging.next);
        }

        setLoadStatus({ status: 'success' });
        if (res.data.data) {
          const imageMedias = res.data.data.filter(
            (x) => getExtensionFromUrl(x.media_url) !== 'mp4',
          );

          if (medias) {
            setMedias([...medias, ...imageMedias]);
          } else {
            setMedias(imageMedias);
          }
        }
      } else {
        setLoadStatus({ message: 'Unexpected Error', status: 'failure' });
      }
    } catch (error) {
      setLoadStatus({ message: 'Unexpected Error', status: 'failure' });
    }
  };

  return [loadUserMedia, { loadStatus, medias, hasMoreMedia }] as const;
};
