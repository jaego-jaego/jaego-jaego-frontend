import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModal } from "../redux/features/modalSlice";

import AdminLoginModal from "../components/MoleCules/Modal/AdminLoginModal";
import AdminApprovalModal from "../components/MoleCules/Modal/AdminApprovalModal";

const MODAL_TYPES = {
  LoginModal: "AdminLoginModal",
  ApprovalModal: "AdminApprovalModal"
};

const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.LoginModal,
    component: <AdminLoginModal />,
  },
  {
    type: MODAL_TYPES.ApprovalModal,
    component: <AdminApprovalModal />,
  },
];

export default function GlobalModal() {
  // modal type은 string 형태
  const { modalType, isOpen } = useSelector(selectModal);
  const dispatch = useDispatch();

  if (!isOpen) return;

  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });

  const renderModal = () => {
    return findModal?.component;
  };
  return (
    <div className="flex justify-center items-center fixed inset-0 z-10">
      <div
        className="fixed inset-0 bg-custom-gray"
        onClick={() => dispatch(closeModal())}
      />
      {renderModal()}
    </div>
  );
}
