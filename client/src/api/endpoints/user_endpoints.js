import { SERVER_URL } from "../configs";

const entity = 'users';

export const users_end_points = {
    register_users: () => `${SERVER_URL}/${entity}/register`,
    login_users: () => `${SERVER_URL}/${entity}/login-user`,
    user_profile: (id) => `${SERVER_URL}/${entity}/${id}`,
}