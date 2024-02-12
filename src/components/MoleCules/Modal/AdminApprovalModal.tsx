import { IoCloseOutline } from "react-icons/io5";


export default function AdminApprovalModal () {
    return (
        <div className="relative w-[1120px] bg-white text-center border-[5px] border-[#0CAF60] rounded-xl border-solid py-12 border-box z-20">
        <header className="absolute top-0 w-full h-[50px] bg-[#0CAF60]  border-solid">
            <p className="absolute top-[10px] left-4 text-xl font-bold text-color-white">매장 승인 팝업</p>
            <IoCloseOutline className="absolute top-[10px] right-2 text-2xl text-color-white"/>
        </header>
        <div className="w-full flex justify-center">
        
        </div>
      </div>
    )
}