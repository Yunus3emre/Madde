const jwt = require('jsonwebtoken');

const SECRET_TOKEN = 'yunusemreayan';
const AUTH_HEADER_PREFIX = 'Bearer';

const HttpStatus = {
    UNAUTHORIZED: 401
};

const ErrorMessage = {
    UNAUTHORIZED: 'Unauthorized',
    INVALID_SIGNATURE: 'Invalid signature'
};

const getTokenFromHeader = (authorizationHeader) => {
    if (!authorizationHeader) {
        return null;
    }
    const [prefix, token] = authorizationHeader.split(' ');
    if (prefix === AUTH_HEADER_PREFIX && token) {
        return token;
    }
    return null;
};

const authorized = async (req, res, next) => {
    try {
        const token = getTokenFromHeader(req.headers.authorization);
        if (!token) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: ErrorMessage.UNAUTHORIZED });
        }

        const decodedData = jwt.verify(token, SECRET_TOKEN);
        console.log("decodedData : "+decodedData.userId);
        
        next();
    } catch (err) {
        return res.status(HttpStatus.UNAUTHORIZED).json({ message: ErrorMessage.INVALID_SIGNATURE });
    }
};

module.exports = authorized;
