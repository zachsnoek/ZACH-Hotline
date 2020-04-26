require("dotenv").config();
const request = require("request");
const key = process.env.LASTFM_API_KEY;
const url = "https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=zachsnoek&api_key=" + key + "&format=json";

// Get loved tracks from last.fm (i.e., my recommended songs)
function getTracks() {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (response.statusCode == 200) {
                let tracks = [];

                // Get a list of the first page of tracks (first 50 tracks)
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
