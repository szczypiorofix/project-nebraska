import { APP_VIEW, AppContextType } from '../types/app';

export const initialContextState: AppContextType = {
    app: {
        view: APP_VIEW.SPLASH
    },
    setView: () => {}
}
