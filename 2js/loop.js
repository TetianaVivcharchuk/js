//1 exersice
let firstNumber=prompt('Введіть перше число');
let secondNumber=prompt('Введіть друге число');
 
 for (var i = firstNumber; i <= secondNumber; i++) {
 	
 		let result = Number(firstNumber)+Number(secondNumber);
 		console.log("Сума чисел = "+result);
 	
 }

 //2 exersice

let j=10;


while( j>0){
console.log(`Result ${j}`);
j--;
}

 //3 exersice
var str = " ";
var star = "*";
  for (let a = 0; a < 5; a++) {
  str += star;
  console.log(str);

  }
   //4 exersice
let lengthNumber=prompt('Введіть довжину прямокутника');
let widthNumber=prompt('Введіть ширину трикутника');
let symbol ="*"
 for (let s = 0; s < lengthNumber; s++) {
 	symbol++;
 	 console.log(symbol);
 	 for (let b = 0; i < widthNumber; b++) {
 	 	symbol++;
 	 }
 }


  //5 exersice
  let day=prompt('Введіть день тижня');
  switch(day){
  case'Вівторок':
  case'вівторок':
  	 case'Четвер':
  case'четвер':
  	  console.log("У вас сьогодні заняття");
  	  break;
  	default:
  		console.log("У вас сьогодні вільний день");
  }

    //6 exersice
  let planet=prompt('Введіть планету');
  switch(planet){
  case'Меркурій':
  case'меркурій':
  	 case'Венера':
  case'венера':
  	 case'Земля':
  case'земля':
  	 case'Марс':
  case'марс':
  	 case'Юпітер':
  case'юпітер':
  	 case'Сатурн':
  case'сатурн':
  	 case'Уран':
  case'уран':
  	 case'Нептун':
  case'нептун':
  	  console.log("Дана планета знаходиться у сонячній системі");
  	  break;
  	default:
  		console.log("Цієї планети немаю у сонячній системі ");}

    //7 exersice
  let smileArray= [':)', '=)',':)', '=)',':)', '=)'];
  console.log(smileArray);
  smileArray.sort();
 console.log(smileArray.sort());
