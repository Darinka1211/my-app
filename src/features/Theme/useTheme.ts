import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTheme } from "./ThemeSlice";
export const useTheme= ()=>{
const theme = useAppSelector((state:any) => state.theme.value);
const dispatch = useAppDispatch();

const toggleTheme = () => {
  const newTheme = theme === "dark" ? "light" : "dark";
  dispatch(setTheme(newTheme));
}
return {
  theme,
  toggleTheme
}
}