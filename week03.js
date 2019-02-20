//step1:string
let myString = "Hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let newmyString=myString.replace(/,/g," ");
console.log(newmyString);
console.log("*********");
//step2:arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("trutle");
console.log("the new array are:",favoriteAnimals);
 favoriteAnimals.splice(1,0,"meeekat");
console.log("the new array:",favoriteAnimals);
console.log("The array has a length of:",favoriteAnimals.length);
favoriteAnimals.pop();
console.log(favoriteAnimals);
let n=0;
for (n=0;n<favoriteAnimals.length;n++){
    if (n==="meerkat"){
        favoriteAnimals.splice();
    }
    console.log(favoriteAnimals[n]);
}
console.log("*********");
//step 3 more javascript
//3.1
function funSum(x,y,z){
    console.log(x+y+z);
}
funSum(5,7,10);
console.log("*********");
//3.2
function colorCar(color){
    return 'a '+color+' car';  
}
console.log(colorCar('blu'));
console.log("*********");
//3.3
function objectprop(object){
    for(let prop of Object.keys(object))
    {
        console.log(prop,':',object[prop]);
    }    
}
let person={
    name:"rose",
    age:35,origen:"iraq",
    profession:"developer",
}
objectprop(person);
console.log("*********");

//3.4
function vehicalfun(color,code){
        if (code===1){
            return colorCar(color);
        }
        else if (code===2 ){  
            return "a"+color+"motorbike";
        }
    }
    console.log("we offer repairs for ",vehicalfun(" red ",2));
    console.log(vehicalfun("blue"),1);
    console.log(vehicalfun("green"),2);
    console.log(vehicalfun("blue"),3);
    console.log("*********");

//3.5
    function singelline(number1,number2){
        return number1===number2?"fals":"true";
    }
    console.log(singelline(2,4));
    console.log(singelline(4,4));
    console.log("*********");
    
   //3.6
    function vehical(color,code,age){
        if (vehical("blue", 1, 5)){
         return 'a ' + color + ' new ' + vehicle;
    }
    } 
    console.log("*********");
//3.7
let Vehichals=["motorbike", "caravan", "bike"]; 
console.log(Vehichals);
console.log("*********");
//3.8
console.log("the third element:",Vehichals[2]);
console.log("*********");
//3.9
    function vehical (color, code, age) {
        switch (age) {
            case 1:
            case 2:
              console.log('a ' + color + ' new ' + Vehichals[code]);
              break;
              case 3:
              case 4:
              case 5:
              case 6:
              console.log('a ' + color + ' used ' + Vehichals[code]);
              break;
              default:
              console.log('a ' + color + ' old ' + Vehichals[code]);
              break;
          } 
    }
    vehical("red", 5, 2);
    vehical("blue", 10, 3);
    vehical("yellow", 1, 0);
    console.log("*********");

//3.10
    let arrVehichals=["car","motorbike", "caravan", "bike"];
    let allVeh="";
        for(let count=0;count<arrVehichals.length;count++){
        if (count===arrVehichals.length-1){
        console.log("Amazing Joe's Garage, we service ",arrVehichals[count],"and",Vehichals[2]);
        }
        }
        console.log("*********");

 //3.11
let newarrVehichals=arrVehichals.push();
console.log(newarrVehichals);
console.log("*********");
//3.12 Objeckts
let myObj={};
console.log("*********");

//3.13&14
    let myTech={
        Peter:"HTML/CSS",
        Stephen:"JavaScript",
        Albert:"GIT",   
    }
    console.log("*********");
//3.15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
             if (x==y){
               console.log("right");
                }
                else{
                    console.log("not right");
                }
                if(x===y){
                    console.log("right");
                }
                else{
                    console.log("Not right");   
                }
                if (z==y){
                    console.log("right");
                }
                else
                {
                    console.log("Not right");
                }
                if(z===y){
                    console.log("right");
                }
                else{
                    console.log("Not right");
                }
                console.log("*********");

 //3.16
    let o1 = { foo: "bar" };
    let o2 = { foo: "barr" };
    let o3 = o2;
    console.log(o3,"proved");
    console.log("*********");

    