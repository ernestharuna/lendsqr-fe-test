type Env = {
    VITE_API_BASE: string;
};

export const BASE_URL =
    import.meta.env.VITE_API_BASE ?? "https://dev.api.cabsol.com.ng/";

export const env = import.meta.env as ImportMetaEnv & Env;
