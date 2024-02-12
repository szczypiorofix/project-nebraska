import { model, Schema } from 'mongoose';
import { validateEmail, IUser } from '../../shared';

const userSchema = new Schema({
    email: {
        type: String,
        validate: {
            validator: validateEmail,
            message: (props: { value: string }) => `${props.value} to nie jest poprawny adres email.`,
        },
        required: [true, "Adres email jest wymagany."],
        unique: [true, "Ten adres email już istnieje."],
    },
    password: {
        type: String,
        required: true
    },
});

export const UserModel = model<Schema<IUser>>('User', userSchema);
