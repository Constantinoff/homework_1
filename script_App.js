let profit = +prompt("Ваш бюджет на месяц?", ""),
    date   = prompt("Введите дату в формате YYYY-MM-DD", "");
    
let appData = {
    budget: profit,
    timeData: date,
    expanses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// Добавляем значения в переменные
// let exp1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     exp2 = +prompt("Во сколько обойдется?", ""),
//     exp3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     exp4 = +prompt("Во сколько обойдется?", "");

// Добавляем значения в переменные с помощью массива

for (let i = 0; i < 2; i ++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");

    //Проверка или а == строка,  
    //(typeof(a)) != null -- пользователь не нажал "отмена"
    // a != '' -- не пустая строка

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
        console.log('done');
    
        appData.expanses[a] = b;
    } else {
        // необходимо написать код, чтобы вернуться к вопросу заново!
    }
}

// appData.expanses[exp1] = exp2;
// appData.expanses[exp2] = exp3;

appData.moneyPerDay = appData.budget / 30;

alert('Бюджет на один день: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log('Произошла какая-то ошибка');
}



