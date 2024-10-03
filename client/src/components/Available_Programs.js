import React, { useEffect, useState } from "react";
import { fetch_response } from "../api/configs";
import { courses_end_points } from "../api/endpoints/courses_endpoints";
import { use_course_store } from "../stores/use_course_store";
import { useNavigate } from "react-router-dom";

const Available_Programs = () => {
    const { data, set_data, course_id } = use_course_store();
    const navigate = useNavigate();

    const handle_click = (id) => {
        
        navigate(`/course-detail/${id}`);
    }

    useEffect(() => {
        async function fetch_data() {
            try {
                const response = await fetch_response(
                    courses_end_points.get_all_courses(),
                    4,
                    null,
                    null
                );
                set_data(response);
                console.log(response);

            } catch (error) {
                console.log(error);
            }
        }
        
        fetch_data();
    }, []);

    

    return (
        <>

            <h1 className="text-4xl text-center mt-10 mb-10 underline">Available Programs</h1>

            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {
                    data.data.map((item, index) => (
                        <div className="w-full md:w-4/12 p-4" key={index}>
                        <div className="card bg-blue-200 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={courses_end_points.get_course_image(item._id)}
                                    alt="course-image"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary" onClick={()=>handle_click(item._id)}>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    ))
                    }
                </div>
            </div>

        </>
    );
};

export default Available_Programs;