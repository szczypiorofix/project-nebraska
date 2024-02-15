
export enum TargetConfiguration {
    DEVELOPMENT,
    PRODUCTION,
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

function resolveConfig(appMode: TargetConfiguration): AppConfig {
    switch (appMode) {
        case TargetConfiguration.PRODUCTION:
            return DomainConfig;
        default:
            return LocalhostConfig;
    }
}

export const CurrentAppConfig: AppConfig = resolveConfig(TargetConfiguration.DEVELOPMENT);
