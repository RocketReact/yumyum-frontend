import { User } from '@/types/user';
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
export const logout = async (): Promise<void> => {
  const { data } = await api.post<void>('/auth/logout');
  return data;
};
