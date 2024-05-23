
    function showImages(category) {
        var images = document.getElementsByClassName('image');
        for (var i = 0; i < images.length; i++) {
            if (images[i].classList.contains(category)) {
                images[i].classList.add('show');
            } else {
                images[i].classList.remove('show');
            }
        }
    }
