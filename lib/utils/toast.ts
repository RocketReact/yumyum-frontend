import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const toastSuccess = (message: string) => {
  return iziToast.success({
    title: 'Success',
    message,
    position: 'topRight',
  });
};

export const toastError = (message: string) => {
  return iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
  });
};
