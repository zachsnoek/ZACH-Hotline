const express = require("express");
const router = express.Router();
const MessagingResponse = require("twilio").twiml.MessagingResponse;

// Require message response functions
const response = require("../lib/message-response");

// SMS post route
router.post("/sms", (req, res) => {
    const msg = req.body.Body.toLowerCase().trim();
    const twiml = new MessagingResponse();

    switch(msg) {
        case "bio":
            twiml.message(response.bio());
            break;
        case "good tune":
            twiml.message(response.goodTune());
            break;
        default: break;
    }

    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
});

module.exports = router;