const countryOfDelivery = prompt('Введите страну доставки!');
let costOfDelivery;
let message;

switch (countryOfDelivery.toUpperCase()) {
    case 'КИТАЙ':
        costOfDelivery = 100;
        message = `Доставка в ${countryOfDelivery} будет стоить ${costOfDelivery} кредитов`;
        break;

    case 'ЧИЛИ':
        costOfDelivery = 250;
        message = `Доставка в ${countryOfDelivery} будет стоить ${costOfDelivery} кредитов`;
        break;

    case 'АВСТРАЛИЯ':
        costOfDelivery = 170;
        message = `Доставка в ${countryOfDelivery} будет стоить ${costOfDelivery} кредитов`;
        break;

    case 'ИНДИЯ':
        costOfDelivery = 80;
        message = `Доставка в ${countryOfDelivery} будет стоить ${costOfDelivery} кредитов`;
        break;

    case 'ЯМАЙКА':
        costOfDelivery = 120;
        message = `Доставка в ${countryOfDelivery} будет стоить ${costOfDelivery} кредитов`;
        break;

    default:
        message = 'В вашей стране доставка не доступна';
}
alert(message);