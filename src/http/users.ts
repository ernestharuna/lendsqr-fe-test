import { env } from "../utils/config"
import interceptor from "./interceptor"

class Users {
    public async get() {
        if (localStorage.getItem('lendsqrUsers')) {
            const users = localStorage.getItem('lendsqrUsers') ?
                JSON.parse(localStorage.getItem('lendsqrUsers')!) : [];

            return users;
        };

        const { data } = await interceptor.get(env.VITE_API_BASE);

        localStorage.setItem(
            'lendsqrUsers', JSON.stringify(data)
        );

        const users = localStorage.getItem('lendsqrUsers') ?
            JSON.parse(localStorage.getItem('lendsqrUsers')!) : [];

        return users;
    }
}

export default new Users()