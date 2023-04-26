/**
 *  Начало фильтров каталога
 */

// Сортировка по цене - начало

const minMax = document.querySelector('#minMax');
const maxMin = document.querySelector('#maxMin');

minMax.addEventListener('click', () => {
    minMax.style.color = '#ffd749';
    maxMin.style.color = '#252525';
    let filter = document.querySelector('.catalog__flex-car--grid');
    for (let i = 0; i < filter.children.length; i++) {
        for (let j = i; j < filter.children.length; j++) {
            if (+filter.children[i].getAttribute('data-price') > +filter.children[j].getAttribute('data-price')) {
                replaceNode = filter.replaceChild(filter.children[j], filter.children[i])
                insertAfter(replaceNode, filter.children[i]);
            }
        }
    }
});
maxMin.addEventListener('click', () => {
    maxMin.style.color = '#ffd749';
    minMax.style.color = '#252525';
    let filter = document.querySelector('.catalog__flex-car--grid');
    for (let i = 0; i < filter.children.length; i++) {
        for (let j = i; j < filter.children.length; j++) {
            if (+filter.children[i].getAttribute('data-price') < +filter.children[j].getAttribute('data-price')) {
                replaceNode = filter.replaceChild(filter.children[j], filter.children[i])
                insertAfter(replaceNode, filter.children[i]);
            }
        }
    }
});

const insertAfter = (elem, refElem) => {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

// Сортировка по цене - конец


// Сортировка по рулю - начало

const leftWheel = document.querySelectorAll('.left');
const rightWheel = document.querySelectorAll('.right');

const leftBtn = document.querySelector('#leftwheel');
const rightBtn = document.querySelector('#rightwheel');

leftBtn.addEventListener('click', () => {
    leftBtn.style.backgroundColor = '#ffd749';
    leftBtn.style.border = 'none';
    leftBtn.style.boxShadow = '0px 2px 5px rgba(39, 34, 15, 0.1)';

    rightBtn.style.backgroundColor = '#fff';
    rightBtn.style.border = '1px solid #dadcdf';
    rightBtn.style.boxShadow = 'none';

    leftWheel.forEach((el) => {
        el.style.display = 'block'
    });
    rightWheel.forEach((el) => {
        el.style.display = 'none'
    });
});

rightBtn.addEventListener('click', () => {
    rightBtn.style.backgroundColor = '#ffd749';
    rightBtn.style.border = 'none';
    rightBtn.style.boxShadow = '0px 2px 5px rgba(39, 34, 15, 0.1)';

    leftBtn.style.backgroundColor = '#fff';
    leftBtn.style.border = '1px solid #dadcdf';
    leftBtn.style.boxShadow = 'none';

    rightWheel.forEach((el) => {
        el.style.display = 'block'
    });
    leftWheel.forEach((el) => {
        el.style.display = 'none'
    });
});

// Сортировка по рулю - конец


// Сортировка по приводу - начало

const beforeUnit = document.querySelectorAll('.beforeunit');
const fourUnit = document.querySelectorAll('.fourunit');

const beforeBtn = document.querySelector('#beforeunit');
const fourBtn = document.querySelector('#fourunit');

beforeBtn.addEventListener('click', () => {
    beforeBtn.style.backgroundColor = '#ffd749';
    beforeBtn.style.border = 'none';
    beforeBtn.style.boxShadow = '0px 2px 5px rgba(39, 34, 15, 0.1)';

    fourBtn.style.backgroundColor = '#fff';
    fourBtn.style.border = '1px solid #dadcdf';
    fourBtn.style.boxShadow = 'none';

    beforeUnit.forEach((el) => {
        el.style.display = 'block'
    });
    fourUnit.forEach((el) => {
        el.style.display = 'none'
    });
});

fourBtn.addEventListener('click', () => {
    fourBtn.style.backgroundColor = '#ffd749';
    fourBtn.style.border = 'none';
    fourBtn.style.boxShadow = '0px 2px 5px rgba(39, 34, 15, 0.1)';

    beforeBtn.style.backgroundColor = '#fff';
    beforeBtn.style.border = '1px solid #dadcdf';
    beforeBtn.style.boxShadow = 'none';
    beforeUnit.forEach((el) => {
        el.style.display = 'none';
    });
    fourUnit.forEach((el) => {
        el.style.display = 'block';
    });
});

// Сортировка по приводу - конец


// Сортировка по марке - начало

const toyota = document.querySelectorAll('.toyota');
const nissan = document.querySelectorAll('.nissan');
const hyundai = document.querySelectorAll('.hyundai');
const mitsubishi = document.querySelectorAll('.mitsubishi');
const mazda = document.querySelectorAll('.mazda');
const lexus = document.querySelectorAll('.lexus');
const chery = document.querySelectorAll('.chery');

const toyotaCheck = document.querySelector('#toyotaCheck');
const nissanCheck = document.querySelector('#nissanCheck');
const hyundaiCheck = document.querySelector('#hyundaiCheck');
const mitsubishiCheck = document.querySelector('#mitsubishiCheck');
const mazdaCheck = document.querySelector('#mazdaCheck');
const lexusCheck = document.querySelector('#lexusCheck');
const cheryCheck = document.querySelector('#cheryCheck');

// Сортировка по марке - конец


// Первый ползунок фильтра - начало

const slider1 = document.getElementById('slider1');

noUiSlider.create(slider1, {
    start: [1200, 15600],
    step: 50,
    connect: true,
    range: {
        'min': 1200,
        'max': 15600
    },
    format: wNumb({
        decimals: 0
    })
});

const inputPriceOne = document.querySelector('#inputPriceOne');
const inputPriceTwo = document.querySelector('#inputPriceTwo');
const dataPriceValue = document.querySelectorAll('.catalog__flex-car--grid-item');

slider1.noUiSlider.on('update', function (values, handle) {
    const point = values[handle];
    let format = point.replace(/[^0-9]/g, '')
        .split('').reverse();
    if (format.length > 2) format.splice(3, 0, '.');
    if (format.length > 5) format.splice(4, '.');
    if (handle) {
        for (let i = 0; i < dataPriceValue.length; i++) {
            const value = dataPriceValue[i].dataset.price;
            if (+value <= +point) {
                dataPriceValue[i].style.display = 'block';
            }
            else {
                dataPriceValue[i].style.display = 'none';
            }
        }
        inputPriceTwo.value = point.value = format.reverse().join('');
    }
    else {
        for (let i = 0; i < dataPriceValue.length; i++) {
            const value = dataPriceValue[i].dataset.price;
            if (+value >= +point) {
                dataPriceValue[i].style.display = 'block';
            }
            else {
                dataPriceValue[i].style.display = 'none';
            }
        }
        inputPriceOne.value = point.value = format.reverse().join('');
    }
});

// Первый ползунок фильтра - конец


// Второй ползунок фильтра - начало

const slider2 = document.getElementById('slider2');

noUiSlider.create(slider2, {
    start: [1990, 2023],
    connect: true,
    range: {
        'min': 1990,
        'max': 2023
    },
    format: wNumb({
        decimals: 0
    })
});

const inputPriceThree = document.querySelector('#inputPriceThree');
const inputPriceFour = document.querySelector('#inputPriceFour');
const dataYearValue = document.querySelectorAll('.catalog__flex-car--grid-item');

slider2.noUiSlider.on('update', function (values, handle) {
    const point = values[handle];
    if (handle) {
        for (let i = 0; i < dataPriceValue.length; i++) {
            const value = dataPriceValue[i].dataset.year;
            if (+value <= +point) {
                dataPriceValue[i].style.display = 'block';
            }
            else {
                dataPriceValue[i].style.display = 'none';
            }
        }
        inputPriceFour.value = values[handle];
    }
    else {
        for (let i = 0; i < dataPriceValue.length; i++) {
            const value = dataPriceValue[i].dataset.year;
            if (+value >= +point) {
                dataPriceValue[i].style.display = 'block';
            }
            else {
                dataPriceValue[i].style.display = 'none';
            }
        }
        inputPriceThree.value = values[handle];
    }
});

// Второй ползунок фильтра - конец


// Кнопка очистки фильров - начало



// Кнопка очистки фильров - конец


/**
 *  Конец фильтров каталога
 */


// Попап - начало

let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.close-popup');
closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});
document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

// Попап - конец


// Слайдер в попапе - начало

document.addEventListener('DOMContentLoaded', function () {
    let slider = new SimpleAdaptiveSlider('.slider', {
        loop: true,
        autoplay: false,
        swipe: true
    });

    let thumbnailsItem = document.querySelectorAll('.slider__thumbnails-item');

    function setActiveThumbnail() {
        let sliderItemActive = document.querySelector('.slider__item_active');
        var index = parseInt(sliderItemActive.dataset.index);
        for (let i = 0, length = thumbnailsItem.length; i < length; i++) {
            if (i !== index) {
                thumbnailsItem[i].classList.remove('active');
            } else {
                thumbnailsItem[index].classList.add('active');
            }
        }
    }
    setActiveThumbnail();
    document.querySelector('.slider').addEventListener('slider.set.active', setActiveThumbnail);
    let sliderThumbnails = document.querySelector('.slider__thumbnails');
    sliderThumbnails.addEventListener('click', function (e) {
        $target = e.target.closest('.slider__thumbnails-item');
        if (!$target) {
            return;
        }
        let index = parseInt($target.dataset.slideTo, 10);
        slider.moveTo(index);

    });
});

// Слайдер в попапе - конец

// Ползунок попапа - начало

const slider3 = document.getElementById('slider3');

noUiSlider.create(slider3, {
    start: 1,
    connect: [true, false],
    tooltips: [true],
    range: {
        'min': 1,
        'max': 31
    },
    format: wNumb({
        decimals: 0
    })
});

// Ползунок попапа - конец


// Калькулятор - начало

const ValueOfSol = document.querySelector('.popup__flex-info--rent-div-flextext-item2-flex-title');
const ValueOfPersBlock = document.querySelector('#persent1');
const ValueOfPers = document.querySelector('#persent1-text');
const FakeValue = document.querySelector('.popup__flex-info--rent-div-flextext-item2-flex-pretitle');
const result = document.querySelector('.popup__flex-info--rent-div-flextext-item2-flex2-title');
const firstCheck = document.querySelector('#firstCheck');
const secondCheck = document.querySelector('#secondCheck');

const calculateBg = document.querySelector('.popup__flex-info--rent-div');

const minipopPrice = document.querySelector('#minipopPrice');
const minipopDays = document.querySelector('#minipopDays');

function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yyyy = date.getFullYear();
    if (yyyy < 10) yy = '0' + yyyy;

    return dd + '.' + mm + '.' + yyyy;
}

let dateStart = new Date();
document.querySelector('#dateStart').value = formatDate(dateStart);

let dateEnd = new Date();
document.querySelector('#dateEnd').value = formatDate(dateEnd);

popup.addEventListener('click', () => {
    let fear = document.querySelector('#fear1');
    fear.textContent = 'ОСАГО';

    let checkPrice1 = 0;
    let checkPrice2 = 0;
    if (firstCheck.checked) {
        checkPrice1 = 300;
        fear.textContent = 'ОСАГО + КАСКО';
    }
    if (secondCheck.checked) {
        checkPrice2 = 600;
    }

    slider3.noUiSlider.on('update', function (values, handle) {
        const point = priceOfCar / 100 * (values[handle] - 1);
        ValueOfSol.textContent = priceOfCar - point;
        ValueOfPers.textContent = `-${values[handle] - 1}%`;

        if(values[handle] == 1 || values[handle] == 21 || values[handle] == 31) {
            minipopDays.textContent = `${values[handle]} сутки`;
        }
        else {
            minipopDays.textContent = `${values[handle]} суток`;
        }

        if (+ValueOfSol.textContent <= priceOfCar - 1) {
            ValueOfPersBlock.style.visibility = 'visible';
            ValueOfPersBlock.style.opacity = '1';
            FakeValue.style.visibility = 'visible';
            FakeValue.style.opacity = '1';
        }
        else {
            ValueOfPersBlock.style.visibility = 'hidden';
            ValueOfPersBlock.style.opacity = '0';
            FakeValue.style.visibility = 'hidden';
            FakeValue.style.opacity = '0';
        }
        result.textContent = `${(ValueOfSol.textContent * values[handle]) + (checkPrice1 * values[handle]) + (checkPrice2 * values[handle])} ₽`;
        minipopPrice.textContent = result.textContent;
    })
})

// Калькулятор - конец


// Мини-попап - начало

let miniPopupBg1 = document.querySelector('.minipopup__bg');
let miniPopup1 = document.querySelector('.minipopup');
let openMiniPopupButtons1 = document.querySelectorAll('.open-minipopup');
let closeMiniPopupButton1 = document.querySelector('.close-minipopup');

openMiniPopupButtons1.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        miniPopupBg1.classList.add('active');
        miniPopup1.classList.add('active');
    })
});
closeMiniPopupButton1.addEventListener('click', () => {
    miniPopupBg1.classList.remove('active');
    miniPopup1.classList.remove('active');
});
document.addEventListener('click', (e) => {
    if (e.target === miniPopupBg1) {
        miniPopupBg1.classList.remove('active');
        miniPopup1.classList.remove('active');
    }
});

// Мини-попап - конец


// Логика появления форм - начало

const iTake = document.querySelector('.minipopup__itake');
const adress = document.querySelector('.minipopup__adress');
const airport = document.querySelector('.minipopup__airport');
const adressValue = document.querySelector('.minipopup__form-dop1');
const airportValue = document.querySelector('.minipopup__form-dop2');
const iTakeCheck = document.querySelector('#itakeCheck');
const adressCheck = document.querySelector('#adressCheck');
const airportCheck = document.querySelector('#airCheck');
const minipopupSize = document.querySelector('.minipopup');

airportCheck.addEventListener('click', () => {
    minipopupSize.style.height = '805px';
    setTimeout(() => {
        airport.style.display = 'block';
        iTake.style.display = 'none';
        adress.style.display = 'none';
        airportValue.style.display = 'block';
        adressValue.style.display = 'none';
    }, 200)
});
adressCheck.addEventListener('click', () => {
    minipopupSize.style.height = '805px';
    setTimeout(() => {
        iTake.style.display = 'none';
        airport.style.display = 'none';
        adress.style.display = 'block';
        adressValue.style.display = 'block'
        airportValue.style.display = 'none';
    }, 200)
});
iTakeCheck.addEventListener('click', () => {
    minipopupSize.style.height = '695px';
    airport.style.display = 'none';
    adress.style.display = 'none';
    iTake.style.display = 'block';
    airportValue.style.display = 'none';
    adressValue.style.display = 'none';
});

// Логика появления форм - конец


let priceOfCar = 0;
const carTitlePop = document.querySelector('#carTitlePop');
const carColorPop = document.querySelector('#carColorPop');
const carSizePop = document.querySelector('#carSizePop');
const carWheelPop = document.querySelector('#carWheelPop');
const carUnitPop = document.querySelector('#carUnitPop');
const carBoxPop = document.querySelector('#carBoxPop');
const carEnginePop = document.querySelector('#carEnginePop');
const carOilPop = document.querySelector('#carOilPop');

const carInCityPop = document.querySelector('#carInCityPop');
const carOutCityPop = document.querySelector('#carOutCityPop');
const carPrePrice = document.querySelector('#carPrePrice');

/**
 * Машина 1 - начало
 */ 
    const carTitle1 = document.querySelector('#carTitle1');
    const carPrice1 = document.querySelector('#car1').dataset.price;
    const carYear1 = document.querySelector('#car1').dataset.year;
    const carImg1 = document.querySelector('#carImg1');

    const carColor1 = 'Белый';
    const carSize1 = 4;
    const carWheel1 = 'Правый';
    const carUnit1 = 'Полный';
    const carBox1 = 'Автомат';
    const carEngine1 = '1.0 л';
    const carOil1 = '40 л';

    const carInCity1 = '5.000 ₽';
    const carOutCity1 = '8.000 ₽';



    let openPopupButtons1 = document.querySelector('.open-popup1');
    openPopupButtons1.addEventListener('click', (e) => {
        e.preventDefault();

        carTitlePop.textContent = `${carTitle1.textContent} ${carYear1}`;
        priceOfCar = +carPrice1;
        carPrePrice.textContent = priceOfCar;

        carColorPop.textContent = carColor1;
        carSizePop.textContent = carSize1;
        carWheelPop.textContent = carWheel1;
        carUnitPop.textContent = carUnit1;
        carBoxPop.textContent = carBox1;
        carEnginePop.textContent = carEngine1;
        carOilPop.textContent = carOil1;

        carInCityPop.textContent = carInCity1;
        carOutCityPop.textContent = carOutCity1;

        // Фотографии - начало



        // Фотографии - конец

        popupBg.classList.add('active');
        popup.classList.add('active');
    });
/**
 * Машина 1 - конец
 */


