export const getDimensionsFromObjectUrl = (
  file: File | Blob,
): Promise<{ width: number; height: number }> =>
  new Promise((resolve) => {
    const dataURL = window.URL.createObjectURL(file);

    const img = new Image();
    img.onload = () => {
      resolve({
        height: img.height,
        width: img.width,
      });
    };
    img.src = dataURL;
  });
