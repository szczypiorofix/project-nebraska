
export interface IApp {
    view: APP_VIEW;
}

export enum APP_VIEW {
    SPLASH,
    HOME,
    ADMIN
}

export type AppContextType = {
    app: IApp;
    setView: (view: APP_VIEW) => void;
}
