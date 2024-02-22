
export enum TargetConfiguration {
    DEVELOPMENT,
    PRODUCTION,
}

export interface AppAPIConfig {
    baseUrl: string;
    port?: number;
    scheme: string;
    path: string;
    version: string;
    domain: string;
}

export interface AppConfig {
    target: TargetConfiguration;
    api: AppAPIConfig;
}

const LocalhostConfig: AppConfig = {
    target: TargetConfiguration.DEVELOPMENT,
    api: {
        baseUrl: "",
        port: 3000,
        scheme: "http",
        domain: "localhost",
        path: "/api",
        version: "/v1",
    },
};


const DomainConfig: AppConfig = {
    target: TargetConfiguration.PRODUCTION,
    api: {
        baseUrl: "",
        scheme: "https",
        domain: "api.domain.com",
        path: "/api",
        version: "/v1",
    },
};

function resolveBaseUrlPath(config: AppConfig): AppConfig {
    config.api.baseUrl = `${config.api.scheme}://${config.api.domain}${config.api.port ? `:${config.api.port}` : ""}${config.api.path}${config.api.version}`;
    return config;
}

function resolveConfig(appMode: TargetConfiguration): AppConfig {
    switch (appMode) {
        case TargetConfiguration.PRODUCTION:
            return resolveBaseUrlPath(DomainConfig);
        default:
            return resolveBaseUrlPath(LocalhostConfig);
    }
}

export const CurrentAppConfig: AppConfig = resolveConfig(TargetConfiguration.DEVELOPMENT);
