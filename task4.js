// Basic Functions

// Create a function named hello that prints "Hello Everyone".

    function hello(){
        console.log("Hello Everyone")
    }
    hello()

// Create a function named welcome that prints "Welcome to JavaScript" and call it.

    function Welcome(){
        console.log("Welcome to JavaScript")
    }
    Welcome()

// Create a function named navi that prints your name.

    function navi(){
        console.log("Rajasekhar")
    }
    navi()

// Create a function named message that prints three different messages.

    function message(){
        console.log("raja")
        console.log(20)
        console.log("hyd")
    }
    message()

// Create a function named numbers that prints numbers from 1 to 5 using a for loop.

    function numbers(){
        for (i=0;i<=5;i++){
            console.log(i)
        }
    }
    numbers()

// Create a function named check that contains an if condition and prints a message when the condition is true.

        function check(){
            var age=20
            if(age>=18){
                console.log("you are eligible")
            }
        }
        check()

// Create a function named details that prints your name, qualification, and role.
       function details() {
    console.log("Name: Vardu Rajasekhar");
    console.log("Qualification: MCA");
    console.log("Role: MERN Full Stack Developer");
}

details();

// Create a function named company that prints your company name.
    function company(){
        console.log("stackly")
    }

// Create a function named welcomeUser and call it three times.

    function welcomeUser(){
        console.log("welcome user")
    }
    welcomeUser()
    welcomeUser()
    welcomeUser()

// Create two different functions and call both functions.

    function comapanyName(){
        console.log("stackly")
    }
    comapanyName()

    function MYLocation(){
        console.log("hyd")
    }
    MYLocation()

// Parameters & Arguments

// Create a function with one parameter and print the parameter value.

        function f1(a){
            console.log(a)
        }
        f1(20)

// Create a function with two parameters and print both values.

        function f2(a,b){
            console.log(a,b)
        }
        f2(10,20)

// Create a function add(a,b) that prints the addition of two numbers.

        function add(a,b){
            console.log(a+b)
        }
        add(10,20)

// Create a function sub(a,b) that prints the subtraction of two numbers.

        function sub(a,b){
            console.log(a-b)
        }
        sub(10,20)

// Create a function multiply(a,b) that prints the multiplication of two numbers.

        function multiply(a,b){
            console.log(a*b)
        }
        multiply()

// Create a function divide(a,b) that prints the division of two numbers.

        function devide(a,b){
            console.log(a/b)
        }
        devide(10,20)

// Create a function student(name, age) and print the student's details.

       function  student(name,age){
            console.log(name,age)
            
        }
        student("raja",20)

// Create a function employee(name, role, salary) and print all three values.

        function employee(name,role,salary){
                console.log(name,role,salary)
        }
        employee("raja","mern",50000)

// Create a function with four parameters and pass four arguments while calling it.

        function f4(a,b,c,d){
            console.log(a,b,c,d)
        }
        f4(10,20,"raja","mca")

// Create a function with six parameters and pass six different values.

        function f5(a,b,c,d,e,f){
            console.log(a,b,c,d,e,f)
        }
        f5(10,true,"raja","mca","hyd",null)

// Default Parameters

// Create a function student(name, department, cgpa) with a default value for department.

            function student(name,departement="cse",cgpa){
                console.log(name,departement,cgpa)
            }
            student("raja",undefined,8.5)

// Create a function user(name, age = 18) and call it without passing the age.

            function user(name,age=18){
                console.log(name,age)
            }
            user("raja")

// Create a function employee(name, role = "Developer") and call it with only the name.

                function employe(name, role = "Developer"){
                    console.log(name,role)
                }
                employe("raja")

// Create a function form(name, department, cgpa, disability = "no") similar to the function in your notes. Call it twice with different arguments.

                function form(name,department,cgpa,disability="no"){
                    console.log(name,department,cgpa,disability)
                }
                form("raja","cse",8.5)
                form("sekhar","ece",9)

// Create a function with two normal parameters and one default parameter.

                function f6(a,b,c="no"){
                    console.log(a,b,c)
                }
                f6(10,20)

// Return

// Create a function that accepts two numbers and returns their addition.

                function f7(a,b){
                    return a+b
                }
                var val=f7(10,20)
                console.log(val)

// Create a function that accepts two numbers and returns their subtraction.

                 function f7(a,b){
                    return a-b
                }
                var val=f7(10,20)
                console.log(val)

// Create a function that accepts two numbers and returns their multiplication.

                 function f7(a,b){
                    return a*b
                }
                var val=f7(10,20)
                console.log(val)

// Create a function that accepts two numbers and returns their division.

                 function f7(a,b){
                    return a/b
                }
                var val=f7(10,20)
                console.log(val)

// Create a function salary() that returns 40000. Store the returned value in a variable and print it.

                function salary(){
                    return 40000
                }
                var Val=salary()
                console.log(Val)


// Create a function that accepts an employee's salary and returns the salary.

                function f8(employesalary){
                    return employesalary
                }
                var result=f8(50000)
                console.log(result)

// Create a function that returns a person's name. Store the returned value in a variable and print it.

                function f9(personname){
                    return personname;
                }
                var pname=f9("raja")
                console.log(pname)

// Create a function that returns "Pass" if marks are 35 or above and "Fail" otherwise.

                function f10(marks){
                    
                    if(marks>=35){
                        return "pass"
                    }
                    return "fail"
                }
                var Marks=f10(35)
                console.log(Marks)


// Create a function that accepts price and discount and returns the discount value.

                function f11(price,discount){
                    return (price *discount)/100;
                }
                var func=f11(2000,20) 
                console.log(func)

// Create a function that returns the result of an arithmetic operation and use that returned value in another function.

                function f12(a,b){
                    return (a+b)
                }
               var res= f12(10,20)

               function f13(){
                return  (res+20)
               }
               var reS=f13()
               console.log(reS)

// Outer Scope

// Create a variable outside a function and access it inside the function.

               var Name="raja";
               function f14(){
                console.log(Name)
               }
               f14()

// Create an object outside a function containing name and designation. Create a function that prints those values.

               var obj={
                name:"raja",
                designation:"mern"

               }
               function f15(){
                console.log(obj.name,obj.designation)
               }
               f15()

// Create a variable salary outside a function. Create a function that adds a bonus to that salary and prints the result.

               var Salary=50000

               function f16(bonus){
                console.log(Salary+bonus)
               }
               f16(2000)

// Create an object containing employee details outside a function. Access its properties inside a function.
var Obj={
    empid:123,
    empname:"raja"
}

function f17(){
    console.log(Obj.empid,Obj.empname)
}
f17()

// Create two functions that access the same variable created outside both functions.
 
    var AGe=20;
    function f18(){
        console.log(AGe)
    }

    function f19(){
        console.log(AGe)
    }
    f18()
    f19()

// Named, Anonymous & Arrow Functions

// Create a named function that accepts a parameter and prints it.

    function f20(a){
        console.log(a)
    }
    f20(20)

// Create an anonymous function stored inside a variable and call it.

    var anonymous=(function (){
        console.log("raja")
    })
    anonymous()

// Create an arrow function that accepts one parameter and prints it.

    var arrow=(a)=>{
        console.log(a)
        }
        arrow("arrow")

// Create an arrow function with two parameters that adds two numbers.

var Arrow=(a,b)=>{
console.log(a+b)
}
Arrow(10,20)

// Create a named function, anonymous function, and arrow function that all perform the same addition operation.

    function f21(a,b){
        console.log(a+b)
    }
    f21(10,20)

    var Anonymous=(function(a,b){
        console.log(a+b)
    })
    console.log(Anonymous(10,20));

    var arroW=(a,b)=>{
        console.log(a+b)
    }
    console.log(arroW(10,20));
    
// IIFE

// Create an IIFE that immediately prints "Hello JavaScript" when the program runs.
       (function() {
    console.log("helo javascript");
})();

// Create an IIFE that accepts a name parameter and prints "Hello" followed by the name.

    (function (name){
        console.log(name)
    })("hello");

// Create an IIFE that accepts product and discount parameters and displays a special-offer message, similar to the example in your notes.

    (function (product,discount){
        console.log(product + " has a special offer of " + discount + "% discount!")

    })("tv",20);

// Callback & Higher-Order Functions


// Create an add function that accepts a callback and two numbers. Add the numbers and then call the callback function with two numbers.

        function adds(callback,b,c){
            console.log(b+c)
            callback(b,c);
        }
        
        function f25(b,c){
            console.log(b-c)
        }
        adds(f25,10,20)

// Create a sub function and pass it as a callback to the add function. The add function should first print the addition result
//  and then execute the subtraction callback,
//  following the structure from your notes.
            
           function ADd(call,a,b){
            var resu=a+b
            console.log(resu)
            call(a,b)
           }
           function sub(a,b){
            console.log(a-b)
           }

           ADd(sub,10,20)
            
