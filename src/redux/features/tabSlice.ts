import { createSlice } from "@reduxjs/toolkit";

interface tabState {
  activeTab: number;
}

const initialState: tabState = {
  activeTab: 1,
};

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload; // 액션 페이로드로 활성 상태 업데이트
    },
  },
});

export const { setActiveTab } = tabSlice.actions;
export default tabSlice.reducer;
