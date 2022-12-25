import Swal from "sweetalert2";
import { theme } from "../styles/theme";

export const ErrorAlert = (title: string, text: string) => {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    confirmButtonColor: theme.backgroundColor.red,
  });
};

export const SuccessAlert = (title: string, text: string) => {
  Swal.fire({
    icon: "success",
    title: title,
    text: text,
    confirmButtonColor: theme.backgroundColor.brown,
  });
};
