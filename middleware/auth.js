import jwt from 'jsonwebtoken'
import GcpSecrets from '../utils/gcp-secrets.js'

export default {
    async authenticateToken(req, res, next) {
        console.log("HEADERS", req.headers)
        if(req.headers && req.headers.authorization) {
            try {
                const token = req.headers.authorization.split(' ')[1]
                console.log("TOKEN", token)
                const decodedToken = jwt.verify(token, await GcpSecrets.getSecretValue(process.env.SECRET_ACCESS_TOKEN))
                console.log("DECODED TOKEN", decodedToken)
                /*const userId = decodedToken.userId
                req.auth = {
                    userId
                }*/
                next()
            } catch(e) {
                res.status(401).json({e})
            }
        } else {
            res.status(401).json("Unauthorized")
        }
    }
}