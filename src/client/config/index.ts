
export enum TargetCofiguration {
    DEVELOPMENT,
    PRODUCTION,
    TEST
}

export interface AppConfig {
    target: TargetCofiguration;
    api: {
        baseUrl: string;
    };
}

const LocalhostConfig: AppConfig = {
    target: TargetCofiguration.DEVELOPMENT,
    api: {
        baseUrl: "http://localhost:3000/api",
    },
};


const DomainConfig: AppConfig = {
    target: TargetCofiguration.PRODUCTION,
    api: {
        baseUrl: "https://api.domain.com/api",
    },
};

export const AppMode: TargetCofiguration = TargetCofiguration.DEVELOPMENT;

export const CurrentAppConfig: AppConfig = LocalhostConfig;
