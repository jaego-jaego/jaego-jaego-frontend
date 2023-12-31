import * as yup from "yup";

export default function useSignUpComValidation() {
  const schema = yup.object().shape({
    // 이름
    businessNumber: yup.string().required("반드시 입력해주세요."),
    // 대표자성명
    ceoName: yup.string().required("필수 입력 항목입니다."),
    // 개업일자
    startDate: yup.string().required("필수 입력 항목입니다."),
    // 비밀번호
    password: yup
      .string()
      .required("반드시 입력해주세요.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]/,
        "최소 8자. 최대 16자 이내(영문, 숫자)필수 (특수문자)선택으로 입력해주세요"
      )
      .min(6, "최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요")
      .max(16, "최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요"),
    // 상호
    companyName: yup.string().required("필수 입력 항목입니다.")
  });

  return { schema };
}
