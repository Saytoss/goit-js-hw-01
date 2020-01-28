const credits = 23580;

const pricePerDroid = 3000;

const numberOfDroidForBuy = prompt('Сколько дроидов желаете купить?');

let message;

const totalPrice = Number(numberOfDroidForBuy) * pricePerDroid;

const creditsBalance = credits - totalPrice;

if (numberOfDroidForBuy === null) {
    message = 'Отменено пользователем!';
} else if (totalPrice < credits) {
    message = `Вы купили ${numberOfDroidForBuy} дроидов, на счету осталось ${creditsBalance} кредитов.`;
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
} else {
    message = 'Ничего не выбрано!'
}

alert(message);