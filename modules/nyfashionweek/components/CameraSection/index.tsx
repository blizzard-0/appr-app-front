import { useToast } from '@/components/Toast';
import { Spinner } from '@/components/v2/ExploreItemDetail/icon/Spinner';
import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useNyfashionweekContext } from '../../context';
import { CameraFrame } from './components/CameraFrame';
import { PressButton } from './components/PressButton';

export const CameraSection: React.FC = () => {
  const webcamRef = useRef<Webcam & HTMLVideoElement>(null);
  const { setStep, setSuccessResult, setErrorMessage } =
    useNyfashionweekContext();
  const [loading, setLoading] = useState(true);

  const handleUserMedia = () => setTimeout(() => setLoading(false), 1000);

  const handleTakePhoto = async () => {
    try {
      if (webcamRef.current) {
        const result = await webcamRef.current.getScreenshot();
        if (!result) return;
        if (result.includes('data:image/jpeg;base64,')) {
          // remove the data:image/jpeg;base64, part
          const base64 = result.replace('data:image/jpeg;base64,', '');
          sendImage(base64);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const sendImage = async (base64: string) => {
    try {
      setStep('Verifying');
      const data = await fetch(
        'https://appreciate-fingerprinting-dyjcvwqkja-uc.a.run.app/identify',
        {
          method: 'POST',
          body: base64,
          headers: {
            contentType: 'multipart/form-data',
          },
        },
      );
      const result = await data.json();
      if (result.status === 'ok') {
        if (result.data.fingerprint_id) {
          setStep('Success');
          const fingerprintingId = result.data.fingerprint_id;
          setSuccessResult((prev) => ({
            ...prev,
            id: result.data.identification_id,
            celebrityName:
              fingerprintingId === 'bag1'
                ? 'Kylie'
                : fingerprintingId === 'bag2'
                ? 'Zendaya'
                : fingerprintingId === 'bag3'
                ? 'Bella'
                : '',
            image:
              fingerprintingId === 'bag1'
                ? 'https://res.cloudinary.com/appreciate-stuff-inc/image/upload/v1662650502/nyfashionweek/kylie_o3kjny.png'
                : fingerprintingId === 'bag2'
                ? 'https://res.cloudinary.com/appreciate-stuff-inc/image/upload/v1662628239/nyfashionweek/zendaya_byb4y6.png'
                : fingerprintingId === 'bag3'
                ? 'https://res.cloudinary.com/appreciate-stuff-inc/image/upload/v1662628237/nyfashionweek/bella_brt6va.jpg'
                : undefined,
          }));
        } else {
          setErrorMessage('Looks like there was an error with the photo.');
          setStep('Error');
        }
      } else {
        setErrorMessage('Something went wrong.');
        setStep('Error');
      }
    } catch (e) {
      setErrorMessage('Something went wrong.');
      setStep('Error');
    }
  };

  return (
    <div className="pt-12 text-center text-white flex flex-col items-center flex-1">
      <h1 className="font-maison-neue-extended text-20-px mb-2">
        Take a photo of the bag
        <br /> heart charm.
      </h1>
      <div className="relative my-5">
        <div
          className="absolute inset-0 z-10 items-center flex justify-center"
          style={{ opacity: loading ? 0 : 1 }}
        >
          <CameraFrame />
        </div>
        {loading && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={{
            width: 1280,
            height: 720,
            facingMode: 'environment',
          }}
          onUserMedia={handleUserMedia}
          style={{ opacity: loading ? 0 : 1 }}
        />
      </div>
      <div className="mt-auto flex items-center w-full">
        <p
          className="font-maison-neue-medium text-lg cursor-pointer"
          onClick={() => {
            setStep('Idle');
          }}
        >
          Cancel
        </p>
        <button
          onClick={handleTakePhoto}
          className="flex w-camera-wrapper justify-center"
        >
          <PressButton />
        </button>
      </div>
    </div>
  );
};
