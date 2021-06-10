/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны
получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
    Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
function getDigitsOfNumber(number) {
    if (number < 0 || number > 999 || !Number.isInteger(number)) {
        console.log('Значение должно быть целым числом от 0 до 999.');
        return {};
    }

    return {
        units: number % 10,
        dozens: Math.floor(number / 10) % 10,
        handreds: Math.floor(number / 100),
    };
}

console.log(getDigitsOfNumber(+prompt("Введите число от 0 до 999: ")));

/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
const backet = {
    products: [
        {
            product_name: "Товар 1",
            price: 35500,
            quantity: 2
        },
        {
            product_name: "Товар 2",
            price: 15700,
            quantity: 3
        }
    ],

    countBasketPrice() {
        return this.products.reduce(function (sum, object) {
            return sum + object.price * object.quantity;
        }, 0);
    }
};

console.log("задание 2");
console.log(backet.countBasketPrice());
