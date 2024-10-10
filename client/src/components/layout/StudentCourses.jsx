import axios from "axios";
import { courses_end_points } from "../../api/endpoints/courses_endpoints";
import { use_course_store } from "../../stores/use_course_store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentCourses = () => {
    const { course_data, set_course_data } = use_course_store();
    const navigate = useNavigate();

    const handle_click = (id) => {

        navigate(`/course-detail/${id}`);
    }

    useEffect(() => {
        async function fetch_data() {
            try {
                const response = await axios.get(courses_end_points.get_all_courses())
                // const response = await fetch_response(
                //     courses_end_points.get_all_courses(),
                //     4,
                //     null,
                //     null
                // );
                set_course_data(response);
                console.log(response);

            } catch (error) {
                console.log(error);
            }
        }

        fetch_data();
    }, []);
    return(
        <div className="w-3/4 bg-green-500">
        <h1 className="text-center">Student Courses</h1>
        {
                        course_data?.data?.data.map((item, index) => (
                            <div className="w-full md:w-4/12" key={index}>
                                <div className="card bg-blue-200  shadow-xl">
                                    <figure className="">
                                        <img
                                            src={courses_end_points.get_course_image(item._id)}
                                            alt="course-image"
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{item.title}</h2>
                                        <p>{item.description}</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary" onClick={() => handle_click(item._id)}>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
        </div>
    )
}

export default StudentCourses;