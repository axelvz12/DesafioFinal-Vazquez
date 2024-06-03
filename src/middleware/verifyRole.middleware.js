const verifyRole = (role) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ status: 'error', message: 'No autenticado' });
        }

        if (req.user.role !== role) {
            return res.status(403).json({ status: 'error', message: 'No autorizado' });
        }

        next();
    };
};

module.exports = verifyRole;