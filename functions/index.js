const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const floatToInteger = (max, float) => Math.floor(float * (max + 1));

exports.randomQuestion = functions
  .region('europe-west1')
  .https.onCall(
    (collection, context) => {
      return admin.firestore().collection(collection).get()
        .then((querySnapshot) => {
          const rand = floatToInteger(querySnapshot.size, Math.random());
          const doc = querySnapshot.docs[rand - 1];
          return Object.assign({id: doc.id}, doc.data());
        });
    }
  );

exports.isCorrectAnswer = functions
  .region('europe-west1')
  .https.onCall(
    (data, context) => {
      const random_boolean = Math.random() >= 0.5;
      return {
        'correct': random_boolean
      }
    }
  );
