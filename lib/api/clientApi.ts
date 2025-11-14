import { User, RegisterData, LoginData } from '@/types/user';
import { api } from './api';

interface CheckSessionRequest {
  success: boolean;
}

export const checkSession = async () => {
  const { data } = await api.get<CheckSessionRequest>('/auth/session');
  return data.success;
};

export const getProfile = async (): Promise<User> => {
  const { data } = await api.get<User>('/users/current');
  return data;
};

export interface Credentials {
  email: string;
  password: string;
}

export const register = async (credentials: Credentials) => {
  const { data } = await api.post<RegisterData>('/auth/register', credentials);
  return data;
};
export const login = async (credentials: Credentials) => {
  const { data } = await api.post<User>('/auth/login', credentials);
  return data;
};
