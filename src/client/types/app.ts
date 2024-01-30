
export interface IApp {
    view: APP_VIEW;
}

export enum APP_VIEW {
    SPLASH,
    HOME,
    ADMIN,
    LOGIN
}

export const viewNameResolve = (app: APP_VIEW): string => {
    switch(app) {
        case APP_VIEW.ADMIN:
            return "DASHBOARD";
        case APP_VIEW.HOME:
            return "STRONA GŁÓWNA";
        case APP_VIEW.SPLASH:
            return "URUCHAMIANIE";
        default:
                return "";
    }
}

export type AppContextType = {
    app: IApp;
    setView: (view: APP_VIEW) => void;
}
