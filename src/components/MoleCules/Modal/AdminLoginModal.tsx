import useAdminValidation from "@/src/hooks/useAdminValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import BaseButton from "../../Atoms/Base/BaseButton";
import BaseError from "../../Atoms/Base/BaseError";
import BaseInput from "../../Atoms/Base/BaseInput";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "@/src/redux/features/modalSlice";

export default function AdminLoginModal() {
  const { schema } = useAdminValidation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      adminInput: "",
    },
  });


  const onSubmit = (data: { adminInput: string }) => {
    console.log(data);
    if (data.adminInput === "1234") {
      dispatch(
        closeModal()
      );
      dispatch(openModal({modalType:'AdminApprovalModal'}));
    }
  };

  // 엔터 처리
  const onSubmitSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if(e.currentTarget.value === "1234")
      dispatch(
        closeModal()
      );
      dispatch(openModal({modalType:'AdminApprovalModal'}));
    }
  } 

  return (
    <div className="w-[431px] bg-white text-center border-4 border-[#0CAF60] rounded-xl border-solid py-12 border-box z-20">
      <h2 className="text-2xl font-extrabold mb-8">
        관리자 비밀번호를 입력하여주십시오.
      </h2>
      <div className="w-full flex justify-center">
        <div className="w-5/6 h-11 mb-8">
          <BaseInput
            id="adminLogin"
            size="sm"
            color="gray"
            type="password"
            onSubmitSearch={onSubmitSearch} 
            register={register("adminInput")}
          />
          <BaseError>{errors.adminInput?.message}</BaseError>
        </div>
      </div>
      <BaseButton
        color="green"
        size="modal-button"
        onClick={handleSubmit(onSubmit)}
      >
        확인
      </BaseButton>
    </div>
  );
}
