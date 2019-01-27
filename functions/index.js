const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.questions = functions.database.collection(collection).get();

exports.isCorrectAnswer = functions.https.onCall(
  (data, context) => {
    const random_boolean = Math.random() >= 0.5;
    return {
      'correct': random_boolean
    }
  }
);
