export interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
    timestamp: string;
}


export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string>;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'ADMIN' | 'USER';
}

/**
 * Par de tokens para autenticación JWT
 */
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

/**
 * Respuesta recibida tras un inicio de sesión exitoso
 */
export interface LoginResponse {
  user: User;
  tokens: AuthTokens;
}