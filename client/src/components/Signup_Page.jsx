const Signup_Page = () => {

    return (
        <div className="flex justify-center items-center bg-blue-500 max-h-screen min-h-screen" style={{ height: "610px" }}>
            <div className="text-center bg-white w-4/4 sm:w-1/3 h-3/4 rounded">
                <div>
                    <h1 className="mt-10 sm:mt-3 mb-10 sm:mb-3 text-5xl sm:text-3xl">Signup</h1>
                </div>

                <div>
                    <form>

                        <div>
                            <input type="text" className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded" placeholder="Full Name" />
                        </div>

                        <div>
                            <input type="text" className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded" placeholder="Email" />
                        </div>

                        <div>
                            <input type="text" className="border w-3/4 mt-4 sm:mt-2 mb-4 sm:mb-2 px-3 sm:px-2 py-4 sm:py-3 rounded" placeholder="Password" />
                        </div>

                        <select className="select select-bordered w-3/4 mt-2 mb-5">
                            <option disabled selected>Are you Student or Teacher?</option>
                            <option>Student</option>
                            <option>Teacher</option>
                        </select>

                        <button class="mt-3 sm:mt-2 px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 w-3/4">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup_Page;