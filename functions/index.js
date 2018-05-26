const functions = require('firebase-functions');
// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({
  origin: true,
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.isCorrectAnswer = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    response.send("false");
  });
});
