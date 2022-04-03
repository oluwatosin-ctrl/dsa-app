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


function getNextSaturday(d) {
    const currentDate = new Date();
    let day = currentDate.getDay()
    let date = currentDate.getDate();
    let diff = date + (day != 1 ? 6-day : 7);
    const nextSaturday  = new Date(currentDate.setDate(diff));
    let dd = nextSaturday.getDate();
    let mm = nextSaturday.getMonth() + 1;
    let yyyy = nextSaturday.getFullYear();
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
    getNextSaturday,
    deterministicShuffle
}