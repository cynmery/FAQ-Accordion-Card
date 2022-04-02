let tabText = document.getElementsByClassName("tab-text");
let tabRadio = document.querySelectorAll('input[type=radio]');
let tabLabel = document.getElementsByClassName('tab-label');
/*function unhideText() {
    for(i=0;  i < tabText.length; i++){
        if (tabRadio[i].checked == true){
        tabText[i].classList.add('unhidden');
        /*tabText[i].classList.remove("hidden");
        tabLabel[i].classList.add('rotate-arrow');
        console.log('it is working');
        } /* else {
            /*tabText[i].classList.add('hidden');
            tabText[i].classList.remove('unhidden');
            tabLabel[i].classList.remove('rotate-arrow');
        }
    }*/
function hideText() {
    for (i = 0; i < tabText.length; i++) {
        if (tabRadio[i].checked == false) {
            /*tabText[i].classList.add('hidden');*/
            tabText[i].classList.remove('unhidden');
            tabLabel[i].classList.remove('rotate-arrow');
        } else if (tabRadio[i].checked == true && tabText[i].classList.contains('unhidden')) {
            tabText[i].classList.remove('unhidden');
            /*tabText[i].classList.remove("hidden");*/
            tabLabel[i].classList.remove('rotate-arrow');
            console.log(tabRadio[i].checked);
        } else {
            tabText[i].classList.add('unhidden');
            tabLabel[i].classList.add('rotate-arrow');
        }
    }
}

function arrow() {
    for (i = 0; i < tabRadio.length; i++) {
        /*tabRadio[i].addEventListener('click', unhideText );*/
        tabRadio[i].addEventListener('click', hideText);
    }
}
arrow();