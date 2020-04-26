const lastFM = require("./lastfm");

// Array of loved tracks from my last.fm account
let tracks = [];

// Populate tracks
lastFM.getTracks()
    .then(lovedTracks => {
        tracks = lovedTracks;
        console.log(`Received ${tracks.length} loved tracks from last.fm.`);
    })
    .catch(e => {
        // If there's an error, add a default track
        tracks = [{
            "artist": "The Jackson 5",
            "title": "I Want You Back"
        }];
        console.error(e);
        console.log("Setting default track to 'I Want You Back' by The Jackson 5.");
    });

// Random message greetings to make the response less boring
const greetings = [
    "Hi!", 
    "Hello, there!",
    "Hello!",
    "Hey, there!",
    "Hey!",
    "How do you do?"
];

// Similarly, random message bodies
const body = [
    "You should check out the song", 
    "I really think you'd like", 
    "A song I've come to love is",
    "A really great song is",
    "For you, I'm going to recommend the song",
    "I think you would enjoy"
];

/**
 * Generates a music recommendation message from my loved last.fm tracks.
 * A call to this function generates a greeting, body, and track.
 */
function recommend() {
    const greeting = greetings[getRandomIndex(greetings)];
    const msgBody = body[getRandomIndex(body)];
    const msgTrack = tracks[getRandomIndex(tracks)];
    return `${greeting} ${msgBody} "${msgTrack.title}" by ${msgTrack.artist}.`;
}

/**
 * Helper function to get a random index from a list.
 * @param {*} list the list to get a random index from.
 */
function getRandomIndex(list) {
    const len = list.length;
    return Math.floor(Math.random() * Math.floor(len));
}

module.exports.recommend = recommend;