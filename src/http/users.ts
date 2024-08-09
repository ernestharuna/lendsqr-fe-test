import { BASE_URL } from "../utils"
import interceptor from "./interceptor"

class Users {
    public async get() {
        const { data } = await interceptor.get(BASE_URL);
        const users = data;
        return users;
    }
}

export default new Users()