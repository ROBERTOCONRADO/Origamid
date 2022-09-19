debugger;
let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log('teste');
    console.log('test1');
    console.log('test2');
  }
  funcao2();
}
funcao1();
