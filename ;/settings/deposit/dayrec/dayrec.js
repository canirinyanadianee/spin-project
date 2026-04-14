const logindates = localStorage.getItem('fulldailyrecords');
const spliteddate = logindates.split("-");
// console.log("spliteddate",spliteddate);
var nowtime = new Date();
var monthy = spliteddate[1];
var day = spliteddate[2];
var year = spliteddate[0];

document.querySelector('.date').innerText = day;
document.querySelector('.monthy').innerText = monthy;
document.querySelector('.year'). innerText = year;

if('BroadcastChannel' in window) {
    const channel = new BroadcastChannel('unique_channel_name');
    channel.addEventListener('message', event => {
        window.close();
    })
    channel.postMessage('element_opened');
} else {
    console.log('Boardcast Channel API is not supported in this browser.');
}
// document.addEventListener("mousedown", () => {
//     document.documentElement.requestFullscreen().catch();
// });

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
// Hours and Minutes of the user at start

function backtohistory() {
    location.href  = '../dep.html'
}

// document.querySelector('.rp-dt'). innerText = `${day}/${monthy}/${year}`;
// call to day date
// console.table(logindates);
const reporttoday = JSON.parse(localStorage.getItem(`${logindates}`)) || [];

// login
var logingame = reporttoday[0];

var lognbr = 0;
var lognbrarry=[];
var fullworkedtime = [];
for(lo=0; lo<=logingame.length-1; lo++){
    lognbr++;
    lognbrarry.unshift(lognbr);
    eachtime = logingame[lo].workedhours;
    fullworkedtime.push(eachtime);
}
// console.table(logingame);
// console.log("fullworkedTime",fullworkedtime);

var fullincome =[];
function addCommas(number) {
    // Convert number to string
    let numStr = number.toString();
  // Regex to match groups of three digits
  
    let regex = /\B(?=(\d{3})+(?!\d))/g;

    // Insert commas at every third position from the end
    numStr = numStr.replace(regex, ',');
    // console.log("converted",numStr)
    fullincome.unshift(numStr);
    fullincome= fullincome.slice(0, 2);
    return numStr;
}



logingame.forEach(function (log, index) {
    // add comma to each user income
    var userincomenow = logingame[index].userincome*100;
    addCommas(userincomenow);
    // separate workedtime
    workedTime = logingame[index].workedhours
    workedTime = workedTime.split(":");
    // console.log(workedTime);

    const tr = document.createElement('div');
    const trContent = `
                        <div class="users">
                            <div class="middle">
                                <div class="lef">
                                    <h3 class="user-name">${lognbrarry[index]} (${workedTime[0]}h ${workedTime[1]}m)</h3>
                                    <h1>Frw <h1 class="user-cashreceived">${fullincome[0]}</h1></h1>
                                </div>
                            </div>
                            <div class="user-time">
                                <small class="user-time-header">Time:</strong></small>
                                <small class="user-time-starting">Starting,<strong class="user-time-starting-time">${log.starttime}</strong></small>
                                <small class="user-time-ending">Ending,<strong class="user-time-ending-time">${log.endtime}</strong></small>
                            </div>
                            <div class="user-credits">
                                <small class="user-credits-header">Credits:</strong></small>
                                <small class="user-credits-starting">Starting,<strong class="user-credits-starting-now">${log.startcredits}</strong></small>
                                <small class="user-credits-ending">Ending,<strong class="user-credits-starting-end">${log.endcredits}</strong></small>
                            </div>
                        </div>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('main .logins').appendChild(tr);
    // console.log("index",index);
})
// login end here!
// loging records start here!
function recaddCommas(number) {
    // Convert number to string
    let recnumStr = number.toString();
  // Regex to match groups of three digits
  
    let regex = /\B(?=(\d{3})+(?!\d))/g;

    // Insert commas at every third position from the end
    recnumStr = recnumStr.replace(regex, ',');
    // console.log("converted",recnumStr)
    nowbalance.unshift(recnumStr);
    return recnumStr;
}
var recordsingame = reporttoday[1];
// console.table(recordsingame);
var recnbr = 0;
var recnbrarry=[];
for(rc=0; rc<=recordsingame.length-1; rc++){
    recnbr++;
    recnbrarry.unshift(recnbr);
}
var balance=0;
var nowbalance = [];
// // console.log(recordsingame[index].income);
for (let i=recordsingame.length-1; i>=0; i--) {
    balance += recordsingame[i].income;
    // console.log("balance",balance);
    recaddCommas(balance);
}

// console.log(" nowbalance", nowbalance);
recordsingame.forEach(function(order, index) {
    const tr = document.createElement('tr');
    const trContent = `
                        <td class="rec-num">${recnbrarry[index]}</td>
                        <td class="rec-tm">${order.Time}</td>
                        <td class="rec-am">${order.Bet} Frw</td>
                        <td class="rec-win">${order.win} Frw</td>
                        <td class="rec-bl">${order.income} Frw</td>
                        <td class="rec-tm">${nowbalance[index]} Frw</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})
// login records end here! 
// login report start here!
// dates
// document.querySelector('.rp-dt'). innerText = `${day}/${monthy}/${year}`;
// worked Time
function addTimeFromArray(timeArray) {
    let totalHours = 0;
    let totalMinutes = 0;

    timeArray.forEach(entry => {
        // Split the entry into hours and minutes
        const [hours, minutes] = entry.split(':').map(Number);
        
        // Add the hours and minutes to the total
        totalHours += hours;
        totalMinutes += minutes;
    });

    // Adjust the total if minutes exceed 60
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes %= 60;

    return { totalHours, totalMinutes };
}
const { totalHours, totalMinutes } = addTimeFromArray(fullworkedtime);
// console.log(`Total time worked: ${totalHours} hours and ${totalMinutes} minutes`);
document.querySelector('.worked-hours'). innerText = `${totalHours}`;
document.querySelector('.worked-min'). innerText = `${totalMinutes}`;
document.querySelector('.user-time-starting-time'). innerText = logingame[logingame.length-1].starttime;
document.querySelector('.user-time-ending-time'). innerText = logingame[0].endtime;
document.querySelector('.user-credits-starting-now'). innerText = logingame[logingame.length-1].startcredits;
document.querySelector('.user-credits-starting-end'). innerText = logingame[0].endcredits;
// game number and rate
document.querySelector('.sub-number11'). innerText = `${recnbrarry.length}`;
// cashin
function cashinaddCommas(number) {
    // Convert number to string
    let cashinnumStr = number.toString();
  // Regex to match groups of three digits
  
    let regex = /\B(?=(\d{3})+(?!\d))/g;

    // Insert commas at every third position from the end
    cashinnumStr = cashinnumStr.replace(regex, ',');
    // console.log("cashin",cashinnumStr)
    document.getElementById("cashreceived"). textContent = `${cashinnumStr}`;
    return cashinnumStr;
}
var cashin=0;
for (let i=recordsingame.length-1; i>=0; i--) {
    cashin += recordsingame[i].Bet;
    // console.log("cashin",cashin);
    cashinaddCommas(cashin)
}
//rate
document.querySelector('.sub-number111'). innerText = Math.floor(cashin/recnbrarry.length);
// cashout
function cashoutaddCommas(number) {
    // Convert number to string
    let cashoutnumStr = number.toString();
  // Regex to match groups of three digits
  
    let regex = /\B(?=(\d{3})+(?!\d))/g;

    // Insert commas at every third position from the end
    cashoutnumStr = cashoutnumStr.replace(regex, ',');
    // console.log("cashout",cashoutnumStr)
    document.getElementById("cashout"). textContent = `${cashoutnumStr}`;
    return cashoutnumStr;
}
var cashout=0;
for (let i=recordsingame.length-1; i>=0; i--) {
    cashout += recordsingame[i].win;
    // console.log("cashout",cashout);
    cashoutaddCommas(cashout)
}
// income
document.getElementById("profit"). textContent = `${nowbalance[0]}`;
