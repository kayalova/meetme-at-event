import * as jwt from "jwt-simple"

export class TokenService {
    static generateAccess(id: string): string {
        return jwt.encode({ id }, process.env.SECRET_KEY as string)
    }

    static verifyToken(token: string, id: string): boolean {
        try {
            return !!jwt.decode(token, process.env.SECRET_KEY as string)
        } catch { return false } // when token is invalid it falls server :| so i have to catch err and return value this way
    }
}
