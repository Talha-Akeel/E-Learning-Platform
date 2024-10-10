// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import axios from "axios";
// import { use_user_store } from "../../../stores/use_user_store";
import { add_lecture } from "../../../schemas";
import { lectures_endpoints } from "../../../api/endpoints/lectures_endpoints";

const initialValues = {
    title: "",
    description: "",
    duration: "",
    course: "",
}

const AddLectures = () => {

    // const navigate = useNavigate();
    // const { is_authenticated, set_is_authenticated } = use_user_store();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: add_lecture,
        onSubmit: async (values, action) => {
            try {
                console.log(values);

                const response = await axios.post(lectures_endpoints.add_lecture(), { title: values.title, description: values.description, duration: values.duration, course: values.course },{
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    withCredentials: true
                  }
            );
                console.log(response);
                

                // set_token(response?.token);
                if (response?.data?.success) {
                    // set_token(response?.data?.token);
                    toast.success(response?.data?.message);
                    // set_is_authenticated(true);
                    // localStorage.setItem('token', 1);
                    // localStorage.setItem('token', response?.data?.token);
                    // navigate('/');

                    // window.location.reload();
                } else {
                    toast.message(response?.data?.message);
                }
            }
            catch (error) {
                toast.error(error);
            }


            action.resetForm();
            //   navigate('/profile');

        }
    });

    return (
        <div className="flex justify-center bg-green-500 p-5 w-full" style={{ height: "800px" }}>
            <div className="text-center bg-white w-4/5 sm:w-3/4 h-full rounded">
                <div>
                    <h1 className="mt-10 sm:mt-10 mb-10 sm:mb-10 text-5xl sm:text-3xl">Add Lectures</h1>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>

                    <div>
                            <input
                                type="text"
                                autoComplete="off"
                                name="title"
                                id="title"
                                placeholder="Title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded"
                            />
                            {errors.title && touched.title ? (<p className="text-red-800">{errors.title}</p>) : null}
                        </div>

                    <div>
                            <input
                                type="text"
                                autoComplete="off"
                                name="description"
                                id="description"
                                placeholder="Description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded"
                            />
                            {errors.description && touched.description ? (<p className="text-red-800">{errors.description}</p>) : null}
                        </div>

                    <div>
                            <input
                                type="text"
                                autoComplete="off"
                                name="instructor"
                                id="instructor"
                                placeholder="Instructor"
                                value={values.instructor}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded"
                            />
                            {errors.instructor && touched.instructor ? (<p className="text-red-800">{errors.instructor}</p>) : null}
                        </div>

                    <div>
                            <input
                                type="text"
                                autoComplete="off"
                                name="duration"
                                id="duration"
                                placeholder="Duration"
                                value={values.duration}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded"
                            />
                            {errors.duration && touched.duration ? (<p className="text-red-800">{errors.duration}</p>) : null}
                        </div>

                    <div>
                            <input
                                type="text"
                                autoComplete="off"
                                name="course"
                                id="course"
                                placeholder="course"
                                value={values.course}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded"
                            />
                            {errors.course && touched.course ? (<p className="text-red-800">{errors.course}</p>) : null}
                        </div>

                        <button type="submit" className="mt-10 sm:mt-10 px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 w-3/4">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddLectures;