//№1
const maskCard = (string, symbol) => {
  console.log(
    string
      .split("")
      .fill(symbol, 6, string.length - 4)
      .join("")
  );
};
maskCard("4815154823541789", "*");

//№2
const padStart = (...str) => {
  const repeat = str[2] ? str[2].repeat(str[1]) : " ".repeat(str[1]);
  console.log(repeat + str[0]);
};
padStart("7", 3, "0");

//№3
function mean() {
  console.log(Array.from(arguments).reduce((a, b) => a + b) / arguments.length);
}
mean(1, 4, 5, 8);

const mean1 = (...numbers) => {
  let count = 0;
  for (let i of numbers) {
    count += i;
  }
  console.log(count / numbers.length);
};
mean1(1, 1, 1, 1, 1);

//№4
function sumAsText() {
  let str = "";
  let count = 0;
  for (let i of arguments) {
    str += i + "+";
    count += i;
  }
  const exp = str.substring(0, str.length - 1) + "=";
  console.log(exp + count);
}
sumAsText(1, 4, 5, 8, 4, 5, 6, 4, 3);

const sumAsText1 = (...numbers) => {
  const summ = numbers.reduce((a, b) => a + b);
  const exp = numbers.join("+");
  console.log(exp + "=" + summ);
};
sumAsText1(1, 1, 1, 1, 1);
