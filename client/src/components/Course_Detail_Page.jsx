import axios from "axios";
import { courses_end_points } from "../api/endpoints/courses_endpoints";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Course_Detail_Page = () => {

    const {id} = useParams();
    const [course_details, set_course_details] = useState({});
    useEffect(()=>{
        const fetch_data = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(courses_end_points.get_course_details(id),{
                    headers: {
                        "Authorization": token
                    }
                });
                console.log("Test:",response);
                console.log(response.data.data.instructor);
                
                    if (response?.data?.success) {
                    toast.success(response?.data?.message);
                    set_course_details(response.data.data);
                    // console.log(response.data);
                    // return response;
                } else {
                    toast.message(response?.data?.message);
                }
                
            }
            catch (error) {
                toast.error("Invalid credentials");
            }
        }

        fetch_data();

    },[id]);

    

    

    return (
        <>
            <div className="container w-[90%] sm:w-3/4 mx-auto mt-10 bg-green-300 rounded-xl">
                <div className="sm:flex">
                    <div className="w-full sm:w-2/5">
                        <img
                            src="https://worldscholarshipforum.com/wp-content/uploads/2024/07/web-development-courses.jpg"
                            alt="Shoes"
                            className="rounded-xl h-full w-full object-cover"
                        // width={450}
                        // height={450}
                        />
                    </div>
                    <div className="w-full sm:w-3/5 py-2 px-5">
                        <h1 className="text-3xl font-bold mb-2">{course_details.title}</h1>
                        <p className="text-2xl italic mb-2">{course_details.instructor}</p>
                        <p>{course_details.description}</p>
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded animate-blink mt-5 mb-5">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>

            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="container w-[90%] sm:w-3/4 mx-auto mt-10 mb-10 rounded-xl">

                <div className="flex w-full flex-col lg:flex-row">
                    <div className="card rounded-box grid h-auto w-full sm:w-3/5 px-10 py-5 bg-green-300">
                        <h1 className="text-xl font-bold">What You will learn here?</h1>
                        <ul className="list-disc pl-5">
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                        </ul>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="card rounded-box grid h-auto w-full sm:w-2/5 justify-center py-5 bg-green-300">
                        <h1 className="text-xl font-bold">About Instructor</h1>
                        <div className="w-32 h-32 bg-blue-500 rounded-full">
                            <img
                                src="https://worldscholarshipforum.com/wp-content/uploads/2024/07/web-development-courses.jpg"
                                alt="Shoes"
                                className="h-full w-full rounded-full"
                            />
                        </div>
                        <span><h1 className="text-xl font-bold">About Instructor</h1><h1 className="text-base font-bold">About Instructor</h1></span>
                        <span><h1 className="text-xl font-bold">BS Computer Science</h1><h1 className="text-base font-bold">About Instructor</h1></span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Course_Detail_Page;