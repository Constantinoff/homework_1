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
let exp1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    exp2 = +prompt("Во сколько обойдется?", ""),
    exp3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    exp4 = +prompt("Во сколько обойдется?", "");

appData.expanses[exp1] = exp2;
appData.expanses[exp2] = exp3;

alert('Бюджет на один день =' + profit/30);


