const f = false
const t = true

function TorF(isItTrue){
    if (isItTrue){
        return "Yes, it is true";
    }
    return "No, it is false";
}

console.log(TorF(f));

//________________________________________________
// == sign is the Equity operator
// "=" single equal sign is the assignment operator
function EqTest(val){
    if (val == 12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(EqTest(12));

/*
 === is strict Equality Operator 
3===3 this is true
3==='3' this is false
does not do the typr operator
*/
console.log(3==='3');
console.log(3=='3');


// != this is inqeuality operator
// and !== is strict not equality

function GreatherThan(val){
    if (val>100){
        return "over 100";
    }

    if (val > 10){
        return "Over 10";
    }

    return "10 or less than under";
}
console.log(GreatherThan(10));

//________________________________________________

function testLogicalAnd(val){
    if(val<=50){
        if(val>=25){
            return "Yes";
        }
    }
    return "No";
}   

console.log(testLogicalAnd(10));

//easier way________________________________________

function testLogicalAnd2(val){
    if (val <=50 && val>=20){
        return "yes"
    }
    return "No"
}
console.log(testLogicalAnd2(10));

// else if statement________________________________

function testElseIf(val){
    if (val> 10){
        return "Greater than 10";
    }   else if (val < 5){
        return "Smaller than 5";
    }   else {
        return "Between 5 and 10";
    }

}
console.log(testElseIf(3))
console.log("_______________________________________\n")
//__________________________________________________

function testSize(num){
    if (num<5){
        return "tiny"
    }   else if (num<10){
        return "small"
    }   else if (num<15){
        return "Medium"
    }   else if (num<20){
        return "Large"
    }   else{
        return "HUGE"
    }
}
console.log(testSize(24));

//_____Switch_Statement______________________________

function caseInSwitch(val){
var answer = "";
switch(val){
    case 1:
        answer = "alpha";
        break;
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
    case 4:
        answer = "delta";
        break;    
        
    }
    return answer;
}

console.log(caseInSwitch(4));

//_________________________________________________


function switchOfStuff(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "Apple";
            break;
        case "b":
            answer = "Bird";
            break;
        case "c":
            answer = "Cat";
            break;
        case "d":
            answer = "Doll";
            break;
        default:
            answer = "stuff";
            break;
            
    }
        return answer;
}
    
console.log(switchOfStuff("r"))

//_______________________________________________
// Multiple Identical Options in switch statements

function suquentialSize(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer ="Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
        default:
            answer = "Very High"
            break;
    }
    return answer;
}


console.log(suquentialSize(20))

















