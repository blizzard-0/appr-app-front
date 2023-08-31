import { useToastContext } from '@/modules/toast';
import React from 'react';

export const CopyEmailButton: React.FC = () => {
  const { pushSuccess } = useToastContext();
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('send@appreciate.it');
    pushSuccess('Copied to your clipboard - send@appreciate.it', {
      hideIcon: false,
    });
  };

  return (
    <button
      className="h-8 px-3 bg-gray-900 rounded text-base text-white"
      onClick={handleCopyEmail}
    >
      Copy email address
    </button>
  );
};
