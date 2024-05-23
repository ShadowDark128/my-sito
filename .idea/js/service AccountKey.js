// Codice per inviare una notifica push utilizzando l'API di Firebase Cloud Messaging (FCM)
const admin = require('firebase-admin');

// Inizializza l'app Firebase
admin.initializeApp({
  credential: admin.credential.cert('/js/serviceAccountKey.json'),
  databaseURL: 'https://your-project-id.firebaseio.com'
});

// Token del dispositivo registrato
const registrationToken = 'AAAAo44HQZU:APA91bG-gzQ1fD1hwxd2GGqT-ZRsor3cslI2VHy7MhtnlCw-1A82_6C86lkena5JIgTcJiyfbUAE-xCf7IAvCG7c7rzB24TLJo80uDMHPDaMOYAxxUvP3vqLqc48V-gMN0jHL81XcyzM';

// Dati della notifica
const message = {
  notification: {
    title: 'AVVISO AL CLIENTE',
    body: 'Ti risponderemo il prima possibile, ti consigliamo di aspettare!'
  },
  token: registrationToken
};

// Invia la notifica
admin.messaging().send(message)
  .then((response) => {
    console.log('Notifica inviata con successo:', response);
  })
  .catch((error) => {
    console.error('Errore nell\'invio della notifica:', error);
  });