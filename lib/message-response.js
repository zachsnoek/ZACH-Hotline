const rg = require("./recommendation-generator");

const greeting = "Thank you for texting the ZACH Hotline!"

/**
 * Returns my short bio as a string.
 */
exports.bio = function bio() {
    const msg = `Zach Snoek is a developer based in Holland, MI.
For more information, visit his website at https://www.zachsnoek.com.
    `.replace(/\n|\r/g, " ");

    return `${greeting} ${msg}`
}

/**
 * Returns a music recommendation as a string.
 */
exports.goodTune = function goodTune() {
    return rg.recommend();
}