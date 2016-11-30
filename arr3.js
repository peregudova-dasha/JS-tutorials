/*
1. Создайте массив fruits с элементами «apple», «orange».
2. Добавьте в конец значение «kiwi»
3. Замените предпоследнее значение с конца на «pear». Код
замены предпоследнего значения должен работать для
массивов любой длины.
4. Удалите первое значение массива и выведите его console.
5. Добавьте в начало значения «apricot» и «peach».
*/
var fruit = ["apple", "orange"]; //Создайте массив fruits с элементами «apple», «orange».

fruit.push("kiwi"); //Добавьте в конец значение «kiwi»

console.log(fruit);

fruit[fruit.length - 2] = "pear"; //Замените предпоследнее значение с конца на «pear»

console.log(fruit);

console.log(fruit.shift()); //Удалите первое значение массива и выведите его console.

console.log(fruit);

fruit.unshift("apricot", "peach"); // Добавьте в начало значения «apricot» и «peach».

console.log(fruit);






