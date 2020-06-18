let profit, date; /* Объявлем переменные в глобальной обл. видимости*/

function start() {
     profit = +prompt("Ваш бюджет на месяц?", "");
     date = prompt("Введите дату в формате YYYY-MM-DD", "");

     while(isNaN(profit) || profit == '' || profit == null) {
        profit = +prompt("Ваш бюджет на месяц?", "");
     } /*ПРОВЕРКА ЧЕРЕЗ ЦИКЛ, ЧТОБЫ НЕЛЬЗЯ БЫЛО ПРОПУСТИТЬ, 
     ЗНАЧЕНИЕ БЫЛО ЦИФРАМИ */
}

start();
    
let appData = {
    budget: profit,
    timeData: date,
    expanses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// Добавляем значения в переменные с помощью функции:

function chooseExpenses() {
    for (let i = 0; i < 2; i++ ) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = +prompt("Во сколько обойдется?", "");
    
        //Проверка или а == строка,  
        //(typeof(a)) != null -- пользователь не нажал "отмена"
        // a != '' -- не пустая строка
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
            console.log('done');
        
            appData.expanses[a] = b;
        } else {
            alert('Вы ввели недопустимое значение! Попробуйте ещё раз!');
            console.log('Введено недопустимое значение!');
            i = i - 1;
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); /*МЕТОД ДЛЯ ОКРУГЛЕНИЯ ДО БЛИЖАЙШЕГО ЦЕЛОГО */
    alert('Бюджет на один день: ' + appData.moneyPerDay);
    
    return appData.moneyPerDay;
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log('Произошла какая-то ошибка');
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpanses() {
    for(let i = 0; i < 3; i++) {
        let optExpans = +prompt("Введите сумму на статью №" + (i + 1) + "необязательных расходов");

        appData.optionalExpenses[i] = optExpans;
    }
}

/*Добавляем значения в переменные
let exp1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    exp2 = +prompt("Во сколько обойдется?", ""),
    exp3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    exp4 = +prompt("Во сколько обойдется?", "");


appData.expanses[exp1] = exp2;
appData.expanses[exp2] = exp3;*/

// While:
// let i = 0;
// while ( i < 2 ) {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");

//         if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//             console.log('done');
        
//             appData.expanses[a] = b;
//         } else {
//             alert('Вы ввели недопустимое значение! Попробуйте ещё раз!');
//             console.log('Введено недопустимое значение!');
//             i = i - 1;
//         }
// }

// // Do While:
// let i = 0;
// do {
//     i++;

//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//         console.log('done');
    
//         appData.expanses[a] = b;
//     } else {
//         alert('Вы ввели недопустимое значение! Попробуйте ещё раз!');
//         console.log('Введено недопустимое значение!');
//         i = i - 1;
//     }
// } while (i < 2);

