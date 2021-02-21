import * as yup from "yup";

export const passwordValidation = yup.string().min(8).required();
