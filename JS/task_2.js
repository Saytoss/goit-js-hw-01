const total = 110;
const ordered = 200;
let orderMessage = '';

if (ordered === total || ordered < total) {
    orderMessage = 'Заказ оформлен, с вами свяжется менеджер';
} else {
    orderMessage = 'На складе недостаточно товаров';
}

console.log(orderMessage);