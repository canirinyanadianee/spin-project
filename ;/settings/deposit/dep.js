setInterval(() => {
    var nowtime = new Date();
    var monthy = nowtime.getMonth()+1;
    var day = nowtime.getDate();
    var year = nowtime.getFullYear();
    var Hours = nowtime.getHours();
    var Minutes = nowtime.getMinutes();
    var Seconds = nowtime.getSeconds();
    document.querySelector('.date').innerText = day;
    document.querySelector('.monthy').innerText = monthy;
    document.querySelector('.year'). innerText = year;
    document.querySelector('.Hours'). innerText = Hours;
    document.querySelector('.Minutes'). innerText = Minutes < 10 ? '0' + Minutes : Minutes;
    document.querySelector('.Seconds'). innerText = Seconds < 10 ? '0' + Seconds : Seconds;
}, 1000);
if('BroadcastChannel' in window) {
    const channel = new BroadcastChannel('unique_channel_name');
    channel.addEventListener('message', event => {
        window.close();
    })
    channel.postMessage('element_opened');
} else {
    // console.log('Boardcast Channel API is not supported in this browser.');
}
// document.addEventListener("mousedown", () => {
//     document.documentElement.requestFullscreen().catch();
// });
// var checkfull=0
// document.addEventListener("mousedown", () => {
//     if(checkfull==0){
//         document.documentElement.requestFullscreen().catch();
//         checkfull=1;
//     }
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
var nowtime = new Date();
var monthy = nowtime.getMonth()+1;
var day = nowtime.getDate();
var year = nowtime.getFullYear();
var Hours = nowtime.getHours();
var Minutes = nowtime.getMinutes();
var Seconds = nowtime.getSeconds();
document.querySelector('.date').innerText = day;
document.querySelector('.monthy').innerText = monthy;
document.querySelector('.year'). innerText = year;
document.querySelector('.Hours'). innerText = Hours;
document.querySelector('.Minutes'). innerText = Minutes < 10 ? '0' + Minutes : Minutes;
document.querySelector('.Seconds'). innerText = Seconds < 10 ? '0' + Seconds : Seconds;

function backtohistory() {
    capitalshow=1;
    console.log("capital show is ", capitalshow);
    const bal = document.querySelector(".remain-bal");
    if (!bal) {
        location.href  = '../setting.html';
    }else {
        const bal = document.querySelector(".remain-bal");
        bal.remove();
        capitalshow=0;
        console.log("capital show is ", capitalshow);
        document.querySelector('main .insights').style.opacity = '1';
        document.querySelector('.recent-order').style.opacity = '1';
        document.querySelector('.finance-header').style.opacity = '1';
    };
}
var workingdays = 0;
// practice start here.................
// Function to calculate daily income
function calculateDailyIncome(startDate, currentDate) {
    // Convert start and current dates to milliseconds
    var startMillis = startDate.getTime();
    const currentMillis = currentDate.getTime();

    // Initialize variables
    let dailyIncome = [];
    let currentDateMillis = startMillis;

    // Loop through each day from start date until current date
    while (currentDateMillis <= currentMillis) {
        const dateKey = formatDate(new Date(currentDateMillis));
        const storedIncome = JSON.parse(localStorage.getItem(`${dateKey}`));
        console.log("storedIncome",storedIncome);
        if(!storedIncome) {
            const onthisdate = new Date(currentDateMillis);
            console.log(`${onthisdate.getDate() < 10 ? '0' + onthisdate.getDate() : onthisdate.getDate()}/${Number(onthisdate.getMonth()+1) < 10 ? '0' + Number(onthisdate.getMonth()+1) : Number(onthisdate.getMonth()+1)}/${onthisdate.getFullYear()}`);
            const today = `${onthisdate.getDate() < 10 ? '0' + onthisdate.getDate() : onthisdate.getDate()}/${Number(onthisdate.getMonth()+1) < 10 ? '0' + Number(onthisdate.getMonth()+1) : Number(onthisdate.getMonth()+1)}/${onthisdate.getFullYear()}`;
            const emptydate = [
                {
                    dates: today,
                    startTime: "....",
                    EndTime: "....",
                    WorkedTime: "....",
                    startCredits: "....",
                    endCredits: "....",
                    Cashin: 0,
                    Cashout: 0,
                    income: 0,
                    games: 0,
                    rate: 0,
                }
            ];
            dailyIncome.unshift(emptydate[0]);
        }else {
            // console.log("on this date", new Date(currentDateMillis));
            const onthisdate = new Date(currentDateMillis);
            console.log(`${onthisdate.getDate() < 10 ? '0' + onthisdate.getDate() : onthisdate.getDate()}/${Number(onthisdate.getMonth()+1) < 10 ? '0' + Number(onthisdate.getMonth()+1) : Number(onthisdate.getMonth()+1)}/${onthisdate.getFullYear()}`);
            const today = `${onthisdate.getDate() < 10 ? '0' + onthisdate.getDate() : onthisdate.getDate()}/${Number(onthisdate.getMonth()+1) < 10 ? '0' + Number(onthisdate.getMonth()+1) : Number(onthisdate.getMonth()+1)}/${onthisdate.getFullYear()}`;
            
            // console.log(storedIncome);
            const logingame = storedIncome[0];
            var fullworkedtime = [];
            for(lo=0; lo<=logingame.length-1; lo++){
                eachtime = logingame[lo].workedhours;
                fullworkedtime.push(eachtime);
            }
            const { totalHours, totalMinutes } = addTimeFromArray(fullworkedtime);
            var recordsingame=0;
            var cashout=0;
            var cashin=0;
            var recnbr = 0;
            var recnbrarry=[];
            var gamerate =0;
            if(!storedIncome[1]) {
                cashin = 0;
                cashout = 0;
                gamerate = 0;
            }else {
                recordsingame = storedIncome[1];
                console.log("reocrdsingame",recordsingame);
                // cashin
                
                for (let i=recordsingame.length-1; i>=0; i--) {
                    cashin += recordsingame[i].Bet;
                }
                for (let i=recordsingame.length-1; i>=0; i--) {
                    cashout += recordsingame[i].win;
                }
                for(rc=0; rc<=recordsingame.length-1; rc++){
                    recnbr++;
                    recnbrarry.unshift(recnbr);
                }
                gamerate = Math.floor(cashin/recnbrarry.length);
            }
            // console.log("recnbrarray",recnbrarry.length)
            const filldate = [
                {
                    dates: today,
                    startTime: logingame[logingame.length-1].starttime,
                    EndTime: logingame[0].endtime,
                    WorkedTime: `${totalHours}h ${totalMinutes}m`,
                    startCredits: logingame[logingame.length-1].startcredits,
                    endCredits: logingame[0].endcredits,
                    Cashin: cashin,
                    Cashout: cashout,
                    income: cashin-cashout,
                    games: recnbrarry.length,
                    rate: gamerate,
                }
            ];
            dailyIncome.unshift(filldate[0]);
            workingdays++;
        }

        // console.log(dailyIncome);
        // If there's stored income for the current date, add it to dailyIncome
        // Otherwise, set income to 0
        // dailyIncome.push(storedIncome ? parseInt(storedIncome) : 0);

        // Move to the next day
        currentDateMillis += 86400000; // 86400000 milliseconds = 1 day
        
        const onthisdate = new Date(currentDateMillis);
        console.log(`${onthisdate.getDate() < 10 ? '0' + onthisdate.getDate() : onthisdate.getDate()}/${Number(onthisdate.getMonth()+1) < 10 ? '0' + Number(onthisdate.getMonth()+1) : Number(onthisdate.getMonth()+1)}/${onthisdate.getFullYear()}`);

    }

    return dailyIncome;
}


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
// Function to format date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Example usage:
console.log("startingDates", localStorage.getItem("startingdate"))
const startDate = new Date(localStorage.getItem("startingdate"));
// const startDate = new Date('2024-05-05');
const currentDate = new Date(); // current dat
console.log("currentDate",currentDate);
const dailyIncome = calculateDailyIncome(startDate, currentDate);

// console.log(dailyIncome);
// Print daily income for each day
dailyIncome.forEach((income, index) => {
    const date = new Date(startDate.getTime() + index * 86400000);
    console.log(`${formatDate(date)}: $${income}`);
    // console.log(dailyIncome);
    console.log(`${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${Number(date.getMonth()+1) < 10 ? '0' + Number(date.getMonth()+1) : Number(date.getMonth()+1)}/${date.getFullYear()}`);

});
console.table(dailyIncome);

function cashinaddCommas(number) {
    // Convert number to string
    let cashinnumStr = number.toString();
// Regex to match groups of three digits

    let regex = /\B(?=(\d{3})+(?!\d))/g;

    // Insert commas at every third position from the end
    cashinnumStr = cashinnumStr.replace(regex, ',');
    // console.log("cashin",cashinnumStr)
    return cashinnumStr;
}
function cashoutaddCommas(number) {
    // Convert number to string
    let cashoutnumStr = number.toString();
  // Regex to match groups of three digits
  
    let regex = /\B(?=(\d{3})+(?!\d))/g;

    // Insert commas at every third position from the end
    cashoutnumStr = cashoutnumStr.replace(regex, ',');
    // console.log("cashout",cashoutnumStr)
    return cashoutnumStr;
}
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
// sample start here!....................
function infomation() {
    location.href = '../about/game/game.html'
}
var recnbr = 0;
var recnbrarry=[];
for(rc=0; rc <= dailyIncome.length-1; rc++){
    recnbr++;
    recnbrarry.unshift(recnbr);
}
dailyIncome.forEach(function(order, index) {
    const tr = document.createElement('tr');
    const trContent = `
                        <td class="rec-num" onclick="dayreport(${index})">${recnbrarry[index]}</td>
                        <td class="rec-tm" onclick="dayreport(${index})">${order.dates}</td>
                        <td class="rec-am" onclick="dayreport(${index})">${order.startTime}</td>
                        <td class="rec-win" onclick="dayreport(${index})">${order.EndTime}</td>
                        <td class="rec-bl" onclick="dayreport(${index})">${order.WorkedTime}</td>
                        <td class="rec-am" onclick="dayreport(${index})">${cashinaddCommas(order.Cashin)} Frw</td>
                        <td class="rec-win" onclick="dayreport(${index})">${cashoutaddCommas(order.Cashout)} Frw</td>
                        <td class="rec-bl" onclick="dayreport(${index})">${incomeaddCommas(order.income)} Frw</td>
                        <td class="total-number-subsription" onclick="dayreport(${index})">${order.games}</td>
                        <td class="total-number-subsription" onclick="dayreport(${index})">${order.rate}</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
// worked days
document.getElementById("worked-title1"). textContent = `${workingdays}`;
// games
var gamesnbr=0;
for (let i=dailyIncome.length-1; i>=0; i--) {
    gamesnbr += dailyIncome[i].games;
}
document.getElementById("gamesnbr"). textContent = `${gamesnbr}`;
// total cashin
var totalcashin=0;
for (let i=dailyIncome.length-1; i>=0; i--) {
    totalcashin += dailyIncome[i].Cashin;
}
document.getElementById("cashreceived"). textContent = `${incomeaddCommas(totalcashin)}`;
// rates
if(gamesnbr==0) {
    document.getElementById("ratenbr"). textContent = `${0}`;
}else {
    document.getElementById("ratenbr"). textContent = `${Math.floor(totalcashin/gamesnbr)}`;
}
// total cashout
var totalcashout=0;
for (let i=dailyIncome.length-1; i>=0; i--) {
    totalcashout += dailyIncome[i].Cashout;
}
document.getElementById("cashout"). textContent = `${incomeaddCommas(totalcashout)}`;
// total income
var totalincome=0;
for (let i=dailyIncome.length-1; i>=0; i--) {
    totalincome += dailyIncome[i].income;
}

document.getElementById("profit"). textContent = `${incomeaddCommas(totalincome)}`;
localStorage.setItem('totalincome',totalincome);

function dayreport(index) {
    // localStorage.setItem('userindexstore',index);
    console.log("index nbr",index + "index with date",dailyIncome[index].dates);
    const selecteddate= dailyIncome[index].dates.split("/");
    console.log("selecteddate",selecteddate);
    const savingdt= `${selecteddate[2]}-${selecteddate[1]}-${selecteddate[0]}`;
    console.log("savingdt",savingdt);
    localStorage.setItem('fulldailyrecords',savingdt);
    location.href='dayrec/dayrec.html';
}

// show capital
var capitalshow = 0;
function showcapital() {
    capitalshow=1;
    console.log("capital show is ", capitalshow);
    const bal = document.querySelector(".remain-bal");
    if (!bal) {
        document.querySelector('main .insights').style.opacity = '.1';
        document.querySelector('.recent-order').style.opacity = '.1';
        document.querySelector('.finance-header').style.opacity = '.1';
        var cashin = Number(localStorage.getItem("cashin"));
        var cashout = Number(localStorage.getItem("cashout"));
        const nowbalance = cashin - cashout;
        console.log("nowbalance is ",nowbalance);
        const percentageratio = Number(cashin *15)/100;

        var playerprize1 = Number((localStorage.getItem('playerprize')) || 0);
        console.log("playerprize1 is ",playerprize1);
        var shoot1sprize1 = Number((localStorage.getItem('shoot1sprize') || 0));
        console.log("shoot1sprize1 is ",shoot1sprize1);
        var shoot2sprize1 = Number((localStorage.getItem('shoot2sprize') || 0));
        console.log("shoot2sprize1 is ",shoot2sprize1);
        var shoot3sprize1 = Number((localStorage.getItem('shoot3sprize') || 0));
        console.log("shoot3sprize1 is ",shoot3sprize1);
        var shoot4sprize1 = Number((localStorage.getItem('shoot4sprize') || 0));
        console.log("shoot4sprize1 is ",shoot4sprize1);
        const totalcapital = playerprize1 + shoot1sprize1 + shoot2sprize1 + shoot3sprize1 + shoot4sprize1;
        const finalcapital = Math.floor(totalcapital);
        console.log("totalcapital is ",finalcapital);
        const tr = document.createElement('div');
        tr.className = "remain-bal";
        const trContent = `
                            <div class="rem-bal-title">Capital</div>
                            <div class="rem-bal-value">${incomeaddCommas(finalcapital*100)} Frw</div>
                            <div class="totalcash">
                                <div class="totalcashin">Cashin: ${incomeaddCommas(cashin*100)} Frw</div>
                                <div class="totalcashout">Cashout: ${incomeaddCommas(cashout*100)} Frw</div>
                            </div>
        `;
        tr.innerHTML = trContent;
        document.querySelector('main').appendChild(tr);
    }else {
        const bal = document.querySelector(".remain-bal");
        bal.remove();
        capitalshow=0;
        console.log("capital show is ", capitalshow);
        document.querySelector('main .insights').style.opacity = '1';
        document.querySelector('.recent-order').style.opacity = '1';
        document.querySelector('.finance-header').style.opacity = '1';
    };
};
window.addEventListener("click", function(e){
    console.log("capital show is ", capitalshow);
    
    const bal = document.querySelector(".remain-bal");
    if (bal && capitalshow==2) {
        const bal = document.querySelector(".remain-bal");
        bal.remove();
        capitalshow=0;
        console.log("capital show is ", capitalshow);
        document.querySelector('main .insights').style.opacity = '1';
        document.querySelector('.recent-order').style.opacity = '1';
        document.querySelector('.finance-header').style.opacity = '1';
    };
    capitalshow++;
});