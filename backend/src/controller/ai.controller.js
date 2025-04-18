const generateContent = require('../services/ai.service.js');

const getReview = async (req, res) => {
    try {
        const code = req.body.code;
        if (!code) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const response = await generateContent(code);
        res.send(response);
    } catch (error) {
        console.error("Error in getprompt:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getReview };
