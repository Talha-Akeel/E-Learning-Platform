import { SERVER_URL } from "../configs";

const entity = 'lectures';

export const lectures_endpoints = {
    get_all_lectures: () => `${SERVER_URL}/${entity}/lecture`,
    get_lecture_video: (id) => `${SERVER_URL}/${entity}/lecture/${id}`,
    add_lecture: (id) => `${SERVER_URL}/${entity}/lecture`,
}