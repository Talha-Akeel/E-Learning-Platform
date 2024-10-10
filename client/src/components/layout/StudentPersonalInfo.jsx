const StudentPersonalInfo = () => {
    return(
        <div className="w-3/4 bg-green-500 text-center">
            <div className="w-32 h-32 bg-blue-500 rounded-full mx-auto">
                            <img
                                src="https://worldscholarshipforum.com/wp-content/uploads/2024/07/web-development-courses.jpg"
                                alt="Shoes"
                                className="h-full w-full rounded-full"
                            />
                        </div>
                        <div><span className="text-xl font-bold">Name : </span><span className="text-xl">Talha</span></div>
                        <div><span className="text-xl font-bold">email : </span><span className="text-xl">talha@gmail.com</span></div>
                        <div><span className="text-xl font-bold">Role : </span><span className="text-xl">Student</span></div>
        </div>
    )
}

export default StudentPersonalInfo;