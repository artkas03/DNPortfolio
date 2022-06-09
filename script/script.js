let langSwitch = document.getElementsByClassName("lang");
let langIsEng = true;
let currentLang = "ENG";
let langs = ["ENG", "RU"];
let burger = document.querySelector('.burger');
let burger_menu = document.querySelector('.burger_menu');

window.addEventListener('load', function checkLang(){
    let hash = window.location.hash;
    hash = hash.substring(1);

    if(hash=="RU"){
        currentLang = "RU";
        for (let index = 0; index < langSwitch.length; index++) {
            const element = langSwitch[index];
            element.classList.remove("active");
        }
        for (let index = 0; index < langSwitch.length; index++) {
            const element = langSwitch[index];
            if(element.innerHTML=="ENG"){
                element.innerHTML="АНГ";
            }
            else{
                element.classList.add("active");
                element.innerHTML="РУ";
            }
        }
    }
});

for (let index = 0; index < langSwitch.length; index++) {
    const element = langSwitch[index];
    
    element.addEventListener("click", function(){
        if (!element.classList.contains("active")){
            for (let index = 0; index < langSwitch.length; index++) {
                const element = langSwitch[index];
                element.classList.remove("active");
            }
            element.classList.add("active");
            if(element.innerHTML=="RU"){
                for (let index = 0; index < langSwitch.length; index++) {
                    const element = langSwitch[index];
                    if(element.innerHTML=="ENG"){
                        element.innerHTML="АНГ";
                    }
                    else{
                        element.innerHTML="РУ";
                    }
                }
            }
            else if(element.innerHTML=="АНГ"){
                for (let index = 0; index < langSwitch.length; index++) {
                    const element = langSwitch[index];
                    if(element.innerHTML=="АНГ"){
                        element.innerHTML="ENG";
                    }
                    else{
                        element.innerHTML="RU";
                    }
                }
            }
            switchCurrentLang(element.innerHTML);
            let lang = currentLang;
            location.href = window.location.pathname + "#" + lang;
            location.reload();
        }
    })
}

function changeLang(){
    let hash = window.location.hash;
    hash = hash.substring(1);

    if(!langs.includes(hash)){
        location.href = window.location.pathname + "#ENG";
        location.reload();
    }

    for (let key in translateArr) {
        document.querySelector('.' + key).innerHTML = translateArr[key][hash];
    }
}

changeLang();

function goToLink(){
    window.location = "pages/chat.html";
};

function switchCurrentLang(lang){
    if (lang=="РУ") {
        currentLang = "RU";
    }
    else{
        currentLang = "ENG";
    }
}

burger.addEventListener('click', function(){
    burger_menu.classList.remove('hidden');
});

function closeBurger(){
    burger_menu.classList.add('hidden');
}