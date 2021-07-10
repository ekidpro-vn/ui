export const SET_ERROR_VALIDATE = 'SET_ERROR_VALIDATE';

export const setErrorValidate = (errorValidate: boolean) => {
  return {
    type: SET_ERROR_VALIDATE,
    payload: { errorValidate },
  };
};

export const getErrorValidate = () => {
  return <const>{
    type: 'GET_ERROR_VALIDATE',
    payload: {},
  };
};

export type Action = ReturnType<typeof setErrorValidate> | ReturnType<typeof getErrorValidate>;
