// function getNearestMonday() {
//     const currentDate = new Date();
//     var day = currentDate.getDay()
//     var diff = currentDate.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
//     const nearestMonday  = new Date(currentDate.setDate(diff));
//     var dd = nearestMonday.getDate();
//     var mm = nearestMonday.getMonth() + 1;
//     var yyyy = nearestMonday.getFullYear();
//     return toddMMYYYY(dd,mm,yyyy);
// }
/**
 * days of the week as per `new Date().getDay()`
 * 
 * sun,m,tue,w,thr,f,sat
 *  0   1  2  3  4  5  6
 */

function getNearestSunday() {
    const currentDate = new Date();
    let day = currentDate.getDay();
    let diff = currentDate.getDate() - day;
    const nearestSunday = new Date(currentDate.setDate(diff));
    let dd = nearestSunday.getDate();
    let mm = nearestSunday.getMonth() + 1;
    let yyyy = nearestSunday.getFullYear();
    return toddMMYYYY(dd,mm,yyyy);
}

function toddMMYYYY(dd,mm,yyyy){
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 
    return dd+'/'+mm+'/'+yyyy;
}


function getNextSunday(d) {
    const currentDate = new Date();
    let day = currentDate.getDay()
    // var diff = currentDate.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    let date = currentDate.getDate();
    let diff = day > 0 ? date + (6-day+1) : date + 7;
    const nextSunday  = new Date(currentDate.setDate(diff));
    let dd = nextSunday.getDate();
    let mm = nextSunday.getMonth() + 1;
    let yyyy = nextSunday.getFullYear();
    return toddMMYYYY(dd,mm,yyyy);
}

function deterministicShuffle(arr,rng){
    for(let i = 0 ; i < arr.length ; i++){
        const j = rng.nextInt(0,i+1)
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
} 

module.exports = {
    getNearestSunday,
    getNextSunday,
    deterministicShuffle
}