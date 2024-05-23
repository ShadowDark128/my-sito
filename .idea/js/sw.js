// Evento di installazione: viene eseguito quando il Service Worker viene installato per la prima volta
self.addEventListener('install', function(event) {
    console.log('Service Worker installato');
  });
  
  // Evento di attivazione: viene eseguito quando il Service Worker viene attivato
  self.addEventListener('activate', function(event) {
    console.log('Service Worker attivato');
  });
  
  // Evento di ricezione delle notifiche push
  self.addEventListener('push', function(event) {
    console.log('Notifica push ricevuta', event.data.text());
  
    // Eseguire azioni in base ai dati della notifica
  });