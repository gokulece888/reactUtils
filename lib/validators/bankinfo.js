import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var bankSchema = {
    bifsc: yup.string().required("ifsc field is required").matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Must - First 4 chars alphabets 5th char zero and last 6 chars alphanumeric"),
    bname: yup.string().required(REQUIRED_TEXT),
    compcode: yup.string().required(REQUIRED_TEXT),
    compname: yup.string().required(REQUIRED_TEXT),
    badd: yup.string().required(REQUIRED_TEXT),
    bbranch: yup.string().required(REQUIRED_TEXT),
    bcode: yup.string().required(REQUIRED_TEXT),
    active: yup.string().required(REQUIRED_TEXT),
};
