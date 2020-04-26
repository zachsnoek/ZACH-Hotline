require("dotenv").config();
const request = require("request");
const key = process.env.LASTFM_API_KEY;
const url = "https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=zachsnoek&api_key=" + key + "&format=json";

/**
 * Retrieves my loved tracks from my last.fm account (i.e., my recommendations)
 * as an array and returns a promise.
 */
function getTracks() {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (response.statusCode == 200) {
                let tracks = [];

                // Get the first page of tracks (50 tracks) as an array
                const lovedTracks = JSON.parse(body).lovedtracks.track;
                
                // Remove unnecessary metadata and only include track name and artist name
                lovedTracks.map(track => {
                    tracks.push({
                        "artist": track.artist.name,
                        "title": track.name
                    });
                });

                resolve(tracks);
            } else {
                reject("Error getting tracks.");
            }
        });
    });
}

module.exports.getTracks = getTracks;
