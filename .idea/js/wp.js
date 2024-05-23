document.getElementById("bt_whatsapp").addEventListener("click", function() {
    var message = document.getElementById("messageInput").value;

    // Verifica se il messaggio è stato inserito
    if (message.trim() === "") {
        alert("Inserisci un messaggio prima di inviare su WhatsApp");
        return;
    }

    // Chiedi al cliente se ha finito
    var isFinished = confirm("Hai finito di scrivere il messaggio?");

    if (isFinished) {
        sendMessageToWhatsApp(message);
    } else {
        // L'utente ha scelto di non inviare il messaggio
        // Puoi fare qualcos'altro o non fare nulla
    }
     // Invia il messaggio automatico per i nuovi clienti
     var autoMessage = "Grazie per averci contattato! Si prega di attendere, ti risponderemo il prima possibile.";
     sendMessageToWhatsApp(autoMessage);

    // Aggiungi una descrizione per identificare i nuovi clienti
    var description = "Nuovo cliente: ";
    var fullMessage = description + message;

    // Invia il messaggio a WhatsApp
    sendMessageToWhatsApp(fullMessage);
});

// Richiedi il permesso per inviare notifiche push//

function requestNotificationPermission() {
    if (!("Notification" in window)) {
        alert("I browser che non supportano le notifiche push non possono ricevere notifiche.");
    } else if (Notification.permission === "granted") {
        // Permesso già garantito
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                // Permesso ottenuto
            }
        });
    }
}

// Invia una notifica push al cliente
function sendPushNotification(message) {
    if (Notification.permission === "granted") {
        var notification = new Notification("Nuovo messaggio", {
            body: message,
            icon: "/img/LogoBIN.png" // Aggiungi l'URL dell'icona desiderata
        });

        notification.onclick = function() {
            // Azione da eseguire quando il cliente clicca sulla notifica
            // Puoi aprire una finestra di dialogo, o reindirizzare l'utente alla pagina del tuo sito web
            alert("Hai ricevuto un nuovo messaggio!");
        };
    }
}

// Invia il messaggio su WhatsApp e notifica il cliente
function sendMessageAndNotify(message) {
    sendPushNotification("Hai ricevuto un nuovo messaggio su WhatsApp!"); // Notifica il cliente
    sendMessageToWhatsApp(message); // Invia il messaggio su WhatsApp
}

// Codice per inviare il messaggio su WhatsApp (incluso dalla tua implementazione)
function sendMessageToWhatsApp(message) {
    var phoneNumber = "393395334948"; // Sostituisci con il tuo numero di telefono
    var encodedMessage = encodeURIComponent(message);
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
    window.open(whatsappURL, "_blank");
}

requestNotificationPermission();









function sendMessageToWhatsApp(message) {
    var phoneNumber = "393395334948"; // Sostituisci con il tuo numero di telefono
    var encodedMessage = encodeURIComponent(message);
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
    window.open(whatsappURL, "_blank");
}





    