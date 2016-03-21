//What would be the value alerted by this funciton?
function FunctionScope() {
  if (true) {
    var a = 5;
  }
  alert(a);
}

//函数内的变量的作用域javascript里是"FunctionScope" opposed to "Block Scope".
FunctionScope();