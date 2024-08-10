import { env } from "../utils"
import interceptor from "./interceptor"

class Users {
    public async get() {
        const { data } = await interceptor.get(env.VITE_API_BASE);
        const users = data;
        return users;
    }
}

export default new Users()