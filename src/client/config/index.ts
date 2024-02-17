
export enum TargetConfiguration {
    DEVELOPMENT,
    PRODUCTION,
}

export interface AppAPIConfig {
    fullPath: string;
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
        fullPath: "",
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
        fullPath: "",
        scheme: "https",
        domain: "api.domain.com",
        path: "/api",
        version: "/v1",
    },
};

function resolveFullUrlPath(config: AppConfig): AppConfig {
    config.api.fullPath = `${config.api.scheme}://${config.api.domain}${config.api.port ? `:${config.api.port}` : ""}${config.api.path}${config.api.version}`;
    return config;
}

function resolveConfig(appMode: TargetConfiguration): AppConfig {
    switch (appMode) {
        case TargetConfiguration.PRODUCTION:
            return resolveFullUrlPath(DomainConfig);
        default:
            return resolveFullUrlPath(LocalhostConfig);
    }
}

export const CurrentAppConfig: AppConfig = resolveConfig(TargetConfiguration.DEVELOPMENT);
