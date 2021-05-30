//Задание 1
//С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 0;
console.log("Задание 1");
while (i <= 100) {
    if (primaryNumber(i))
        console.log(i);
    i++;
}
function primaryNumber(value) {
    if (value < 2)
        return false;
    let max = Math.sqrt(value);
    for (let i = 2; i <= max; i++) {
        if (value % i == 0)
            return false;
    }
    return true;
}

//2. С этого урока начинаем работать с функционалом интернет-магазина. 
//Предположим, есть сущность корзины. Нужно реализовать функционал подсчета 
//стоимости корзины в зависимости от находящихся в ней товаров.
//3. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;

const backet = [
    ["Товар 1", 35500, 2],
    ["Товар 2", 15700, 3],];
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice(backet) {
    return backet.reduce(function (sum, object) {
        return sum + object[1] * object[2];
    }, 0);
}
console.log("задание 2-3");
console.log(countBasketPrice(backet));
//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for(…){// здесь пусто}
console.log("Задание 4");
for (let i = 0; i < 10; console.log(i), i++) {

}
//5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды
// должно быть 20 рядов, а не 5:
console.log("Задание 5");

for (let i = 0, str = ''; i <= 20; i++) {
    str += `x`;
    console.log(str + '\n');
}