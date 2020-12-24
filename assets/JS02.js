
const btn = document.getElementById('btn');



btn.addEventListener('click', function() {


  const InputFizzNum = document.getElementById("InputFizzNum").value;
  const InputBuzzNum = document.getElementById("InputBuzzNum").value;

  const FizzNum = Number(InputFizzNum);
  const BuzzNum = Number(InputBuzzNum);


  const output = document.getElementById("output");
  output.innerHTML = "";

  if (Number.isInteger(FizzNum) && 
      Number.isInteger(BuzzNum) &&
        (InputFizzNum !== "" && InputBuzzNum !== "")) {

    const FizzBuzz = FizzNum * BuzzNum;

    for (let number = 1; number <= 99; number++) {

      if (number % FizzBuzz === 0) {
        const content = 'FizzBuzz'  + number;
        const p = document.createElement('p');  
        p.innerHTML = content;
        output.appendChild(p);
      } else if (number % FizzNum === 0) {
        const content = `Fizz ${number}`;
        const p = document.createElement('p');  
        p.innerHTML = content;
        output.appendChild(p);
      } else if (number % BuzzNum === 0) {
        const content = `Buzz ${number}`;
        const p = document.createElement('p');  
        p.innerHTML = content;
        output.appendChild(p);
      }
    }
    
  } else {
    const content = '整数値を入力してください';
    const p = document.createElement('p');  
    p.innerHTML = content;
    output.appendChild(p);
  }
  
})



