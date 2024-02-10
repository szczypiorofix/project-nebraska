
export const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
};

export const validateName = (name: string): boolean => {
    return /^([\x20a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ0-9_-]){3,64}$/.test(name);
};

export const validatePhone = (phone: string): boolean => {
    return /^\d{9}$/.test(phone);
};

export const validateHash = (hash: string): boolean => {
    return /^([a-z0-9_-]){12}$/.test(hash);
};
