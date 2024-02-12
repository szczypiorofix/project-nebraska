
export enum TargetConfiguration {
    DEVELOPMENT,
    PRODUCTION,
    TEST
}

export interface AppConfig {
    target: TargetConfiguration;
    api: {
        baseUrl: string;
    };
}

const LocalhostConfig: AppConfig = {
    target: TargetConfiguration.DEVELOPMENT,
    api: {
        baseUrl: "http://localhost:3000/api",
    },
};


const DomainConfig: AppConfig = {
    target: TargetConfiguration.PRODUCTION,
    api: {
        baseUrl: "https://api.domain.com/api",
    },
};

export const AppMode: TargetConfiguration = TargetConfiguration.DEVELOPMENT;

export const CurrentAppConfig: AppConfig = LocalhostConfig;
