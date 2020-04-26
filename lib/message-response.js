const rg = require("./recommendation-generator");

const thankMsg = "Thanks for texting the ZACH Hotline!"

/**
 * Returns my short bio as a string.
 */
exports.bio = function bio() {
    const body = `Zach Snoek is a developer based in Holland, MI.
For more information, visit his website: www.zachsnoek.com.
    `.replace(/\n|\r/g, " ");

    return `${thankMsg} ${body}`
}

/**
 * Returns a music recommendation as a string.
 */
exports.bop = function bop() {
    return `${rg.recommend()} ${thankMsg}`;
}