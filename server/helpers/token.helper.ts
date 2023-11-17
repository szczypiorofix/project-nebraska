import crypto from 'crypto';
import { Jwt } from 'jsonwebtoken';

class TokenHelper {

    public static generateSecretToke(): string {
        return crypto.randomBytes(64).toString('hex');
    }

    public static generateAccessToken() {
        return
    }

}

export default TokenHelper;
