import crypto from 'crypto';
import * as JWT from 'jsonwebtoken';

class TokenHelper {

    public static generateSecretToken(): string {
        return crypto.randomBytes(64).toString('hex');
    }

    public static generateAccessToken(username: string) {
        const tokenSecret: string = process.env.TOKEN_SECRET;
        if (!tokenSecret) {
            throw new Error("No environmental variable: TOKEN_SECRET !");
        }
        if (!username) {
            throw new Error("No users name!");
        }
        if (username.length < 3) {
            throw new Error("User name too short (min. 3 chars)!");
        }
        return JWT.sign( { username: username }, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 });
    }

}

export default TokenHelper;
