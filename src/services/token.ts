import * as jwt from "jwt-simple"

export class TokenService {
    static generateAccess(id: string): string {
        return jwt.encode({ id }, "SECRET-KEY-2520")
    }

    static verifyToken(token: string, id: string): boolean {
        const decoded = jwt.decode(token, "SECRET-KEY-2520")
        return decoded.id === id
    }
}
