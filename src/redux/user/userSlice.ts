import { createSlice } from "@reduxjs/toolkit";

interface IUserSlice {
	listView: "grid" | "line";
}

const initialState: IUserSlice = {
	listView: "grid",
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
		changeListView(state, action) {
			state.listView = action.payload.view;
		},
	},
});

const userReducer = userSlice.reducer;
export const { changeListView } = userSlice.actions;
export default userReducer;