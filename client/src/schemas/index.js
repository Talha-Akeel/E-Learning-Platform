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

export const add_course = Yup.object({
    title: Yup.string().max(15).required("Please enter title"),
    description: Yup.string().max(100).required("Please enter description"),
    instructor: Yup.string().max(15).required("Please enter instructor"),
    price: Yup.number().min(0).required("Please enter price"),
    category: Yup.string().max(30).required("Please enter category"),
});

export const add_lecture = Yup.object({
    title: Yup.string().max(15).required("Please enter title"),
    description: Yup.string().max(100).required("Please enter description"),
    instructor: Yup.string().max(15).required("Please enter instructor"),
    duration: Yup.string().max(30).required("Please enter duration"),
    course: Yup.string().max(30).required("Please enter category"),
});