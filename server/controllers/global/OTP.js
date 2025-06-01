// controllers/auth/sendOtp.js
const { OTP } = require('../../models');
const { sendOtpEmail } = require('../../utils');

exports.sendOtpToEmail = async (req, res) => {
    const { email } = req.body;

    try {
        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Set expiry to 10 mins
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

        // Upsert OTP record (one per email)
        await OTP.findOneAndUpdate(
            { email },
            { otp, expiresAt },
            { upsert: true, new: true }
        );

        await sendOtpEmail(email, otp);

        res.status(200).json({ message: 'OTP sent to email' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ message: 'Failed to send OTP' });
    }
};

// controllers/auth/verifyOtp.js
exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const otpRecord = await OTP.findOne({ email });

        if (!otpRecord) {
            return res.status(400).json({ message: 'OTP not found' });
        }

        if (otpRecord.otp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        if (otpRecord.expiresAt < new Date()) {
            return res.status(400).json({ message: 'OTP expired' });
        }

        // Optional: delete used OTP
        await OTP.deleteOne({ email });

        res.status(200).json({ message: 'OTP verified' });
    } catch (error) {
        console.error('OTP Verification Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
