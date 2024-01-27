import { useDispatch } from "react-redux";
import type { AddDispatch } from "../redux/store";

export const useAppDispatch = () => useDispatch<AddDispatch>();