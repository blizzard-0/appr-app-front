interface OpenWindow {
  url: string;
  name?: string;
}

export const openWindow = ({ url, name }: OpenWindow) => {
  const top = (window.innerHeight - 400) / 2 + window.screenY;
  const left = (window.innerWidth - 400) / 2 + window.screenX;
  const width = 400;
  const height = 500;
  return window.open(
    url,
    '_blank',
    `dialog=yes,top=${top}px,left=${left},width=${width}px,height=${height}px`,
  );
};

interface ObserveWindow {
  popup: Window;
  interval?: number;
  onClose: () => void;
}

export const observeWindow = ({ popup, interval, onClose }: ObserveWindow) => {
  const intervalId = setInterval(() => {
    if (popup.closed) {
      clearInterval(intervalId);
      onClose();
    }
  }, interval || 100);
};
