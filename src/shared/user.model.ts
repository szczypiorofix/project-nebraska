
export interface IUser {
    email: string;
    password: string;
}

export const IUserDefaults: Pick<IUser, 'email' | 'password'> = {
    email: '',
    password: '',
};
