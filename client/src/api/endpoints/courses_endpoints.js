import { SERVER_URL } from "../configs";

const entity = 'courses';

export const courses_end_points = {
    // add_courses: () => `${SERVER_URL}/${entity}/courses/course`,
    get_all_courses: () => `${SERVER_URL}/${entity}/course`,
    get_course_image: (id) => `${SERVER_URL}/${entity}/course-image/${id}`,
    get_course_details: (id) => `${SERVER_URL}/${entity}/course-details/${id}`,
    add_course: (id) => `${SERVER_URL}/${entity}/course`,
}