
const btn = document.getElementById('btn');



btn.addEventListener('click', function() {

  let InputFizzNum = document.getElementById("InputFizzNum").value;
  let InputBuzzNum = document.getElementById("InputBuzzNum").value;
  
  if(InputFizzNum == "" || InputBuzzNum == ""){
    let content;
    content = '整数値を入力してください'
    let p = document.createElement('p');  
    p.innerHTML = content;
    document.body.appendChild(p);
  }
  //console.log(Number.islnteger("2"));

  const FizzNum = Number(InputFizzNum);
  const BuzzNum = Number(InputBuzzNum);

  const js = document.getElementById('js');
  js.innerHTML.remove;

  if(Number.isInteger(FizzNum) && Number.isInteger(BuzzNum)){

    let FizzBuzz = FizzNum * BuzzNum;

    for(let number = 1; number <= 99; number++){
      let content;
      if(number % FizzBuzz == 0){
        content = 'FizzBuzz'  + number;
        let p = document.createElement('p');  
        p.innerHTML = content;
        document.body.appendChild(p);
      }else if(number % FizzNum == 0){
        // content = 'Fizz' + number;
        content = `Fizz ${number}`;
        let p = document.createElement('p');  
        p.innerHTML = content;
        document.body.appendChild(p);
      }else if(number % BuzzNum == 0){
        // content = 'Buzz' + number;
        content = `Buzz ${number}`;
        let p = document.createElement('p');  
        p.innerHTML = content;
        document.body.appendChild(p);
      }
    }
  }else{
    let content;
    content = '整数値を入力してください'
    let p = document.createElement('p');  
    p.innerHTML = content;
    document.body.appendChild(p);
  }
})



