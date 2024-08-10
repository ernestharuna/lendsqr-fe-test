import { env } from "../utils/config"
import interceptor from "./interceptor"

class Users {
    public async getUsers() {
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

    public async getUser(userId: string) {
        if (localStorage.getItem('lendsqrUsers')) {
            const users = JSON.parse(localStorage.getItem('lendsqrUsers')!);
            const user = users.find((u: any) => u.id === userId);

            return user
        }

        const { data } = await interceptor.get(env.VITE_API_BASE);

        localStorage.setItem(
            'lendsqrUsers', JSON.stringify(data)
        );

        const users = JSON.parse(localStorage.getItem('lendsqrUsers')!);
        const user = users.find((u: any) => u.id === userId);

        return user;
    }
}

export default new Users()