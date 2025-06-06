exports.registerRequest = (req, res, next) => {
    const { name, email, password, username } = req.body;

    if (!name || !email || !password || !username ) {
        return res.status(400).json({ message: 'All required fields must be filled' });
    }

    next();
};

exports.signinRequest = (req, res, next) => {
    const { email, password, username } = req.body;

    if (!email || !password ||!username) {
        return res.status(400).json({ message: 'All required fields must be filled' });
    }

    next();
};   