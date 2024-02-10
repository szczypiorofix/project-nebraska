
export interface IApp {
    view: APP_VIEW;
}

export enum APP_VIEW {
    SPLASH,
    HOME,
    ADMIN,
    LOGIN,
    REGISTER
}

export const viewNameResolve = (app: APP_VIEW): string => {
    switch(app) {
        case APP_VIEW.ADMIN:
            return "DASHBOARD";
        case APP_VIEW.HOME:
            return "STRONA GŁÓWNA";
        case APP_VIEW.SPLASH:
            return "URUCHAMIANIE";
        case APP_VIEW.LOGIN:
            return "LOGOWANIE";
        case APP_VIEW.REGISTER:
            return "REJESTRACJA";
        default:
                return "";
    }
}

export type AppContextType = {
    app: IApp;
    setView: (view: APP_VIEW) => void;
}
