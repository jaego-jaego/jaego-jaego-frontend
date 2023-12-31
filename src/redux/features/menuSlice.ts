import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  activeMenuId: 1,
};

// Slice 생성
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenuId = action.payload; // 액션 페이로드로 활성 상태 업데이트
    },
  },
});

export const { setActiveMenu } = menuSlice.actions;
export default menuSlice.reducer;
