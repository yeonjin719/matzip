export type SignupFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export type RequestUserType = {
  email: string;
  password: string;
};

export type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};
