import * as jwt from "jwt-simple"

export class TokenService {
    static generateAccess(id: string): string {
        return jwt.encode({ id }, process.env.SECRET_KEY as string)
    }

    static verifyToken(token: string, id: string): boolean {
        const decoded = jwt.decode(token, process.env.SECRET_KEY as string)
        return decoded.id === id
    }
}
