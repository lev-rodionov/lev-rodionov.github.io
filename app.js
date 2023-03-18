$(function() {

    /*Шапка*/
    let header = $("#header");
    let b1 = $("#b1");
    let b1H = b1.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");


    checkScroll(scrollPos, b1H)

    $(window).on ("scroll resize", function () {
        let b1H = b1.innerHeight();
        scrollPos = $(this).scrollTop();


        checkScroll(scrollPos, b1H)
    });

    function checkScroll(scrollPos, b1H) {
        if( scrollPos > b1H ) {
            header.addClass("fixed");
        } else  {
            header.removeClass("fixed");
        }
    }


    /*Скрол к блоку*/
    $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");


    $("html, body").animate ({
        scrollTop: elementOffset +10/*чуть выше или чуть ниже скрол блока*/
    }, 700);/*700 скорость скрола*/
});



/*Открытие бургера*/

navToggle.on("click", function(event){
    event.preventDefault();

    nav.toggleClass("show");


});

/*Слайдер https://kenwheeler.github.io/slick/*/
let slider = $("#reviewsSlider");



/*Сам слайдер*/
    slider.slick({
        infinite: true,
        slidesToShow: 1,/*Кол-во показа слайдов*/
        slidesToScroll: 1, /*Кол-во скролов при клике*/
        fade: false,
        arrows: false,/*стрелочки*/
        dots: false/*точки*/
    });




/*Скрипт на закрытие/открытие блока Вопросы
* https://habr.com/ru/post/477520/
*/
function onToggle(event) {
    if (event.target.open) {
        document.querySelectorAll(".list > li > details[open]").forEach((el) => {
            // Исключаем из перебора елемент который мы только что открыли
            if (el === event.target) {
                return;
            }

            // Закрываем все остальные елементы <details>
            el.open = false;
        });
    }
}

// Вешаем наблюдатель на все елементы <details> внутри акордиона
document
    .querySelectorAll(".list > li > details")
    .forEach((el) => el.addEventListener("toggle", onToggle));

});