'use strict';
function abs(x) {
    if (x > 0) {
    return x;
    } else {
        return -x;
    }
}


//testing
if (abs(2) == 2) {
    console.log("Pass");
} else {
    console.log("Fail");
}

if (abs(-3) == 3) {
    console.log("Pass");
} else {
    console.log("Fail");
}

if (abs(3.5) == 3.5) {
    console.log("Pass");
} else {
    console.log("Fail");
}

'use strict';
function area_of_circle(ri, pi) {
    if (pi === null || pi ===undefined) {
        pi = 3.14;
    }
    return ri * ri * pi;
}


//testing
if (area_of_circle(2) === 12.56) {
    console.log("Pass");
} else {
    console.log("Fail");
}

if (area_of_circle(2, 3.1416) === 12.5664) {
    console.log("Pass");
} else {
    console.log("Fail");
}

'use strict'
var add = function (a,b) {
    return a + b;

};


// unit test
if(add(3,4)===7){
    console.log("add function test pass");
}else{
    console.error("add function test fail");
}

var sum = add.apply(null,[3,4]);
console.log(sum);


// The Method Invocation Pattern
var myObject ={
    value: 0,
    increment: function(inc){
        //方法可以使用this访问自己所属对象的属性
        this.value+= (typeof inc ==='number' ? inc:1);
    }
}

// unit test
myObject.increment();
console.log(myObject.value);//1
myObject.increment(2);
console.log(myObject.value);//3

//The Function Invocation Pattern
myObject.double = function(){
    var that = this;//解决this 此时被绑定到全局范围的问题

    var helper = function(){
        that.value = that.value+ that.value;        
    };

    helper(); //以函数方式调用
}

//以函数方式调用
myObject.double();
console.log(myObject.value); //6

//The Apply Invocation Pattern
var anotherObject={
    value:99,
};

myObject.increment.apply(anotherObject,anotherObject);
console.log(anotherObject.value);

//参数arguments
var sum= function(){
    var i=0;
    var sum =0;

    for(i=0;i<arguments.length;i+=1){
        sum+=arguments[i];
    }
    return sum;
};

console.log(sum(1,2,3,4,5,6,7,8,9));


//Exception Handling
var add= function(a,b){
    if(typeof a !=='number'|| typeof b !=='number'){
        throw{
            name:'TypeError',
            message:'add need number'
        };
    }
    return a+b;
}

var try_it =function(){
    try{
        add("seven");
    }catch(e){
        console.log(e.name+': '+e.message);
    }

}

try_it();


//Closures
function getFun(){
    var a=7;
    return function(b){
        console.log(a+b);
    }
}

var f=getFun();
f(5); //12




//recurrence 递归

var hanio = function(disk, src,aux,dst){
    if(disk>0){
        hanio(disk-1,src,dst,aux);
        console.log('Move disc '+ disk+'from '+src+'to '+dst);
        hanio(disk-1, aux,src,dst);
    }
}

hanio(3,'源','辅助','目的地');


math.random()



//原型继承

var myMammal= {
    name : 'Herb the Mammal',
    get_name : function(){
        return this.name;
    },
    says: function(){
        return this.saying ||'';
    }

};


var myCat = Object.create(myMammal);

myCat.name = 'Henrietta';
myCat.saying='meow';
myCat.purr= function(n){
    var i,s='';
    for(i=0;i<n;i+=1){
        if(s){
            s+='-';
        }
        s+='r';
    }
    return s;

};

myCat.get_name= function(){
    return this.says+' '+ this.name+' '+this.says;
};

console.log(myCat.purr(5));

