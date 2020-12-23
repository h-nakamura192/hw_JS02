
const btn = document.getElementById('btn');



btn.addEventListener('click', function() {


  const InputFizzNum = document.getElementById("InputFizzNum").value;
  const InputBuzzNum = document.getElementById("InputBuzzNum").value;

  const FizzNum = Number(InputFizzNum);
  const BuzzNum = Number(InputBuzzNum);


  const output = document.getElementById("output");
  output.innerHTML = "";

  if(Number.isInteger(FizzNum) && 
      Number.isInteger(BuzzNum) &&
        (InputFizzNum !== "" && InputBuzzNum !== "")){

    const FizzBuzz = FizzNum * BuzzNum;

    for(let number = 1; number <= 99; number++){
      let content;
      if(number % FizzBuzz == 0){
        content = 'FizzBuzz'  + number;
        let p = document.createElement('p');  
        p.innerHTML = content;
        output.appendChild(p);
      }else if(number % FizzNum == 0){
        content = `Fizz ${number}`;
        let p = document.createElement('p');  
        p.innerHTML = content;
        output.appendChild(p);
      }else if(number % BuzzNum == 0){
        content = `Buzz ${number}`;
        let p = document.createElement('p');  
        p.innerHTML = content;
        output.appendChild(p);
      }
    }
    
  }else{
    content = '整数値を入力してください';
    let p = document.createElement('p');  
    p.innerHTML = content;
    output.appendChild(p);
  }
  
})



