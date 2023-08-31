import axios from 'axios';
import { publicRuntimeConfig } from '../config';

export interface PreUpload {
  imageUploadId: string;
  file: File;
  uploadSource: 'instagram' | 'filesystem'; // where the image comes from
}

interface SingleFileUploadResult {
  preUpload: PreUpload;
}

interface CloudinaryFileUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: Date;
  tags: string[];
  pages: number;
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  access_mode: string;
  original_filename: string;
  eager: {
    transformation: string;
    width: number;
    height: number;
    url: string;
    secure_url: string;
  }[];
}

export interface SuccessfulSingleFileUploadResult
  extends SingleFileUploadResult {
  type: 'success';
  data: CloudinaryFileUploadResponse;
}

export interface FailedSingleFileUploadResult extends SingleFileUploadResult {
  type: 'failed';
  error: any;
}

const handleSingleFileCloudinaryUpload = async (
  preUpload: PreUpload,
  onUploadProcess: (progress: number) => void,
): Promise<SuccessfulSingleFileUploadResult | FailedSingleFileUploadResult> => {
  const formData = new FormData();
  formData.append('file', preUpload.file);
  formData.append(
    'upload_preset',
    publicRuntimeConfig.NEXT_PUBLIC_CLOUDINARY_USER_PHOTO_UPLOAD_PRESET,
  );
  formData.append(
    'api_key',
    publicRuntimeConfig.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  );
  formData.append('timestamp', new Date().toISOString());
  formData.append('tags', 'wallet-item');
  try {
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${publicRuntimeConfig.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData,
      {
        onUploadProgress: (progressEvent_1: any) => {
          onUploadProcess(progressEvent_1.loaded / progressEvent_1.total);
        },
      },
    );
    return {
      type: 'success' as const,
      preUpload,
      data,
    };
  } catch (e) {
    return {
      type: 'failed' as const,
      preUpload,
      error: e,
    };
  }
};

export const handleMultiFileCloudinaryUpload = async (
  files: PreUpload[],
  onUploadProgress?: (progress: number, id: string) => void,
) => {
  const SINGLE_FILE_PERCENTAGE = 80 / files.length;
  const promises = files.map((file) =>
    handleSingleFileCloudinaryUpload(file, (progress) => {
      if (onUploadProgress) {
        onUploadProgress(SINGLE_FILE_PERCENTAGE * progress, file.imageUploadId);
      }
    }),
  );
  const uploaded = await Promise.all(promises);
  const successfulUploads = uploaded.filter(
    (cur): cur is SuccessfulSingleFileUploadResult => {
      return cur.type === 'success';
    },
  );
  const failedUploads = uploaded.filter(
    (cur_1): cur_1 is FailedSingleFileUploadResult => {
      return cur_1.type === 'failed';
    },
  );
  const {
    failedUploads: failedUploads_1,
    successfulUploads: successfulUploads_1,
  } = {
    failedUploads,
    successfulUploads,
  };
  if (failedUploads_1.length) {
    return {
      type: 'partialFailure' as const,
      failedUploads,
      successfulUploads,
    };
  } else {
    return {
      type: 'success' as const,
      uploads: successfulUploads_1,
    };
  }
};
