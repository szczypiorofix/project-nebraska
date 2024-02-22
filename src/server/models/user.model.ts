import { DefaultSchemaOptions, Document, FlatRecord, Model, model, Schema, Types } from 'mongoose';
import { IUser, validateEmail } from '../../shared';

const userSchema: Schema<
    any,
    Model<any, any, any, any, any, any>,
    {}, {}, {}, {},
    DefaultSchemaOptions,
    IUser,
    Document<unknown, {}, FlatRecord<IUser>> & FlatRecord<IUser>
> = new Schema({
    email: {
        type: String,
        validate: {
            validator: validateEmail,
            message: (props: { value: string }): string => `${props.value} to nie jest poprawny adres email.`,
        },
        required: [true, " Email jest wymagany."],
        unique: [true, "Ten email już istnieje."],
    },
    password: {
        type: String,
        required: [true, "Hasło jest wymagane."],
    },
});

export const UserModel: Model<
    IUser,
    {}, {}, {},
    Document<unknown, {}, IUser> & IUser & {_id: Types.ObjectId},
    any
> = model<IUser>('User', userSchema);
