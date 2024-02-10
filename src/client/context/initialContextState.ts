import { APP_VIEW, AppContextType } from '../types';

export const initialContextState: AppContextType = {
    app: {
        view: APP_VIEW.SPLASH
    },
    setView: () => {}
}
