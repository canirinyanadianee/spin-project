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
// document.getElementById('Credits-balance').innerText = Number(localStorage.getItem("cashin"))-Number(localStorage.getItem("cashout"));
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
function backtogameid() {
    location.href  = '../daily.html'
}
function game() {
    const gameplayedstatus = [
        {
            button1: 0,
            button2: 0,
            button3: 0,
            button4: 0,
            button5: 0,
            button6: 0,
            button7: 0,
            button8: 0,
            button9: 0,
            button10: 0,
            winvalue: 0,
            balancevalue: 0
        }
    ];
    localStorage.setItem('gameplayedstatus',JSON.stringify(gameplayedstatus));
    alert("This Game status restored again !!!");
}


function infomation() {
    console.log("clicked");
    location.href = '../about/game/game.html'
}
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
var allowmouse=0;
// cashout reset
function cashoutreset() {
    allowmouse=1;
    document.querySelector('.gameid').classList.add("sub-active");
    document.querySelector('.keypad').classList.add("sub-active");
    document.querySelector('.finance').classList.add("otherusers");
    document.querySelector('.gameid-header').textContent = "CashOut";
    document.querySelector('.gameid-function').textContent = "Reset";
    focusongameid();
}
// sub fault
function subfault() {
    allowmouse=2;
    document.querySelector('.gameid').classList.add("sub-active");
    document.querySelector('.keypad').classList.add("sub-active");
    document.querySelector('.finance').classList.add("otherusers");
    document.querySelector('.gameid-header').textContent = "SUBSCRIPTION";
    document.querySelector('.gameid-function').textContent = "Fault";
    focusongameid();
}
function subreset() {
    allowmouse=3;
    document.querySelector('.verify-code').classList.add("sub-active");
    document.querySelector('.keypad').classList.add("sub-active");
    document.querySelector('.finance').classList.add("otherusers");
    document.querySelector('.verify-code-header').textContent = "SUBSCRIPTION";
    document.querySelector('.generated-verify-code').textContent = "Setting";
    focusonverifyid();
}
var stopthing=0;
function subback() {
    allowmouse=0;
    document.querySelector('.verify-code').classList.remove("sub-active");
    document.querySelector('.gameid').classList.remove("sub-active");
    document.querySelector('.keypad').classList.remove("sub-active");
    document.querySelector('.finance').classList.remove("otherusers");
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
        codes1[0].focus();
    }, 500);
    stopthing=0;
    console.log("all codes value deleted? thevalue of allowouse is:",allowmouse)
    document.querySelector('.btn-primary').classList.remove("fail");
}
document.getElementById('keyboard1').addEventListener('click', event => {
    // console.log("click now")
    if(allowmouse==1 || allowmouse==2){
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
    }else if(allowmouse==3) {
        if(codes1[15].value!='') {
            codes1[15].value='';
            codes1[15].focus();
        }else if(codes1[14].value!='') {
            codes1[14].value='';
            codes1[14].focus();
        }else if(codes1[13].value!='') {
            codes1[13].value='';
            codes1[13].focus();
        }else if(codes1[12].value!='') {
            codes1[12].value='';
            codes1[12].focus();
        }else if(codes1[11].value!='') {
            codes1[11].value='';
            codes1[11].focus();
        }else if(codes1[10].value!='') {
            codes1[10].value='';
            codes1[10].focus();
        }else if(codes1[9].value!='') {
            codes1[9].value='';
            codes1[9].focus();
        }else if(codes1[8].value!='') {
            codes1[8].value='';
            codes1[8].focus();
        }else if(codes1[7].value!='') {
            codes1[7].value='';
            codes1[7].focus();
        }else if(codes1[6].value!='') {
            codes1[6].value='';
            codes1[6].focus();
        }else if(codes1[5].value!='') {
            codes1[5].value='';
            codes1[5].focus();
        }else if(codes1[4].value!='') {
            codes1[4].value='';
            codes1[4].focus();
        }else if(codes1[3].value!='') {
            codes1[3].value='';
            codes1[3].focus();
        }else if(codes1[2].value!='') {
            codes1[2].value='';
            codes1[2].focus();
        }else if(codes1[1].value!='') {
            codes1[1].value='';
            codes1[1].focus();
        }else if(codes1[0].value!='') {
            codes1[0].value='';
            codes1[0].focus();
        }
    }
})
function rechargebtn() {
    if(stopthing==0){
        if(allowmouse==1 || allowmouse==2){
            if(codes[11].value !=''){
                blocksub();
            }else {
            fail();
            }
        }else if(allowmouse==3) {
            if(codes1[15].value !=''){
                blocksub();
            }else {
            fail();
            }
        }
    }
}
function fail() {
    if(stopthing==0){
        stopthing=1;
        failback = setInterval(() => {
            document.querySelector('.btn-primary').classList.add("fail");
            document.querySelector('.btn-primary1').classList.add("fail");
            setTimeout(() => {
                document.querySelector('.btn-primary').classList.remove("fail");
                document.querySelector('.btn-primary1').classList.remove("fail");
            }, 100);
        }, 200);
        setTimeout(() => {
            clearInterval(failback);
            setTimeout(() => {
                if(allowmouse==3) {
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
                    codes1[0].focus();
                }else {
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
                }
            }, 500);
            stopthing=0;
        }, 3000);
    }
}
//

let num=0;
let stored=[];
let turn=[];
function blocksub() { 
    if(allowmouse==1 || allowmouse==2){
        num = `${codes[0].value}${codes[1].value}${codes[2].value}${codes[3].value}${codes[4].value}${codes[5].value}${codes[6].value}${codes[7].value}${codes[8].value}${codes[9].value}${codes[10].value}${codes[11].value}`
    }else if(allowmouse==3) {
        num = `${codes1[0].value}${codes1[1].value}${codes1[2].value}${codes1[3].value}${codes1[4].value}${codes1[5].value}${codes1[6].value}${codes1[7].value}${codes1[8].value}${codes1[9].value}${codes1[10].value}${codes1[11].value}${codes1[12].value}${codes1[13].value}${codes1[14].value}${codes1[15].value}}`
    }
    console.log("num",num);
    times= localStorage.getItem('cir') || 0;
    console.log("times",times);
    if(times==0) {
        localStorage.setItem('cashoutreset',JSON.stringify(turn));
        localStorage.setItem('subfault',JSON.stringify(turn));
        localStorage.setItem('subsetting',JSON.stringify(turn));
        cir=1;
        localStorage.setItem('cir',cir);
        // console.log("cir",cir);
    } else {
        // console.log("times",times);
    }
    stored=[];
    if(allowmouse==1) {
        stored = JSON.parse(localStorage.getItem('cashoutreset')) || [];
    }else if(allowmouse==2) {
        stored = JSON.parse(localStorage.getItem('subfault')) || [];
    }else if(allowmouse==3) {
        stored = JSON.parse(localStorage.getItem('subsetting')) || [];
    }
    stored = JSON.parse(localStorage.getItem('store')) || [];
    // console.log("stored",stored);
    if(stored.includes(num)){
        console.log("this num already exist!!!");
        fail();
    }else {
        gameidway();
    }
}
var ididentfy;
var idback;
var idfront;
function gameidway(){
    // start here 
    if(allowmouse==1) {
        ididentfy = `${codes[0].value}${codes[1].value}${codes[2].value}${codes[4].value}${codes[5].value}${codes[6].value}${codes[7].value}${codes[8].value}${codes[10].value}${codes[11].value}`;
        idback = codes[9].value;
        idfront = codes[3].value;
    }else if(allowmouse==2) {
        ididentfy = `${codes[0].value}${codes[1].value}${codes[2].value}${codes[3].value}${codes[5].value}${codes[6].value}${codes[7].value}${codes[8].value}${codes[9].value}${codes[11].value}`;
        idback = codes[10].value;
        idfront = codes[4].value;
    }else if(allowmouse==3) {
        ididentfy = `${codes1[1].value}${codes1[2].value}${codes1[3].value}${codes1[6].value}${codes1[7].value}${codes1[8].value}${codes1[9].value}${codes1[12].value}${codes1[13].value}${codes1[14].value}`;
        idback = codes1[11].value;
        idfront = codes1[4].value;
    }
    // console.log("ididentfy",ididentfy);
    identfytoarray = numberToDigits(ididentfy);
    // console.log("identfytoarray",identfytoarray);
    // idback 
    // idback = codes[8].value;
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
    // idfront = codes[2].value;
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
        if(allowmouse==3) {
            amountway();
        }else {
            savenewsub();
        }
    }else {
        console.log("no");
        console.log("gameidforsub",gameidforsub);
        console.log("newgameid",newgameid);
        fail()
    }

}
// gameidway();

var amountidentfy;
var amountback;
var amountfront;
let newamountway;
function amountway() {
    amountidentfy = `${codes1[0].value}${codes1[5].value}${codes1[10].value}${codes1[15].value}`;
    console.log(`codes1[0].value is ${codes1[0].value}, codes1[5].value is ${codes1[5].value}, codes1[10].value is ${codes1[10].value}, codes1[15].value is ${codes1[15].value}`);
    console.log("amountidentfy before converting",amountidentfy);
    amountback = codes1[11].value;
    amountfront = codes1[4].value;

    verifytoarray = numberToDigits(amountidentfy);
    for (let i=0; i < idback; i++) {
        function changeElement(arr, fromIndex, toIndex) {
            // Rechange the element from its current position
            let element = arr.splice(fromIndex, 1)[0];
            
            // Insert the element at the new position
            arr.splice(toIndex, 0, element);
            
            return arr;
        }
        // Example usage
        changeElement(verifytoarray, 3, 0); // change element at index 4 to index 0
        // console.log(newconvertedgameid);
    }
    newnormalgameid = [];
    for (let i = 0; i < verifytoarray.length; i++) {
        convertdt = verifytoarray[i] - idfront;
        convertdt = convertdt < 0 ? convertdt + 10 : convertdt
        newnormalgameid.push(convertdt);
    }
    // console.log("newnormalgameid",newnormalgameid);
    newamountway = Number(newnormalgameid.join(''));
    console.log("newamountway",newamountway);
    savenewsub();
}
function numberToDigits(ididentfy) {
    // Convert the number to a string
    let numberString = ididentfy.toString();
    // Split the string into an array of characters
    let digitsArray = numberString.split("");
    // Convert each character back to a number
    digitsArray = digitsArray.map(Number);
    return digitsArray;
}
function savenewsub() {
    stored.push(num);
    if(allowmouse==1) {
        localStorage.setItem('cashoutreset',JSON.stringify(stored));
        localStorage.setItem('shoot1sprize',0);
        localStorage.setItem('shoot2sprize',0);
        localStorage.setItem('shoot3sprize',0);
        localStorage.setItem('shoot4sprize',0);
        localStorage.setItem('playerprize',0);
        const gameplayedstatus = [
            {
                button1: 0,
                button2: 0,
                button3: 0,
                button4: 0,
                button5: 0,
                button6: 0,
                button7: 0,
                button8: 0,
                button9: 0,
                button10: 0,
                winvalue: 0,
                balancevalue: 0
            }
        ];
        localStorage.setItem('gameplayedstatus',JSON.stringify(gameplayedstatus));
        setTimeout(() => {
            location.href = 'reset.html';
        }, 3000);
        alert("CashOut Reset Successfully");
    }else if(allowmouse==2) {
        localStorage.setItem('subfault',JSON.stringify(stored));
        const lastincome =  JSON.parse(localStorage.getItem('lastloopincome'));
        console.log("lastincome is : ",lastincome);
        for (let index = 0; index < lastincome.length; index++) {
            const item = lastincome[index];
            const cashin = Number(item.cashin) || 0;
            const cashout = Number(item.cashout) || 0;
            if ((cashin - cashout) <= 10000) {
                console.log(`Index ${index}: TRUE (cashin - cashout = ${cashin - cashout})`);
                localStorage.setItem('cashin', cashin);
                localStorage.setItem('cashout', cashout);
                setTimeout(() => {
                    location.href = 'reset.html';
                }, 3000);
                alert(`Subscription Fault Successfully. Now your last balance is : ${Number(cashin - cashout)*100}`);
                break; // Exit the loop if condition is met
            } else {
                console.log(`Index ${index}: NO (cashin - cashout = ${cashin - cashout})`);
                alert("You can't do Subscription Fault, Because your last income is more than 10,000");
            }
        }
    }else if(allowmouse==3) {
        localStorage.setItem('subsetting',JSON.stringify(stored));
        localStorage.setItem('cashin', newamountway);
        localStorage.setItem('cashout', 0);
        localStorage.setItem('shoot1sprize',0);
        localStorage.setItem('shoot2sprize',0);
        localStorage.setItem('shoot3sprize',0);
        localStorage.setItem('shoot4sprize',0);
        localStorage.setItem('playerprize',0);
        setTimeout(() => {
            location.href = 'reset.html';
        }, 3000);
        alert(`Subscription Balance is : ${Number(newamountway)*100}`);
    }
}

// Add event listeners to all buttons with class 'key'
document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', event => {
        if(allowmouse==1 ||allowmouse==2) {
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
        }else if (allowmouse==3) {
            if(codes1[0].value==''){
                codes1[0].value = item.textContent;
            }else if(codes1[1].value=='') {
                codes1[1].value = item.textContent;
            }else if(codes1[2].value=='') {
                codes1[2].value = item.textContent;
            }else if(codes1[3].value=='') {
                codes1[3].value = item.textContent;
            }else if(codes1[4].value=='') {
                codes1[4].value = item.textContent;
            }else if(codes1[5].value=='') {
                codes1[5].value = item.textContent;
            }else if(codes1[6].value=='') {
                codes1[6].value = item.textContent;
            }else if(codes1[7].value=='') {
                codes1[7].value = item.textContent;
            }else if(codes1[8].value=='') {
                codes1[8].value = item.textContent;
            }else if(codes1[9].value=='') {
                codes1[9].value = item.textContent;
            }else if(codes1[10].value=='') {
                codes1[10].value = item.textContent;
            }else if(codes1[11].value=='') {
                codes1[11].value = item.textContent;
            }else if(codes1[12].value=='') {
                codes1[12].value = item.textContent;
            }else if(codes1[13].value=='') {
                codes1[13].value = item.textContent;
            }else if(codes1[14].value=='') {
                codes1[14].value = item.textContent;
            }else if(codes1[15].value=='') {
                codes1[15].value = item.textContent;
            }
        }
        // console.log(item.textContent)
    });
});
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
function focusonverifyid() {
    console.log("focusonverifyid is selected");
    if(codes1[0].value==''||codes1[1].value==''||codes1[2].value==''||codes1[3].value==''||codes1[4].value==''||codes1[5].value==''||codes1[6].value==''||codes1[7].value==''||codes1[8].value==''||codes1[9].value==''||codes1[10].value==''||codes1[11].value==''||codes1[12].value==''||codes1[13].value==''||codes1[14].value==''||codes1[15].value==''){
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
        }
        
    }
};
window.addEventListener("mouseup", function(e){
    if(allowmouse==1||allowmouse==2){
        focusongameid();
    }
    if(allowmouse==3){
        focusonverifyid();
    }
});