function leapYear (Year){
    if(Year % 4 === 0){
        return true;
    }
    return false;
}
const lepi = leapYear (2052)
console.log(lepi);

function leapyera2 (year){
    if(year % 100 !== 0 &&  year % 4 === 0){
        return true;
    }
    else if( year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const lepi1 = leapyera2(2400);
const lepi2 = leapyera2(2100);
const lepi3 = leapyera2(1900);
const lepi4 = leapyera2(2052);
console.log(lepi1, lepi2, lepi3, lepi4);
