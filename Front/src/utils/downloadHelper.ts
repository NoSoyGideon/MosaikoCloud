// src/utils/downloadHelper.ts

/**
 * Recibe un objeto Blob y fuerza la descarga nativa en el navegador
 * @param blobData Contenido binario del archivo (.rar, .pdf, .zip, etc.)
 * @param filename Nombre predeterminado con el que se guardará el archivo
 */
export const triggerBlobDownload = (blobData: Blob, filename: string): void => {
  const url = window.URL.createObjectURL(blobData);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  
  // Limpieza del DOM y liberación de memoria
  link.remove();
  window.URL.revokeObjectURL(url);
};