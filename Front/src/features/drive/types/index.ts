// src/features/drive/types/index.ts

export type FileType = 'FILE' | 'FOLDER';

export interface DriveItem {
  id: string;
  name: string;
  size: number; // en bytes
  mimeType: string;
  isFolder: boolean;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface UploadProgress {
  fileName: string;
  progress: number; // 0 a 100
  status: 'PENDING' | 'UPLOADING' | 'COMPLETED' | 'ERROR';
  error?: string;
}