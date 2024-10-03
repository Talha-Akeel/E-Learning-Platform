import * as Yup from 'yup';

export const registration_schema = Yup.object({
    username: Yup.string().required("Please enter your username"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
});

export const login_schema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
});

export const user_profile = Yup.object({
    username: Yup.string().required("Please enter your username"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
});