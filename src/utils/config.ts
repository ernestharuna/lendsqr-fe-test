type Env = {
    VITE_API_BASE: string;
    VITE_API_KEY: string;
};

export const BASE_URL = import.meta.env.VITE_API_BASE;

export const env = import.meta.env as ImportMetaEnv & Env;
