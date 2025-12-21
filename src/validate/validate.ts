import * as yup from 'yup';
const emailSchema = yup
  .string()
  .email('유효한 이메일 주소를 입력해주세요.')
  .required('이메일을 입력해주세요.');

const passwordSchema = yup
  .string()
  .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
  .matches(/[A-Z]/, '비밀번호에는 최소 하나의 대문자가 포함되어야 합니다.')
  .matches(/[a-z]/, '비밀번호에는 최소 하나의 소문자가 포함되어야 합니다.')
  .matches(/[0-9]/, '비밀번호에는 최소 하나의 숫자가 포함되어야 합니다.')
  .required('비밀번호를 입력해주세요.');

export const loginSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signupSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 확인을 입력해주세요.'),
});
