console.log('hello')

let balance = 2000.00
let withdrawl = 0.00
let deposit = 0.00

function btn(){
  let input1 = prompt('enter Q to quit program. \r\nenter W to withdraw. \r\nenter D to deposit. \r\nenter B to view balance.')

    switch(input1){
    case 'q':
    case 'Q':
      break;

    case 'w':
    case 'W':
      withdrawl = prompt('enter amount to withdraw');
      if (withdrawl > balance) {
        alert('withdrawl amount exceeds available balance')
        withdrawl = prompt('enter amount to withdraw')
      }
      else if (balance - withdrawl <= 300.00) {
        if (confirm('low balance notice: withdrawl will result in balance less than $300.00. proceed with withdrawl?') == false) {
          withdrawl = prompt('enter amount to withdraw')
        }
      }
      alert('withdrawing $' +withdrawl);
      balance = Number(balance) - Number(withdrawl);
      return btn();

    case 'd':
    case 'D':
        deposit = prompt('enter amount to deposit');
          if(deposit > 50000.00) {
        alert('single deposit cannot exceed $50,000.00')
        deposit = prompt('enter amount to deposit');
      }
        alert('depositing $' +deposit);
        balance = Number(balance) + Number(deposit)
        return btn();
    case 'b':
    case 'B':
      alert(Number(balance))
      return btn();
  }
  }
