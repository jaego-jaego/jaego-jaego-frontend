import * as yup from "yup";

const useSignInValidation = () => {
  const schema = yup.object().shape({
    // 이름
    businessNumber: yup.string().required("반드시 입력해주세요."),
    // 비밀번호 STC-7 코드 작업 22
    password: yup
      .string()
      .required("반드시 입력해주세요.")
      // .matches(
      //   /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]/,
      //   "최소 8자. 최대 16자 이내(영문, 숫자)필수 (특수문자)선택으로 입력해주세요"
      // )
      .min(8, "최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요")
      .max(16, "최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요"),
  });

  return { schema };
};

export default useSignInValidation;
