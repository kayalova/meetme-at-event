import * as crypto from "crypto"

export const hashString = (value: string): string =>
    crypto.createHash("md5").update(value).digest("hex")
