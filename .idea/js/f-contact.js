function showDetails(itemId) {
    //nascondi tutti gli elementi "details"//
var detailsElements= document.querySelectorAll('.details');

detailsElements.forEach(function(elements)
{
    elements.style.diwplay= 'none'});

    //mostra gli elementi "details"//
var selectedItem = document.getElementById(itemId);
selectedItem.style.display = 'block';
}
function hideDetails(itemId){
    var selectedItem = document.getElementById(itemId);
    selectedItem.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    function showDetails(itemId) {
        //nascondi tutti gli elementi "details"//
    var detailsElements= document.querySelectorAll('.details');
    
    detailsElements.forEach(function(elements)
    {
        elements.style.diwplay= 'none'});
    
        //mostra gli elementi "details"//
    var selectedItem = document.getElementById(itemId);
    selectedItem.style.display = 'block';
    }

});

// Ottieni l'elemento dell'immagine
var immagine = document.getElementById('immagine');

// Aggiungi un gestore di eventi per l'evento di click
immagine.addEventListener('click', function() {
    // Riduci l'opacità dell'immagine a 0 in un secondo
    immagine.style.opacity = 0;

    // Dopo un certo tempo, reimposta l'opacità a 1
    setTimeout(function() {
        immagine.style.opacity = 1;
    }, 1000); // Tempo in millisecondi, 1000 millisecondi = 1 secondo
});

var immagini = ['/img/biscotteria-i-nobili zeppole.jpg', '/img/biscotteria-i-nobili trecce.jpg']; // Array di immagini
var immagineIndex = 0; // Indice dell'immagine attualmente visualizzata

// Ottieni l'elemento dell'immagine
var immagine = document.getElementById('immagine');

// Aggiungi un gestore di eventi per l'evento di click
immagine.addEventListener('click', function() {
    // Riduci l'opacità dell'immagine a 0 in un secondo
    immagine.style.opacity = 0;

    // Dopo un certo tempo, cambia l'immagine e reimposta l'opacità a 1
    setTimeout(function() {
        immagine.src = immagini[immagineIndex];
        immagineIndex = (immagineIndex + 1) % immagini.length; // Passa alla prossima immagine nell'array
        immagine.style.opacity = 1;
    }, 1000); // Tempo in millisecondi, 1000 millisecondi = 1 secondo
});