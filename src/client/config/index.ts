
export type AppConfigValue = boolean | number | string;

export enum AppConfigKeys {
    VERSION = "Version",
    PORT = "Port",
    TARGET = "Target"
}

export type AppConfig<T> = {
    [keys in keyof T]: AppConfigValue;
};

const defaultAppConfig: AppConfig<typeof AppConfigKeys> = {
    VERSION: "1.0",
    TARGET: "development",
    PORT: 80
}
