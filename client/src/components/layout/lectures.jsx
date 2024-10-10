import toast from "react-hot-toast";
import { lectures_endpoints } from "../../api/endpoints/lectures_endpoints";
import { useEffect, useState } from "react";
import axios from "axios";
import { use_lecture_store } from "../../stores/use_lecture_store";

const Lectures = () => {
    const { lecture_data, set_lecture_data, lecture_id, set_lecture_id } = use_lecture_store();
    const [videoSrc, setVideoSrc] = useState(""); //"https://www.w3schools.com/html/mov_bbb.mp4"
    // const token = localStorage.getItem('token');

    useEffect(() => {
        const fetch_data = async () => {
            try {
                // const token = localStorage.getItem('token');
                const response = await axios.get(lectures_endpoints.get_all_lectures(), {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                });

                if (response?.data?.success) {
                    toast.success(response?.data?.message);
                    set_lecture_data(response);
                    console.log(response);
                    
                } else {
                    toast.message(response?.data?.message);
                }
            }
            catch (error) {
                toast.error(error.message);
            }
        }

        fetch_data();

    },[set_lecture_data])

    const handleChange = (id) => {
        // const fetch_video = async () => {
        //     try {
        //         // const token = localStorage.getItem('token');
        //         const response = await axios.get(lectures_endpoints.get_lecture_video(id), {
        //             headers: {
        //                 "Content-Type": "application/json"
        //             },
        //             withCredentials: true
        //         });

        //         // console.log(response.data);
        //         console.log(response);
        //         setVideoSrc(response);
                

        //         // if (response?.data?.data?.success) {
        //         //     toast.success(response?.data?.data?.message);
        //         //     console.log(response);
        //         //     setVideoSrc(response?.data?.data?.lecture_video);
        //         // } else {
        //         //     toast.message(response?.data?.data?.message);
        //         // }
        //     }
        //     catch (error) {
        //         toast.error(error.message);
        //     }
        // }

        // fetch_video();

        // console.log(typeof(id));
        // setVideoSrc(lectures_endpoints.get_lecture_video(id));
        // console.log(videoSrc);
        
        set_lecture_id(id);
        console.log(lecture_id);
        
        
    }



    return (
        <>
            <div className="flex w-10/12 mx-auto mt-10 mb-10">

                <div className="w-3/4 bg-blue-300">
                    <video className="w-full" width="400" controls>
                        <source src={lectures_endpoints.get_lecture_video("670036b463dc8b0c1f7306d1")} type="video/mp4" />
                        {/* <source src={videoSrc} type="video/mp4" /> */}
                    </video>
                     {/* // "670036b463dc8b0c1f7306d1" */}
                </div>

                <div className="w-1/4 bg-orange-300 text-center h-auto">

                    {
                        lecture_data?.data?.data.map((item, index) => (
                            <div key={index}>
                                <button className="bg-blue-500 mt-5 w-[100%] py-5 rounded-lg" onClick={()=>handleChange(item._id)}>{index + 1}: {item.title}</button><br></br>
                            </div>
                        ))
                    }
                    
                </div>

            </div>
        </>
    )

}

export default Lectures;