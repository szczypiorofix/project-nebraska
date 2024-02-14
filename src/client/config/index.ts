
export enum TargetConfiguration {
    DEVELOPMENT,
    PRODUCTION,
    TEST
}

export interface AppAPIConfig {
    baseUrl: string;
    port?: number;
    scheme: string;
    path: string;
}

export interface AppConfig {
    target: TargetConfiguration;
    api: AppAPIConfig;
}

const LocalhostConfig: AppConfig = {
    target: TargetConfiguration.DEVELOPMENT,
    api: {
        baseUrl: "http://localhost:3000/api",
        port: 3000,
        scheme: "http",
        path: "/api"
    },
};


const DomainConfig: AppConfig = {
    target: TargetConfiguration.PRODUCTION,
    api: {
        baseUrl: "https://api.domain.com/api",
        scheme: "https",
        path: "/api"
    },
};

export const AppMode: TargetConfiguration = TargetConfiguration.DEVELOPMENT;

export const CurrentAppConfig: AppConfig = LocalhostConfig;
