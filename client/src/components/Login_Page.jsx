import { useNavigate } from "react-router-dom";
import { use_user_store } from "../stores/use_user_store";
import { useFormik } from "formik";
import { login_schema } from "../schemas";
import { users_end_points } from "../api/endpoints/user_endpoints";
import toast from "react-hot-toast";
import axios from "axios";

const initialValues = {
    email: "",
    password: "",
}

const Login_Page = () => {

    const navigate = useNavigate();
    const { set_token } = use_user_store();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: login_schema,
        onSubmit: async (values, action) => {
            try {
                console.log(values);

                const response = await axios.post(users_end_points.login_users(), { email: values.email, password: values.password });
                console.log(response);
                

                // set_token(response?.token);
                if (response?.data?.success) {
                    set_token(response?.data?.token);
                    toast.success(response?.data?.message);
                    // localStorage.setItem('token', response?.token);
                    localStorage.setItem('token', response?.data?.token);
                    navigate('/');

                    // window.location.reload();
                } else {
                    toast.message(response?.data?.message);
                }
            }
            catch (error) {
                toast.error("Invalid credentials");
            }


            action.resetForm();
            //   navigate('/profile');

        }
    });

    return (
        <div className="flex justify-center items-center bg-blue-500 max-h-screen min-h-screen" style={{ height: "610px" }}>
            <div className="text-center bg-white w-4/5 sm:w-1/3 h-3/4 rounded">
                <div>
                    <h1 className="mt-10 sm:mt-10 mb-10 sm:mb-10 text-5xl sm:text-3xl">Login</h1>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>

                    <div>
                            <input
                                type="email"
                                autoComplete="off"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded"
                            />
                            {errors.email && touched.email ? (<p className="text-red-800">{errors.email}</p>) : null}
                        </div>

                    <div>
                            <input
                                type="password"
                                autoComplete="off"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded"
                            />
                            {errors.password && touched.password ? (<p className="text-red-800">{errors.password}</p>) : null}
                        </div>

                        <button type="submit" className="mt-10 sm:mt-10 px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 w-3/4">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login_Page;