function searchFunction() {
    var input, filter, nav, buttons, a,
    i, txtValue;
    input =
    document.getElemantById('searchInput');
    filter = input.value.toUpperCase();
    nav =
    document.querySelector('nav');
    buttons =
    nav.getElementsByTagName('buttons');
    for (i = 0; i< buttons.length; i++);
    {
        a =
        buttons[i].getElementsByTagName('a')[0];
        txtValue = a.textContent ||
        a.innerText;
        if 
        (txtValue.toUpperCase().indexOf(filter>-1))
        {
            buttons[i].style.display = '';
        } else{
            buttons[i].style.display = 'none';
        }

        }
    }
    document.getElementById("button-contattaci").addEventListener("click", function(){

    });

    document.getElementById("button-home").addEventListener("click", function(){

    });

    document.getElementById("button-chi-siamo").addEventListener("click", function(){

    });

    document.getElementById("button-prodotti").addEventListener("click", function(){

    });

    document.getElementById("button-contatti").addEventListener("click", function(){

    });


    
