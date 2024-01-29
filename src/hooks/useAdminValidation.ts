import * as yup from "yup";

const useAdminValidation = () => {
  const schema = yup.object().shape({
    adminInput: yup.string().required("반드시 입력해주세요."),
  });

  return { schema };
};

export default useAdminValidation;
