const { Register } = require('./../../models');
const sendToken = require('./../../utils/jwtHelper');
const bcrypt = require('bcryptjs'); // For password hashing and comparison

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        const { name, email, phoneNo, username, password } = req.body;

        // Validate required fields
        if (!name || !email || !username || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if email exists
        const emailExists = await Register.findOne({ email });
        if (emailExists) {
            return res.status(409).json({ message: 'Email is already registered' });
        }

        // Check if username exists
        const usernameExists = await Register.findOne({ username });
        if (usernameExists) {
            return res.status(409).json({ message: 'Username is already taken' });
        }

        // Check if phone number exists
        // const phoneExists = await Register.findOne({ phoneNo });
        // if (phoneExists) {
        //     return res.status(409).json({ message: 'Phone number is already registered' });
        // }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Assign role based on email
        const adminEmail = process.env.ADMIN_MAIL;
        const employeeEmail = process.env.EMP_MAIL;
        const role =
            email === adminEmail
                ? 'admin'
                : email === employeeEmail
                    ? 'employee'
                    : 'user';

        // Create new user
        const user = await Register.create({
            name,
            email,
            phoneNo,
            username,
            password: hashedPassword,
            role,
        });

        // Send token response
        sendToken(user, 201, res);
    } catch (error) {
        console.error('Error in registerUser:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message,
        });
    }
};


exports.getAuthData = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await Register.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUserProfile = async (req, res) => {
    try {
        const { email } = req.params;
        const { img } = req.body;

        if (!img) {
            return res.status(400).json({ message: 'Image is required' });
        }

        const updateIMG = await Register.findOneAndUpdate(
            { email },
            { $set: { img } }, // Use $set to specifically update the img field
            { new: true, runValidators: true }
        );

        if (!updateIMG) {
            return res.status(404).json({ message: 'image not found' });
        }

        res.status(200).json({ message: 'image updated successfully', updateIMG });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Register a new user

// Check if user exists (Login)
exports.signinUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Try finding user by username or email
        const user = await Register.findOne({
            $or: [{ username }, { email: username }],
        }).select('+password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('Incoming password:', password);
        console.log('Stored hashed password:', user.password);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        sendToken(user, 200, res);
    } catch (error) {
        console.error('Error in signinUser:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


exports.getUserNameByEmail = async (req, res) => {
    try {
        const { email } = req.params;

        // Find the user by email
        const user = await Register.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user's name
        res.status(200).json({ name: user.name });
    } catch (error) {
        console.error('Error in getUserNameByEmail:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


exports.checkUserExistence = async (req, res) => {
    try {
        const { identifier } = req.body; // identifier can be email or username

        // Find by email OR username
        const user = await Register.findOne({
            $or: [{ email: identifier }, { username: identifier }]
        });

        if (user) {
            return res.status(200).json({
                exists: true,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    username: user.username,
                    role: user.role,
                }
            });
        } else {
            return res.status(404).json({ exists: false, message: "User not found" });
        }
    } catch (error) {
        console.error('Error in checkUserExistence:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
