function subview() {
    var newtimechat = new Date(localStorage.getItem('lastsubnow'))
    var chatyear = newtimechat.getFullYear()
    // console.log(chatyear)
    lastsuby= Number(newtimechat.getFullYear());
    lastsubmon= Number(newtimechat.getMonth())+1;
    lastsubd= Number(newtimechat.getDate());
    document.querySelector('.sub-day').innerText = lastsubd;
    document.querySelector('.sub-month').innerText = lastsubmon;
    document.querySelector('.sub-year'). innerText = lastsuby;
}
// subview();
if('BroadcastChannel' in window) {
    const channel = new BroadcastChannel('unique_channel_name');
    channel.addEventListener('message', event => {
        window.close();
    })
    channel.postMessage('element_opened');
} else {
    console.log('Boardcast Channel API is not supported in this browser.');
}
document.addEventListener('keydown', function(event) {
    // Check if F12 key is pressed
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        console.log("Developer tools shortcut prevented.");
    }
    if (event.ctrlKey && event.shiftKey && event.key === 'J') {
        event.preventDefault();
        console.log("JavaScript Console shortcut prevented.");
    }
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
    }
});
// nowtime
var nowtime = new Date();
var monthy = nowtime.getMonth()+1;
var day = nowtime.getDate();
var year = nowtime.getFullYear();
var Hours = nowtime.getHours();
var Minutes = nowtime.getMinutes();
var Seconds = nowtime.getSeconds();
document.querySelector('.nowdate').innerText = day < 10 ? '0' + day : day;
document.querySelector('.nowmonth').innerText = monthy < 10 ? '0' + monthy : monthy;
document.querySelector('.nowyear'). innerText = year;
document.querySelector('.nowHours'). innerText = Hours < 10 ? '0' + Hours : Hours;
document.querySelector('.nowMinutes'). innerText = Minutes < 10 ? '0' + Minutes : Minutes;
document.querySelector('.nowSeconds'). innerText = Seconds < 10 ? '0' + Seconds : Seconds;
setInterval(() => {
    var nowtime = new Date();
    var monthy = nowtime.getMonth()+1;
    var day = nowtime.getDate();
    var year = nowtime.getFullYear();
    var Hours = nowtime.getHours();
    var Minutes = nowtime.getMinutes();
    var Seconds = nowtime.getSeconds();
    document.querySelector('.nowdate').innerText = day < 10 ? '0' + day : day;
    document.querySelector('.nowmonth').innerText = monthy < 10 ? '0' + monthy : monthy;
    document.querySelector('.nowyear'). innerText = year;
    document.querySelector('.nowHours'). innerText = Hours < 10 ? '0' + Hours : Hours;
    document.querySelector('.nowMinutes'). innerText = Minutes < 10 ? '0' + Minutes : Minutes;
    document.querySelector('.nowSeconds'). innerText = Seconds < 10 ? '0' + Seconds : Seconds;
}, 1000);

// document.addEventListener("mousedown", () => {
//     document.documentElement.requestFullscreen().catch();
// });
// add button
var allowmouse=0;
const codes = document.querySelectorAll('.code');
codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            codes[idx].value='';
            setTimeout(() => codes[idx + 1].focus(), 10);
        }else if(e.key === 'Backspace' && idx>0) {
            setTimeout(() => codes[idx -1].focus(), 10);
            console.log("idx",idx);
        }
    })
});
function focusongameid() {
    if(codes[0].value==''||codes[1].value==''||codes[2].value==''||codes[3].value==''||codes[4].value==''||codes[5].value==''||codes[6].value==''||codes[7].value==''||codes[8].value==''||codes[9].value==''||codes[10].value==''||codes[11].value==''){
        if(codes[0].value==''){
            codes[0].focus();
        }else if(codes[1].value=='') {
            codes[1].focus();
        }else if(codes[2].value=='') {
            codes[2].focus();
        }else if(codes[3].value=='') {
            codes[3].focus();
        }else if(codes[4].value=='') {
            codes[4].focus();
        }else if(codes[5].value=='') {
            codes[5].focus();
        }else if(codes[6].value=='') {
            codes[6].focus();
        }else if(codes[7].value=='') {
            codes[7].focus();
        }else if(codes[8].value=='') {
            codes[8].focus();
        }else if(codes[9].value=='') {
            codes[9].focus();
        }else if(codes[10].value=='') {
            codes[10].focus();
        }else if(codes[11].value=='') {
            codes[11].focus();
        }
    }
};
function focusonverifyid() {
    console.log("focusonverifyid is selected");
    if(codes1[0].value==''||codes1[1].value==''||codes1[2].value==''||codes1[3].value==''||codes1[4].value==''||codes1[5].value==''||codes1[6].value==''||codes1[7].value==''||codes1[8].value==''||codes1[9].value==''||codes1[10].value==''||codes1[11].value==''||codes1[12].value==''||codes1[13].value==''||codes1[14].value==''||codes1[15].value==''||codes1[16].value==''||codes1[17].value==''||codes1[18].value==''||codes1[19].value==''){
        if(codes1[0].value==''){
            codes1[0].focus();
        }else if(codes1[1].value=='') {
            codes1[1].focus();
        }else if(codes1[2].value=='') {
            codes1[2].focus();
        }else if(codes1[3].value=='') {
            codes1[3].focus();
        }else if(codes1[4].value=='') {
            codes1[4].focus();
        }else if(codes1[5].value=='') {
            codes1[5].focus();
        }else if(codes1[6].value=='') {
            codes1[6].focus();
        }else if(codes1[7].value=='') {
            codes1[7].focus();
        }else if(codes1[8].value=='') {
            codes1[8].focus();
        }else if(codes1[9].value=='') {
            codes1[9].focus();
        }else if(codes1[10].value=='') {
            codes1[10].focus();
        }else if(codes1[11].value=='') {
            codes1[11].focus();
        }else if(codes1[12].value=='') {
            codes1[12].focus();
        }else if(codes1[13].value=='') {
            codes1[13].focus();
        }else if(codes1[14].value=='') {
            codes1[14].focus();
        }else if(codes1[15].value=='') {
            codes1[15].focus();
        }else if(codes1[16].value=='') {
            codes1[16].focus();
        }else if(codes1[17].value=='') {
            codes1[17].focus();
        }else if(codes1[18].value=='') {
            codes1[18].focus();
        }else if(codes1[19].value=='') {
            codes1[19].focus();
        }
        
    }
};
window.addEventListener("mouseup", function(e){
    if(allowmouse==1){
        focusongameid();
    }
    if(focusverifycode==1){
        focusonverifyid();
    }
});
var focusverifycode=0;
function addsubbutton() {
    allowmouse=1;
    document.querySelector('.gameid').classList.add("sub-active");
    document.querySelector('.keypad').classList.add("sub-active");
    document.querySelector('.insights').classList.add("otherusers");
    focusongameid();
};
var stopthing=0;
function subback() {
    document.querySelector('.gameid').classList.remove("sub-active");
    document.querySelector('.keypad').classList.remove("sub-active");
    document.querySelector('.insights').classList.remove("otherusers");
    setTimeout(() => {
        codes[0].value='';
        codes[1].value='';
        codes[2].value='';
        codes[3].value='';
        codes[4].value='';
        codes[5].value='';
        codes[6].value='';
        codes[7].value='';
        codes[8].value='';
        codes[9].value='';
        codes[10].value='';
        codes[11].value='';
        codes[0].focus();
    }, 500);
    stopthing=0;
    document.querySelector('.btn-primary').classList.remove("fail");
}
function rechargebtn() {
    if(stopthing==0){
        if(codes[11].value !=''){
            blocksub();
        }else {
        fail();
        }
    }
}
function fail() {
    if(stopthing==0){
        stopthing=1;
        failback = setInterval(() => {
            document.querySelector('.btn-primary').classList.add("fail");
            setTimeout(() => {
                document.querySelector('.btn-primary').classList.remove("fail");
            }, 100);
        }, 200);
        setTimeout(() => {
            clearInterval(failback);
            setTimeout(() => {
                codes[0].value='';
                codes[1].value='';
                codes[2].value='';
                codes[3].value='';
                codes[4].value='';
                codes[5].value='';
                codes[6].value='';
                codes[7].value='';
                codes[8].value='';
                codes[9].value='';
                codes[10].value='';
                codes[11].value='';
                codes[0].focus();
                
            }, 500);
            stopthing=0;
        }, 3000);
    }
}

var array = [];
var turn = [];
var cir=0;
var times=0;
var num;
function blocksub() { 
    num = `${codes[0].value}${codes[1].value}${codes[2].value}${codes[3].value}${codes[4].value}${codes[5].value}${codes[6].value}${codes[7].value}${codes[8].value}${codes[9].value}${codes[10].value}${codes[11].value}`
    console.log("num",num);
    times= localStorage.getItem('cir') || 0;
    console.log("times",times);
    if(times==0) {
        localStorage.setItem('store',JSON.stringify(turn));
        cir=1;
        localStorage.setItem('cir',cir);
        // console.log("cir",cir);
    } else {
        // console.log("times",times);
    }
    stored = JSON.parse(localStorage.getItem('store')) || [];
    // console.log("stored",stored);
    if(stored.includes(num)){
        console.log("this num already exist!!!");
        fail();
    }else {
        // console.log("checkloopsequency!!!");
        // checkloopsequency();
        gameidway();
    }
}



var ididentfy;
function gameidway(){
    // start here 
    ididentfy = `${codes[0].value}${codes[1].value}${codes[3].value}${codes[4].value}${codes[5].value}${codes[6].value}${codes[7].value}${codes[9].value}${codes[10].value}${codes[11].value}`;
    // console.log("ididentfy",ididentfy);
    identfytoarray = numberToDigits(ididentfy);
    // console.log("identfytoarray",identfytoarray);
    // idback 
    idback = codes[8].value;
    // idback = 2; // sample idback
    // console.log("idback",idback);
    // we are gone to to change converted id to normal form 
    for (let i=0; i < idback; i++) {
        function changeElement(arr, fromIndex, toIndex) {
            // Rechange the element from its current position
            let element = arr.splice(fromIndex, 1)[0];
            
            // Insert the element at the new position
            arr.splice(toIndex, 0, element);
            
            return arr;
        }
        // Example usage
        changeElement(identfytoarray, 9, 0); // change element at index 9 to index 0
        // console.log(newconvertedgameid);
    }
    // console.log(identfytoarray);
    // idfront 
    // idfront = codes[6].value;
    idfront = codes[2].value;
    // idfront = 5; // sample idfront
    // console.log("idfront",idfront);
    newnormalgameid = [];
    for (let i = 0; i < identfytoarray.length; i++) {
        convertdt = identfytoarray[i] - idfront;
        convertdt = convertdt < 0 ? convertdt + 10 : convertdt
        newnormalgameid.push(convertdt);
    }
    // console.log("newnormalgameid",newnormalgameid)
    newgameid = newnormalgameid.join('');
    // console.log(newgameid);
    // this part, finished
    // to check this info newgameid == gameid
    var gameidforsub = localStorage.getItem('gameidstore') || 0;
    console.log(localStorage.getItem('gameidstore'));
    if(gameidforsub == newgameid) {
        console.log("yes")
        // continue to the amount way
        savenewsub();
    }else {
        console.log("no");
        console.log("gameidforsub",gameidforsub);
        console.log("newgameid",newgameid);
        fail()
    }

}
// gameidway();

function numberToDigits(ididentfy) {
    // Convert the number to a string
    let numberString = ididentfy.toString();
    // Split the string into an array of characters
    let digitsArray = numberString.split("");
    // Convert each character back to a number
    digitsArray = digitsArray.map(Number);
    return digitsArray;
}
var nowamount;
function amountway() {
    // start here
    amountid = `${codes[0].value}${codes[3].value}${codes[7].value}${codes[10].value}${codes[14].value}${codes[11].value}${codes[12].value}${codes[13].value}${codes[16].value}${codes[20].value}${codes[22].value}${codes[24].value}${codes[26].value}${codes[29].value}`;
    // amountid = 74145535737554; // sample amount array
    amountidtoarray = numberToDigits(amountid);
    // console.log("amountidtoarray",amountidtoarray);
    // normal position
    // amountback 
    amountback = codes[27].value;
    // amountback = 9; // sample amountback
    // console.log("amountback",amountback);
    // we are gone to to change converted amount to normal form 
    for (let i=0; i < amountback; i++) {
        function changeElement(arr, fromIndex, toIndex) {
            // Rechange the element from its current position
            let element = arr.splice(fromIndex, 1)[0];
            
            // Insert the element at the new position
            arr.splice(toIndex, 0, element);
            
            return arr;
        }
        
        // Example usage
        changeElement(amountidtoarray, 13, 0); // change element at index 9 to index 0
        // console.log(newconvertedgameid);
    }
    console.log(amountidtoarray);
    // this part end 
    // amountfront 
    // amountfront = codes[15].value;
    amountfront = codes[15].value;
    // amountfront = 3; // sample amountfront
    // console.log("amountfront",amountfront);
    newnormalamountid = [];
    for (let i = 0; i < amountidtoarray.length; i++) {
        convertdt = amountidtoarray[i] - amountfront;
        convertdt = convertdt < 0 ? convertdt + 10 : convertdt
        newnormalamountid.push(convertdt);
    }
    // console.log("newnormalamountid",newnormalamountid)
    amountyear = `${newnormalamountid[0]}${newnormalamountid[1]}${newnormalamountid[2]}${newnormalamountid[3]}`
    // console.log(amountyear)
    amountmon = `${newnormalamountid[4]}${newnormalamountid[5]}`
    // console.log(amountmon)
    amountdt = `${newnormalamountid[6]}${newnormalamountid[7]}`
    // console.log(amountdt)
    amounthr = `${newnormalamountid[8]}${newnormalamountid[9]}`
    // console.log(amounthr)
    amountmin = `${newnormalamountid[10]}${newnormalamountid[11]}`
    // console.log(amountmin)
    amountsec = `${newnormalamountid[12]}${newnormalamountid[13]}`
    // console.log(amountsec)
    nowamount = new Date(amountyear, amountmon-1, amountdt, amounthr, amountmin, amountsec);
    // console.log(nowamount);
    transperiod();
}

localStorage.setItem('gameversion','03');
function startversion() {
    min=0;
    max=9999999999;
    console.log("newgame id")
    idvalue = Math.floor(Math.random()*(max-min+1)+min);
    console.log(idvalue);
    idinword = idvalue.toString().split('');
    console.log(idinword);
    idnumber = idinword.map(Number);
    console.log(idnumber);
    iddigits = idnumber.length;
    console.log(iddigits);
    
    if(iddigits == 10) {
        id0=idnumber[0];
        id1=idnumber[1];
        id2=idnumber[2];
        id3=idnumber[3];
        id4=idnumber[4];
        id5=idnumber[5];
        id6=idnumber[6];
        id7=idnumber[7];
        id8=idnumber[8];
        id9=idnumber[9];
    }else if(iddigits == 9) {
        id0=0;
        id1=idnumber[0];
        id2=idnumber[1];
        id3=idnumber[2];
        id4=idnumber[3];
        id5=idnumber[4];
        id6=idnumber[5];
        id7=idnumber[6];
        id8=idnumber[7];
        id9=idnumber[8];
    }else if(iddigits == 8) {
        id0=0;
        id1=0;
        id2=idnumber[0];
        id3=idnumber[1];
        id4=idnumber[2];
        id5=idnumber[3];
        id6=idnumber[4];
        id7=idnumber[5];
        id8=idnumber[6];
        id9=idnumber[7];
    }else if(iddigits == 7) {
        id0=0;
        id1=0;
        id2=0;
        id3=idnumber[0];
        id4=idnumber[1];
        id5=idnumber[2];
        id6=idnumber[3];
        id7=idnumber[4];
        id8=idnumber[5];
        id9=idnumber[6];
    }else if(iddigits == 6) {
        id0=0;
        id1=0;
        id2=0;
        id3=0;
        id4=idnumber[0];
        id5=idnumber[1];
        id6=idnumber[2];
        id7=idnumber[3];
        id8=idnumber[4];
        id9=idnumber[5];
    }else if(iddigits == 5) {
        id0=0;
        id1=0;
        id2=0;
        id3=0;
        id4=0;
        id5=idnumber[0];
        id6=idnumber[1];
        id7=idnumber[2];
        id8=idnumber[3];
        id9=idnumber[4];
    }else if(iddigits == 4) {
        id0=0;
        id1=0;
        id2=0;
        id3=0;
        id4=0;
        id5=0;
        id6=idnumber[0];
        id7=idnumber[1];
        id8=idnumber[2];
        id9=idnumber[3];
    }else if(iddigits == 3) {
        id0=0;
        id1=0;
        id2=0;
        id3=0;
        id4=0;
        id5=0;
        id6=0;
        id7=idnumber[0];
        id8=idnumber[1];
        id9=idnumber[2];
    }else if(iddigits == 2) {
        id0=0;
        id1=0;
        id2=0;
        id3=0;
        id4=0;
        id5=0;
        id6=0;
        id7=0;
        id8=idnumber[0];
        id9=idnumber[1];
    }else if(iddigits == 1) {
        id0=0;
        id1=0;
        id2=0;
        id3=0;
        id4=0;
        id5=0;
        id6=0;
        id7=0;
        id8=0;
        id9=idnumber[0];
    }
    generatednbr = `${id2}${id3}${id4}${id5}${id6}${id7}${id8}${id9}`;
    console.log("startID",generatednbr);
    document.querySelector('.final-user-id-format').innerText = `${localStorage.getItem('gameversion')}${id0}${id1}${id2}${id3}${id4}${id5}${id6}${id7}${id8}${id9}`;
    localStorage.setItem('fullprenbr',generatednbr);
    fullgeneratednbr = `${localStorage.getItem('gameversion')}${id0}${id1}${id2}${id3}${id4}${id5}${id6}${id7}${id8}${id9}`;
    localStorage.setItem('fullgeneratednbr',fullgeneratednbr);

}
var fullgeneratednbr;
// startversion();
function addCommas(number) {
    // Convert number to string
    let numStr = number.toString();

    // Regex to match groups of three digits
    let regex = /\B(?=(\d{3})+(?!\d))/g;

    // Insert commas at every third position from the end
    numStr = numStr.replace(regex, ',');

    return numStr;
}
var subnumber;
var subamount;
var subperiod;
function transperiod() {
    amountconverter = codes[4].value;
    amountnumber = codes[19].value;
    // console.log("amountconverter",amountconverter);
    // console.log("amountnumber",amountnumber);
    subnumber = amountnumber - amountconverter;
    // console.log("subnumber",subnumber);
    if(subnumber < 0) {
        subnumber = subnumber + 10;
    }
    //
    if(subnumber == 0) {
        subamount = addCommas(3000);
        subperiod = 1;
    }else if(subnumber==1) {
        subamount = addCommas(5000);
        subperiod = 3;
    }else if(subnumber==2 || subnumber==3) {
        subamount = addCommas(10000);
        subperiod = 7;
    }else if(subnumber==4 || subnumber==5) {
        subamount = addCommas(17000);
        subperiod = 14;
    }else if(subnumber==6 || subnumber==7) {
        subamount = addCommas(30000);
        subperiod = 30;
    }else if(subnumber==8 || subnumber==9) {
        subamount = addCommas(50000);
        subperiod = 60;
    }
    // console.log("subamount",subamount);
    // console.log("subperiod",subperiod);
    savenewsub()
}
// transperiod()
function savenewsub() {
    stored.push(num);
    localStorage.setItem('store',JSON.stringify(stored));
    localStorage.setItem('cashin', 0);
    localStorage.setItem('cashout', 0);
    localStorage.setItem('gameincome',0);
    localStorage.setItem('shoot1sprize',0);
    localStorage.setItem('shoot2sprize',0);
    localStorage.setItem('shoot3sprize',0);
    localStorage.setItem('shoot4sprize',0);
    localStorage.setItem('playerprize',0);
    location.href = 'sub.html';
    // storing fulltoken
}

var storedlastsub = localStorage.getItem('storelastsub') || 0;
if(storedlastsub==0) {
    storedlastsub = new Date(2024, 2, 3, 10, 22, 0);
}else {
    storedlastsub = new Date(storedlastsub);
}
console.log("storedlastsub",storedlastsub);
lastsubtime = new Date(storedlastsub.getFullYear(), storedlastsub.getMonth()-1, storedlastsub.getDate(), storedlastsub.getHours(), storedlastsub.getMinutes(), storedlastsub.getSeconds());

console.log("lastsubtime",lastsubtime);
subchecktime = lastsubtime.getTime();
console.log("subchecktime", nowDate(new Date(subchecktime)));
// convert number to digits
function numberToDigits(amountid) {
    // Convert the number to a string
    let numberString = amountid.toString();
    // Split the string into an array of characters
    let digitsArray = numberString.split("");
    // Convert each character back to a number
    digitsArray = digitsArray.map(Number);
    return digitsArray;
}
// convert number to digits end!

var subper=0;

// done light brink
function done() {
    if(stopthing==0){
        stopthing=1;
        doneback = setInterval(() => {
            document.querySelector('.btn-secondary').classList.add("done");
            setTimeout(() => {
                document.querySelector('.btn-secondary').classList.remove("done");
            }, 100);
        }, 200);
    }
}
// done light brink end?

// show subscription display
function getsubrecord() {
    substored = JSON.parse(localStorage.getItem('disstore')) || [];
    substored.forEach(substored => {
        var tr = document.createElement('tr');
        var trContent = `
                            <td class="sub-dt">${substored.nowwatch}</td>
                            <td class="sub-am">${substored.submoney}</td>
                            <td class="sub-per">${substored.subend}</td>
                            <td class="new-sub">${substored.newsubending}</td>
                            <td class="last-sub">${substored.newsubstart}</td>
                            `;
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
    });
};
// show subscription display end!

// remaining days
const days = document.querySelector('.remain-days');
const hours = document.querySelector('.remain-hours');
const minutes = document.querySelector('.remain-minutes');
const seconds = document.querySelector('.remain-seconds');
const subheader = document.querySelector('.newsub-header');
const subcolor1 = document.querySelector('.newsub-time1');
const subcolor2 = document.querySelector('.newsub-time2');
const subcolor3 = document.querySelector('.newsub-time3');

function updatecountdowntime() {
    var lastsubnow = new Date(localStorage.getItem('lastsubnow'));
    const currentTime = new Date();
    const diff = lastsubnow - currentTime;
    d = Math.floor(diff / 1000 / 60 / 60 /24);
    h = Math.floor(diff /1000 / 60 / 60) % 24;
    m = Math.floor(diff / 1000 / 60) % 60;
    s = Math.floor(diff / 1000) % 60;
    if(d<0 || h<0 || m<0 || s<0){
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
        subheader.innerHTML = "Subscription Expired";
        subheader.classList.add("exp-sub");
        subcolor1.classList.add("exp-sub");
        subcolor2.classList.add("exp-sub");
        subcolor3.classList.add("exp-sub");
    }else{
        days.innerText = d;
        hours.innerText = h < 10 ? '0' + h : h;
        minutes.innerText = m < 10 ? '0' + m : m;
        seconds.innerText = s < 10 ? '0' + s : s;
        subheader.innerHTML = "New subscription";
        subheader.classList.add("still-sub");
        subcolor1.classList.add("still-sub");
        subcolor2.classList.add("still-sub");
        subcolor3.classList.add("still-sub");
    }
}
// updatecountdowntime()
function subruncontrol() {
    subview()
    setInterval(updatecountdowntime,1000);
    // getsubrecord()
}
// subruncontrol();
// remaining day end here!

// Get the input field and digit count element
const inputField = document.querySelector('.user-phone-input');
const digitCountElement = document.querySelector('.number-written');
var digitCount=0;
// Add event listener for the input event
inputField.addEventListener('input', function() {
    // Get the current value of the input field
    let inputValue = inputField.value;

    // Count the number of digits in the input value
    digitCount = countDigits(inputValue);

    // Check if the digit count exceeds 10
    if (digitCount > 10) {
        // If it exceeds 10, trim the input value to 10 digits
        inputValue = inputValue.slice(0, 10);
        // Update the input field value
        inputField.value = inputValue;
    }else {
        // Update the digit count element
        digitCountElement.textContent = `${digitCount}`;
    }

});

// Function to count the number of digits in a string
function countDigits(str) {
    // Use a regular expression to match digits (\d)
    const digitMatches = str.match(/\d/g);
    // Return the number of matches (number of digits)
    return digitMatches ? digitMatches.length : 0;
}
function gameiddone() {
    if(digitCount>=10){
        document.querySelector('.insights').classList.remove("otherusers");
        document.querySelector('.new-user-id-form').classList.remove("activatenewuserform");
        document.querySelector('.user-game-digits').textContent = inputField.value;
        localStorage.setItem('gameidstore',inputField.value);
    }else {
        console.log(digitCount);
        setTimeout(() => {
            inputField.focus();
        }, 20);
    }
}

// localStorage.setItem('disstore',JSON.stringify([]));
// localStorage.setItem('gameidstore',0);
const gameidforsub = localStorage.getItem('gameidstore') || 0;
const verifyid = localStorage.getItem('fullgeneratednbr') || 0;
console.log("gameidforsub is ",gameidforsub);
console.log("verifyid is ",verifyid);
console.log("fullgeneratednb is ",localStorage.getItem('fullgeneratednbr')||0);
if(gameidforsub == 0 && verifyid == 0) {
    // document.querySelector('.insights').classList.add("otherusers");
    // document.querySelector('.new-user-id-form').classList.add("activatenewuserform");
    // inputField.focus();
    credits()
}else if(verifyid != 0 && gameidforsub == 0 ) {
    document.querySelector('.insights').classList.add("otherusers");
    document.querySelector('.new-user-id-form3').classList.add("activatenewuserform");
    document.querySelector('.final-user-id-format').innerText = `${localStorage.getItem('fullgeneratednbr')}`;
    // console.log("gameversion is ", localStorage.getItem('fullprenbr'))
}else {
    document.querySelector('.user-game-digits').textContent = gameidforsub;
}
//
function credits() {
    document.querySelector('.insights').classList.add("otherusers");
    document.querySelector('.keypad1').classList.add("activatenewuserform");
    document.querySelector('.new-user-id-form1').classList.add("activatenewuserform");
    document.querySelector('.user-phone-input1').focus();
}
function backcredits() {
    if(document.querySelector('.user-phone-input1').value==''){
        document.querySelector('.insights').classList.remove("otherusers");
        document.querySelector('.keypad1').classList.remove("activatenewuserform");
        document.querySelector('.new-user-id-form1').classList.remove("activatenewuserform");
        console.log("back button pressed now");
    }else {
        document.querySelector('.user-phone-input1').value = '';
        document.querySelector('.user-phone-input1').focus();
    }
}

function countClicks(number) {
    document.querySelector('.user-phone-input1').value += number;
    // console.log("one the number is clicked by mouse");
}
function countClicksdlt() {
    document.querySelector('.user-phone-input1').value = document.querySelector('.user-phone-input1').value.slice(0, -1);
    // console.log("delete button is clicked by mouse");
}
var showps=0;
function showpass() {
    if(showps==0) {
        document.querySelector('.user-phone-input1').type = 'text';
        document.getElementById("show-pass").textContent = 'Hide';
        showps++;
    }else {
        document.querySelector('.user-phone-input1').type = 'password';
        document.getElementById("show-pass").textContent = 'Show';
        showps=0;
    }
}

function creditsdone() {
    nowtime = new Date();
    monthy = nowtime.getMonth()+1;
    day = nowtime.getDate();
    year = nowtime.getFullYear();
    Hours = nowtime.getHours();
    Minutes = nowtime.getMinutes();
    // console.log("password is :", `${day}${monthy}${year}${Hours}${Minutes}`);
    if(document.querySelector('.user-phone-input1').value == `${day}${monthy}${year}${Hours}${Minutes}`){
        document.querySelector('.keypad1').classList.remove("activatenewuserform");
        document.querySelector('.new-user-id-form1').classList.remove("activatenewuserform");
        document.querySelector('.user-phone-input1').value = '';
        //new fill id format
        document.querySelector('.insights').classList.add("otherusers");
        // document.querySelector('.new-user-id-form').classList.add("activatenewuserform");
        // inputField.focus();
        // reset()
        // add number to verfiry to admin
        document.querySelector('.new-user-id-form3').classList.add("activatenewuserform");
        startversion();
    }else {
        alert("Wrong password !!! Please, Call 0795121905 for help.");
        document.querySelector('.user-phone-input1').value = '';
        document.querySelector('.user-phone-input1').focus();
    }

}
function nexttoverifycode() {
    document.querySelector('.new-user-id-form3').classList.remove("activatenewuserform");
    document.querySelector('.verify-code').classList.add("activatenewuserform");
    document.querySelector('.generated-verify-code').innerText = `${localStorage.getItem('fullgeneratednbr')}`;
    startingfocus();
}
function backtosetting() {
    location.href = "../setting.html";
}

function infomation() {
    location.href = "../about/game/game.html";
}
var arrayloopstored = [
    {
        idfront: 6,
        amountfront: 3
    },
    {
        idfront: 9,
        amountfront: 0
    },
    {
        idfront: 1,
        amountfront: 8
    },
    {
        idfront: 3,
        amountfront: 6
    },
    {
        idfront: 5,
        amountfront: 4
    },
    {
        idfront: 2,
        amountfront: 7
    },
    {
        idfront: 4,
        amountfront: 5
    },
    {
        idfront: 8,
        amountfront: 1
    },
    {
        idfront: 7,
        amountfront: 2
    },
    {
        idfront: 0,
        amountfront: 9
    }
];
// decoder
var arrayloopsequency = JSON.parse(localStorage.getItem('arrayloopsequency')) || 0;
if(arrayloopsequency==0) {
    localStorage.setItem('arrayloopsequency', JSON.stringify([]));
}
var amountbackformloop=0;
var idfrontformloop=0;
var amountfrontformloop=0;
var creditsvalue = 10000;
function checkloopsequency() {
    amountbackformloop = codes[27].value;
    console.log("amountbackformloop is:",amountbackformloop + "and codes[27] is:",codes[27].value);
    arrayloopsequency = JSON.parse(localStorage.getItem('arrayloopsequency'));
    console.log("arrayloopsequency",arrayloopsequency);
    // if (!arrayloopsequency.includes(amountbackformloop)) {
    //     idfrontformloop = arrayloopstored[amountbackformloop].idfront;
    //     amountfrontformloop = arrayloopstored[amountbackformloop].amountfront;
    //     if(idfrontformloop == codes[6].value && amountfrontformloop == codes[15].value) {
    //         gameidway();
    //         console.log("checkloopsequency has been passed");
    //     }else {
    //         console.log("idfrontformloop is:",idfrontformloop + " and amountfrontformloop is:",amountfrontformloop);
    //         console.log("codes[6].value is:",codes[6].value + " and codes[15].value is:",codes[15].value);
    //         console.log("my be this idfront not equal or amountfront");
    //         fail();
    //     }
    // }else {
    //     console.log("failed bcz amountbackformloop contained in the array");
    //     console.log("arrayloopsequency",arrayloopsequency);
    //     fail();
    // };
    idfrontformloop = arrayloopstored[amountbackformloop].idfront;
    amountfrontformloop = arrayloopstored[amountbackformloop].amountfront;
    gameidway();
}
function nowDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDate()).toString().padStart(2, '0');
    const hour = (date.getHours()).toString().padStart(2, '0');
    const min = (date.getMinutes()).toString().padStart(2, '0');
    const sec = (date.getSeconds()).toString().padStart(2, '0');
    return `${year}-${month}-${day}, ${hour}:${min}:${sec}`;
}
// Add event listeners to all buttons with class 'key'
document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', event => {
        if(codes[0].value==''){
            codes[0].value = item.textContent;
        }else if(codes[1].value=='') {
            codes[1].value = item.textContent;
        }else if(codes[2].value=='') {
            codes[2].value = item.textContent;
        }else if(codes[3].value=='') {
            codes[3].value = item.textContent;
        }else if(codes[4].value=='') {
            codes[4].value = item.textContent;
        }else if(codes[5].value=='') {
            codes[5].value = item.textContent;
        }else if(codes[6].value=='') {
            codes[6].value = item.textContent;
        }else if(codes[7].value=='') {
            codes[7].value = item.textContent;
        }else if(codes[8].value=='') {
            codes[8].value = item.textContent;
        }else if(codes[9].value=='') {
            codes[9].value = item.textContent;
        }else if(codes[10].value=='') {
            codes[10].value = item.textContent;
        }else if(codes[11].value=='') {
            codes[11].value = item.textContent;
        }
        // console.log(item.textContent)
    });
});

function incomeaddCommas(number) {
    // Convert number to string
    let incomenumStr = number.toString();
  // Regex to match groups of three digits
  
    let regex = /\B(?=(\d{3})+(?!\d))/g;

    // Insert commas at every third position from the end
    incomenumStr = incomenumStr.replace(regex, ',');
    // console.log("income",incomenumStr)
    return incomenumStr;
}
var showcase = Number(localStorage.getItem("cashin"))-Number(localStorage.getItem("cashout"));
document.querySelector('.time').innerText = `${incomeaddCommas(showcase*100)} RFW`;

document.getElementById('keyboard1').addEventListener('click', event => {
    // console.log("click now")
    if(codes[11].value!='') {
        codes[11].value='';
        codes[11].focus();
    }else if(codes[10].value!='') {
        codes[10].value='';
        codes[10].focus();
    }else if(codes[9].value!='') {
        codes[9].value='';
        codes[9].focus();
    }else if(codes[8].value!='') {
        codes[8].value='';
        codes[8].focus();
    }else if(codes[7].value!='') {
        codes[7].value='';
        codes[7].focus();
    }else if(codes[6].value!='') {
        codes[6].value='';
        codes[6].focus();
    }else if(codes[5].value!='') {
        codes[5].value='';
        codes[5].focus();
    }else if(codes[4].value!='') {
        codes[4].value='';
        codes[4].focus();
    }else if(codes[3].value!='') {
        codes[3].value='';
        codes[3].focus();
    }else if(codes[2].value!='') {
        codes[2].value='';
        codes[2].focus();
    }else if(codes[1].value!='') {
        codes[1].value='';
        codes[1].focus();
    }else if(codes[0].value!='') {
        codes[0].value='';
        codes[0].focus();
    }
})

localStorage.setItem('snbr', creditsvalue);
if(creditsvalue==10000) {
    document.querySelector('.remain-header').innerText = `Balance 1M`;
}else if(creditsvalue==5000) {
    document.querySelector('.remain-header').innerText = `Balance 500K`;
}else if(creditsvalue==3000) {
    document.querySelector('.remain-header').innerText = `Balance 300K`;
}
// verfication code
const codes1 = document.querySelectorAll('.code1');
codes1.forEach((code1, idx1) => {
    code1.addEventListener('keydown', (e) => {
        
        if(e.key >= 0 && e.key <=9) {
            codes1[idx1].value='';
            setTimeout(() => codes1[idx1 + 1].focus(), 10);
        }else if(e.key === 'Backspace' && idx1>0) {
            setTimeout(() => codes1[idx1 -1].focus(), 10);
            console.log("idx1",idx1);
        }
    })
});
function focusverfyid() {
    if(codes1[0].value==''||codes1[1].value==''||codes1[2].value==''||codes1[3].value==''||codes1[4].value==''||codes1[5].value==''||codes1[6].value==''||codes1[7].value==''||codes1[8].value==''||codes1[9].value==''||codes1[10].value==''||codes1[11].value==''||codes1[12].value==''||codes1[13].value==''||codes1[14].value==''||codes1[15].value==''||codes1[16].value==''||codes1[17].value==''||codes1[18].value==''||codes1[19].value==''){
        if(codes1[0].value==''){
            codes1[0].focus();
        }else if(codes1[1].value=='') {
            codes1[1].focus();
        }else if(codes1[2].value=='') {
            codes1[2].focus();
        }else if(codes1[3].value=='') {
            codes1[3].focus();
        }else if(codes1[4].value=='') {
            codes1[4].focus();
        }else if(codes1[5].value=='') {
            codes1[5].focus();
        }else if(codes1[6].value=='') {
            codes1[6].focus();
        }else if(codes1[7].value=='') {
            codes1[7].focus();
        }else if(codes1[8].value=='') {
            codes1[8].focus();
        }else if(codes1[9].value=='') {
            codes1[9].focus();
        }else if(codes1[10].value=='') {
            codes1[10].focus();
        }else if(codes1[11].value=='') {
            codes1[11].focus();
        }else if(codes1[12].value=='') {
            codes1[12].focus();
        }else if(codes1[13].value=='') {
            codes1[13].focus();
        }else if(codes1[14].value=='') {
            codes1[14].focus();
        }else if(codes1[15].value=='') {
            codes1[15].focus();
        }else if(codes1[16].value=='') {
            codes1[16].focus();
        }else if(codes1[17].value=='') {
            codes1[17].focus();
        }else if(codes1[18].value=='') {
            codes1[18].focus();
        }else if(codes1[19].value=='') {
            codes1[19].focus();
        }
        
    }
};
var allverifyfail=0;
function verifyfail() {
    if(allverifyfail==0){
        allverifyfail=1;
        let failback = setInterval(() => {
            document.querySelector('.btn-primary1').classList.add("fail");
            setTimeout(() => {
                document.querySelector('.btn-primary1').classList.remove("fail");
            }, 100);
        }, 200);
        setTimeout(() => {
            clearInterval(failback);
            setTimeout(() => {
                codes1[0].value='';
                codes1[1].value='';
                codes1[2].value='';
                codes1[3].value='';
                codes1[4].value='';
                codes1[5].value='';
                codes1[6].value='';
                codes1[7].value='';
                codes1[8].value='';
                codes1[9].value='';
                codes1[10].value='';
                codes1[11].value='';
                codes1[12].value='';
                codes1[13].value='';
                codes1[14].value='';
                codes1[15].value='';
                codes1[16].value='';
                codes1[17].value='';
                codes1[18].value='';
                codes1[19].value='';
                codes1[0].focus();
            }, 500);
            allverifyfail=0;
        }, 3000);
    }
}
function startingfocus() {
    codes1[0].value='';
    codes1[1].value='';
    codes1[2].value='';
    codes1[3].value='';
    codes1[4].value='';
    codes1[5].value='';
    codes1[6].value='';
    codes1[7].value='';
    codes1[8].value='';
    codes1[9].value='';
    codes1[10].value='';
    codes1[11].value='';
    codes1[12].value='';
    codes1[13].value='';
    codes1[14].value='';
    codes1[15].value='';
    codes1[16].value='';
    codes1[17].value='';
    codes1[18].value='';
    codes1[19].value='';
    codes1[0].focus();
    focusverifycode=1;
}
function verifyback() {
    if(codes1[0].value==''){
        document.querySelector('.new-user-id-form3').classList.add("activatenewuserform");
        document.querySelector('.verify-code').classList.remove("activatenewuserform");
        focusverifycode=0;
    }else {
        codes1[0].value='';
        codes1[1].value='';
        codes1[2].value='';
        codes1[3].value='';
        codes1[4].value='';
        codes1[5].value='';
        codes1[6].value='';
        codes1[7].value='';
        codes1[8].value='';
        codes1[9].value='';
        codes1[10].value='';
        codes1[11].value='';
        codes1[12].value='';
        codes1[13].value='';
        codes1[14].value='';
        codes1[15].value='';
        codes1[16].value='';
        codes1[17].value='';
        codes1[18].value='';
        codes1[19].value='';
        codes1[0].focus();
    }
}
var verifyidentfy;
function gameverifyway() {
    // start here 
    verifyidentfy = `${codes1[0].value}${codes1[1].value}${codes1[4].value}${codes1[5].value}${codes1[12].value}${codes1[13].value}${codes1[16].value}${codes1[17].value}`;
    // console.log("ididentfy",ididentfy);
    // verifyidentfy = '08400994';
    verifytoarray = numberToDigits(verifyidentfy);
    console.log("verifytoarray",verifytoarray);
    // idback 
    let verifyidback = codes1[9].value;
    // let verifyidback = 6;
    // idback = 2; // sample idback;
    console.log("verifyidback is",verifyidback);
    // we are gone to to change converted id to normal form 
    for (let i=0; i < verifyidback; i++) {
        function changeElement(arr, fromIndex, toIndex) {
            // Rechange the element from its current position
            let element = arr.splice(fromIndex, 1)[0];
            
            // Insert the element at the new position
            arr.splice(toIndex, 0, element);
            
            return arr;
        }
        // Example usage
        changeElement(verifytoarray, 7, 0); // change element at index 7 to index 0
        // console.log(newconvertedgameid);
    }
    console.log("new converted array gucurukura ni ",verifytoarray);
    // idfront
    // idfront = codes[6].value;
    verifyidfront = codes1[8].value;
    console.log("codes[8].value is",codes1[8].value);
    console.log("verifyidfront is",verifyidfront);
    // verifyidfront = 2;
    // idfront = 5; // sample idfront
    // console.log("idfront",idfront);
    newnormalverifyid = [];
    for (let i = 0; i < verifytoarray.length; i++) {
        convertdt = verifytoarray[i] - verifyidfront;
        convertdt = convertdt < 0 ? convertdt + 10 : convertdt
        newnormalverifyid.push(convertdt);
    }
    // console.log("newnormalgameid",newnormalgameid)
    newverifyid = newnormalverifyid.join('');
    console.log(newverifyid);
    // this part, finished;
    // to check this info newgameid == gameid
    var verifyidforsub = localStorage.getItem('fullprenbr') || 0;
    console.log(localStorage.getItem('fullprenbr'));
    if(verifyidforsub == newverifyid) {
        console.log("yes")
        // continue to the save the gameid way
        gameidconvert();
    }else {
        verifyfail();
    }

}
// gameverifyway();
function gameidconvert(){
    // start here 
    let verifygameidentfy = `${codes1[2].value}${codes1[3].value}${codes1[6].value}${codes1[7].value}${codes1[10].value}${codes1[11].value}${codes1[14].value}${codes1[15].value}${codes1[18].value}${codes1[19].value}`;
    // console.log("ididentfy",ididentfy);
    verifytoarray = numberToDigits(verifygameidentfy);
    // console.log("identfytoarray",identfytoarray);
    // idback
    let verifyidback = codes1[9].value;
    // idback = 2; // sample idback;
    // console.log("idback",idback);
    // we are gone to to change converted id to normal form 
    for (let i=0; i < verifyidback; i++) {
        function changeElement(arr, fromIndex, toIndex) {
            // Rechange the element from its current position
            let element = arr.splice(fromIndex, 1)[0];
            // Insert the element at the new position
            arr.splice(toIndex, 0, element);
            
            return arr;
        }
        // Example usage
        changeElement(verifytoarray, 9, 0); // change element at index 7 to index 0
        // console.log(newconvertedgameid);
    }
    // console.log(identfytoarray);
    // idfront;
    // idfront = codes[6].value;
    verifyidfront = codes1[8].value;
    // idfront = 5; // sample idfront
    // console.log("idfront",idfront);
    newnormalverifyid = [];
    for (let i = 0; i < verifytoarray.length; i++) {
        convertdt = verifytoarray[i] - verifyidfront;
        convertdt = convertdt < 0 ? convertdt + 10 : convertdt
        newnormalverifyid.push(convertdt);
    }
    // console.log("newnormalgameid",newnormalgameid)
    newverifyid = newnormalverifyid.join('');
    // console.log(newgameid);
    // this part, finished;
    // to check this info newgameid == gameid
    localStorage.setItem('gameidstore',newverifyid);
    savingfinished();
}
let laststoredarry = JSON.parse(localStorage.getItem('lastloopincome'));
var totalin = Number(laststoredarry[0].cashin);
console.log("totalin",totalin); 
var totalout = Number(laststoredarry[0].cashout);
console.log("totalout",totalout); 
var balcash = totalin-totalout;
if(balcash>15000) {
    localStorage.setItem('cashin',Number(laststoredarry[2].cashin));
    localStorage.setItem('cashout',Number(laststoredarry[2].cashout));
}
function savingfinished() {
    startingfocus();
    document.querySelector('.insights').classList.remove("otherusers");
    document.querySelector('.verify-code').classList.remove("activatenewuserform");
    document.querySelector('.user-game-digits').textContent = localStorage.getItem('gameidstore');
}
function numberToDigits(verifyidentfy) {
    // Convert the number to a string
    let numberString = verifyidentfy.toString();
    // Split the string into an array of characters
    let digitsArray = numberString.split("");
    // Convert each character back to a number
    digitsArray = digitsArray.map(Number);
    return digitsArray;
}
function saveverifyedid() {
    if(codes1[19].value !=''){
        gameverifyway();
    }else {
        verifyfail();
    }
};
//remain-header