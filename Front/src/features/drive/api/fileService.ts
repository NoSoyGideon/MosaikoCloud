// src/features/drive/api/fileService.ts
import { apiClient } from '@/config/axios';
import type { ApiResponse } from '@/types/api';
import { triggerBlobDownload } from '@/utils/downloadHelper';
import type { DriveItem } from '../types';

export const fileService = {
  /**
   * 1. Subir archivo binario (soporta .rar, imágenes, pdfs, etc.)
   * Utiliza FormData para transmitir multipart/form-data.
   */
  uploadFile: async (
    file: File,
    parentId?: string,
    onProgress?: (percent: number) => void
  ): Promise<ApiResponse<DriveItem>> => {
    const formData = new FormData();
    formData.append('file', file);
    if (parentId) {
      formData.append('parentId', parentId);
    }

    const response = await apiClient.post<ApiResponse<DriveItem>>(
      '/drive/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', // Anula el 'application/json' por defecto
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total && onProgress) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            onProgress(percentCompleted);
          }
        },
      }
    );

    return response.data;
  },

  /**
   * 2. Descargar un archivo individual por ID
   * Solicita respuesta binaria 'blob' para evitar que Axios parsee la respuesta como JSON[cite: 2].
   */
  downloadSingleFile: async (fileId: string, fileName: string): Promise<void> => {
    const response = await apiClient.get(`/drive/download/${fileId}`, {
      responseType: 'blob', // OBLIGATORIO para archivos[cite: 2]
    });

    const blob = new Blob([response.data]);
    triggerBlobDownload(blob, fileName);
  },

  /**
   * 3. Descargar múltiples archivos o carpetas empaquetados en un .zip
   */
  downloadAsZip: async (itemIds: string[], zipName = 'archivos.zip'): Promise<void> => {
    const response = await apiClient.post(
      '/drive/download-batch',
      { itemIds },
      {
        responseType: 'blob',
      }
    );

    const blob = new Blob([response.data], { type: 'application/zip' });
    triggerBlobDownload(blob, zipName);
  },

  /**
   * 4. Validaciones en Cliente antes de golpear el Backend (Reglas de Negocio)
   */
  validateFileBeforeUpload: (file: File): { isValid: boolean; error?: string } => {
    const ONE_GB_IN_BYTES = 1024 * 1024 * 1024;

    if (file.size > ONE_GB_IN_BYTES) {
      return {
        isValid: false,
        error: 'El archivo excede el límite máximo permitido de 1 GB por archivo.',
      };
    }

    return { isValid: true };
  },
};