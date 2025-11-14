export async function toastSuccess(message: string) {
  const iziToast = (await import('izitoast')).default;

  iziToast.success({
    title: 'Success',
    message,
    position: 'topRight',
  });
}

export async function toastError(message: string) {
  const iziToast = (await import('izitoast')).default;

  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
  });
}
