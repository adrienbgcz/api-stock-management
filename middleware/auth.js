import jwt from 'jsonwebtoken'
import GcpSecrets from '../utils/gcp-secrets.js'

export default {
    async authenticateToken(req, res, next) {
        if(req.headers && req.headers.authorization) {
            try {
                const token = req.headers.authorization.split(' ')[1]
                const decodedToken = jwt.verify(token, await GcpSecrets.getSecretValue(process.env.SECRET_ACCESS_TOKEN))
                const userId = decodedToken.userId
                req.auth = {
                    userId
                }
                next()
            } catch(e) {
                res.status(401).json({e})
            }
        }


    }
}