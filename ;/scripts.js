const startButton = document.querySelector('.button');
const body = document.querySelector('body');
var distart = 0;
var soundspin = new Audio();
var luckyspin = new Audio();
var sound2of2 = new Audio();
var lowmusic = new Audio();
var gunshoot = new Audio();
var gunshoot2 = new Audio();
gunshoot2.src = "./;/gunshoot2.mp4"
gunshoot.src = "./;/gunshoot.mp4"
luckyspin.src = "./;/lucky spin.mp4"
sound2of2.src = "./;/shoot2sound.mp4"
lowmusic.src = "./;/low.mp4"
var abs=0;
if('BroadcastChannel' in window) {
    const channel = new BroadcastChannel('unique_channel_name');
    channel.addEventListener('message', event => {
        window.close();
    })
    channel.postMessage('element_opened');
} else {
    // console.log('Boardcast Channel API is not supported in this browser.');
}

function erstoregamestatus() {
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
}
const balanceDiv = document.getElementById('output1');
function sizebal() {
    const textLength = balanceDiv.textContent.length;
    console.log("textLength of sizebal is ",textLength);
    balanceDiv.textContent = balanceDiv.textContent.replace(/[^0-9]/g, '').slice(0, 6);
    if (textLength > 6) {
        erstoregamestatus();
        location.href = 'MOO-GAME.html';
    } else if (textLength > 5) {
        balanceDiv.style.fontSize = "45px";
        balanceDiv.style.top = "5.2%";
    } else {
        balanceDiv.style.fontSize = "50px";
    }
}

window.addEventListener('storage', function(event) {
    if (event.key === 'cashin') {
        cashin = Number(localStorage.getItem("cashin"));
    }
    if (event.key === 'cashout') {
        cashout = Number(localStorage.getItem("cashout"));
    }
    if (event.key === 'playerprize') {
        playerprize = Number(localStorage.getItem("playerprize"));
    }
    if (event.key === 'shoot1sprize') {
        shoot1sprize = Number(localStorage.getItem("shoot1sprize"));
    }
    if (event.key === 'highshootsprize') {
        highshootsprize = Number(localStorage.getItem("highshootsprize"));
    }
    if (event.key === 'money') {
        money = Number(localStorage.getItem("money"));
    }
    if (event.key === 'highmoney') {
        highmoney = Number(localStorage.getItem("highmoney"));
    }
    if (event.key === 'reporttoday') {
        reporttoday = JSON.parse(localStorage.getItem(`${logindates}`));
    }
    if (event.key === 'reporttoday') {
        reporttoday = JSON.parse(localStorage.getItem(`${logindates}`));
    }
    if (event.key === 'stopall') {
        stopall = Number(localStorage.getItem('stopall'));
        console.log("stopall value",stopall);
    }
    if (event.key === 'gameplayedstatus') {
        console.log("there a change!")
        gameplayedstatus = JSON.parse(localStorage.getItem('gameplayedstatus')) || 0;
        startbal = Number(gameplayedstatus[0].balancevalue || 0)
        qaziCheking = new Bank(startbal);
        balanceDiv.innerText = Math.floor(startbal *100);
        sizebal()
        console.log("startbal",startbal);
        win = Number(gameplayedstatus[0].winvalue) || 0;
        winafter.innerHTML = win *100;
        count1 = Number(gameplayedstatus[0].button1 || 0)
        count2 = Number(gameplayedstatus[0].button2 || 0)
        count3 = Number(gameplayedstatus[0].button3 || 0)
        count4 = Number(gameplayedstatus[0].button4 || 0)
        count5 = Number(gameplayedstatus[0].button5 || 0)
        count6 = Number(gameplayedstatus[0].button6 || 0)
        count7 = Number(gameplayedstatus[0].button7 || 0)
        count8 = Number(gameplayedstatus[0].button8 || 0)
        count9 = Number(gameplayedstatus[0].button9 || 0)
        count10 = Number(gameplayedstatus[0].button10 || 0)
        allbuttondappear();
    }

});

var highbalance= Number(newBalance);

var allowstart=0;

function transbtn() {
    if(event.button==0 && gamerunning==0) {
        transaction();
        allowstart=1;
    }else {
        console.log("this button is not functionare weel!")
    }
}
var cashpop=0;
function addbtn() {
    if(cashpop==0&&withdrawInput.value=='') {
        cashpop=1;
        document.getElementById('user').placeholder = 'ADD';
        document.getElementById('user').focus();
        document.getElementById('cashbtn').value = 'CASH';
    }else if(cashpop==1&&withdrawInput.value==''){
        cashpop=0;
        document.getElementById('cashbtn').value = 'Add';
        document.getElementById('user').placeholder = 'CASH';
        document.getElementById('user').focus();
    }else {
        transbtn();
    }
}
update= new Date().getTime();
deadline = Number(localStorage.getItem('deadline') || 0);
innocent();
var step=1;
var enterinpop=0;
// console.log("step",step);
var freeshoot=0;

// to stop button during spinning
var buttons=0;
function soundeffect(){
    // pauseallmusic();
}

var stopall=0;
var newmoo=0;
function transaction() {
    console.log('newBalance',newBalance);
    declared();
    balancecash = Number(localStorage.getItem("cashin")) - Number(localStorage.getItem("cashout"));
    var summationcash = balancecash + sumbutton;
    console.log("summationcash is",summationcash);
    var nowmoo = Number(localStorage.getItem('snbr'));
    console.log(nowmoo);
    //
    const winafter = document.querySelector('.winafter');
    let win = Number(winafter.textContent)/100 || 0;
    if(win>0) {
        addtobalance(); 
        storegamestatus()   
        console.log('addtobalance');
    }else if(amount1>=1){
        valueinbox =0;
        if(newBalance==0 && win==0){
            var amount = Math.floor(Number(depositInput.value)/100); 
            if(amount<1){
                depositInput.value = '';
                depositInput.focus();
            }else if(amount<=999){
                // var amount = Number(depositInput.value)/100;
                qaziCheking.deposit(amount)
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                newBalance = Number(qaziCheking.balance);
                console.log({Balance: newBalance})
                // password.value = ''
                depositInput.value = '';
                withdrawInput.value = '';
                newBalance = Number(qaziCheking.balance);
                // balancestored()
                storegamestatus()
                popu=0;
                document.querySelector(".popup").classList.remove("active");
            }else if(amount>999){
                depositInput.value = '';
                depositInput.focus();
            }
        }else if(newBalance>0 && win==0){
            var amount = Math.floor(Number(withdrawInput.value)/100); 
            if(amount<1){
                withdrawInput.value = ''
                withdrawInput.focus();
            }else if(amount>newBalance){
                if(cashpop==1) {
                    qaziCheking.winvalue(amount)
                    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                    sizebal()
                    console.log('CASH', amount)
                    newBalance = Number(qaziCheking.balance);
                    console.log({Balance: newBalance})
                    withdrawInput.value = '';
                    depositInput.value = '';
                    withdrawInput.focus();
                    newBalance = Number(qaziCheking.balance);
                    // balancestored()
                    storegamestatus()
                    valueinbox =0;
                    popu=0;
                    document.querySelector(".popup1").classList.remove("active");
                    cashpop=0;
                    document.getElementById('cashbtn').value = 'Add';
                    document.getElementById('user').placeholder = 'CASH';
                }else {
                    withdrawInput.value = ''
                    withdrawInput.focus();
                }
            }else if(amount<=newBalance){
                if(cashpop==0){
                    qaziCheking.withdraw(amount);
                    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                    sizebal()
                    console.log('CASH', amount)
                    newBalance = Number(qaziCheking.balance);
                    console.log({Balance: newBalance})
                    withdrawInput.value = '';
                    depositInput.value = '';
                    withdrawInput.focus();
                    newBalance = Number(qaziCheking.balance);
                    // balancestored()
                    storegamestatus()
                    valueinbox =0;
                    popu=0;
                    document.querySelector(".popup1").classList.remove("active");
                    removeannimaiton();
                }else if(cashpop==1) {
                    qaziCheking.winvalue(amount)
                    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                    sizebal()
                    console.log('CASH', amount)
                    newBalance = Number(qaziCheking.balance);
                    console.log({Balance: newBalance})
                    withdrawInput.value = '';
                    depositInput.value = '';
                    withdrawInput.focus();
                    newBalance = Number(qaziCheking.balance);
                    // balancestored()
                    storegamestatus()
                    valueinbox =0;
                    popu=0;
                    document.querySelector(".popup1").classList.remove("active");
                }
                // every end
                cashpop=0;
                document.getElementById('cashbtn').value = 'Add';
                document.getElementById('user').placeholder = 'CASH';
            }
        }  
    }else if(newBalance==0 && win==0){
        valueinbox=1;
        // console.log('newBalance and winvalue is 0');
        document.querySelector(".popup").classList.add("active");
        depositInput.focus();
        if(amount2<=1 && popu==1){
            document.querySelector(".popup").classList.remove("active");
            // balancedivrec();
            // setTimeout(balancedivclear, 10000);
            popu=0;
        }else{
            popu=1;
        }                  
    }else if(newBalance>0 && win==0){
        valueinbox=1
        withdrawInput.value = ''
        document.querySelector(".popup1").classList.add("active");
        withdrawInput.focus();
        if(amount2<=1 && popu==1){
            document.querySelector(".popup1").classList.remove("active");
            cashpop=0;
            document.getElementById('cashbtn').value = 'Add';
            document.getElementById('user').placeholder = 'CASH';
            // balancedivrec();
            // setTimeout(balancedivclear, 10000);
            storegamestatus()
            popu=0;
        }else{
            popu=1;
        } 
    }  
}
const timesanimat = document.querySelector('.timesanimat');
const shoot1 = document.querySelector('.shootanimat1');
const shoot2 = document.querySelector('.shootanimat2');
const shoot3 = document.querySelector('.shootanimat3');
const shoot6 = document.querySelector('.shootanimat6');
const shoot5 = document.querySelector('.shootanimat5');
const shoot4 = document.querySelector('.shootanimat4');
const shoot10 = document.querySelector('.shootanimat10');


// *3animation 
const madrid3 = document.querySelector('.win40times2-3');
const barca3 = document.querySelector('.win30player3-3');
const psg3 = document.querySelector('.win20player4-3');
const bayern3 = document.querySelector('.win20player5-3');
const city3 = document.querySelector('.win20player6-3');
const united3 = document.querySelector('.win10player7-3');
const arsenal3 = document.querySelector('.win10player8-3');
const liverpool3 = document.querySelector('.win10player9-3');
const chelsea5 = document.querySelector('.win5player10-5');
// *3animation
// *100-10 animation
const bar100 = document.querySelector('.win100times1-100');
const bar50 = document.querySelector('.win100times1-50');
const madrid40 = document.querySelector('.win40times2-40');
const barca30 = document.querySelector('.win30player3-30');
const psg20 = document.querySelector('.win20player4-20');
const bayern20 = document.querySelector('.win20player5-20');
const city20 = document.querySelector('.win20player6-20');
const united10 = document.querySelector('.win10player7-10');
const arsenal10 = document.querySelector('.win10player8-10');
const liverpool10 = document.querySelector('.win10player9-10');
// *100-10 animation
// *players animation
const bar = document.querySelector('.win100player1');
const madrid = document.querySelector('.win40player2');
const barca = document.querySelector('.win30player3');
const psg = document.querySelector('.win20player4');
const bayern = document.querySelector('.win20player5');
const city = document.querySelector('.win20player6');
const united = document.querySelector('.win10player7');
const arsenal = document.querySelector('.win10player8');
const liverpool = document.querySelector('.win10player9');
const chelsea = document.querySelector('.win5player10');
// // *players animation
setTimeout(autoanimation, 10000);
function autoanimation() {
    // timesanimat.classList.add("timesanimation");
    // soundeffect();
}
// playmusic


function buttonduringspin(){
    button1.style.pointerEvents = 'none';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    button5.style.pointerEvents = 'none';
    button6.style.pointerEvents = 'none';
    button7.style.pointerEvents = 'none';
    button8.style.pointerEvents = 'none';
    button9.style.pointerEvents = 'none';
    button10.style.pointerEvents = 'none';
    buttonpay.style.pointerEvents = 'none';
    buttoncash.style.pointerEvents = 'none';
}
function allowbutton(){
    startButton.style.pointerEvents = 'auto';
    button1.style.pointerEvents = 'auto';
    button2.style.pointerEvents = 'auto';
    button3.style.pointerEvents = 'auto';
    button4.style.pointerEvents = 'auto';
    button5.style.pointerEvents = 'auto';
    button6.style.pointerEvents = 'auto';
    button7.style.pointerEvents = 'auto';
    button8.style.pointerEvents = 'auto';
    button9.style.pointerEvents = 'auto';
    button10.style.pointerEvents = 'auto';
    buttonpay.style.pointerEvents = 'auto';
    buttoncash.style.pointerEvents = 'auto';
}
function removeannimaiton(){
    removenotescoins();
    // if(runnan==1){
    //     clearTimeout(runplayerannimation);
    // }
    // timesanimat.classList.remove("timesanimation");
    shoot1.classList.remove("shoot1animation");
    shoot2.classList.remove("shoot2animation");
    shoot3.classList.remove("shoot3animation");
    shoot6.classList.remove("shoot6animation");
    shoot10.classList.remove("shoot10animation");
    // remove display
    // 1 shoots
    position1.classList.remove("shootr2-5");
    position1.classList.remove("shootr3-5");
    position1.classList.remove("shootr4-5");
    position1.classList.remove("shootr5-5");
    position1.classList.remove("shootr6-5");
    position1.classList.remove("shootr7-5");
    position1.classList.remove("shootr8-5");
    position1.classList.remove("shootr9-5");
    position1.classList.remove("shootr10-6");
    position1.classList.remove("shootr1-50");
    position1.classList.remove("shootr1-100");
    position1.classList.remove("shootr2-40");
    position1.classList.remove("shootr3-30");
    position1.classList.remove("shootr4-20");
    position1.classList.remove("shootr5-20");
    position1.classList.remove("shootr6-20");
    position1.classList.remove("shootr7-10");
    position1.classList.remove("shootr8-10");
    position1.classList.remove("shootr9-10");
    // 2 shoots
    // 1/2shoots
    position12.classList.remove("shootr9-5");
    position12.classList.remove("shootr9-10");
    position12.classList.remove("shootr8-5");
    position12.classList.remove("shootr8-10");
    position12.classList.remove("shootr6-20");
    position12.classList.remove("shootr6-4");
    position12.classList.remove("shootr5-20");
    position12.classList.remove("shootr5-5");
    position12.classList.remove("shootr6-5");
    position12.classList.remove("shootr3-30");
    position12.classList.remove("shootr3-5");
    // 2/2shoots
    position22.classList.remove("shootr8-5");
    position22.classList.remove("shootr8-10");
    position22.classList.remove("shootr7-10");
    position22.classList.remove("shootr7-5");
    position22.classList.remove("shootr5-20");
    position22.classList.remove("shootr5-5");
    position22.classList.remove("shootr4-20");
    position22.classList.remove("shootr4-5");
    position22.classList.remove("shootr2-40");
    position22.classList.remove("shootr2-5");
    // 3 shoots
    // 1/3 shoots
    position13.classList.remove("shootr9-10");
    position13.classList.remove("shootr6-20");
    position13.classList.remove("shootr3-30");
    position13.classList.remove("shootr9-5");
    position13.classList.remove("shootr6-5");
    position13.classList.remove("shootr3-5");
    // 2/3 shoots
    position23.classList.remove("shootr8-10");
    position23.classList.remove("shootr5-20");
    position23.classList.remove("shootr2-40");
    position23.classList.remove("shootr8-5");
    position23.classList.remove("shootr5-5");
    position23.classList.remove("shootr2-5");
    // 3/3 shoots
    position33.classList.remove("shootr7-10");
    position33.classList.remove("shootr4-20");
    position33.classList.remove("shootr1-100");
    position33.classList.remove("shootr7-5");
    position33.classList.remove("shootr4-5");
    position33.classList.remove("shootr1-50");
    // 6 shoots
    // 1/6 shoots
    position16.classList.remove("shootr9-10");
    position16.classList.remove("shootr6-20");
    // 2/6 shoots
    position26.classList.remove("shootr8-10");
    position26.classList.remove("shootr5-20");
    // 3/6 shoots
    position36.classList.remove("shootr7-10");
    position36.classList.remove("shootr4-20");
    // 4/6 shoots
    position46.classList.remove("shootr6-20");
    position46.classList.remove("shootr3-30");
    position56.classList.remove("shootr2-40");
    position66.classList.remove("shootr1-100")
    position56.classList.remove("shootr5-20");
    position66.classList.remove("shootr4-20");
    // 5/6 shoots
    position46.classList.remove("shootr5-20");
    position46.classList.remove("shootr2-40");
    // 6/6 shoots
    position46.classList.remove("shootr4-20");
    position46.classList.remove("shootr1-100");
    // 10 shoots
    position110.classList.remove("shootr10-6");
    position210.classList.remove("shootr9-10");
    position310.classList.remove("shootr8-10");
    position410.classList.remove("shootr7-10");
    position510.classList.remove("shootr6-20");
    position610.classList.remove("shootr5-20");
    position710.classList.remove("shootr4-20");
    position810.classList.remove("shootr3-30");
    position910.classList.remove("shootr2-40");
    position1010.classList.remove("shootr1-100");
}
var runnan=0;
const position1 = document.querySelector('.shootposition1');
const position12 = document.querySelector('.shootposition1-2');
const position22 = document.querySelector('.shootposition2-2');
const position13 = document.querySelector('.shootposition1-3');
const position23 = document.querySelector('.shootposition2-3');
const position33 = document.querySelector('.shootposition3-3');
const position16 = document.querySelector('.shootposition1-6');
const position26 = document.querySelector('.shootposition2-6');
const position36 = document.querySelector('.shootposition3-6');
const position46 = document.querySelector('.shootposition4-6');
const position56 = document.querySelector('.shootposition5-6');
const position66 = document.querySelector('.shootposition6-6');
const position110 = document.querySelector('.shootposition1-10');
const position210 = document.querySelector('.shootposition2-10');
const position310 = document.querySelector('.shootposition3-10');
const position410 = document.querySelector('.shootposition4-10');
const position510 = document.querySelector('.shootposition5-10');
const position610 = document.querySelector('.shootposition6-10');
const position710 = document.querySelector('.shootposition7-10');
const position810 = document.querySelector('.shootposition8-10');
const position910 = document.querySelector('.shootposition9-10');
const position1010 = document.querySelector('.shootposition10-10');
function s3(){
    stopall=0;
    localStorage.setItem('stopall',stopall);
    start = 7261;
    end = 61;
    win = count2 * 5; 
    // console.log('Real Madrid');
    lowmusic.play();
    // lowonceshoot();
    setTimeout(() => {
        position1.classList.add("shootr2-5"); 
        windisplay();
        if(betcondition==1){
            clearcount2();
        }
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${end}deg)`;
    }, 6030);
};
function d3(){
    stopall=0;
    localStorage.setItem('stopall',stopall);
    start = 7297;
    end = 97;
    win = count3 * 5; 
    // console.log('FC Barcelona');
    lowmusic.play();
    // lowonceshoot()
    setTimeout(() => {
        position1.classList.add("shootr3-5"); 
        windisplay();
        if(betcondition==1){
            clearcount3();
        }  
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${end}deg)`;
    }, 6030);
}
function f3(){
    stopall=0;
    localStorage.setItem('stopall',stopall);
    start = 7334.5;
    end = 134.5;
    win = count4 * 5;
    // console.log('Paris saint-Germain') 
    lowmusic.play();
    // lowonceshoot()
    setTimeout(() => {
        position1.classList.add("shootr4-5"); 
        windisplay();
        if(betcondition==1){
            clearcount4();
        }   
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${end}deg)`;
    }, 6030);
}
function g3(){
    stopall=0;
    localStorage.setItem('stopall',stopall);
    start = 7372;
    end = 172;
    win = count5 * 5; 
    // console.log('FC Bayern Munich')
    lowmusic.play(); 
    // lowonceshoot()
    setTimeout(() => {
        position1.classList.add("shootr5-5"); 
        windisplay();
        if(betcondition==1){
            clearcount5();
        }   
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${end}deg)`;
    }, 6030);
}
function h3(){
    stopall=0;
    localStorage.setItem('stopall',stopall);
    start = 7409;
    end = 209; 
    win = count6 * 5; 
    // console.log('Machester city')
    lowmusic.play();
    // lowonceshoot()
    setTimeout(() => {
        position1.classList.add("shootr6-5"); 
        windisplay();
        if(betcondition==1){
            clearcount6();
        }   
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${end}deg)`;
    }, 6030);
}
function j3(){
    stopall=0;
    localStorage.setItem('stopall',stopall);
    start = 7445.5;
    end = 244.5;   
    win = count7 * 5;
    // console.log('machester united')
    // lowmusic.play();
    setTimeout(() => {
        position1.classList.add("shootr7-5"); 
        windisplay();
        if(betcondition==1){
            clearcount7();
        } 
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${end}deg)`;
    }, 6030);
}
function k3(){
    stopall=0;
    localStorage.setItem('stopall',stopall);
    start = 7482;
    end = 282;
    win = count8 * 5;
    // console.log('Arsenal')
    lowmusic.play();
    // lowonceshoot()
    setTimeout(() => {
        position1.classList.add("shootr8-5"); 
        windisplay();
        if(betcondition==1){
            clearcount8();
        }   
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${end}deg)`;
    }, 6030);
}
function l3(){
    stopall=0;
    localStorage.setItem('stopall',stopall);
    start = 7516.5;
    end = 316.5;
    win = count9 * 5;
    // console.log('Liverpool') 
    lowmusic.play();
    // lowonceshoot()
    setTimeout(() => {
        position1.classList.add("shootr9-5"); 
        windisplay();
        if(betcondition==1){
            clearcount9();
        } 
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${end}deg)`;
    }, 6030);
}
function p5(){
    stopall=0;
    localStorage.setItem('stopall',stopall);
    start = 7533;
    end = 333;
    win = count10 * 6;
    // console.log('Chelsea')
    lowmusic.play();
    // lowonceshoot()
    setTimeout(() => {
        position1.classList.add("shootr10-6"); 
        windisplay();
        if(betcondition==1){
            clearcount10();
        }
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${end}deg)`;
    }, 6030);
}
var introlucky = 0;
function luckyin(){
    stopall=0;
    localStorage.setItem('stopall',stopall);
    start = 7551;
    end = 351;
    introlucky=1;
    soundspin.src = "./;/KANA FINAL.mp4"
    soundspin.play();
    setTimeout(() => {
        luckyspin.play();
    }, 6030);
};
var amafa = Number(localStorage.getItem("amafa"));
console.log('amafa',amafa);
var cashin = Number(localStorage.getItem("cashin"));
var cashout = Number(localStorage.getItem("cashout"));
const wheel = document.querySelector('.wheel');
var pressenter=0;
var gamerunning = 0;
function gobtn() {
    if(betcondition==0) {
        //
        gamerunning=0;
        console.log("start button begin..");
        document.querySelector(".popup").classList.remove("active");
        document.querySelector(".popup1").classList.remove("active");
        depositInput.value = '';
        withdrawInput.value = '';
        removeannimaiton(); 
        // Disable button during spin
        runshootnomoney();
        // Set the transition on the wheel
        wheel.style.transition = 'all 6.03s ease-out';
        // Rotate the wheel
        wheel.style.transform = `rotate(${start}deg)`;
        // Apply the blur
        wheel.classList.add('blur');
        // CloseEvent.
    }else {
       //
        if(gamerunning==0) {
            betbtn.classList.remove("buttongo");
            betbtn.classList.remove("buttonwait");
            betbtn.classList.add("buttonbet");
            betcondition=1;
            //
            update= new Date().getTime();
            deadline = Number(localStorage.getItem('deadline') || 0);
            console.log("sumbutton",sumbutton);
            distart++;
            removeannimaiton();
            document.querySelector(".popup").classList.remove("active");
            runshoot();
            //storegamestatus();
            moneyrunonce = 0;
            // Set the transition on the wheel
            wheel.style.transition = 'all 6.03s ease-out';
            // Rotate the wheel
            wheel.style.transform = `rotate(${start}deg)`;
            // Apply the blur
            wheel.classList.add('blur');
            // CloseEvent.
        }
    }
}
// let do button here
const betbtn = document.querySelector(".cash");
betbtn.classList.remove("buttonbet");
betbtn.classList.add("buttongo");
var betcondition=0;
function betbutton() {
    if(gamerunning==0) {
        if(betcondition==2) {
            betcondition=0;
            betbtn.classList.remove("buttonbet");
            betbtn.classList.remove("buttonwait");
            betbtn.classList.add("buttongo");
        }else if(betcondition==0) {
            totalbuttonstored();
            totalbuttonvalue();
            document.querySelector(".popup").classList.remove("active");
            document.querySelector(".popup1").classList.remove("active");
            if(count1==0 && count2==0 && count3==0 && count4==0 && count5==0 && count6==0 && count7==0 && count8==0 && count9==0 && count10==0 && distart==0){
                addtobalance();
                if(newBalance>=totalvalue && totalvalue>0){
                    sumbutton = Number(totalvalue);
                    callvalue1()
                    callvalue2()
                    callvalue3()
                    callvalue4()
                    callvalue5()
                    callvalue6()
                    callvalue7()
                    callvalue8()
                    callvalue9()
                    callvalue10()
                    // buttonduringspin();
                    betbtn.classList.remove("buttongo");
                    betbtn.classList.add("buttonwait");
                    betcondition=2;
                }
            }else {
                var allbuttonvalue = count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10;
                if(allbuttonvalue>=1){
                    betbtn.classList.remove("buttongo");
                    betbtn.classList.add("buttonwait");
                    betcondition=2;
                }else {
                    alert("Please select at least one button to bet.");
                }
            }
        }
    }else {
        alert("You can't change your bet during the game. Please wait for this round to finish.");
    }
}
//
(function () {
    const wheel = document.querySelector('.wheel');
    window.addEventListener("keyup", function(e){
        if(e.keyCode==109){
            betbutton();        
        }else if(e.keyCode==80){
            betbutton();       
        }else if(e.keyCode==13){
            betbutton();       
        }else if(stopall==0){
            console.log("start button stop");
        };
    });
    wheel.addEventListener('transitionend', () => {
         // Remove blur
         wheel.classList.remove('blur');
         console.log('newBalance',newBalance);
         console.log("end of process");
         return 0;
      
    });
})();

// (stop all button to work) start................
function stopbuttondelay() {
    wheel.classList.remove('blur');
    // startButton.style.pointerEvents = 'none';
    buttonduringspin();
}
// (stop all button to work) end..................


var valueinbox=0;
var amount1;
var amount2;
function declared(){
    if(newBalance==0 && win==0){
        amount1 = Math.floor(Number(depositInput.value)/100); 
        amount2 = Math.floor(Number(depositInput.value)); 
    }
    if(newBalance>0 && win==0){
        amount1 = Math.floor(Number(withdrawInput.value)/100); 
        amount2 = Math.floor(Number(withdrawInput.value));
    }  
}

// deposit && cash button begin...............
var allogamebt=0;



class Bank {
    constructor(balance) {
        this.balance = balance
    }

    withdraw(amount) {
        this.balance -= amount
    }

    cash() {
        console.log("win", win);
        var cashout1 = Number(localStorage.getItem('cashout')) + Number(win);
        console.log("cashout",cashout1);
        localStorage.setItem('cashout', cashout1);
        try {
            localStorage.setItem('cashout', cashout1);
        } catch (e) {
            console.warn('Could not save before unload', e);
        }
        balancecash = Number(localStorage.getItem('cashin')) - Number(localStorage.getItem('cashout'));
        console.log("balancecash",balancecash);
    }

    deposit(amount) {
        this.balance += amount
    }

    totalpay() {
        console.log("totalvalue", totalvalue);
        var cashin1 = Number(localStorage.getItem('cashin'))+totalvalue;
        console.log("cashin",cashin1);
        localStorage.setItem('cashin', cashin1);
        try {
            localStorage.setItem('cashin', cashin1);
        } catch (e) {
            console.warn('Could not save before unload', e);
        }
        balancecash = Number(localStorage.getItem('cashin')) - Number(localStorage.getItem('cashout'));
        console.log("balancecash",balancecash);
    }

    winvalue(amount) {
        this.balance += amount
    }
}
var balancecash = localStorage.getItem("cashin") - localStorage.getItem("cashout");
console.log("balancecash",balancecash);


let password2 = document.getElementById("password11");
var password3 = document.querySelector('.password3');

let agent = document.getElementById("agentnumber");
let password = document.getElementById("password");
let password1 = document.getElementById("password1");
const depositInput = document.getElementById('tbuser');
const withdrawInput = document.getElementById('user');

depositInput.addEventListener('input', function () {
    // Get the length of the text entered
    const textLength = this.value.length;
    console.log("textLength of the inputField is ",textLength);
    this.value = this.value.replace(/[^0-9]/g, '').slice(0, 5);
});
withdrawInput.addEventListener('input', function () {
    // Get the length of the text entered
    const textLength = this.value.length;
    console.log("textLength of the inputField is ",textLength);
    this.value = this.value.replace(/[^0-9]/g, '').slice(0, 6);
});
var balancecash=0;

// back btn
function backbtn() {
    console.warn('back button pressed!!!....1');
    if(gamerunning==0) {
        console.warn('back button pressed!!!....2');
        const winafter = document.querySelector('.winafter');
        let win = Number(winafter.textContent)/100 || 0;
        if(win>0){
            addtobalance(); 
            storegamestatus();
            console.warn('back button pressed!!!....addtobalance');
        }else{
            declared();
            if(popu==1){
                console.warn('back button pressed!!!....popup');
                if(amount2>=1){
                    depositInput.value = '';
                    withdrawInput.value = '';
                    withdrawInput.focus();
                    depositInput.focus();
                }else{
                    console.log("amount2 to close pupup", amount2);
                    document.querySelector(".popup").classList.remove("active");
                    document.querySelector(".popup1").classList.remove("active");                   
                    depositInput.value = '';
                    withdrawInput.value = '';
                    popu=0;
                    console.log("popu", popu);
                } 
            }else{    
                // console.log("back button has pressed!");
                // console.log("amount2 to close pupup", amount2);
                // document.querySelector(".popup").classList.remove("active");
                // document.querySelector(".popup1").classList.remove("active");
                // depositInput.value = '';
                // withdrawInput.value = '';
                var allbut = count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10;
                var amount = allbut;
                qaziCheking.winvalue(amount);
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                newBalance = Number(qaziCheking.balance);
                balancedivrec();
                to0();
                storegamestatus();
                output1.innerHTML = count1;
                output2.innerHTML = count2;
                output3.innerHTML = count3;
                output4.innerHTML = count4;
                output5.innerHTML = count5;
                output6.innerHTML = count6;
                output7.innerHTML = count7;
                output8.innerHTML = count8;
                output9.innerHTML = count9;
                output10.innerHTML = count10;
                soundeffect();
                popu=0;
                console.warn('back button pressed!!!....4');
                
            }
        }
        // innocent();
    }
}

// BACK start...............................
var checkfull = 0;
window.addEventListener("keyup", function(e){
    if(checkfull==0){
        document.documentElement.requestFullscreen().catch();
        checkfull = 1;
    };
    if(e.keyCode==87){
        backbtn();
    }
    if(e.keyCode==8){
        backbtn();
    }
});
// BACK end...............................

var voidkujurira=1;

// ALL+1 start..............
var popu=0;
var soundp=1;

function allbuttondappear() {
    output1.innerHTML = count1*100;
    output2.innerHTML = count2*100;
    output3.innerHTML = count3*100;
    output4.innerHTML = count4*100;
    output5.innerHTML = count5*100;
    output6.innerHTML = count6*100;
    output7.innerHTML = count7*100;
    output8.innerHTML = count8*100;
    output9.innerHTML = count9*100;
    output10.innerHTML = count10*100;
    out1();
    out2();
    out3();
    out4();
    out5();
    out6();
    out7();
    out8();
    out9();
    out10();
}
function out6() {
    const token6 = document.getElementById('display6');
    const textLength = token6.textContent.length;
    console.log("textLength is ",textLength);
  if (textLength > 6) {
      token6.style.fontSize = "16px";
    } else if (textLength > 5) {
      token6.style.fontSize = "20px";
    } else if (textLength > 4) {
      token6.style.fontSize = "25px";
    } else {
      token6.style.fontSize = "33px";
    }
    token6.innerHTML = count6*100;
};
function out5() {
    const token5 = document.getElementById('display5');
    const textLength = token5.textContent.length;
    console.log("textLength is ",textLength);
  if (textLength > 6) {
      token5.style.fontSize = "16px";
    } else if (textLength > 5) {
      token5.style.fontSize = "20px";
    } else if (textLength > 4) {
      token5.style.fontSize = "25px";
    } else {
      token5.style.fontSize = "33px";
    }
    token5.innerHTML = count5*100;
};
function out4() {
    const token4 = document.getElementById('display4');
    const textLength = token4.textContent.length;
    console.log("textLength is ",textLength);
  if (textLength > 6) {
      token4.style.fontSize = "16px";
    } else if (textLength > 5) {
      token4.style.fontSize = "20px";
    } else if (textLength > 4) {
      token4.style.fontSize = "25px";
    } else {
      token4.style.fontSize = "33px";
    }
    token4.innerHTML = count4*100;
};
function out3() {
    const token3 = document.getElementById('display3');
    const textLength = token3.textContent.length;
    console.log("textLength is ",textLength);
  if (textLength > 6) {
      token3.style.fontSize = "16px";
    } else if (textLength > 5) {
      token3.style.fontSize = "20px";
    } else if (textLength > 4) {
      token3.style.fontSize = "25px";
    } else {
      token3.style.fontSize = "33px";
    }
    token3.innerHTML = count3*100;
};
function out2() {
    const token2 = document.getElementById('display2');
    const textLength = token2.textContent.length;
    console.log("textLength is ",textLength);
  if (textLength > 6) {
      token2.style.fontSize = "16px";
    } else if (textLength > 5) {
      token2.style.fontSize = "20px";
    } else if (textLength > 4) {
      token2.style.fontSize = "25px";
    } else {
      token2.style.fontSize = "33px";
    }
    token2.innerHTML = count2*100;
};
function out1() {
    const token1 = document.getElementById('display1');
    const textLength = token1.textContent.length;
    console.log("textLength is ",textLength);
  if (textLength > 6) {
      token1.style.fontSize = "16px";
    } else if (textLength > 5) {
      token1.style.fontSize = "20px";
    } else if (textLength > 4) {
      token1.style.fontSize = "25px";
    } else {
      token1.style.fontSize = "33px";
    }
    token1.innerHTML = count1*100;
};
function out7() {
    const token7 = document.getElementById('display7');
    const textLength = token7.textContent.length;
    console.log("textLength is ",textLength);
  if (textLength > 6) {
      token7.style.fontSize = "16px";
    } else if (textLength > 5) {
      token7.style.fontSize = "20px";
    } else if (textLength > 4) {
      token7.style.fontSize = "25px";
    } else {
      token7.style.fontSize = "33px";
    }
    token7.innerHTML = count7*100;
};
function out8() {
    const token8 = document.getElementById('display8');
    const textLength = token8.textContent.length;
    console.log("textLength is ",textLength);
  if (textLength > 6) {
      token8.style.fontSize = "16px";
    } else if (textLength > 5) {
      token8.style.fontSize = "20px";
    } else if (textLength > 4) {
      token8.style.fontSize = "25px";
    } else {
      token8.style.fontSize = "33px";
    }
    token8.innerHTML = count8*100;
};
function out9() {
    const token9 = document.getElementById('display9');
    const textLength = token9.textContent.length;
    console.log("textLength is ",textLength);
  if (textLength > 6) {
      token9.style.fontSize = "16px";
    } else if (textLength > 5) {
      token9.style.fontSize = "20px";
    } else if (textLength > 4) {
      token9.style.fontSize = "25px";
    } else {
      token9.style.fontSize = "33px";
    }
    token9.innerHTML = count9*100;
};
function out10() {
    const token10 = document.getElementById('display10');
    const textLength = token10.textContent.length;
    console.log("textLength is ",textLength);
  if (textLength > 6) {
      token10.style.fontSize = "16px";
    } else if (textLength > 5) {
      token10.style.fontSize = "20px";
    } else if (textLength > 4) {
      token10.style.fontSize = "25px";
    } else {
      token10.style.fontSize = "33px";
    }
    token10.innerHTML = count10*100;
};
var rec=0;
console.log("rec",rec);
function cleanumber(){
    depositInput.value = '';
    withdrawInput.value = '';
}

var allowtimes=0;
var delayend=1;
var normaltap=1;
var runonce = localStorage.getItem('runonce') || 0;
if(runonce==0) {
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
    runonce=1;
    localStorage.setItem('runonce',runonce);
};

function storegamestatus() {
    const winafter = document.querySelector('.winafter');
    let win = Number(winafter.textContent)/100 || 0;
    const gameplayedstatus = [
        {
            button1: count1,
            button2: count2,
            button3: count3,
            button4: count4,
            button5: count5,
            button6: count6,
            button7: count7,
            button8: count8,
            button9: count9,
            button10: count10,
            winvalue: win,
            balancevalue: Number(qaziCheking.balance)
        }
    ];
    // console.log("gameplayedstatus",gameplayedstatus);
    localStorage.setItem('gameplayedstatus',JSON.stringify(gameplayedstatus));
    try {
        localStorage.setItem('gameplayedstatus',JSON.stringify(gameplayedstatus));
    } catch (e) {
        console.warn('Could not save before unload', e);
    }
}
var gameplayedstatus = JSON.parse(localStorage.getItem('gameplayedstatus')) || 0;
if(gameplayedstatus==0){
    storegamestatus();
}
var startbal = Number(gameplayedstatus[0].balancevalue || 0);
var qaziCheking = new Bank(startbal);
balanceDiv.innerText = Math.floor(startbal *100);
var newBalance = Number(qaziCheking.balance);
console.log('newBalance',newBalance);

sizebal()
// button1
const output1 = document.getElementById('display1')
var sound1 = new Audio();
var count1 = Number(gameplayedstatus[0].button1 || 0);
var button1 = document.getElementById('button1')
// button2

const output2 = document.getElementById('display2')
var sound2 = new Audio();
var count2 = Number(gameplayedstatus[0].button2 || 0);
var button2 = document.getElementById('button2')

// button3
const output3 = document.getElementById('display3')
var sound3 = new Audio();
var count3 = Number(gameplayedstatus[0].button3 || 0);
var button3 = document.getElementById('button3')
// button4
const output4 = document.getElementById('display4')
var sound4 = new Audio();
var count4 = Number(gameplayedstatus[0].button4 || 0);
var button4 = document.getElementById('button4')

// button5
const output5 = document.getElementById('display5')
var count5 = Number(gameplayedstatus[0].button5 || 0);
var sound5 = new Audio();
var button5 = document.getElementById('button5')

// button6
const output6 = document.getElementById('display6')
var count6 = Number(gameplayedstatus[0].button6 || 0);
var sound6 = new Audio();
var button6 = document.getElementById('button6');

// button7
const output7 = document.getElementById('display7')
var count7 = Number(gameplayedstatus[0].button7 || 0);
var sound7 = new Audio();
var button7 = document.getElementById('button7')

// button8
const output8 = document.getElementById('display8')
var count8 = Number(gameplayedstatus[0].button8 || 0);
var sound8 = new Audio();
var button8 = document.getElementById('button8');

// button9
const output9 = document.getElementById('display9')
var count9 = Number(gameplayedstatus[0].button9 || 0);
var sound9 = new Audio();
var button9 = document.getElementById('button9')
// button10
const output10 = document.getElementById('display10')
var count10 = Number(gameplayedstatus[0].button10 || 0)
var sound10 = new Audio();
var button10 = document.getElementById('button10');
allbuttondappear();
function checkamou() {
    balancecash = Number(localStorage.getItem("cashin")) - Number(localStorage.getItem("cashout"));
    var summationcash = balancecash + sumbutton;
    var nowmoo = Number(localStorage.getItem('snbr'));
    console.log(nowmoo);
    
}
function btn10() {
    if(gamerunning==0 && betcondition==0) {
        if(popu==1){
        
        }else{
            addtobalance()
            newBalance = Number(qaziCheking.balance);
            console.log({Balance: newBalance})
            if(newBalance>=1) {
                console.log("count10",count10);
                soundspin.pause();
                sound10.src = "./;/BUTTON1.mp4"
                sound10.play();
                count10 = Number(count10) + 1;
                var amount = 1;
                qaziCheking.withdraw(amount)
                newtime =0;
                localStorage.setItem('newtime',newtime);
                // startButton.style.pointerEvents = 'auto';
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                allbuttondappear();
                totalbuttonvalue();
                newBalance = Number(qaziCheking.balance);
                // balancestored()
                storegamestatus();
                innocent();
                // removeannimaiton();
            }
            setTimeout(cleanumber, 100);
        }
    }
}
function btn9() {
    if(gamerunning==0 && betcondition==0) {
        if(popu==1){

        }else{
            addtobalance()
            newBalance = Number(qaziCheking.balance);
            console.log({Balance: newBalance})
            if(newBalance>=1) {
                // var count9 = 0;
                soundspin.pause();
                count9 = Number(count9) + 1;
                sound9.src = "./;/BUTTON2.mp4"
                sound9.play();
                var amount = 1;
                qaziCheking.withdraw(amount)
                newtime =0;
                localStorage.setItem('newtime',newtime);
                // startButton.style.pointerEvents = 'auto';
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                allbuttondappear()
                totalbuttonvalue()
                newBalance = Number(qaziCheking.balance);
                // balancestored()
                storegamestatus();
                innocent()
                // removeannimaiton();
            }
            setTimeout(cleanumber, 100);
        }
    }
}
function btn8() {
    if(gamerunning==0 && betcondition==0) {
        if(popu==1){

        }else{
            addtobalance()
            newBalance = Number(qaziCheking.balance);
            console.log({Balance: newBalance})
            if(newBalance>=1) {
                soundspin.pause();
                count8 = Number(count8) + 1;
                sound8.src = "./;/BUTTON3.mp4"
                sound8.play();
                var amount = 1;
                qaziCheking.withdraw(amount)
                newtime =0;
                localStorage.setItem('newtime',newtime);
                // startButton.style.pointerEvents = 'auto';
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                allbuttondappear()
                totalbuttonvalue()
                newBalance = Number(qaziCheking.balance);
                // balancestored()
                storegamestatus();
                innocent()
                // removeannimaiton();
            }
            setTimeout(cleanumber, 100);
        }
    }
}
function btn7() {
    if(gamerunning==0 && betcondition==0) {
        if(popu==1){

        }else{
            addtobalance()
            newBalance = Number(qaziCheking.balance);
            console.log({Balance: newBalance})
            if(newBalance>=1) {
                soundspin.pause();
                count7 = Number(count7) + 1;
                sound7.src = "./;/BUTTON4.mp4"
                sound7.play();
                var amount = 1;
                qaziCheking.withdraw(amount)
                newtime =0;
                localStorage.setItem('newtime',newtime);
                // startButton.style.pointerEvents = 'auto';
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                allbuttondappear()
                totalbuttonvalue()
                newBalance = Number(qaziCheking.balance);
                // balancestored()
                storegamestatus();
                innocent()
                // removeannimaiton();
            }
            setTimeout(cleanumber, 100);
        }
    }
}
function btn6() {
    if(gamerunning==0 && betcondition==0) {
        // if(Number(newBalance)>1000) {
        //     console.log("sub expired here....");
        //     // location.href = "./;/settings/sub/sub.html";
        // };
        update= new Date().getTime();
        deadline = Number(localStorage.getItem('deadline') || 0);
        
        if(popu==1){

        }else{
            addtobalance()
            newBalance = Number(qaziCheking.balance);
            console.log({Balance: newBalance})
            if(newBalance>=1) {
                soundspin.pause();
                count6 = Number(count6)+ 1;
                sound6.src = "./;/BUTTON5.mp4"
                sound6.play();
                var amount = 1;
                qaziCheking.withdraw(amount)
                newtime =0;
                localStorage.setItem('newtime',newtime);
                // startButton.style.pointerEvents = 'auto';
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                allbuttondappear()
                totalbuttonvalue()
                newBalance = Number(qaziCheking.balance);
                // balancestored()
                storegamestatus();
                innocent()
                // removeannimaiton();
            }
            setTimeout(cleanumber, 100);
        }
    }
}
function btn5() {
    if(gamerunning==0 && betcondition==0) {
        // if(Number(newBalance)>1000) {
        //     console.log("sub expired here....");
        //     // location.href = "./;/settings/sub/sub.html";
        // };
        update= new Date().getTime();
        deadline = Number(localStorage.getItem('deadline') || 0);
        
        if(popu==1){

        }else{
            addtobalance()
            newBalance = Number(qaziCheking.balance);
            console.log({Balance: newBalance})
            if(newBalance>=1) {
                soundspin.pause();
                count5 = Number(count5) + 1;
                sound5.src = "./;/BUTTON6.mp4"
                sound5.play();
                var amount = 1;
                qaziCheking.withdraw(amount)
                newtime =0;
                localStorage.setItem('newtime',newtime);
                // startButton.style.pointerEvents = 'auto';
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                allbuttondappear()
                totalbuttonvalue()
                newBalance = Number(qaziCheking.balance);
                // balancestored()
                storegamestatus();
                innocent()
                // removeannimaiton();
            }
            setTimeout(cleanumber, 100);
        }
    }
}
function btn4() {
    if(gamerunning==0 && betcondition==0) {
        if(popu==1){

        }else{
            addtobalance() 
            newBalance = Number(qaziCheking.balance);
            console.log({Balance: newBalance})
            if(newBalance>=1){
                soundspin.pause();
                count4 = Number(count4) + 1;
                sound4.src = "./;/BUTTON7.mp4"
                sound4.play();
                var amount = 1;
                qaziCheking.withdraw(amount)
                newtime =0;
                localStorage.setItem('newtime',newtime);
                // startButton.style.pointerEvents = 'auto';
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                allbuttondappear()
                totalbuttonvalue()
                newBalance = Number(qaziCheking.balance);
                // balancestored()
                storegamestatus();
                innocent()
                // removeannimaiton();
            }
            setTimeout(cleanumber, 100);
        }
    }
}
function btn3() {
    if(gamerunning==0 && betcondition==0) {
        if(popu==1){

        }else{
            addtobalance()
            newBalance = Number(qaziCheking.balance);
            console.log({Balance: newBalance})
            if(newBalance>=1){
                soundspin.pause();
                count3 = Number(count3) + 1;
                sound3.src = "./;/BUTTON8.mp4"
                sound3.play();
                var amount = 1;
                qaziCheking.withdraw(amount)
                newtime =0;
                localStorage.setItem('newtime',newtime);
                // startButton.style.pointerEvents = 'auto';
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                allbuttondappear()
                totalbuttonvalue()
                newBalance = Number(qaziCheking.balance);
                // balancestored()
                storegamestatus();
                innocent()
                // removeannimaiton();
            }
            setTimeout(cleanumber, 100);
        }
    }
}
function btn2() {
    if(gamerunning==0 && betcondition==0) {
        if(popu==1){

        }else{
            addtobalance()
            newBalance = Number(qaziCheking.balance);
            console.log({Balance: newBalance})
            if(newBalance>=1) {
                soundspin.pause();
                count2 = Number(count2) + 1;
                sound2.src = "./;/BUTTON9.mp4"
                sound2.play();
                var amount = 1;
                qaziCheking.withdraw(amount)
                newtime =0;
                localStorage.setItem('newtime',newtime);
                // startButton.style.pointerEvents = 'auto';
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                allbuttondappear()
                totalbuttonvalue()
                newBalance = Number(qaziCheking.balance);
                // balancestored()
                storegamestatus();
                innocent()
                // removeannimaiton();
            }
            setTimeout(cleanumber, 100);
        }
    }
}
function btn1() {
    if(gamerunning==0 && betcondition==0) {
        if(popu==1){

        }else{
            addtobalance()
            newBalance = Number(qaziCheking.balance);
            console.log({Balance: newBalance})
            if(newBalance>=1) {
                soundspin.pause();
                count1 = Number(count1) + 1;
                sound1.src = "./;/BUTTON10.mp4"
                sound1.play();
                var amount = 1;
                qaziCheking.withdraw(amount)
                newtime =0;
                localStorage.setItem('newtime',newtime);
                // startButton.style.pointerEvents = 'auto';
                balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
                sizebal()
                allbuttondappear()
                totalbuttonvalue()
                newBalance = Number(qaziCheking.balance);
                // balancestored()
                storegamestatus();
                innocent()
                // removeannimaiton();
            }
            setTimeout(cleanumber, 100);
        }
    }
}
function limitinput() {
    document.getElementById('tbuser').value = document.getElementById('tbuser').value.replace(/[^0-9]/g, '').slice(0, 5);
    document.getElementById('user').value = document.getElementById('user').value.replace(/[^0-9]/g, '').slice(0, 6);
    var withdrawmoney = Number(document.getElementById('user').value)/100;
    if (withdrawmoney > newBalance) {
        if(cashpop==0) {
            withdrawInput.value = '';
        }
    }
}
function countClicks1(number) {
    document.getElementById('tbuser').value += number;
    document.getElementById('user').value += number;
    limitinput()
    btn1()
}
function countClicks2(number) {
    document.getElementById('tbuser').value += number;
    document.getElementById('user').value += number;
    limitinput()
    btn2()
}
function countClicks3(number) {
    document.getElementById('tbuser').value += number;
    document.getElementById('user').value += number;
    limitinput()
    btn3()
}
function countClicks4(number) {
    document.getElementById('tbuser').value += number;
    document.getElementById('user').value += number;
    limitinput()
    btn4()
}
function countClicks5(number) {
    document.getElementById('tbuser').value += number;
    document.getElementById('user').value += number;
    limitinput()
    btn5()
}
function countClicks6(number) {
    document.getElementById('tbuser').value += number;
    document.getElementById('user').value += number;
    limitinput()
    btn6()
}
function countClicks7(number) {
    document.getElementById('tbuser').value += number;
    document.getElementById('user').value += number;
    limitinput()
    btn7()
}
function countClicks8(number) {
    document.getElementById('tbuser').value += number;
    document.getElementById('user').value += number;
    limitinput()
    btn8()
}
function countClicks9(number) {
    document.getElementById('tbuser').value += number;
    document.getElementById('user').value += number;
    limitinput()
    btn9()
}
function countClicks10(number) {
    document.getElementById('tbuser').value += number;
    document.getElementById('user').value += number;
    limitinput()
    btn10()
}
window.addEventListener("keydown", function(e){
    // keybutton
    if(e.keyCode==191){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '0';
            document.getElementById('user').value += '0';
            limitinput()
        }else {
            btn10()
        }
    }
    if(e.keyCode==111){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '0';
            document.getElementById('user').value += '0';
            limitinput()
        }else {
            btn10()
        }
    }
    if(e.keyCode==90){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '9';
            document.getElementById('user').value += '9';
            limitinput()
        }else {
            btn1()
        }
    }
    if(e.keyCode==88){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '8';
            document.getElementById('user').value += '8';
            limitinput()
        }else {
            btn2()
        }
    }
    if(e.keyCode==67){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '7';
            document.getElementById('user').value += '7';
            limitinput()
        }else {
            btn3()
        }
    }
    if(e.keyCode==86){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '6';
            document.getElementById('user').value += '6';
            limitinput()
        }else {
            btn4()
        }
    }
    if(e.keyCode==66){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '5';
            document.getElementById('user').value += '5';
            limitinput()
        }else {
            btn5()
        }
    }
    if(e.keyCode==78){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '4';
            document.getElementById('user').value += '4';
            limitinput()
        }else {
            btn6()
        }
    }
    if(e.keyCode==77){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '3';
            document.getElementById('user').value += '3';
            limitinput()
        }else {
            btn7()
        }
    }
    if(e.keyCode==96){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '3';
            document.getElementById('user').value += '3';
            limitinput()
        }else {
            btn7()
        }
    }
    if(e.keyCode==188){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '2';
            document.getElementById('user').value += '2';
            limitinput()
        }else {
            btn8()
        }
    }
    if(e.keyCode==190){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '1';
            document.getElementById('user').value += '1';
            limitinput()
        }else {
            btn9()
        }
    }
    if(e.keyCode==110){
        if(popu==1){
            e.preventDefault();
            document.getElementById('tbuser').value += '1';
            document.getElementById('user').value += '1';
            limitinput()
        }else {
            btn9()
        }
    }
    // number button-38.3308*38.317910,..,0N////000,,,,...MMMMM00,,,...//////
    if(e.keyCode==48){
        btn10();
    }
    if(e.keyCode==49){
        btn9();
    }
    if(e.keyCode==50){
        btn8();
    }
    if(e.keyCode==51){
        btn7();
    }
    if(e.keyCode==52){
        btn6();
    }
    if(e.keyCode==53){
        btn5();
    }
    if(e.keyCode==54){
        btn4();
    }
    if(e.keyCode==55){
        btn3();
    }
    if(e.keyCode==56){
        btn2();
    }
    if(e.keyCode==57){
        btn1();
    }
});

function to0(){
    count1 = 0;
    count10 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count5 = 0;
    count6 = 0;
    count9 = 0;
    count8 = 0;
    count7 = 0;
    // balancestored();
};
function clearcount10() {
    chelsea5.classList.add("chelsea5animation"); 
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    output9.innerHTML = '';
    output8.innerHTML = '';
    output7.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
function clearcount1() {
    output7.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    output9.innerHTML = '';
    output8.innerHTML = '';
    output10.innerHTML = ''; 
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
function clearcount2() {
    output1.innerHTML = '';
    output7.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    output9.innerHTML = '';
    output8.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
function clearcount3() {
    output1.innerHTML = '';
    output2.innerHTML = '';
    output7.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    output9.innerHTML = '';
    output8.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
function clearcount4() {
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output7.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    output9.innerHTML = '';
    output8.innerHTML = '';
    output10.innerHTML = '';  
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
function clearcount5() {
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output7.innerHTML = '';
    output6.innerHTML = '';
    output9.innerHTML = '';
    output8.innerHTML = '';
    output10.innerHTML = ''; 
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
function clearcount6() {
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output7.innerHTML = '';
    output9.innerHTML = '';
    output8.innerHTML = '';
    output10.innerHTML = ''; 
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
function clearcount7() {
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    output9.innerHTML = '';
    output8.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
function clearcount8() {
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    output9.innerHTML = '';
    output7.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
function clearcount9() {
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    output7.innerHTML = '';
    output8.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
function sizewin() {
    const textLength = winafter.textContent.length;
    console.log("textLength of sizebal is ",textLength);
    winafter.textContent = winafter.textContent.replace(/[^0-9]/g, '').slice(0, 6);
    if (textLength > 5) {
        winafter.style.fontSize = "45px";
        winafter.style.top = "5.2%";
        erstoregamestatus();
        location.href = 'MOO-GAME.html';
    } else {
        winafter.style.fontSize = "50px";
    }
}
var moneyrunonce = 1;
const winafter = document.querySelector('.winafter');
var win = Number(gameplayedstatus[0].winvalue) || 0;
winafter.innerHTML = win *100;
function windisplay() {
    if(betcondition==1) {
        winafter.innerHTML = win * 100;
        if(win>0 && moneyrunonce==0) {
            moneyrunonce = 1;
            console.log("already here... note is displayed the amount is: ",win*100);
            let moneyvalue = win*100;
            allnote(moneyvalue);
        };
        sizewin()
        distart=0;
        console.log("windispaly");
        cashin = Number(localStorage.getItem("cashin"));
        cashout = Number(localStorage.getItem("cashout"));
        qaziCheking.totalpay();
        qaziCheking.cash();
        console.log("win",win);
        savelocalinc();
        savegamestatus();
        // new system
        // localStorage.setItem('topshootsprize',topshootsprize);
        // localStorage.setItem('highshootsprize',highshootsprize);
        localStorage.setItem('gameincome',gameincome);
        // localStorage.setItem('bonusprize',bonusprize);
        localStorage.setItem('shoot1sprize',shoot1sprize);
        localStorage.setItem('shoot2sprize',shoot2sprize);
        localStorage.setItem('shoot3sprize',shoot3sprize);
        localStorage.setItem('shoot4sprize',shoot4sprize);
        localStorage.setItem('playerprize',playerprize);
        if(case1==1){
            shoot1sprize = Number(localStorage.getItem("shoot1sprize")) - win;
            localStorage.setItem('shoot1sprize',shoot1sprize)
            console.log("Remain 'shoot1sprize' = ",shoot1sprize);
            money=0;
        }else if(case1==2){
            shoot2sprize = Number(localStorage.getItem("shoot2sprize")) - win;
            localStorage.setItem('shoot2sprize',shoot2sprize)
            console.log("Remain 'shoot2sprize' = ",shoot2sprize);
            money2=0;
        }else if(case1==3){
            shoot3sprize = Number(localStorage.getItem("shoot3sprize")) - win;
            localStorage.setItem('shoot3sprize',shoot3sprize)
            console.log("Remain 'shoot3sprize' = ",shoot3sprize);
            money3=0;
        }else if(case1==4){
            shoot4sprize = Number(localStorage.getItem("shoot4sprize")) - win;
            localStorage.setItem('shoot4sprize',shoot4sprize);
            console.log("Remain 'shoot4sprize' = ",shoot4sprize);
            money4=0;
        }else if(case1==0){
            playerprize = Number(localStorage.getItem("playerprize"))-win;
            localStorage.setItem('playerprize',playerprize)
            console.log("Remain 'playerprize' = ",playerprize);
        };
        //console.log("bonushoots array look like ?",JSON.parse(localStorage.getItem('shootloopincome')));
        recents();
        reportrec();
        // end of new system
        amafa = amafa + totalvalue - win;
        localStorage.setItem('amafa',amafa);
        if(trigger==1){
            generatetsinda();
            trigger=0;
            amafa=0;
        }
        console.log("amafa",amafa);
        recordtimes();
        to0();
        storegamestatus();
        // when round end press go again to participate to the next round
        betbtn.classList.remove("buttonbet");
        betbtn.classList.remove("buttonwait");
        betbtn.classList.add("buttongo");
        // gobtn()
        setTimeout(() => {
            betcondition=0;
        }, 1000);
    }
    runnan=1;
    gamerunning = 0;
    nbruserpereach()//active user
    setTimeout(startgameagain, 1000);
    //
};
function savegamestatus() {
    let lastgamestastus =  JSON.parse(localStorage.getItem('lastgamestastus'));
    // console.log("lastgamestastus",lastgamestastus);
    if (!lastgamestastus) {
        localStorage.setItem('lastgamestastus',JSON.stringify([]));
        lastgamestastus =  JSON.parse(localStorage.getItem('lastgamestastus'));
        // console.log("lastgamestastus",lastgamestastus);
    }
    let gamenbr = 0;
    if (!lastgamestastus[0]) {
        gamenbr = 1;
    }else {
        gamenbr = Number(lastgamestastus[0].no) + 1;
    }
    gamenow = [
        {
            no: gamenbr,
            bet: Number(sumbutton*100),
            win: Number(win*100)
        }
    ];
    lastgamestastus.unshift(gamenow[0]);
    lastgamestastus= lastgamestastus.slice(0, 100);
    localStorage.setItem('lastgamestastus',JSON.stringify(lastgamestastus));
    try {
        localStorage.setItem('lastgamestastus', JSON.stringify(lastgamestastus));
    } catch (e) {
        console.warn('Could not save before unload', e);
    }
}
window.addEventListener('beforeunload', () => {
    try {
        let lastgamestastus =  JSON.parse(localStorage.getItem('lastgamestastus'));
        localStorage.setItem('lastgamestastus', JSON.stringify(lastgamestastus));
    } catch (e) {
        console.warn('Could not save before unload', e);
    }
});

function savelocalinc() {
    let lastloopincome =  JSON.parse(localStorage.getItem('lastloopincome'));
    // console.log("lastloopincome",lastloopincome); 
    if (!lastloopincome) {
        localStorage.setItem('lastloopincome',JSON.stringify([]));
        lastloopincome =  JSON.parse(localStorage.getItem('lastloopincome'));
        // console.log("lastloopincome",lastloopincome);
    }
    lastorage = [
        {
            cashin: Number(localStorage.getItem('cashin')),
            cashout: Number(localStorage.getItem('cashout'))
        }
    ];
    lastloopincome.unshift(lastorage[0]);
    lastloopincome= lastloopincome.slice(0, 100);
    localStorage.setItem('lastloopincome',JSON.stringify(lastloopincome));
    try {
        localStorage.setItem('lastloopincome',JSON.stringify(lastloopincome));
    } catch (e) {
        console.warn('Could not save before unload', e);
    }
    let laststoredarry = JSON.parse(localStorage.getItem('lastloopincome'));
    var totalin = Number(laststoredarry[0].cashin);
    console.log("totalin",totalin);
    var totalout = Number(laststoredarry[0].cashout);
    console.log("totalout",totalout);
    var balcash = totalin-totalout;
    if(balcash>10000) {
        localStorage.setItem('cashin',Number(laststoredarry[2].cashin));
        localStorage.setItem('cashout',Number(laststoredarry[2].cashout));
    }
}
// savelocalinc();
function addtobalance() {
    const winafter = document.querySelector('.winafter');
    let win = Number(winafter.textContent)/100 || 0;
    var amount = win;
    qaziCheking.winvalue(amount);
    balanceDiv.innerText = qaziCheking.balance *100;
    sizebal();
    newBalance = Number(qaziCheking.balance);
    // if(Number(newBalance)>1000) {
    //     console.log("sub expired here....");
    // };
    storegamestatus();
    win = 0;
    winafter.innerHTML = 0;
}

var sumbutton=0;

function totalbuttonvalue() {
    sumbutton = count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10;
    // console.log("ALLBUTTON VALUE", sumbutton);
};

function Clicks11() {
    var amount = a1;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = qaziCheking.balance;    
    sizebal()
    output1.innerHTML = a1*100;
}

function Clicks12() {
    var amount = a2;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = qaziCheking.balance;    
    sizebal()
    output1.innerHTML = a2*100;;
}

function Clicks13() {
    var amount = Number(a3);
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = qaziCheking.balance;    
    sizebal()
    output1.innerHTML = a3*100;;
}

function Clicks14() {
    var amount = a4;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = qaziCheking.balance;    
    sizebal()
    output1.innerHTML = a4*100;;
}   

function Clicks15() {
    var amount = a5;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = qaziCheking.balance;    
    sizebal()
    output1.innerHTML = a5*100;;
}

function Clicks16() {
    var amount = a6;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = qaziCheking.balance;    
    sizebal()
    output1.innerHTML = amount*100;;
}

function Clicks17() {
    var amount = a7;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = qaziCheking.balance;    
    sizebal()
    output1.innerHTML = a7;
}

function Clicks18() {
    var amount = a8;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = qaziCheking.balance;   
    sizebal() 
    output1.innerHTML = a8;
}

function Clicks19() {
    var amount = a9;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = qaziCheking.balance;    
    output1.innerHTML = a9;
}

function Clicks20() {
    var amount = a10;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = qaziCheking.balance;    
    sizebal()
    output1.innerHTML = a10;
}

function recordtimes() {
    localStorage.setItem('king', count1);
    localStorage.setItem('Real madrid', count2);
    localStorage.setItem('Barcelona', count3);
    localStorage.setItem('Paris germain', count4);
    localStorage.setItem('Bayern munich', count5);
    localStorage.setItem('Machester city', count6);
    localStorage.setItem('Machester united', count7);
    localStorage.setItem('Arsenal', count8);
    localStorage.setItem('livepool', count9);
    localStorage.setItem('chelsea', count10);
}
function recordbtnstatus() {
    localStorage.setItem('btn1rec', count1);
    localStorage.setItem('btn2rec', count2);
    localStorage.setItem('btn3rec', count3);
    localStorage.setItem('btn4rec', count4);
    localStorage.setItem('btn5rec', count5);
    localStorage.setItem('btn6rec', count6);
    localStorage.setItem('btn7rec', count7);
    localStorage.setItem('btn8rec', count8);
    localStorage.setItem('btn9rec', count9);
    localStorage.setItem('btn10rec', count10);
}
function recordbtnto0() {
    localStorage.setItem('btn1rec', 0);
    localStorage.setItem('btn2rec', 0);
    localStorage.setItem('btn3rec', 0);
    localStorage.setItem('btn4rec', 0);
    localStorage.setItem('btn5rec', 0);
    localStorage.setItem('btn6rec', 0);
    localStorage.setItem('btn7rec', 0);
    localStorage.setItem('btn8rec', 0);
    localStorage.setItem('btn9rec', 0);
    localStorage.setItem('btn10rec', 0);
}
function callbtns(){
    var count1 = localStorage.getItem("btn1rec")
    var count2 = localStorage.getItem("btn2rec")
    var count3 = localStorage.getItem("btn3rec")
    var count4 = localStorage.getItem("btn4rec")
    var count5 = localStorage.getItem("btn5rec")
    var count6 = localStorage.getItem("btn6rec")
    var count7 = localStorage.getItem("btn7rec")
    var count8 = localStorage.getItem("btn8rec")
    var count9 = localStorage.getItem("btn9rec")
    var count10 = localStorage.getItem("btn10rec")
    output10.innerHTML = count10*100;
    output9.innerHTML = count9*100;
    output8.innerHTML = count8*100;
    output7.innerHTML = count7*100;
    output6.innerHTML = count6*100;
    output5.innerHTML = count5*100;
    output4.innerHTML = count4*100;
    output3.innerHTML = count3*100;
    output2.innerHTML = count2*100;
    output1.innerHTML = count1*100;
}


function callvalue1() {
    count1 = localStorage.getItem("king")
    var amount = count1;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);  
    sizebal()
    output1.innerHTML = count1*100;
    output2.innerHTML = localStorage.getItem("Real madrid")*100;
    output3.innerHTML = localStorage.getItem("Barcelona")*100;
    output4.innerHTML = localStorage.getItem("Paris germain")*100;
    output5.innerHTML = localStorage.getItem("Bayern munich")*100;
    output6.innerHTML = localStorage.getItem("Machester city")*100;
    output7.innerHTML = localStorage.getItem("Machester united")*100;
    output8.innerHTML = localStorage.getItem("Arsenal")*100;
    output9.innerHTML = localStorage.getItem("livepool")*100;
    output10.innerHTML = localStorage.getItem("chelsea")*100;
    newBalance = Number(qaziCheking.balance);
    // balancestored()
    voidkujurira=0;
    
}
function callvalue2() {
    count2 = localStorage.getItem("Real madrid")
    var amount = count2;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);  
    sizebal()
    output2.innerHTML = count2*100;
    output1.innerHTML = localStorage.getItem("king")*100;
    output3.innerHTML = localStorage.getItem("Barcelona")*100;
    output4.innerHTML = localStorage.getItem("Paris germain")*100;
    output5.innerHTML = localStorage.getItem("Bayern munich")*100;
    output6.innerHTML = localStorage.getItem("Machester city")*100;
    output7.innerHTML = localStorage.getItem("Machester united")*100;
    output8.innerHTML = localStorage.getItem("Arsenal")*100;
    output9.innerHTML = localStorage.getItem("livepool")*100;
    output10.innerHTML = localStorage.getItem("chelsea")*100;
    newBalance = Number(qaziCheking.balance);
    // balancestored()
    voidkujurira=0;  
}
function callvalue3() {
    count3 = localStorage.getItem("Barcelona")
    var amount = count3;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);   
    sizebal()
    output1.innerHTML =localStorage.getItem("king")*100;
    output2.innerHTML = localStorage.getItem("Real madrid")*100;
    output3.innerHTML = count3*100;
    output4.innerHTML = localStorage.getItem("Paris germain")*100;
    output5.innerHTML = localStorage.getItem("Bayern munich")*100;
    output6.innerHTML = localStorage.getItem("Machester city")*100;
    output7.innerHTML = localStorage.getItem("Machester united")*100;
    output8.innerHTML = localStorage.getItem("Arsenal")*100;
    output9.innerHTML = localStorage.getItem("livepool")*100;
    output10.innerHTML = localStorage.getItem("chelsea")*100;
    newBalance = Number(qaziCheking.balance);
    // balancestored()
    voidkujurira=0;
    
}
function callvalue4() {
    count4 = localStorage.getItem("Paris germain")
    var amount = count4;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);  
    sizebal()
    output1.innerHTML =localStorage.getItem("king")*100;
    output2.innerHTML = localStorage.getItem("Real madrid")*100;
    output3.innerHTML = localStorage.getItem("Barcelona")*100;
    output4.innerHTML = count4*100;
    output5.innerHTML = localStorage.getItem("Bayern munich")*100;
    output6.innerHTML = localStorage.getItem("Machester city")*100;
    output7.innerHTML = localStorage.getItem("Machester united")*100;
    output8.innerHTML = localStorage.getItem("Arsenal")*100;
    output9.innerHTML = localStorage.getItem("livepool")*100;
    output10.innerHTML = localStorage.getItem("chelsea")*100;
    newBalance = Number(qaziCheking.balance);
    // balancestored()
    voidkujurira=0;
    
}
function callvalue5() {
    count5 = localStorage.getItem("Bayern munich")
    var amount = count5;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);  
    sizebal()
    output1.innerHTML =localStorage.getItem("king")*100;
    output2.innerHTML = localStorage.getItem("Real madrid")*100;
    output3.innerHTML = localStorage.getItem("Barcelona")*100;
    output4.innerHTML = localStorage.getItem("Paris germain")*100;
    output5.innerHTML = count5*100;
    output6.innerHTML = localStorage.getItem("Machester city")*100;
    output7.innerHTML = localStorage.getItem("Machester united")*100;
    output8.innerHTML = localStorage.getItem("Arsenal")*100;
    output9.innerHTML = localStorage.getItem("livepool")*100;
    output10.innerHTML = localStorage.getItem("chelsea")*100;
    newBalance = Number(qaziCheking.balance);
    // balancestored()
    voidkujurira=0;
}
function callvalue6() {
    count6 = localStorage.getItem("Machester city")
    var amount = count6;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);  
    sizebal()
    output1.innerHTML =localStorage.getItem("king")*100;
    output2.innerHTML = localStorage.getItem("Real madrid")*100;
    output3.innerHTML = localStorage.getItem("Barcelona")*100;
    output4.innerHTML = localStorage.getItem("Paris germain")*100;
    output5.innerHTML = localStorage.getItem("Bayern munich")*100;
    output6.innerHTML = count6*100;
    output7.innerHTML = localStorage.getItem("Machester united")*100;
    output8.innerHTML = localStorage.getItem("Arsenal")*100;
    output9.innerHTML = localStorage.getItem("livepool")*100;
    output10.innerHTML = localStorage.getItem("chelsea")*100;
    newBalance = Number(qaziCheking.balance);
    // balancestored()
    voidkujurira=0;
}
function callvalue7() {
    count7 = localStorage.getItem("Machester united")
    var amount = count7;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);
    sizebal()
    output1.innerHTML =localStorage.getItem("king")*100;
    output2.innerHTML = localStorage.getItem("Real madrid")*100;
    output3.innerHTML = localStorage.getItem("Barcelona")*100;
    output4.innerHTML = localStorage.getItem("Paris germain")*100;
    output5.innerHTML = localStorage.getItem("Bayern munich")*100;
    output6.innerHTML = localStorage.getItem("Machester city")*100;
    output7.innerHTML = count7*100;
    output8.innerHTML = localStorage.getItem("Arsenal")*100;
    output9.innerHTML = localStorage.getItem("livepool")*100;
    output10.innerHTML = localStorage.getItem("chelsea")*100;
    newBalance = Number(qaziCheking.balance);
    // balancestored()
    voidkujurira=0;
}
function callvalue8() {
    count8 = localStorage.getItem("Arsenal")
    var amount = count8;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = Math.floor(qaziCheking.balance *100); 
    sizebal()
    output1.innerHTML =localStorage.getItem("king")*100;
    output2.innerHTML = localStorage.getItem("Real madrid")*100;
    output3.innerHTML = localStorage.getItem("Barcelona")*100;
    output4.innerHTML = localStorage.getItem("Paris germain")*100;
    output5.innerHTML = localStorage.getItem("Bayern munich")*100;
    output6.innerHTML = localStorage.getItem("Machester city")*100;
    output7.innerHTML = localStorage.getItem("Machester united")*100;
    output8.innerHTML = count8*100;
    output9.innerHTML = localStorage.getItem("livepool")*100;
    output10.innerHTML = localStorage.getItem("chelsea")*100;
    newBalance = Number(qaziCheking.balance);
    // balancestored()
    voidkujurira=0;
}
function callvalue9() {
    count9 = localStorage.getItem("livepool")
    var amount = count9;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);  
    sizebal()
    output1.innerHTML =localStorage.getItem("king")*100;
    output2.innerHTML = localStorage.getItem("Real madrid")*100;
    output3.innerHTML = localStorage.getItem("Barcelona")*100;
    output4.innerHTML = localStorage.getItem("Paris germain")*100;
    output5.innerHTML = localStorage.getItem("Bayern munich")*100;
    output6.innerHTML = localStorage.getItem("Machester city")*100;
    output7.innerHTML = localStorage.getItem("Machester united")*100;
    output8.innerHTML = localStorage.getItem("Arsenal")*100;
    output9.innerHTML = count9*100;
    output10.innerHTML = localStorage.getItem("chelsea")*100;
    newBalance = Number(qaziCheking.balance);   
    // balancestored()
    voidkujurira=0;
}
function callvalue10() {
    count10 = localStorage.getItem("chelsea")
    var amount = count10;
    qaziCheking.withdraw(amount)
    balanceDiv.innerText = Math.floor(qaziCheking.balance *100);  
    sizebal()
    output1.innerHTML =localStorage.getItem("king")*100;
    output2.innerHTML = localStorage.getItem("Real madrid")*100;
    output3.innerHTML = localStorage.getItem("Barcelona")*100;
    output4.innerHTML = localStorage.getItem("Paris germain")*100;
    output5.innerHTML = localStorage.getItem("Bayern munich")*100;
    output6.innerHTML = localStorage.getItem("Machester city")*100;
    output7.innerHTML = localStorage.getItem("Machester united")*100;
    output8.innerHTML = localStorage.getItem("Arsenal")*100;
    output9.innerHTML = localStorage.getItem("livepool")*100;
    output10.innerHTML = count10*100;   
    newBalance = Number(qaziCheking.balance);
    // balancestored()
    voidkujurira=0;
}

function totalbuttonstored() {
    have10 = localStorage.getItem("chelsea");
    have9 = localStorage.getItem("livepool");
    have8 = localStorage.getItem("Arsenal");
    have7 = localStorage.getItem("Machester united");
    have6 = localStorage.getItem("Machester city");
    have5 = localStorage.getItem("Bayern munich");
    have4 = localStorage.getItem("Paris germain");
    have3 = localStorage.getItem("Barcelona");
    have2 = localStorage.getItem("Real madrid");
    have1 = localStorage.getItem("king");
    totalvalue = Number(have1) +  Number(have2) +  Number(have3) +  Number(have4) +  Number(have5) +  Number(have6) +  Number(have7) +  Number(have8) +  Number(have9) +  Number(have10);
}
totalbuttonstored()


const buttoncash = document.getElementById('Bikuzafter');
const buttonpay = document.getElementById('Bitsafter');

// startButton.style.pointerEvents = 'none';
function lowonceshoot() {
    // wheel.classList.add('blur');
    // startButton.style.pointerEvents = 'none';
    buttonduringspin();
    wheel.style.transition = 'all 6.03s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${start}deg)`;
    console.log("lucky start:",start);
    
    wheel.addEventListener('transitionend', () => {
        // Need to set transition to none as we want to rotate instantly
        wheel.classList.remove('blur');
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${end}}deg)`; 
        // windisplay()
        allowbutton()
    });
};
function moreshoot() {
    // wheel.classList.add('blur');
    // startButton.style.pointerEvents = 'none';
    buttonduringspin();
    wheel.style.transition = 'all 1.5s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${start}deg)`;
    console.log("lucky start:",start);
    
    wheel.addEventListener('transitionend', () => {
        // Need to set transition to none as we want to rotate instantly
        wheel.classList.remove('blur');
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${end}}deg)`; 
        // windisplay()
        allowbutton()
    });
};
function saving() {
    dep = Math.ceil(localStorage.getItem("cashin")*100);
    console.log("dep",dep);
    cashreceived.innerHTML = dep;
}
function cashand() {
    energy = Math.floor(localStorage.getItem("cashout")*100);
    console.log("cas",energy);
    energy1.innerHTML = energy;
}

function balancedas() {
    bal = Math.floor(dep - energy);
    console.log("balance",bal);
    income.innerHTML=bal;
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
const gameidforsub = localStorage.getItem('gameidstore') || 0;
console.log("gameidforsub is ",gameidforsub);
const identfytoarray = numberToDigits(gameidforsub);
console.log("gameidforsuba into digits is ",identfytoarray);
const gameidentifyer = `${identfytoarray[0]}${identfytoarray[1]}`;
console.log("gameidforsuba into digits[0,1]  is",gameidentifyer);

const verifyid = localStorage.getItem('fullgeneratednbr') || 0;
console.log("verifyid is ",verifyid);


var trigger=0;
var moosub= 0;
moosub = Number(localStorage.getItem("joo"));
console.log("moosub",moosub);
startingsub=moosub;
console.log("startingsub",startingsub)
function moo() {
    console.log("startingsub in function",startingsub);
    if(startingsub>0) {
    }else{
        var moosub=0;
        localStorage.setItem('joo',moosub);
        console.log("localstorage is equal to 0");
    }
}
moo();

var shoot2sound = new Audio();
shoot2sound.src = "./;/shoot2sound.mp4"
// function of one shoot end Here.....
var start=0;
var end=0;
function a100result(){
    start = 729;
    end = 9;
    win = count1 * 100;
    console.log("king*100 luckcontrol");
    moreshoot();
}

function a100result3(){
    start = 2169;
    end = 9;
    win3 = count1 * 100;
    console.log("king*100 luckcontrol");
    //  king *100
    moreshoot();
    setTimeout(() => {
        win = win1+win23+win3
    }, 1500);
    setTimeout(windisplay, 1500);
}
function a50result3(){
    start = 2186;
    end = 26;
    win3 = count1 * 50;
    //  king *50
    console.log("king*50 luckcontrol");
    moreshoot();
    setTimeout(() => {
        win = win1+win23+win3
    }, 1500);
    setTimeout(windisplay, 1500);
}
function a100result6(){
    start = 4329;
    end = 9;
    win6 = count1 * 100;
    console.log("king*100 luckcontrol");
    //  king *100
    moreshoot();
    setTimeout(() => {
        win = win1+win23+win3+win4+win5+win6;
    }, 1000);
    setTimeout(windisplay, 1500);
}
// setTimeout(a100, 20000);
function a100(){
    luckyin()
    setTimeout(() => {
        shoot1.classList.add("shoot1animation");
        setTimeout(() => {
            a100result();
            setTimeout(function(){
                if(betcondition==1){
                    clearcount1();
                }
                position1.classList.add("shootr1-100"); 
                windisplay();
            }, 1500);
        }, 3000);
    }, 6030);
}
// a100()
function a50result(){
    start = 746;
    end = 26;
    win = count1 * 50;
    //  king *50
    console.log("king*50 luckcontrol");
    moreshoot();
}
// setTimeout(a50,1000);
function a50(){
    luckyin();
    console.log("luckyin start here");
    setTimeout(() => {
        shoot1.classList.add("shoot1animation");
        setTimeout(() => {
            a50result();
            setTimeout(function(){
                if(betcondition==1){
                    clearcount1();
                }
                position1.classList.add("shootr1-50");  
                windisplay();
            }, 1500);
        }, 3000);
    }, 6030);
}

function s40result(){
    start = 1484;
    end = 44;
    win = count2 * 40;
    // real madrid *40
    introlucky=15;
    console.log("RealMadrid*40 luckcontrol");
    moreshoot();
}
function s3result2(){
    start = 1501;
    end = 61;
    win2 = count2 * 5; 
    console.log('Real Madrid')
    moreshoot();
    setTimeout(() => {
        win= win1+win2;
    }, 1000);
    setTimeout(windisplay, 1500);
}
function s40result2(){
    start = 1484;
    end = 44;
    win2 = count2 * 40;
    // real madrid *40
    introlucky=15;
    console.log("RealMadrid*40 luckcontrol");
    moreshoot();
    setTimeout(() => {
        win= win1+win2;
    }, 1000);
    setTimeout(windisplay, 1500);
}
function s40result3(){
    start = 1484;
    end = 44;
    win23 = count2 * 40;
    // real madrid *40
    introlucky=15;
    console.log("RealMadrid*40 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function s3result3(){
    start = 1501;
    end = 61;
    win23 = count2 * 5; 
    console.log('Real Madrid')
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function s40result6(){
    start = 3644;
    end = 44;
    win5 = count2 * 40;
    // real madrid *40
    introlucky=15;
    console.log("RealMadrid*40 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23+win3+win4+win5)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
// setTimeout(s40,2000);
function s40(){
    luckyin()
    setTimeout(() => {
        shoot1.classList.add("shoot1animation");
        setTimeout(() => {
            s40result();
            setTimeout(function(){
                if(betcondition==1){
                    clearcount2();
                }
                position1.classList.add("shootr2-40"); 
                windisplay();
            }, 1500);
        }, 3000);
    }, 6030);
}

function d30result(){
    start = 799;
    end = 79;
    win = count3 * 30;
    // barcelona *30
    console.log("Barcelona*30 luckcontrol");
    moreshoot();
}
function d3result2(){
    start = 817;
    end = 97;
    win1 = count3 * 5; 
    console.log('FC Barcelona')
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = win1 *100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function d30result2(){
    start = 799;
    end = 79;
    win1 = count3 * 30;
    // barcelona *30
    console.log("Barcelona*30 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = win1 *100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function d30result6(){
    start = 2959;
    end = 79;
    win4 = count3 * 30;
    // barcelona *30
    console.log("Barcelona*30 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23+win3+win4)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
// setTimeout(d30,2000);
function d30(){
    luckyin()
    setTimeout(() => {
        shoot1.classList.add("shoot1animation");
        setTimeout(() => {
            d30result();
            setTimeout(function(){
                if(betcondition==1){
                    clearcount3();
                }
                position1.classList.add("shootr3-30"); 
                windisplay();
            }, 1500);
        }, 3000);
    }, 6030);
}

function f20result(){
    start = 1555;
    end = 115;
    win = count4 * 20;
    introlucky=15;
    // parisgermain *20
    console.log("ParisGermain*20 luckcontrol");
    moreshoot();
}
function f20result2(){
    start = 1555;
    end = 115;
    win2 = count4 * 20;
    introlucky=15;
    // parisgermain *20
    console.log("ParisGermain*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        win= win1+win2;
    }, 1000);
    setTimeout(windisplay, 1500);
}
function f3result2(){
    start = 1574.5;
    end = 134.5;
    win2 = count4 * 5;
    console.log('Paris saint-Germain') 
    moreshoot();
    setTimeout(() => {
        win= win1+win2;
    }, 1000);
    setTimeout(windisplay, 1500);
}
function f20result3(){
    start = 2275;
    end = 115;
    win3 = count4 * 20;
    introlucky=15;
    // parisgermain *20
    console.log("ParisGermain*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        win = win1+win23+win3
    }, 1500);
    setTimeout(windisplay, 1500);
}
function f3result3(){
    start = 2294.5;
    end = 134.5;
    win3 = count4 * 5;
    console.log('Paris saint-Germain') 
    moreshoot();
    setTimeout(() => {
        win = win1+win23+win3
    }, 1500);
    setTimeout(windisplay, 1500);
}
function f20result62(){
    start = 2275;
    end = 115;
    win3 = count4 * 20;
    introlucky=15;
    // parisgermain *20
    console.log("ParisGermain*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23+win3)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function f20result6(){
    start = 4435;
    end = 115;
    win6 = count4 * 20;
    introlucky=15;
    // parisgermain *20
    console.log("ParisGermain*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        win = win1+win23+win3+win4+win5+win6;
    }, 1000);
    setTimeout(windisplay, 1500);
}
// setTimeout(f20,2000);
function f20(){
    luckyin();
    setTimeout(() => {
        shoot1.classList.add("shoot1animation");
        setTimeout(() => {
            f20result();
            setTimeout(function(){
                if(betcondition==1){
                    clearcount4();
                }
                position1.classList.add("shootr4-20"); 
                windisplay();
            }, 1500);
        }, 3000);
    }, 6030);
}

function g20result(){
    start = 873;
    end = 153;
    win = count5 * 20;
    // bayernmunich *20
    console.log("BayernMunich*20 luckcontrol");
    moreshoot();
}
function g20result2(){
    start = 873;
    end = 153;
    win1 = count5 * 20;
    // bayernmunich *20
    console.log("BayernMunich*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = win1 *100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function g3result2(){
    start = 892;
    end = 172;
    win1 = count5 * 5; 
    console.log('FC Bayern Munich') 
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = win1 *100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function g20result62(){
    start = 1593;
    end = 153;
    win23 = count5 * 20;
    // bayernmunich *20
    console.log("BayernMunich*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function g20result3(){
    start = 1593;
    end = 153;
    win23 = count5 * 20;
    // bayernmunich *20
    console.log("BayernMunich*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function g3result3(){
    start = 1612;
    end = 172;
    win23 = count5 * 5; 
    console.log('FC Bayern Munich') 
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function g20result6(){
    start = 3753;
    end = 153;
    win5 = count5 * 20;
    // bayernmunich *20
    console.log("BayernMunich*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23+win3+win4+win5)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function g20resultof2shoot(){
    start = 2313;
    end = 153;
    win2 = count5 * 20;
    introlucky=15;
    // bayernmunich *20
    console.log("BayernMunich*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        win= win1+win2;
    }, 1000);
    setTimeout(windisplay, 1500);
}
function g3resultof2shoot(){
    start = 1612;
    end = 172;
    win2 = count5 * 5; 
    console.log('FC Bayern Munich')
    moreshoot();
    setTimeout(() => {
        win= win1+win2;
    }, 1000);
    setTimeout(windisplay, 1500);
}
// setTimeout(g20,3000);
function g20(){
    luckyin();
    setTimeout(() => {
        shoot1.classList.add("shoot1animation");
        setTimeout(() => {
            g20result();
            setTimeout(function(){
                if(betcondition==1){
                    clearcount5();
                }
                position1.classList.add("shootr5-20"); 
                windisplay();
            }, 1500);
        }, 3000);
    }, 6030);
}

function h20result(){
    start = 910.5;
    end = 190.5;
    win = count6 * 20;
    // machester city *20
    console.log("MachesterCity*20 luckcontrol");
    moreshoot();
}
function h20result2(){
    start = 910.5;
    end = 190.5;
    win1 = count6 * 20;
    // machester city *20
    console.log("MachesterCity*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = win1 *100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function h3result2(){
    start = 929;
    end = 209; 
    win1 = count6 * 5; 
    console.log('Machester city')
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = win1 *100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function h20result6(){
    start = 3070.5;
    end = 190.5;
    win4 = count6 * 20;
    // machester city *20
    console.log("MachesterCity*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23+win3+win4)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
// setTimeout(h20,3000);
function h20(){
    luckyin();
    setTimeout(() => {
        shoot1.classList.add("shoot1animation");
        setTimeout(() => {
            h20result();
            setTimeout(function(){
                if(betcondition==1){
                    clearcount6();
                }
                position1.classList.add("shootr6-20"); 
                windisplay();
            }, 1500);
        }, 3000);
    }, 6030);
}

function j10result(){
    start = 1667.5;
    end = 227.5;
    win = count7 * 10;
    introlucky=15;
    // machester united *10
    console.log("MachesterUnited*10 luckcontrol");
    moreshoot();
}
function j10result2(){
    start = 1667.5;
    end = 227.5;
    win2 = count7 * 10;
    introlucky=15;
    // machester united *10
    console.log("MachesterUnited*10 luckcontrol");
    moreshoot();
    setTimeout(() => {
        win= win1+win2;
    }, 1000);
    setTimeout(windisplay, 1500);
}
function j3result2(){
    start = 1684.5;
    end = 244.5;   
    win2 = count7 * 5;
    console.log('machester united')
    moreshoot();
    setTimeout(() => {
        win= win1+win2;
    }, 1000);
    setTimeout(windisplay, 1500);
}
function j10result3(){
    start = 2387.5;
    end = 227.5;
    win3 = count7 * 10;
    introlucky=15;
    // machester united *10
    console.log("MachesterUnited*10 luckcontrol");
    moreshoot();
    setTimeout(() => {
        win = win1+win23+win3
    }, 1500);
    setTimeout(windisplay, 1500);
}
function j3result3(){
    start = 2404.5;
    end = 244.5;   
    win3 = count7 * 5;
    console.log('machester united');
    moreshoot();
    setTimeout(() => {
        win = win1+win23+win3
    }, 1500);
    setTimeout(windisplay, 1500);
}
function j10result6(){
    start = 2387.5;
    end = 227.5;
    win3 = count7 * 10;
    introlucky=15;
    // machester united *10
    console.log("MachesterUnited*10 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23+win3)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
// setTimeout(j10,3000);
function j10(){
    luckyin();
    setTimeout(() => {
        shoot1.classList.add("shoot1animation");
        setTimeout(() => {
            j10result();
            setTimeout(function(){
                if(betcondition==1){
                    clearcount7();
                }
                position1.classList.add("shootr7-10"); 
                windisplay();
            }, 1500);
        }, 3000);
    }, 6030);
}

function k10result(){
    start = 984;
    end = 264;
    win = count8 * 10;
    // arsenal *10
    console.log("Arsenal*10 luckcontrol");
    moreshoot();
}
function k10result2(){
    start = 984;
    end = 264;
    win1 = count8 * 10;
    // arsenal *10
    console.log("Arsenal*10 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = win1 *100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function k3result2(){
    start = 1002;
    end = 282;
    win1 = count8 * 5;
    console.log('Arsenal')
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = win1 *100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function k10result6(){
    start = 1704;
    end = 264;
    win23 = count8 * 10;
    // arsenal *10
    console.log("Arsenal*10 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function k10result3(){
    start = 1704;
    end = 264;
    win23 = count8 * 10;
    // arsenal *10
    console.log("Arsenal*10 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function k3result3(){
    start = 1722;
    end = 282;
    win23 = count8 * 5;
    console.log('Arsenal');
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win23)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function k10resultof2shoot(){
    start = 1704;
    end = 264;
    win2 = count8 * 10;
    // arsenal *10
    introlucky=15;
    console.log("Arsenal*10 luckcontrol");
    moreshoot();
    setTimeout(() => {
        win= win1+win2;
    }, 1000);
    setTimeout(windisplay, 1500);
}
function k3resultof2shoot(){
    start = 1722;
    end = 282;
    win2 = count8 * 5;
    console.log('Arsenal')
    moreshoot();
    setTimeout(() => {
        win= win1+win2;
    }, 1000);
    setTimeout(windisplay, 1500);
}
// setTimeout(k10, 5000);
function k10(){
    luckyin();
    setTimeout(() => {
        shoot1.classList.add("shoot1animation");
        setTimeout(() => {
            k10result();
            setTimeout(function(){
                if(betcondition==1){
                    clearcount8();
                }
                position1.classList.add("shootr8-10"); 
                windisplay();
            }, 1500);
        }, 3000);
    }, 6030);
}

function l10result(){
    start = 1019.5;
    end = 299.5;
    win = count9 * 10;
    // liverpool *10
    console.log("Liverpool*10 luckcontrol");
    moreshoot();
}
function l10result2(){
    start = 1019.5;
    end = 299.5;
    win1 = count9 * 10;
    // liverpool *10
    console.log("Liverpool*10 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = win1 *100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function l10result2of2(){
    start = 1739.5;
    end = 299.5;
    win2 = count9 * 10;
    console.log('Arsenal');
    moreshoot();
    setTimeout(() => {
        win= win1+win2;
    }, 1000);
    setTimeout(windisplay, 1500);
}
function l3result2(){
    start = 1036.5;
    end = 316.5;
    win1 = count9 * 5;
    console.log('Liverpool');
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = win1 *100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
// setTimeout(l10, 5000);
function l10(){
    luckyin()
    setTimeout(() => {
        shoot1.classList.add("shoot1animation");
        setTimeout(() => {
            l10result();
            setTimeout(function(){
                if(betcondition==1){
                    clearcount9();
                }
                position1.classList.add("shootr9-10"); 
                windisplay();
            }, 1500);
        }, 3000);
    }, 6030);
}

// function of one shoot end Here.....

// function of 2 shoot start Here.....
// 1
// setTimeout(s40d30, 5000);
function s40d30(){
    luckyin();
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            d30result2();
            setTimeout(function(){
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr3-30");
            }, 1500);
            setTimeout(s40result2, 5000)
            setTimeout(function(){
                gunshoot2.play();
                position22.classList.add("shootr2-40");
                if(betcondition==1){
                    clearshootd30ands40();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
function clearshootd30ands40(){
    output1.innerHTML = '';
    output7.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    output9.innerHTML = '';
    output8.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// 1 low
// setTimeout(s3d3, 5000);
function s3d3(){
    luckyin();
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            d3result2();
            setTimeout(function(){
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr3-5");
            }, 1500);
            setTimeout(s3result2, 5000)
            setTimeout(function(){
                gunshoot2.play();
                position22.classList.add("shootr2-5");
                if(betcondition==1){
                    clearshootd30ands40();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
// 2 big
// setTimeout(f20g20, 5000);
function f20g20(){
    luckyin();
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            g20result2();
            setTimeout(function(){
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr5-20");
            }, 1500);
            setTimeout(f20result2, 5000)
            setTimeout(function(){
                gunshoot2.play();
                position22.classList.add("shootr4-20");
                if(betcondition==1){
                    clearshootg20andf20();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
// 2 low
// setTimeout(f3g3, 5000);
function f3g3(){
    luckyin();
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            g3result2();
            setTimeout(function(){
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr5-5");
            }, 1500);
            setTimeout(f3result2, 5000);
            setTimeout(function(){
                gunshoot2.play();
                position22.classList.add("shootr4-5");
                // clear is the same
                if(betcondition==1){
                    clearshootg20andf20();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
function clearshootg20andf20(){
    output1.innerHTML = '';
    output7.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output6.innerHTML = '';
    output9.innerHTML = '';
    output8.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// 3big
// setTimeout(f20h20, 5000);
function f20h20(){
    luckyin();
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            h20result2();
            setTimeout(function(){
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr6-20");
            }, 1500);
            setTimeout(f20result2, 5000)
            setTimeout(function(){
                gunshoot2.play();
                position22.classList.add("shootr4-20");
                if(betcondition==1){
                    clearshooth20andf20();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
// 3low
// setTimeout(f3h3, 5000);
function f3h3(){
    luckyin();
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            h3result2();
            setTimeout(function(){
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr6-5");
            }, 1500);
            setTimeout(f3result2, 5000)
            setTimeout(function(){
                gunshoot2.play();
                position22.classList.add("shootr4-5");
                if(betcondition==1){
                    clearshooth20andf20();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
function clearshooth20andf20(){
    output1.innerHTML = '';
    output7.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output5.innerHTML = '';
    output9.innerHTML = '';
    output8.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// 4big
// setTimeout(g20h20, 5000);
function g20h20(){
    luckyin();
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            h20result2();
            setTimeout(function(){
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr6-20");
            }, 1500);
            setTimeout(g20resultof2shoot, 5000)
            setTimeout(function(){
                gunshoot2.play();
                position22.classList.add("shootr5-20");
                if(betcondition==1){
                    clearshooth20andg20();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
// 4low
// setTimeout(g3h3, 5000);
function g3h3(){
    luckyin();
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            h3result2();
            setTimeout(function(){
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr6-5");
            }, 1500);
            setTimeout(g3resultof2shoot, 5000)
            setTimeout(function(){
                gunshoot2.play();
                position22.classList.add("shootr5-5");
                if(betcondition==1){
                    clearshooth20andg20();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
function clearshooth20andg20(){
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    // output5.innerHTML = '';
    // output6.innerHTML = '';
    output7.innerHTML = '';
    output8.innerHTML = '';
    output9.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// 5big
// setTimeout(j10k10, 5000);
function j10k10(){
    luckyin();
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            k10result2();
            setTimeout(function() {
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr8-10");
            }, 1500);
            setTimeout(j10result2, 5000);
            setTimeout(function(){
                gunshoot2.play();
                position22.classList.add("shootr7-10");
                if(betcondition==1){
                    clearshootk10andj10();
                }
            }, 6500);
        }, 3000);
    }, 6030);
};
// setTimeout(j10k3, 15000);
function j10k3(){
    luckyin();
    setTimeout(() => {
        k3result2();
        setTimeout(function(){
            console.log("after 1.5second");
            shoot2sound.play();
            position12.classList.add("shootr8-5");
        }, 1500);
        setTimeout(j10result2, 5000)
        setTimeout(function(){
            gunshoot2.play();
            position22.classList.add("shootr7-10");
            if(betcondition==1){
                clearshootk10andj10();
            }
        }, 6500);
    }, 9030);
}
// setTimeout(l10k3, 15000);
function l10k3(){
    luckyin();
    setTimeout(() => {
        k3result2();
        setTimeout(function(){
            console.log("after 1.5second");
            shoot2sound.play();
            position12.classList.add("shootr8-5");
        }, 1500);
        setTimeout(l10result2of2(), 5000)
        setTimeout(function(){
            gunshoot2.play();
            position22.classList.add("shootr9-10");
            if(betcondition==1){
                clearshootl10andk10();
            }
        }, 6500);
    }, 9030);
}
// 5low
// setTimeout(j3k3, 5000);
function j3k3(){
    luckyin();
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            k3result2();
            setTimeout(function(){
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr8-5");
            }, 1500);
            setTimeout(j3result2, 5000)
            setTimeout(function(){
                gunshoot2.play();
                position22.classList.add("shootr7-5");
                if(betcondition==1){
                    clearshootk10andj10();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
function clearshootk10andj10(){
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    // output7.innerHTML = '';
    // output8.innerHTML = '';
    output9.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// 6big
// setTimeout(j10l10, 5000);
function j10l10(){
    luckyin()
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            l10result2();
            setTimeout(function(){
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr9-10");
            }, 1500);
            setTimeout(j10result2, 5000)
            setTimeout(function(){
                gunshoot.play();
                position22.classList.add("shootr7-10");
                if(betcondition==1){
                    clearshootl10andj10();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
// setTimeout(j10l3, 15000);
function j10l3(){
    luckyin()
    setTimeout(() => {
        l3result2();
        setTimeout(function(){
            console.log("after 1.5second");
            shoot2sound.play();
        }, 1500);
        setTimeout(j10result2, 5000)
        setTimeout(function(){
            gunshoot.play();
            united10.classList.add("j10of2shoot");
            liverpool3.classList.add("l3of2shoot");
            if(betcondition==1){
                clearshootl10andj10();
            }
        }, 6500);
    }, 9030);
}
// 6low
// setTimeout(j3l3, 5000);
function j3l3(){
    luckyin()
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            l3result2();
            setTimeout(function(){
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr9-5");
            }, 1500);
            setTimeout(j3result2, 5000)
            setTimeout(function(){
                gunshoot.play();
                position22.classList.add("shootr7-5");
                if(betcondition==1){
                    clearshootl10andj10();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
function clearshootl10andj10(){
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    // output7.innerHTML = '';
    output8.innerHTML = '';
    // output9.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// 7big
// setTimeout(k10l10, 5000);
function k10l10(){
    luckyin()
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            l10result2();
            setTimeout(function(){
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr9-10");
            }, 1500);
            setTimeout(k10resultof2shoot, 5000)
            setTimeout(function(){
                gunshoot.play();
                position22.classList.add("shootr8-10");
                if(betcondition==1){
                    clearshootl10andk10();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
// setTimeout(k10l3, 15000);
function k10l3(){
    luckyin()
    setTimeout(() => {
        l3result2();
        setTimeout(function(){
            console.log("after 1.5second");
            shoot2sound.play();
        }, 1500);
        setTimeout(k10resultof2shoot, 5000)
        setTimeout(function(){
            gunshoot.play();
            arsenal10.classList.add("k10of2shootfront");
            liverpool3.classList.add("l3of2shoot");
            if(betcondition==1){
                clearshootl10andk10();
            }
        }, 6500);
    }, 9030);
}
// 7low
// setTimeout(k3l3, 5000);
function k3l3(){
    luckyin()
    setTimeout(() => {
        shoot2.classList.add("shoot2animation");
        setTimeout(() => {
            l3result2();
            setTimeout(function(){
                console.log("after 1.5second");
                shoot2sound.play();
                shoot1.classList.add("shoot1animation");
                position12.classList.add("shootr9-5");
            }, 1500);
            setTimeout(k3resultof2shoot, 5000)
            setTimeout(function(){
                gunshoot.play();
                position22.classList.add("shootr8-5");
                if(betcondition==1){
                    clearshootl10andk10();
                }
            }, 6500);
        }, 3000);
    }, 6030);
}
function clearshootl10andk10(){
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    output7.innerHTML = '';
    // output8.innerHTML = '';
    // output9.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// function of 2 shoot end Here.....

// function of 3 shoot start Heres......
// 1BIG
// setTimeout(a100s40d30,5000);
function a100s40d30(){
    luckyin();
    setTimeout(() => {
        shoot3.classList.add("shoot3animation");
        setTimeout(() => {
            d30result2();
            setTimeout(function(){
                shoot2.classList.add("shoot2animation");
                position13.classList.add("shootr3-30");
            }, 1500);
            setTimeout(s40result3, 5000);
            setTimeout(function() {
                gunshoot2.play();
                shoot1.classList.add("shoot1animation");
                position23.classList.add("shootr2-40");
            }, 6500);
            setTimeout(a100result3,10000);
            setTimeout(() => {
                gunshoot.play();
                position33.classList.add("shootr1-100");
                if(betcondition==1){
                    cleara100s40d30();
                }
            }, 11500);
        }, 3000);
    }, 6030);
}
// 1low
// setTimeout(a50s3d3,5000);
function a50s3d3(){
    luckyin()
    setTimeout(() => {
        shoot3.classList.add("shoot3animation");
        setTimeout(() => {
            d3result2();
            setTimeout(function(){
                gunshoot.play();
                shoot2.classList.add("shoot2animation");
                position13.classList.add("shootr3-5");
            }, 1500);
            setTimeout(s3result3, 5000);
            setTimeout(function(){
                gunshoot2.play();
                shoot1.classList.add("shoot1animation");
                position23.classList.add("shootr2-5");
            }, 6500);
            setTimeout(a50result3,10000);
            setTimeout(() => {
                gunshoot.play();
                position33.classList.add("shootr1-50");
                if(betcondition==1){
                    cleara100s40d30();
                }
            }, 11500);
        }, 3000);
    }, 6030);
}
function cleara100s40d30(){
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    output7.innerHTML = '';
    output8.innerHTML = '';
    output9.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// 2big

// setTimeout(f20g20h20,5000);
function f20g20h20(){
    luckyin();
    setTimeout(() => {
        shoot3.classList.add("shoot3animation");
        setTimeout(() => {
            h20result2();
            setTimeout(function(){
                gunshoot.play();
                shoot2.classList.add("shoot2animation");
                position13.classList.add("shootr6-20");
            }, 1500);
            setTimeout(g20result3, 5000);
            setTimeout(function(){
                gunshoot2.play();
                shoot1.classList.add("shoot1animation");
                position23.classList.add("shootr5-20");
            }, 6500);
            setTimeout(f20result3,10000);
            setTimeout(() => {
                gunshoot.play();
                position33.classList.add("shootr4-20");
                if(betcondition==1){
                    clearf20g20h20();
                }
            }, 11500);
        }, 3000);
    }, 6030);
}
// 2low
// setTimeout(f3g3h3,5000);
function f3g3h3(){
    luckyin();
    setTimeout(() => {
        shoot3.classList.add("shoot3animation");
        setTimeout(() => {
            h3result2();
            setTimeout(function(){
                gunshoot.play();
                shoot2.classList.add("shoot2animation");
                position13.classList.add("shootr6-5");
            }, 1500);
            setTimeout(g3result3, 5000);
            setTimeout(function(){
                gunshoot2.play();
                shoot1.classList.add("shoot1animation");
                position23.classList.add("shootr5-5");
            }, 6500);
            setTimeout(f3result3,10000);
            setTimeout(() => {
                gunshoot.play();
                position33.classList.add("shootr4-5");
                if(betcondition==1){
                    clearf20g20h20();
                }
            }, 11500);
        }, 3000);
    }, 6030);
}
function clearf20g20h20(){
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    // output4.innerHTML = '';
    // output5.innerHTML = '';
    // output6.innerHTML = '';
    output7.innerHTML = '';
    output8.innerHTML = '';
    output9.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// 3big
// setTimeout(j10k10l10,5000);
function j10k10l10(){
    luckyin();
    setTimeout(() => {
        shoot3.classList.add("shoot3animation");
        setTimeout(() => {
            l10result2();
            setTimeout(function(){
                shoot2.classList.add("shoot2animation");
                position13.classList.add("shootr9-10");
            }, 1500);
            setTimeout(k10result3, 5000);
            setTimeout(function(){
                gunshoot2.play();
                shoot1.classList.add("shoot1animation");
                position23.classList.add("shootr8-10");
            }, 6500);
            setTimeout(j10result3,10000);
            setTimeout(() => {
                gunshoot.play();
                position33.classList.add("shootr7-10");
                if(betcondition==1){
                    clearj10k10l10();
                }
            }, 11500);
        }, 3000);
    }, 6030);
}
// 3 low
// setTimeout(j3k3l3,5000);
function j3k3l3(){
    luckyin()
    setTimeout(() => {
        shoot3.classList.add("shoot3animation");
        setTimeout(() => {
            l3result2();
            setTimeout(function(){
                gunshoot.play();
                shoot2.classList.add("shoot2animation");
                position13.classList.add("shootr9-5");
            }, 1500);
            setTimeout(k3result3, 5000);
            setTimeout(function(){
                gunshoot2.play();
                shoot1.classList.add("shoot1animation");
                position23.classList.add("shootr8-5");
            }, 6500);
            setTimeout(j3result3,10000);
            setTimeout(() => {
                gunshoot.play();
                position33.classList.add("shootr7-5");
                if(betcondition==1){
                    clearj10k10l10();
                }
            }, 11500);
        }, 3000);
    }, 6030);
}
function clearj10k10l10(){
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    // output7.innerHTML = '';
    // output8.innerHTML = '';
    // output9.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// function of 3 shoot end Heres......

// function of 6 shoot START Here......
// 1
// setTimeout(f20g20h20j10k10l10,5000);
function f20g20h20j10k10l10(){
    luckyin();
    setTimeout(() => {
        shoot6.classList.add("shoot6animation");
        setTimeout(() => {
            l10result2();
            setTimeout(function(){
                shoot6of10.classList.add("shoot6of10animation");
                position16.classList.add("shootr9-10");
            }, 1500);
            setTimeout(k10result6, 5000);
            setTimeout(function(){
                gunshoot2.play();
                shoot7of10.classList.add("shoot7of10animation");
                position26.classList.add("shootr8-10");
            }, 6500);
            setTimeout(j10result6,10000);
            setTimeout(() => {
                gunshoot.play();
                shoot3.classList.add("shoot3animation");
                position36.classList.add("shootr7-10");
            }, 11500);
            setTimeout(h20result6,15000);
            setTimeout(() => {
                gunshoot2.play();
                shoot2.classList.add("shoot2animation");
                position46.classList.add("shootr6-20");
            }, 16500);
            setTimeout(g20result6,20000);
            setTimeout(() => {
                gunshoot.play();
                shoot1.classList.add("shoot1animation");
                position56.classList.add("shootr5-20");
            }, 21500);
            setTimeout(f20result6,25000);
            setTimeout(() => {
                gunshoot2.play();
                console.log("finishing")
                position66.classList.add("shootr4-20");
                if(betcondition==1){
                    clearnf20g20h20j10k10l10();
                }
            }, 26500);
        }, 3000);
    }, 6030);
}
function clearnf20g20h20j10k10l10(){
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// 2
// setTimeout(a100s40d30j10k10l10,5000);
function a100s40d30j10k10l10(){
    luckyin();
    setTimeout(() => {
        shoot6.classList.add("shoot6animation");
        setTimeout(() => {
            l10result2();
            setTimeout(function(){
                shoot6of10.classList.add("shoot6of10animation");
                position16.classList.add("shootr9-10");
            }, 1500);
            setTimeout(k10result6, 5000);
            setTimeout(function(){
                gunshoot2.play();
                shoot7of10.classList.add("shoot7of10animation");
                position26.classList.add("shootr8-10");
            }, 6500);
            setTimeout(j10result6,10000);
            setTimeout(() => {
                gunshoot.play();
                shoot3.classList.add("shoot3animation");
                position36.classList.add("shootr7-10");
            }, 11500);
            setTimeout(d30result6,15000);
            setTimeout(() => {
                gunshoot2.play();
                shoot2.classList.add("shoot2animation");
                position46.classList.add("shootr3-30");
            }, 16500);
            setTimeout(s40result6,20000);
            setTimeout(() => {
                gunshoot.play();
                shoot1.classList.add("shoot1animation");
                position56.classList.add("shootr2-40");
            }, 21500);
            setTimeout(a100result6,25000);
            setTimeout(() => {
                gunshoot2.play();
                position66.classList.add("shootr1-100");
                if(betcondition==1){
                    cleara100s40d30j10k10l10();
                }
            }, 26500);
        }, 3000);
    }, 6030);
}
function cleara100s40d30j10k10l10(){
    // output1.innerHTML = '';
    // output2.innerHTML = '';
    // output3.innerHTML = '';
    output4.innerHTML = '';
    output5.innerHTML = '';
    output6.innerHTML = '';
    // output7.innerHTML = '';
    // output8.innerHTML = '';
    // output9.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
localStorage.setItem('gameversion','03');
// setTimeout(a100s40d30f20g20h20,5000);
function a100s40d30f20g20h20(){
    luckyin();
    setTimeout(() => {
        shoot6.classList.add("shoot6animation");
        setTimeout(() => {
            h20result2();
            setTimeout(function(){
                shoot6of10.classList.add("shoot6of10animation");
                position16.classList.add("shootr6-20");
            }, 1500);
            setTimeout(g20result62, 5000);
            setTimeout(function(){
                gunshoot2.play();
                shoot7of10.classList.add("shoot7of10animation");
                position26.classList.add("shootr5-20");
            }, 6500);
            setTimeout(f20result62,10000);
            setTimeout(() => {
                gunshoot.play();
                shoot3.classList.add("shoot3animation");
                position36.classList.add("shootr4-20");
            }, 11500);
            setTimeout(d30result6,15000);
            setTimeout(() => {
                gunshoot2.play();
                shoot2.classList.add("shoot2animation");
                position46.classList.add("shootr3-30");
            }, 16500);
            setTimeout(s40result6,20000);
            setTimeout(() => {
                gunshoot.play();
                shoot1.classList.add("shoot1animation");
                position56.classList.add("shootr2-40");
            }, 21500);
            setTimeout(a100result6,25000);
            setTimeout(() => {
                gunshoot2.play();
                position66.classList.add("shootr1-100");
                if(betcondition==1){
                    cleara100s40d30f20g20h20();
                }
            }, 26500);
        }, 3000);
    }, 6030);
}
function cleara100s40d30f20g20h20(){
    // output1.innerHTML = '';
    // output2.innerHTML = '';
    // output3.innerHTML = '';
    // output4.innerHTML = '';
    // output5.innerHTML = '';
    // output6.innerHTML = '';
    output7.innerHTML = '';
    output8.innerHTML = '';
    output9.innerHTML = '';
    output10.innerHTML = '';
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
function p5all(){
    start = 1053;
    end = 333;
    win1 = count10 * 6;
    introlucky=15;
    // chelsea *5
    console.log("Chelsea");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = win1 *100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function l10all(){
    start = 1739.5;
    end = 299.5;
    win2 = count9 * 10;
    introlucky=15;
    // liverpool *10
    console.log("Liverpool*10 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win2)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function k10all(){
    start = 2424;
    end = 264;
    win3 = count8 * 10;
    introlucky=15;
    // arsenal *10
    console.log("Arsenal*10 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win2+win3)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function j10all(){
    start = 3107.5;
    end = 227.5;
    win4 = count7 * 10;
    introlucky=15;
    // machester united *10
    console.log("MachesterUnited*10 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win2+win3+win4)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function h20all(){
    start = 3790.5;
    end = 190.5;
    win5 = count6 * 20;
    introlucky=15;
    // machester city *20
    console.log("MachesterCity*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win2+win3+win4+win5)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function g20all(){
    start = 4473;
    end = 153;
    win6 = count5 * 20;
    introlucky=15;
    // bayernmunich *20
    console.log("BayernMunich*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win2+win3+win4+win5+win6)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function f20all(){
    start = 5155;
    end = 115;
    win7 = count4 * 20;
    introlucky=15;
    // parisgermain *20
    console.log("ParisGermain*20 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win2+win3+win4+win5+win6+win7)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function d30all(){
    start = 5839;
    end = 79;
    win8 = count3 * 30;
    introlucky=15;
    // barcelona *30
    console.log("Barcelona*30 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win2+win3+win4+win5+win6+win7+win8)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function s40all(){
    start = 6524;
    end = 44;
    win9 = count2 * 40;
    introlucky=15;
    // real madrid *40
    console.log("RealMadrid*40 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win2+win3+win4+win5+win6+win7+win8+win9)*100;
        }
    }, 1500);
    // setTimeout(windisplay, 1500);
}
function a100all(){
    start = 7209;
    end = 9;
    win10 = count1 * 100;
    introlucky=15;
    // king * 100
    console.log("king*100 luckcontrol");
    moreshoot();
    setTimeout(() => {
        if(betcondition==1) {
            winafter.innerHTML = (win1+win2+win3+win4+win5+win6+win7+win8+win9+win10)*100;
            win = win1+win2+win3+win4+win5+win6+win7+win8+win9+win10;
        }
    }, 1500);
    setTimeout(windisplay, 1500);
}
// function of 6 shoot END Here......
// setTimeout(() => {
//     shoot10.classList.add("shoot10animation");
//     setTimeout(a100s40d30f20g20h20j10k10l10p5, 3000)
// }, 20000);
// setTimeout(a100s40d30f20g20h20j10k10l10p5,5000);
function a100s40d30f20g20h20j10k10l10p5(){
    luckyin();
    setTimeout(() => {
        shoot10.classList.add("shoot10animation");
        setTimeout(() => {
            p5all();
            setTimeout(function(){
                gunshoot2.play();
                shoot2of10.classList.add("shoot2of10animation");
                position110.classList.add("shootr10-6");
            }, 1500);
            setTimeout(l10all, 5000);
            setTimeout(function(){
                gunshoot.play();
                shoot3of10.classList.add("shoot3of10animation");
                position210.classList.add("shootr9-10");
            }, 6500);
            setTimeout(k10all,10000);
            setTimeout(() => {
                gunshoot2.play();
                shoot4of10.classList.add("shoot4of10animation");
                position310.classList.add("shootr8-10");
            }, 11500);
            setTimeout(j10all,15000);
            setTimeout(() => {
                gunshoot.play();
                shoot5of10.classList.add("shoot5of10animation");
                position410.classList.add("shootr7-10");
            }, 16500);
            setTimeout(h20all,20000);
            setTimeout(() => {
                gunshoot2.play();
                shoot6of10.classList.add("shoot6of10animation");
                position510.classList.add("shootr6-20");
            }, 21500);
            setTimeout(g20all,25000);
            setTimeout(() => {
                gunshoot.play();
                shoot7of10.classList.add("shoot7of10animation");
                position610.classList.add("shootr5-20");
            }, 26500);
            setTimeout(f20all,30000);
            setTimeout(() => {
                gunshoot2.play();
                shoot8of10.classList.add("shoot8of10animation");
                position710.classList.add("shootr4-20");
            }, 31500);
            setTimeout(d30all,35000);
            setTimeout(() => {
                gunshoot.play();
                shoot9of10.classList.add("shoot9of10animation");
                position810.classList.add("shootr3-30");
            }, 36500);
            setTimeout(s40all,40000);
            setTimeout(() => {
                gunshoot2.play();
                shoot10of10.classList.add("shoot10of10animation");
                position910.classList.add("shootr2-40");
            }, 41500);
            setTimeout(a100all,45000);
            setTimeout(() => {
                gunshoot.play();
                position1010.classList.add("shootr1-100");
                if(betcondition==1){
                    clearall();
                }
            }, 46500);
        }, 3000);
    }, 6030);
}
function clearall(){
    // output1.innerHTML = '';
    // output2.innerHTML = '';
    // output3.innerHTML = '';
    // output4.innerHTML = '';
    // output5.innerHTML = '';
    // output6.innerHTML = '';
    // output7.innerHTML = '';
    // output8.innerHTML = '';
    // output9.innerHTML = '';
    // output10.innerHTML = '';
    start=0;
    end=0;
    stopall=1;
    localStorage.setItem('stopall',stopall);
}
// function of all shoot END Here.....

// subscription start here!
const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            codes[idx].value='';
            setTimeout(() => codes[idx + 1].focus(), 10);
        }else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx -1].focus(), 10);
        }
    })
});


var nextlevel=0;
var sec=0;
var subscri=0;
var gamei=0;

var inter=0;

document.addEventListener("mousedown", () => {
    document.documentElement.requestFullscreen().catch();
});


var fill=0;
var allowenter=0;
// balanceDiv.innerText = Math.floor(qaziCheking.balance *100);

var turn = [];
var array = [];
var cir=0;
var times=0;

// FREE SHOOT ABOVE
var freelowshoot=0;
function aboveads() {
    if(count1==0||count2==0||count3==0||count4==0||count5==0||count6==0||count7==1||count8==0||count9==0){
        freeshoot=localStorage.getItem('freelowshoot');
        freelowshoot++;
        localStorage.setItem('freelowshoot',freelowshoot);
        console.log("freelowshoot",freelowshoot);
        if(freelowshoot>3){
            console.log("freelowshoot is greater than 3",freelowshoot);
            if(count1==0&&count2==0&&count3==0&&count4==0&&count5==0&&count6==0&&count7==0&&count8==0&&count9==0){
                luckyin();
            }else if(count4==0&&count5==0&&count6==0&&count7==0&&count8==0&&count9==0){
                luckyin();
            }else if(count1==0&&count2==0&&count3==0&&count4==0&&count5==0&&count6==0){
                luckyin();
            }else if(count1==0&&count2==0&&count3==0){
                luckyin();
            }else if(count7==0&&count8==0&&count9==0){
                luckyin();
            }else if(count4==0&&count5==0&&count6==0){
                luckyin();
            }else if(count2==0&&count3==0){
                luckyin();
            }else if(count4==0&&count5==0){
                luckyin();
            }else if(count4==0&&count6==0){
                luckyin();
            }else if(count5==0&&count6==0){
                luckyin();
            }else if(count1==0){
                luckyin();
            }else if(count2==0){
                luckyin();
            }else if(count3==0){
                luckyin();
            }else if(count4==0){
                luckyin();
            }else if(count5==0){
                luckyin();
            }else if(count6==0){
                luckyin();
            }else if(count7==0){
                luckyin();
            }else if(count8==0){
                luckyin();
            }else if(count9==0){
                luckyin();
            }else {
                console.log("freelowshoot is less than 3 or equal",freelowshoot);
                // continue normal
                normalrun()
            }
        }else {
            console.log("freelowshoot is less than 3 or equal",freelowshoot);
            // continue normal
            normalrun()
        }
    }else {
    console.log("freelowshoot is less than 3 or equal",freelowshoot);
    // continue normal
    normalrun()
    }
}

// money display start here.....
const note1an = document.querySelector('.moneydisplay1');
const note2an = document.querySelector('.moneydisplay2');
const note3an = document.querySelector('.moneydisplay3');
const note4an = document.querySelector('.moneydisplay4');
const note5an = document.querySelector('.moneydisplay5');
const note6an = document.querySelector('.moneydisplay6');
const note7an = document.querySelector('.moneydisplay7');
const note8an = document.querySelector('.moneydisplay8');
const note9an = document.querySelector('.moneydisplay9');
const note10an = document.querySelector('.moneydisplay10');
const note11an = document.querySelector('.moneydisplay11');
const note12an = document.querySelector('.moneydisplay12');
const coin1an = document.querySelector('.coindisplay1');
const coin2an = document.querySelector('.coindisplay2');
// function to add annimation to the notes & coins
function addnotescoins() {
    note1an.classList.add("annimationdisp1");
    note2an.classList.add("annimationdisp2");
    note3an.classList.add("annimationdisp3");
    note4an.classList.add("annimationdisp4");
    note5an.classList.add("annimationdisp5");
    note6an.classList.add("annimationdisp6");
    note7an.classList.add("annimationdisp7");
    note8an.classList.add("annimationdisp8");
    note9an.classList.add("annimationdisp9");
    note10an.classList.add("annimationdisp10");
    note11an.classList.add("annimationdisp11");
    note12an.classList.add("annimationdisp12");
    coin1an.classList.add("annimationcoin1");
    coin2an.classList.add("annimationcoin2");
}
function removenotescoins() {
    note1an.classList.remove("annimationdisp1");
    note2an.classList.remove("annimationdisp2");
    note3an.classList.remove("annimationdisp3");
    note4an.classList.remove("annimationdisp4");
    note5an.classList.remove("annimationdisp5");
    note6an.classList.remove("annimationdisp6");
    note7an.classList.remove("annimationdisp7");
    note8an.classList.remove("annimationdisp8");
    note9an.classList.remove("annimationdisp9");
    note10an.classList.remove("annimationdisp10");
    note11an.classList.remove("annimationdisp11");
    note12an.classList.remove("annimationdisp12");
    coin1an.classList.remove("annimationcoin1");
    coin2an.classList.remove("annimationcoin2");
}
// start here with new project...
var notetop = 0;
var noteright = 0;
var notenbr = 0;
var coinright = 0;
var cointop = 0;
// var noteamount = 0;
function noteposition() {
    if(notenbr==1) {
        notetop = 20;
        noteright = -18;
    }else if(notenbr==2) {
        notetop = 14;
        noteright = -15.5;
    }else if(notenbr==3) {
        notetop = 8;
        noteright = -13;
    }else if(notenbr==4) {
        notetop = 2;
        noteright = -10.5;
    }else if(notenbr==5) {
        notetop = -4;
        noteright = -8;
    }else if(notenbr==6) {
        notetop = -10;
        noteright = -5.5;
    }else if(notenbr==7) {
        notetop = 20;
        noteright = -51.5;
    }else if(notenbr==8) {
        notetop = 14;
        noteright = -49;
    }else if(notenbr==9) {
        notetop = 8;
        noteright = -46.5;
    }else if(notenbr==10) {
        notetop = 2;
        noteright = -44;
    }else if(notenbr==11) {
        notetop = -4;
        noteright = -41.5;
    }else if(notenbr==12) {
        notetop = -10;
        noteright = -39;
    }
};
function coinposition() {
    if(notearray.length==0) {
        cointop = 23.3;
        coinright = -28;
    } else if(notearray.length>0 && notearray.length<=6) {
        cointop = 20;
        coinright = -18;
    }else {
        cointop = 20;
        coinright = -51.5;
    };
};
var noteof5000 = 0;
var noteof2000 = 0;
var noteof1000 = 0;
var noteof500 = 0;
var allnotes = 0;
var allcoins = 0;
function allnote(moneyamount) {
    const denominations = [
        {value: 5000, name: '5,000 Frw'},
        {value: 2000, name: '2,000 Frw'},
        {value: 1000, name: '1,000 Frw'},
        {value: 500, name: '500 Frw'},
        {value: 100, name: '100 Frw coin'},
    ];
    let notes = { '5,000 Frw': 0, '2,000 Frw': 0,  '1,000 Frw': 0,  '500 Frw': 0,};
    let coins = {};
    let totalnotes = 0;
    let totalcoins = 0;
    denominations.forEach(denom => {
        let count = Math.floor(moneyamount / denom.value);// get how many notes/coins of this denomination
        if(count > 0) {
            if(denom.value >= 500) {
                notes[denom.name] = count; 
                totalnotes += count;
            } else {
                coins[denom.name] = count;
                totalcoins += count;
            }
            moneyamount -= count * denom.value; // subtract value from the amount
        }
    });
    noteof5000 = notes['5,000 Frw'];
    noteof2000 = notes['2,000 Frw'];
    noteof1000 = notes['1,000 Frw'];
    noteof500 = notes['500 Frw'];
    allnotes = totalnotes;
    allcoins = totalcoins;
    // return both the number of notes and the number of coins
    let notetypes = [5000, 2000, 1000, 500];
    let notecounts = [noteof5000, noteof2000, noteof1000, noteof500];
    console.log("note Array:", createNoteArray(notetypes, allnotes, notecounts));
    return { notes, coins, totalnotes, totalcoins};
};

console.log("noteof5000 = ",noteof5000);
console.log("noteof2000 = ",noteof2000);
console.log("noteof1000 = ",noteof1000);
console.log("noteof500 = ",noteof500);
console.log("allnotes = ",allnotes);
console.log("allcoins = ",allcoins);
var notearray = [];
function createNoteArray(notetypes, allnotes, notecounts) {
    notearray = [];
    notetypes.forEach((note, index) => {
        for(let i=0; i<notecounts[index]; i++) {
            notearray.push(note);
        };
    });
    if(allnotes > 6) {
        let firstPart = notearray.slice(0, 6).sort ((a, b) => a - b);
        let secondPart = notearray.slice(6).sort ((a, b) => a - b);
        notearray = firstPart.concat(secondPart);
    } else {
        notearray.sort((a, b) => a - b);
    };
    addnotescoins();
    runmoneyann();
    return notearray;
}; // here we call arraynote function


// let start with coin remain here.
function removeallchild () {
    console.log("removeChild");
    const styleSheet = document. createElement("style");
}
var coinpst = 0;
function runmoneyann() {
    // remove before appended child
    noteposition()
    // let try to call no te in its place
    // Check if a <style> element for money${i} already exists
    for(let i=1; i<=12; i++) {
        let existingStyle = document.querySelector(`head style[data-keyframe="money${i}"]`);
        console.log(`money${i}`);
        let existingStyle1 = document.querySelector(`head style[data-keyframe="coin${1}"]`);
        let existingStyle2 = document.querySelector(`head style[data-keyframe="coin${2}"]`);
    
        if (existingStyle) {
        // If it exists, remove it
        existingStyle.remove();
        console.log("note removed");
        } else {
            console.log("note doesn't exist");
        }
        if (existingStyle1) {
        // If it exists, remove it
        existingStyle1.remove();
        console.log("coin1 removed");
        } else {
            console.log("coin1 doesn't exist");
        }
        if (existingStyle2) {
        // If it exists, remove it
        existingStyle2.remove();
        console.log("coins2 removed");
        } else {
            console.log("coins2 doesn't exist");
        }
    }
    for(let i=1; i<=notearray.length; i++) {
        console.log("value of i =" + i + " It's note is "+notearray[i-1]);
        notenbr = i;
        noteposition();
        //
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes money${i} {
               0%, 23% {
                    background-image: url(./;/img/${notearray[i-1]}.png);
                    transform: scale(.1);
                    top: -45%;
                    right: -2.5%;
                    width: 100%;
                    height: 100%;
                }
                23%,66%{
                    background-image: url(./;/img/${notearray[i-1]}.png);
                    transform: scale(.7);
                    top: ${notetop}%;
                    right: ${noteright}%;
                    width: 100%;
                    height: 100%;
                }
                66%,90%{
                    background-image: url(./;/img/${notearray[i-1]}.png);
                    transform: scale(.7);
                    top: ${notetop}%;
                    right: ${noteright}%;
                    width: 100%;
                    height: 100%;
                }
                90%,100% { 
                    background-image: url(./;/img/${notearray[i-1]}.png);
                    transform: scale(.1);
                    top: -45%;
                    right: -2.5%;
                    width: 100%;
                    height: 100%;
                }
            }
        `;
        // Set the custom attribute for identification
        styleSheet.setAttribute("data-keyframe", `money${i}`);
        document.head.appendChild(styleSheet);
    };
    if(allcoins > 0) {
        if(notearray.length<=6) {
            coinpst = 1;
        } else {
            coinpst = 2;
        }
        coinposition();
        const styleSheet = document. createElement("style");
        styleSheet.type = "text/css";
        if(notearray==0) {
            styleSheet.innerText = `
                @keyframes coin${coinpst} {
                   0%, 23% {
                        background-image: url(./;/img/100-${allcoins}${allcoins}.png);
                        transform: scale(.1);
                        top: -45%;
                        right: -2.5%;
                        width: 100%;
                        height: 100%;
                    }
                    23%,66%{
                        background-image: url(./;/img/100-${allcoins}${allcoins}.png);
                        transform: scale(.7);
                        top: ${cointop}%;
                        right: ${coinright}%;
                        width: 100%;
                        height: 100%;
                    }
                    66%,90%{
                        background-image: url(./;/img/100-${allcoins}${allcoins}.png);
                        transform: scale(.7);
                        top: ${cointop}%;
                        right: ${coinright}%;
                        width: 100%;
                        height: 100%;
                    }
                    90%,100% { 
                        background-image: url(./;/img/100-${allcoins}${allcoins}.png);
                        transform: scale(.1);
                        top: -45%;
                        right: -2.5%;
                        width: 100%;
                        height: 100%;
                    }
                }
            `;
        }else {
            styleSheet.innerText = `
                @keyframes coin${coinpst} {
                   0%, 23% {
                        background-image: url(./;/img/100-${allcoins}.png);
                        transform: scale(.1);
                        top: -45%;
                        right: -2.5%;
                        width: 100%;
                        height: 100%;
                    }
                    23%,66%{
                        background-image: url(./;/img/100-${allcoins}.png);
                        transform: scale(.7);
                        top: ${cointop}%;
                        right: ${coinright}%;
                        width: 100%;
                        height: 100%;
                    }
                    66%,90%{
                        background-image: url(./;/img/100-${allcoins}.png);
                        transform: scale(.7);
                        top: ${cointop}%;
                        right: ${coinright}%;
                        width: 100%;
                        height: 100%;
                    }
                    90%,100% { 
                        background-image: url(./;/img/100-${allcoins}.png);
                        transform: scale(.1);
                        top: -45%;
                        right: -2.5%;
                        width: 100%;
                        height: 100%;
                    }
                }
            `;
        }
        styleSheet.setAttribute("data-keyframe", `coin${coinpst}`);
        document.head.appendChild(styleSheet);
    };
}

// localStorage.setItem('bonusequence',0);
// runmoneyann();
var totalwincredits = 429; // win or cashout or cashin. before *100;0104391423
var totalrealamount = Number(totalwincredits*100); // result in real amount;
// console.log("For amount " + totalrealamount + ": ", allnote(totalrealamount));
// money display end here.............
var shootloopincome =  JSON.parse(localStorage.getItem('shootloopincome'));
var totalvalue=0;
var changetopmoney=0;
var changehighmoney=0;
var changelowmoney=0;
var playerprize = 0;
var matchprize = 0;
var gameincome = 0;
var bonusprize = 0;
var shoot1sprize = 0;
var shoot2sprize = 0;
var shoot3sprize = 0;
var shoot4sprize = 0;
// var shoot1sprize = 0;
var highshootsprize = 0;
var topshootsprize = 0;
var caseshoots=[];
var matchimcome = 0;
var choosehowrun = Number(localStorage.getItem("chooserun") || 0);
var bonusshootnbr = 0;
var case1=10;
var gamenbrnow = Number(localStorage.getItem('cpgamenbr')||0);
var activateshoot = Number(localStorage.getItem('activesht')||1);
var checkactivationnbr = 0;
var checkcptshoot=0;
var checkbonushoot=0;
function runshootnomoney() {
    gamerunning = 0;
    var a=0;
    var b=0;
    var c=0;
    var d=0;
    var e=0;
    var f=0;
    var g=0;
    var h=0;
    var j=0;
    var k=0;
    var l=0;
    var m=0;
    var n=0;
    var o=0;
    var p=0;
    var q=0;
    var r=0;
    var s=0;
    var t=0;
    // new shoot start
    // stored shoots
    var abcdefghjklp=count1*100+count2*40+count3*30+count4*20+count5*20+count6*20+count7*10+count8*10+count9*10+count10*6; //all
    console.log("allshoothere ",abcdefghjklp);
    var abcdef=count1*100+count2*40+count3*30+count4*20+count5*20+count6*20;
    console.log("abcdef",abcdef);
    var abc=count1*100+count2*40+count3*30;
    console.log("abc",abc);
    // stored shoot end here
    var abcghj=count1*100+count2*40+count3*30+count7*10+count8*10+count9*10;
    console.log("abcghj",abcghj);
    // new shoot end!
    var defghj=count4*20+count5*20+count6*20+count7*10+count8*10+count9*10;
    var bc=count2*40+count3*30;
    var def=count4*20+count5*20+count6*20;
    var de=count4*20+count5*20;
    var df=count4*20+count6*20;
    var ef=count5*20+count6*20;
    var ghj=count7*10+count8*10+count9*10;
    var gh=count7*10+count8*10;
    var gj=count7*10+count9*10;
    var hj=count8*10+count9*10;
    var mn=count2*5+count3*5;
    var op=count4*5+count5*5;
    var oq=count4*5+count6*5;
    var pq=count5*5+count6*5;
    var rs=count7*5+count8*5;
    var rt=count7*5+count9*5;
    var st=count8*5+count9*5;
    var opq=count4*5+count5*5+count6*5;
    var rst=count7*5+count8*5+count9*5;
    const newshoots=[
        {
            name:"count1high", prize: a
        },
        {
            name:"count2high", prize: b
        },
        {
            name:"count3high", prize: c
        },
        {
            name:"count4high", prize: d
        },
        {
            name:"count5high", prize: e
        },
        {
            name:"count6high", prize: f
        },
        {
            name:"count7high", prize: g
        },
        {
            name:"count8high", prize: h
        },
        {
            name:"count9high", prize: j
        },
        {
            name:"count10high", prize: k
        },
        {
            name:"count1/50", prize: l
        },
        {
            name:"count2/5", prize: m
        },
        {
            name:"count3/5", prize: n
        },
        {
            name:"count4/5", prize: o
        },
        {
            name:"count5/5", prize: p
        },
        {
            name:"count6/5", prize: q
        },
        {
            name:"count7/5", prize: r
        },
        {
            name:"count8/5", prize: s
        },
        {
            name:"count9/5", prize: t
        },
        {
            name:"count4high+count5+count6+count7+count8+count9", prize: defghj
        },
        {
            name:"count1high+count2+count3+count4+count5+count6+count7+count8+count9+count10", prize: abcdefghjklp
        },
        {
            name:"count1high+count2+count3+count4+count5+count6", prize: abcdef
        },
        {
            name:"count1high+count2+count3+count7+count8+count9", prize: abcghj
        },
        {
            name:"count1high+count2high+count3high", prize: abc
        },
        {
            name:"count2high+count3high", prize: bc
        },
        {
            name:"count4high+count5high+count6high", prize: def
        },
        {
            name:"count4high+count5high", prize: de
        },
        {
            name:"count4high+count6high", prize: df
        },
        {
            name:"count5high+count6high", prize: ef
        },
        {
            name:"count7high+count8high+count9high", prize: ghj
        },
        {
            name:"count7hig+count8hig", prize: gh
        },
        {
            name:"count7hig+count9hig", prize: gj
        },
        {
            name:"count8hig+count9hig", prize: hj
        },
        {
            name:"count2/5+count3/5", prize: mn
        },
        {
            name:"count4/5+count5/5", prize: op
        },
        {
            name:"count4/5+count6/5", prize: oq
        },
        {
            name:"count5/5+count6/5", prize: pq
        },
        {
            name:"count7/5+count8/5", prize: rs
        },
        {
            name:"count7/5+count9/5", prize: rt
        },
        {
            name:"count8/5+count9/5", prize: st
        },
        {
            name:"count4/5+count5/5+count6/5", prize: opq
        },
        {
            name:"count7/5+count8/5+count9/5", prize: rst
        }
    ];
    //
    caseshoots=newshoots;
    let finalcaseshoots=[];
    //
    let choosehowrun = Number(localStorage.getItem("chooserun") || 0);
    console.log("choosehowrun", choosehowrun);
    var choosenlong = Number(localStorage.getItem("chooselong") || 0);
    if(choosenlong==0) {
        const choose = Math.floor(Math.random() * (100 - 50) + 50);
        localStorage.setItem("chooselong", choose);
        choosenlong = Number(localStorage.getItem("chooselong"));
    }
    if(choosehowrun==choosenlong) {
        runnormallongestshoots();
    }else {
        runnormalshoots();
    }
    //
    function runnormalshoots() {
        let caselenght = caseshoots.length;
        function getRandomShoot(min, max) {
            let step1 = max-min +1;
            let step2 = Math.random() * step1;
            let result = Math.floor(step2) + min;
            // console.log("step1",step1);
            return result;
        }
        let casechoice = getRandomShoot(0, caselenght-1);
        // console.log("casechoice index",casechoice);
        finalcaseshoots = caseshoots[casechoice];
        choosehowrun++;
        localStorage.setItem("chooserun", choosehowrun);
    };
    function runnormallongestshoots() {
        let shootsnamearry=[];
        for(o=0; o<caseshoots.length; o++) {
            shootsnamearry.push(caseshoots[o].name);
        }
        console.log("shootsnamesarry",shootsnamearry);
        const newarrynow = shootsnamearry.filter(element => element.includes("hig"));
        console.log("All high shoots name is: ", newarrynow);
        if(newarrynow.length>=1) {
            choosehowrun=0;
            localStorage.setItem("chooserun", choosehowrun);
            console.log("longest shoots is available");
            const findnameindex = findLongestNameIndex(newarrynow);
            longname = newarrynow[findnameindex];
            console.log("longname is: ", longname);
            const indexofname = shootsnamearry.indexOf(longname);
            console.log("longname index from all shoots is: ", indexofname);
            finalcaseshoots = caseshoots[indexofname];
            console.log("finalcaseshoots in prio",finalcaseshoots);
        } else {
            console.log("longest shoots is not available");
            caseshoots = newshoots.filter(newshoot => newshoot.prize <= playerprize);
            let caselenght = caseshoots.length;
            function getRandomShoot(min, max) {
                let step1 = max-min +1;
                let step2 = Math.random() * step1;
                let result = Math.floor(step2) + min;
                // console.log("step1",step1);
            
                return result;
            }
            let casechoice = getRandomShoot(0, caselenght-1);
            // console.log("casechoice index",casechoice);
            finalcaseshoots = caseshoots[casechoice];
        }
    }
    console.log("finalcaseshoots",finalcaseshoots);
    if(finalcaseshoots==null){
        console.log("finalcaseshoots ( it may be null or undefined)");
        localStorage.setItem('playerprize',0);
        location.href = 'MOO-GAME.html';
    }else {
        console.log("finalcaseshoots is a real value with: ", finalcaseshoots);
    }
    // running first shoots
    if(finalcaseshoots.name==="count10high"){
        console.log("count10high");
        p5();
    }else if(finalcaseshoots.name==="count1/50"){
        console.log("count1/50");
        a50();
    }else if(finalcaseshoots.name==="count2/5"){
        console.log("count2/5");
        s3();
    }else if(finalcaseshoots.name==="count3/5"){
        console.log("count3/5");
        d3();
    }else if(finalcaseshoots.name==="count4/5"){
        console.log("count4/5");
        f3();
    }else if(finalcaseshoots.name==="count5/5"){
        console.log("count5/5");
        g3();
    }else if(finalcaseshoots.name==="count6/5"){
        console.log("count6/5");
        h3();
    }if(finalcaseshoots.name==="count1high"){
        console.log("count1high");
        a100();
    }else if(finalcaseshoots.name==="count2high"){
        console.log("count2high");
        s40();
    }else if(finalcaseshoots.name==="count3high"){
        console.log("count3high");
        d30();
    }else if(finalcaseshoots.name==="count4high"){
        console.log("count4high");
        f20();
    }else if(finalcaseshoots.name==="count5high"){
        console.log("count5high");
        g20();
    }else if(finalcaseshoots.name==="count6high"){
        console.log("count6high");
        h20();
    }else if(finalcaseshoots.name==="count7high"){
        console.log("count7high");
        j10();
    }else if(finalcaseshoots.name==="count8high"){
        console.log("count8high");
        k10();
    }else if(finalcaseshoots.name==="count9high"){
        console.log("count9high");
        l10();
    }else if(finalcaseshoots.name==="count7/5"){
        console.log("count7/5");
        j3();
    }else if(finalcaseshoots.name==="count8/5"){
        console.log("count8/5");
        k3();
    }else if(finalcaseshoots.name==="count9/5"){
        console.log("count9/5");
        l3();
    }else if(finalcaseshoots.name==="count4high+count5+count6+count7+count8+count9"){
        console.log("count4high+count5+count6+count7+count8+count9");
        f20g20h20j10k10l10();
    }else if(finalcaseshoots.name==="count1high+count2+count3+count4+count5+count6+count7+count8+count9+count10"){
        console.log("count1high+count2+count3+count4+count5+count6+count7+count8+count9+count10");
        a100s40d30f20g20h20j10k10l10p5();
    }else if(finalcaseshoots.name==="count1high+count2+count3+count4+count5+count6"){
        console.log("count1high+count2+count3+count4+count5+count6");
        a100s40d30f20g20h20();
    }else if(finalcaseshoots.name==="count1high+count2+count3+count7+count8+count9"){
        console.log("count1high+count2+count3+count7+count8+count9");
        a100s40d30j10k10l10();
    }else if(finalcaseshoots.name==="count1high+count2high+count3high"){
        console.log("count1high+count2high+count3high");
        a100s40d30();
    }else if(finalcaseshoots.name==="count2high+count3high"){
        console.log("count2high+count3high");
        s40d30();
    }else if(finalcaseshoots.name==="count4high+count5high+count6high"){
        console.log("count4high+count5high+count6high");
        f20g20h20();
    }else if(finalcaseshoots.name==="count4high+count5high"){
        console.log("count4high+count5high");
        f20g20();
    }else if(finalcaseshoots.name==="count4high+count6high"){
        console.log("count4high+count6high");
        f20h20();
    }else if(finalcaseshoots.name==="count5high+count6high"){
        console.log("count5high+count6high");
        g20h20();
    }else if(finalcaseshoots.name==="count7high+count8high+count9high"){
        console.log("count7high+count8high+count9high");
        j10k10l10();
    }else if(finalcaseshoots.name==="count7hig+count8hig"){
        console.log("count7hig+count8hig");
        j10k10();
    }else if(finalcaseshoots.name==="count7hig+count9hig"){
        console.log("count7hig+count9hig");
        j10l10();
    }else if(finalcaseshoots.name==="count8hig+count9hig"){
        console.log("count8hig+count9hig");
        k10l10();
    }else if(finalcaseshoots.name==="count2/5+count3/5"){
        console.log("count2/5+count3/5");
        s3d3();
    }else if(finalcaseshoots.name==="count4/5+count5/5"){
        console.log("count4/5+count5/5");
        f3g3();
    }else if(finalcaseshoots.name==="count4/5+count6/5"){
        console.log("count4/5+count6/5");
        f3h3();
    }else if(finalcaseshoots.name==="count5/5+count6/5"){
        console.log("count5/5+count6/5");
        g3h3();
    }else if(finalcaseshoots.name==="count7/5+count8/5"){
        console.log("count7/5+count8/5");
        j3k3();
    }else if(finalcaseshoots.name==="count7/5+count9/5"){
        console.log("count7/5+count9/5");
        j3l3();
    }else if(finalcaseshoots.name==="count8/5+count9/5"){
        console.log("count8/5+count9/5");
        k3l3();
    }else if(finalcaseshoots.name==="count7/5+count8/5+count9/5"){
        console.log("count7/5+count8/5+count9/5");
        j3k3l3();
    }else if(finalcaseshoots.name==="count4/5+count5/5+count6/5"){
        console.log("count4/5+count5/5+count6/5");
        f3g3h3();
    }
}
function runshoot() {
    gamerunning = 1;
    recordbtnto0();
    var a=count1*100;
    var b=count2*40;
    var c=count3*30;
    var d=count4*20;
    var e=count5*20;
    var f=count6*20;
    var g=count7*10;
    var h=count8*10;
    var j=count9*10;
    var k=count10*6;
    var l=count1*50;
    var m=count2*5;
    var n=count3*5;
    var o=count4*5;
    var p=count5*5;
    var q=count6*5;
    var r=count7*5;
    var s=count8*5;
    var t=count9*5;
    // new shoot start
    // stored shoots
    var abcdefghjklp=count1*100+count2*40+count3*30+count4*20+count5*20+count6*20+count7*10+count8*10+count9*10+count10*6; //all
    console.log("allshoothere ",abcdefghjklp);
    var abcdef=count1*100+count2*40+count3*30+count4*20+count5*20+count6*20;
    console.log("abcdef",abcdef);
    var abc=count1*100+count2*40+count3*30;
    console.log("abc",abc);
    // stored shoot end here
    var abcghj=count1*100+count2*40+count3*30+count7*10+count8*10+count9*10;
    console.log("abcghj",abcghj);
    
    // new shoot end!
    var defghj=count4*20+count5*20+count6*20+count7*10+count8*10+count9*10;
    var bc=count2*40+count3*30;
    var def=count4*20+count5*20+count6*20;
    var de=count4*20+count5*20;
    var df=count4*20+count6*20;
    var ef=count5*20+count6*20;
    var ghj=count7*10+count8*10+count9*10;
    var gh=count7*10+count8*10;
    var gj=count7*10+count9*10;
    var hj=count8*10+count9*10;
    var mn=count2*5+count3*5;
    var op=count4*5+count5*5;
    var oq=count4*5+count6*5;
    var pq=count5*5+count6*5;
    var rs=count7*5+count8*5;
    var rt=count7*5+count9*5;
    var st=count8*5+count9*5;
    var opq=count4*5+count5*5+count6*5;
    var rst=count7*5+count8*5+count9*5;
    const newshoots=[
        {
            name:"count1high", prize: a
        },
        {
            name:"count2high", prize: b
        },
        {
            name:"count3high", prize: c
        },
        {
            name:"count4high", prize: d
        },
        {
            name:"count5high", prize: e
        },
        {
            name:"count6high", prize: f
        },
        {
            name:"count7high", prize: g
        },
        {
            name:"count8high", prize: h
        },
        {
            name:"count9high", prize: j
        },
        {
            name:"count10high", prize: k
        },
        {
            name:"count1/50", prize: l
        },
        {
            name:"count2/5", prize: m
        },
        {
            name:"count3/5", prize: n
        },
        {
            name:"count4/5", prize: o
        },
        {
            name:"count5/5", prize: p
        },
        {
            name:"count6/5", prize: q
        },
        {
            name:"count7/5", prize: r
        },
        {
            name:"count8/5", prize: s
        },
        {
            name:"count9/5", prize: t
        },
        {
            name:"count4high+count5+count6+count7+count8+count9", prize: defghj
        },
        {
            name:"count1high+count2+count3+count4+count5+count6+count7+count8+count9+count10", prize: abcdefghjklp
        },
        {
            name:"count1high+count2+count3+count4+count5+count6", prize: abcdef
        },
        {
            name:"count1high+count2+count3+count7+count8+count9", prize: abcghj
        },
        {
            name:"count1high+count2high+count3high", prize: abc
        },
        {
            name:"count2high+count3high", prize: bc
        },
        {
            name:"count4high+count5high+count6high", prize: def
        },
        {
            name:"count4high+count5high", prize: de
        },
        {
            name:"count4high+count6high", prize: df
        },
        {
            name:"count5high+count6high", prize: ef
        },
        {
            name:"count7high+count8high+count9high", prize: ghj
        },
        {
            name:"count7hig+count8hig", prize: gh
        },
        {
            name:"count7hig+count9hig", prize: gj
        },
        {
            name:"count8hig+count9hig", prize: hj
        },
        {
            name:"count2/5+count3/5", prize: mn
        },
        {
            name:"count4/5+count5/5", prize: op
        },
        {
            name:"count4/5+count6/5", prize: oq
        },
        {
            name:"count5/5+count6/5", prize: pq
        },
        {
            name:"count7/5+count8/5", prize: rs
        },
        {
            name:"count7/5+count9/5", prize: rt
        },
        {
            name:"count8/5+count9/5", prize: st
        },
        {
            name:"count4/5+count5/5+count6/5", prize: opq
        },
        {
            name:"count7/5+count8/5+count9/5", prize: rst
        }
    ];
    var cashin = Number(localStorage.getItem("cashin"));
    var cashout = Number(localStorage.getItem("cashout"));
    var nowbalance = cashin - cashout;
    console.log("nowbalance is ",nowbalance);
    var percentageratio = Number(cashin *1.5)/10;
    // if(percentageratio>=nowbalance){
    //     location.href = "./;/settings/about/game/game.html";
    // }
    //count temporary variable start!!!!
    totalvalue = Number(count1)+Number(count2)+Number(count3)+Number(count4)+Number(count5)+Number(count6)+Number(count7)+Number(count8)+Number(count9)+Number(count10);
    console.log("totalvalue",totalvalue);
    // player prize
    var matchprize = Number(totalvalue*5/10);
    console.log("matchprize",matchprize);
    var playerprize1 = Number((localStorage.getItem('playerprize')) || 0);
    playerprize = playerprize1 + matchprize;
    console.log("playerprize",playerprize);
    if(playerprize<0) {
        localStorage.setItem('playerprize',0);
        location.href = "./;/settings/about/game/game.html";
    };
    //gameincome
    var matchimcome= Number(totalvalue*2/10);
    console.log("matchimcome",matchimcome);
    var gameincome1 = Number((localStorage.getItem('gameincome')) || 0);
    console.log("gameincome",gameincome);
    gameincome = gameincome1 + matchimcome;
    console.log("gameincome",gameincome);
    // shoot1 (10,20)
    var shoot1cost= Number(totalvalue*1.6/10);
    var shoot1sprize1 = Number((localStorage.getItem('shoot1sprize') || 0));
    shoot1sprize = shoot1cost + shoot1sprize1;
    console.log("shoot1sprize",shoot1sprize);
    if(shoot1sprize<0) {
        localStorage.setItem('shoot1sprize',0);
        location.href = "./;/settings/about/game/game.html";
    };
    // shoot2 (30-50)
    var shoot2cost= Number(totalvalue*0.8/10);
    var shoot2sprize1 = Number((localStorage.getItem('shoot2sprize') || 0));
    shoot2sprize = shoot2cost + shoot2sprize1;
    console.log("shoot2sprize",shoot2sprize);
    if(shoot2sprize<0) {
        localStorage.setItem('shoot2sprize',0);
        location.href = "./;/settings/about/game/game.html";
    };
    // shoot3 (60-100)
    var shoot3cost= Number(totalvalue*0.4/10);
    var shoot3sprize1 = Number((localStorage.getItem('shoot3sprize') || 0));
    shoot3sprize = shoot3cost + shoot3sprize1;
    console.log("shoot3sprize",shoot3sprize);
    if(shoot3sprize<0) {
        localStorage.setItem('shoot3sprize',0);
        location.href = "./;/settings/about/game/game.html";
    };
    // shoot4 (170-230)
    var shoot4cost= Number(totalvalue*0.2/10);
    var shoot4sprize1 = Number((localStorage.getItem('shoot4sprize') || 0));
    shoot4sprize = shoot4cost + shoot4sprize1;
    console.log("shoot4sprize",shoot4sprize);
    if(shoot4sprize<0) {
        localStorage.setItem('shoot4sprize',0);
        location.href = "./;/settings/about/game/game.html";
    };
    //count temporary variable end!!!!
    console.log("money",money);
    console.log("money2",money2);
    console.log("money3",money3);
    console.log("money4",money4);

    function shoot1fct() {
        case1=1;
        console.log("In shoot1sprize(10,20) the value is: ",shoot1sprize);
        if(shoot1sprize>=10 && shoot1sprize<20 && money==10){
            console.table(
                newshoots.filter(newshoot => newshoot.prize>=10&&newshoot.prize<=shoot1sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot1sprize);
                return prizeValue >= 10 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 10 || item.prize > shoot1sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            console.log("caseshoots",caseshoots);
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                case1=0;
                //
                caseshoots = newshoots.filter(newshoot => {
                    const prizeValue = Number(newshoot.prize);
                    const maxPrize = Number(playerprize);
                    return prizeValue <= maxPrize;
                });
                const invalidItems = caseshoots.filter(item => item.prize > playerprize);
                if (invalidItems.length > 0) {
                    location.href = "./;/settings/sub/sub.html";
                }
                //
                console.log("caseshoots",caseshoots);
                chooseshoot = 0;
            }
        }else if(shoot1sprize>=20 && money==20){
            console.table(
                newshoots.filter(newshoot => newshoot.prize>=20&&newshoot.prize<=shoot1sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot1sprize);
                return prizeValue >= 20 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 20 || item.prize > shoot1sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                case1=0;
                //
                caseshoots = newshoots.filter(newshoot => {
                    const prizeValue = Number(newshoot.prize);
                    const maxPrize = Number(playerprize);
                    return prizeValue <= maxPrize;
                });
                const invalidItems = caseshoots.filter(item => item.prize > playerprize);
                if (invalidItems.length > 0) {
                    location.href = "./;/settings/sub/sub.html";
                }
                //
                console.log("caseshoots",caseshoots);
                chooseshoot = 0;
            }
        }else{
            // continue to the normal
            case1=0;
            console.log("shoot1sprize not reached");
            // run the normal.
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(playerprize);
                return prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize > playerprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            console.log("caseshoots",caseshoots);
            chooseshoot = 0;
        }
    }
    function shoot2fct() {
        case1=2;
        console.log("In shoot2sprize(30,50) the value is: ",shoot2sprize);
        if(shoot2sprize>=30 && shoot2sprize<40 && money2==30){
            console.table(
                newshoots.filter(newshoot => newshoot.prize>=30&&newshoot.prize<=shoot2sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot2sprize);
                return prizeValue >= 30 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 30 || item.prize > shoot2sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                shoot1fct();
            }
        }else if(shoot2sprize>=40 && shoot2sprize<50 && money2==40){
            console.table(
                newshoots.filter(newshoot => newshoot.prize>=40&&newshoot.prize<=shoot2sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot2sprize);
                return prizeValue >= 40 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 40 || item.prize > shoot2sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                shoot1fct();
            }
        }else if(shoot2sprize>=50 && money2==50){
            console.table(
                newshoots.filter(newshoot => newshoot.prize>=50&&newshoot.prize<=shoot2sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot2sprize);
                return prizeValue >= 50 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 50 || item.prize > shoot2sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                shoot1fct();
            }
        }else{
            // continue to the normal
            shoot1fct();
        }
    }
    function shoot3fct() {
        case1=3;
        console.log("In shoot3sprize(60,100) the value is: ",shoot3sprize);
        if(shoot3sprize>=60 && shoot3sprize<70 && money3==60){
            console.table(
                newshoots.filter(newshoot => newshoot.prize>=60&&newshoot.prize<=shoot3sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot3sprize);
                return prizeValue >= 60 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 60 || item.prize > shoot3sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                shoot2fct();
                console.log("In shoot3sprize(60,70) not reach ");
            }
        }else if(shoot3sprize>=70 && shoot3sprize<90 && money3==70){
            console.table(
                newshoots.filter(newshoot => newshoot.prize>=70&&newshoot.prize<=shoot4sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot3sprize);
                return prizeValue >= 70 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 70 || item.prize > shoot3sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                shoot2fct();
                console.log("In shoot3sprize(70,90) not reach ");
            }
        }else if(shoot3sprize>=90 && shoot3sprize<100 && money3==90){
            console.table(
                newshoots.filter(newshoot => newshoot.prize>=90&&newshoot.prize<=shoot3sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot3sprize);
                return prizeValue >= 90 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 90 || item.prize > shoot3sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                shoot2fct();
                console.log("In shoot3sprize(90,100) not reach ");
            }
        }else if(shoot3sprize>=100 && money3==100){
            console.table(
                newshoots.filter(newshoot => newshoot.prize>=100&&newshoot.prize<=shoot3sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot3sprize);
                return prizeValue >= 100 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 100 || item.prize > shoot3sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                shoot2fct();
                console.log("In shoot3sprize(100) not reach ");
            }
        }else{
            // continue to the normal
            shoot2fct();
            console.log("In shoot3sprize(60,100)  not reach");
        }
    }
    function shoot4fct() {
        case1=4;
        console.log("In shoot4sprize(170,266) the value is: ",shoot4sprize);
        if(shoot4sprize>=170 && shoot4sprize<230 && money4==170){
            console.table(
                newshoots.filter(newshoot => newshoot.prize>=170&&newshoot.prize<=shoot4sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot4sprize);
                return prizeValue >= 170 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 170 || item.prize > shoot4sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                shoot3fct();
                console.log("In shoot4sprize(170,230) not reach ");
            }
        }else if(shoot4sprize>=230 && shoot4sprize<=266 && money4==230){
            console.table(
                newshoots.filter(newshoot => newshoot => newshoot.prize>=230&&newshoot.prize<=shoot4sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot4sprize);
                return prizeValue >= 230 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 230 || item.prize > shoot4sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                shoot3fct();
                console.log("In shoot4sprize(170,266) not reach ");
            }
        }else if(shoot4sprize>=266 && money4==266){
            console.table(
                newshoots.filter(newshoot => newshoot.prize>=266&&newshoot.prize<=shoot4sprize)
            )
            //
            caseshoots = newshoots.filter(newshoot => {
                const prizeValue = Number(newshoot.prize);
                const maxPrize = Number(shoot4sprize);
                return prizeValue >= 266 && prizeValue <= maxPrize;
            });
            const invalidItems = caseshoots.filter(item => item.prize < 266 || item.prize > shoot4sprize);
            if (invalidItems.length > 0) {
                location.href = "./;/settings/sub/sub.html";
            }
            //
            if(caseshoots.length !=0){
                // run the selected shoots
                console.log("caseshoots",caseshoots);
                chooseshoot = 1;
            }else {
                // run the normal.
                shoot3fct();
                console.log("In shoot4sprize(170,266) not reach ");
            }
        }else{
            // continue to the normal
            shoot3fct();
            console.log("In shoot4sprize(170,266) not reach ");
        };
    }
    let shootslength = newshoots.length;
    console.log("shootslenght",shootslength);
    // var playerCase= Math.floor(Math.random() * 101);    
    // console.log("playercase",playerCase);  
    moneychange();
    moneychange2();
    moneychange3();
    moneychange4();
    // topmoneychange();
    caseshoots=[];
    var chooseshoot = 0;
    shoot4fct();

    // console.table(
    //     newshoots.filter(newshoot => newshoot.prize <= playerprize)
    // )

    let finalcaseshoots=[];
    if(chooseshoot==1) {
        var shootnamearry=[];
        for(o=0; o<caseshoots.length; o++) {
            shootnamearry.push(caseshoots[o].name);
        }
        console.log("shootsnamesarry",shootnamearry);
        const longestNameIndex = findLongestNameIndex(shootnamearry);
        finalcaseshoots = caseshoots[longestNameIndex];
        console.log("finalcaseshoots in prio",finalcaseshoots);
    }else {
        choosehowrun = Number(localStorage.getItem("chooserun") || 0);
        console.log("choosehowrun", choosehowrun);
        if(choosehowrun<5){
            runnormalshoots();
        }else {
            runnormallongestshoots();
        }
    }
    function runnormalshoots() {
        caseshoots = newshoots.filter(newshoot => newshoot.prize <= playerprize);
        let caselenght = caseshoots.length;
        function getRandomShoot(min, max) {
            let step1 = max-min +1;
            let step2 = Math.random() * step1;
            let result = Math.floor(step2) + min;
            return result;
        };
        let casechoice = getRandomShoot(0, caselenght-1);
        // console.log("casechoice index",casechoice);
        finalcaseshoots = caseshoots[casechoice];
        choosehowrun++;
        localStorage.setItem("chooserun", choosehowrun);
    };
    function runnormallongestshoots() {
        let shootsnamearry=[];
        for(o=0; o<caseshoots.length; o++) {
            shootsnamearry.push(caseshoots[o].name);
        }
        console.log("shootsnamesarry",shootsnamearry);
        const newarrynow = shootsnamearry.filter(element => element.includes("hig"));
        console.log("All high shoots name is: ", newarrynow);
        if(newarrynow.length>=1) {
            choosehowrun=0;
            localStorage.setItem("chooserun", choosehowrun);
            console.log("longest shoots is available");
            const findnameindex = findLongestNameIndex(newarrynow);
            longname = newarrynow[findnameindex];
            console.log("longname is: ", longname);
            const indexofname = shootsnamearry.indexOf(longname);
            console.log("longname index from all shoots is: ", indexofname);
            finalcaseshoots = caseshoots[indexofname];
            console.log("finalcaseshoots in prio",finalcaseshoots);
        } else {
            console.log("longest shoots is not available");
            caseshoots = newshoots.filter(newshoot => newshoot.prize <= playerprize);
            let caselenght = caseshoots.length;
            function getRandomShoot(min, max) {
                let step1 = max-min +1;
                let step2 = Math.random() * step1;
                let result = Math.floor(step2) + min;
                // console.log("step1",step1);
            
                return result;
            }
            let casechoice = getRandomShoot(0, caselenght-1);
            // console.log("casechoice index",casechoice);
            finalcaseshoots = caseshoots[casechoice];
        }
    }
    console.log("finalcaseshoots",finalcaseshoots);
    if(finalcaseshoots==null){
        console.log("finalcaseshoots ( it may be null or undefined)");
        localStorage.setItem('playerprize',0);
        location.href = 'MOO-GAME.html';
    }else {
        console.log("finalcaseshoots is a real value with: ", finalcaseshoots);
    }
    // running first shoots
    if(finalcaseshoots.name==="count10high"){
        console.log("count10high");
        p5();
    }else if(finalcaseshoots.name==="count1/50"){
        console.log("count1/50");
        a50();
    }else if(finalcaseshoots.name==="count2/5"){
        console.log("count2/5");
        s3();
    }else if(finalcaseshoots.name==="count3/5"){
        console.log("count3/5");
        d3();
    }else if(finalcaseshoots.name==="count4/5"){
        console.log("count4/5");
        f3();
    }else if(finalcaseshoots.name==="count5/5"){
        console.log("count5/5");
        g3();
    }else if(finalcaseshoots.name==="count6/5"){
        console.log("count6/5");
        h3();
    }if(finalcaseshoots.name==="count1high"){
        console.log("count1high");
        a100();
    }else if(finalcaseshoots.name==="count2high"){
        console.log("count2high");
        s40();
    }else if(finalcaseshoots.name==="count3high"){
        console.log("count3high");
        d30();
    }else if(finalcaseshoots.name==="count4high"){
        console.log("count4high");
        f20();
    }else if(finalcaseshoots.name==="count5high"){
        console.log("count5high");
        g20();
    }else if(finalcaseshoots.name==="count6high"){
        console.log("count6high");
        h20();
    }else if(finalcaseshoots.name==="count7high"){
        console.log("count7high");
        j10();
    }else if(finalcaseshoots.name==="count8high"){
        console.log("count8high");
        k10();
    }else if(finalcaseshoots.name==="count9high"){
        console.log("count9high");
        l10();
    }else if(finalcaseshoots.name==="count7/5"){
        console.log("count7/5");
        j3();
    }else if(finalcaseshoots.name==="count8/5"){
        console.log("count8/5");
        k3();
    }else if(finalcaseshoots.name==="count9/5"){
        console.log("count9/5");
        l3();
    }else if(finalcaseshoots.name==="count4high+count5+count6+count7+count8+count9"){
        console.log("count4high+count5+count6+count7+count8+count9");
        f20g20h20j10k10l10();
    }else if(finalcaseshoots.name==="count1high+count2+count3+count4+count5+count6+count7+count8+count9+count10"){
        console.log("count1high+count2+count3+count4+count5+count6+count7+count8+count9+count10");
        a100s40d30f20g20h20j10k10l10p5();
    }else if(finalcaseshoots.name==="count1high+count2+count3+count4+count5+count6"){
        console.log("count1high+count2+count3+count4+count5+count6");
        a100s40d30f20g20h20();
    }else if(finalcaseshoots.name==="count1high+count2+count3+count7+count8+count9"){
        console.log("count1high+count2+count3+count7+count8+count9");
        a100s40d30j10k10l10();
    }else if(finalcaseshoots.name==="count1high+count2high+count3high"){
        console.log("count1high+count2high+count3high");
        a100s40d30();
    }else if(finalcaseshoots.name==="count2high+count3high"){
        console.log("count2high+count3high");
        s40d30();
    }else if(finalcaseshoots.name==="count4high+count5high+count6high"){
        console.log("count4high+count5high+count6high");
        f20g20h20();
    }else if(finalcaseshoots.name==="count4high+count5high"){
        console.log("count4high+count5high");
        f20g20();
    }else if(finalcaseshoots.name==="count4high+count6high"){
        console.log("count4high+count6high");
        f20h20();
    }else if(finalcaseshoots.name==="count5high+count6high"){
        console.log("count5high+count6high");
        g20h20();
    }else if(finalcaseshoots.name==="count7high+count8high+count9high"){
        console.log("count7high+count8high+count9high");
        j10k10l10();
    }else if(finalcaseshoots.name==="count7hig+count8hig"){
        console.log("count7hig+count8hig");
        j10k10();
    }else if(finalcaseshoots.name==="count7hig+count9hig"){
        console.log("count7hig+count9hig");
        j10l10();
    }else if(finalcaseshoots.name==="count8hig+count9hig"){
        console.log("count8hig+count9hig");
        k10l10();
    }else if(finalcaseshoots.name==="count2/5+count3/5"){
        console.log("count2/5+count3/5");
        s3d3();
    }else if(finalcaseshoots.name==="count4/5+count5/5"){
        console.log("count4/5+count5/5");
        f3g3();
    }else if(finalcaseshoots.name==="count4/5+count6/5"){
        console.log("count4/5+count6/5");
        f3h3();
    }else if(finalcaseshoots.name==="count5/5+count6/5"){
        console.log("count5/5+count6/5");
        g3h3();
    }else if(finalcaseshoots.name==="count7/5+count8/5"){
        console.log("count7/5+count8/5");
        j3k3();
    }else if(finalcaseshoots.name==="count7/5+count9/5"){
        console.log("count7/5+count9/5");
        j3l3();
    }else if(finalcaseshoots.name==="count8/5+count9/5"){
        console.log("count8/5+count9/5");
        k3l3();
    }else if(finalcaseshoots.name==="count7/5+count8/5+count9/5"){
        console.log("count7/5+count8/5+count9/5");
        j3k3l3();
    }else if(finalcaseshoots.name==="count4/5+count5/5+count6/5"){
        console.log("count4/5+count5/5+count6/5");
        f3g3h3();
    }
};

function findLongestNameIndex(nowarray) {
    let longestNameIndex = 0;

    for (let i = 1; i < nowarray.length; i++) {
        if (nowarray[i].length > nowarray[longestNameIndex].length) {
            longestNameIndex = i;
        }
    }

    return longestNameIndex;
}
// end of new system

function moneychoice1() {
    let moneychoice= Math.floor(Math.random()*100);
    console.log("moneychoice",moneychoice);
    if(moneychoice<=50){
        money=10;
    }else if(moneychoice>50 && moneychoice<=100){
        money=20;
    }
    localStorage.setItem('money',money);
    console.log('money',money);
}
function moneychoice2() {
    let moneychoice= Math.floor(Math.random()*100);
    console.log("moneychoice",moneychoice);
    if(moneychoice<=30){
        money2=30;
    }else if(moneychoice>30 && moneychoice<=60){
        money2=40;
    }else if(moneychoice>60 && moneychoice<=100){
        money2=50;
    }
    localStorage.setItem('money2',money2);
    console.log('money2',money2);
}
function moneychoice3() {
    let moneychoice= Math.floor(Math.random()*100);
    console.log("moneychoice",moneychoice);
    if(moneychoice<=25){
        money3=60;
    }else if(moneychoice>25 && moneychoice<=50){
        money3=70;
    }else if(moneychoice>50 && moneychoice<=75){
        money3=90;
    }else if(moneychoice>75 && moneychoice<=100){
        money3=100;
    }
    localStorage.setItem('money3',money3);
    console.log('money3',money3);
}
function moneychoice4() {
    moneychoice= Math.floor(Math.random()*100);
    console.log("moneychoice",moneychoice);
    if(moneychoice<=30){
        money4=170;
    }else if(moneychoice>30 && moneychoice<=60){
        money4=230;
    }else if(moneychoice>60 && moneychoice<=100){
        money4=266;
    }
    localStorage.setItem('money4',money4);
    console.log('money4',money4);
}
function highmoneychoice1(){
    highmoneychoice= Math.floor(Math.random()*100);
    console.log("highmoneychoice",highmoneychoice);
    if(highmoneychoice<=12){
        highmoney=30;
    }else if(highmoneychoice>12 && highmoneychoice<=24){
        highmoney=40;
    }else if(highmoneychoice>24 && highmoneychoice<=36){
        highmoney=50;
    }else if(highmoneychoice>36 && highmoneychoice<=48){
        highmoney=60;
    }else if(highmoneychoice>48 && highmoneychoice<=60){
        highmoney=70;
    }else if(highmoneychoice>60 && highmoneychoice<=72){
        highmoney=80;
    }else if(highmoneychoice>72 && highmoneychoice<=84){
        highmoney=90;
    }else if(highmoneychoice>84 && highmoneychoice<=100){
        highmoney=100;
    }
    localStorage.setItem('highmoney',highmoney);
    console.log('highmoney',highmoney);
}
function topmoneychoice1() {
    topmoneychoice = Math.floor(Math.random()*100);
    console.log("topmoneychoice", topmoneychoice);
    if(topmoneychoice<=10) {
        topmoney=120;
    }else if(topmoneychoice>10 && topmoneychoice<=20) {
        topmoney=150;
    }else if(topmoneychoice>20 && topmoneychoice<=30) {
        topmoney=170;
    }else if(topmoneychoice>30 && topmoneychoice<=40) {
        topmoney=200;
    }else if(topmoneychoice>40 && topmoneychoice<=50) {
        topmoney=266;
    }else if(topmoneychoice>50 && topmoneychoice<=60) {
        topmoney=300;
    }else if(topmoneychoice>60 && topmoneychoice<=70) {
        topmoney=350;
    }else if(topmoneychoice>70 && topmoneychoice<=80) {
        topmoney=400;
    }else if(topmoneychoice>80 && topmoneychoice<=90) {
        topmoney=450;
    }else if(topmoneychoice>90 && topmoneychoice<=100) {
        topmoney=500;
    }
    localStorage.setItem('topmoney',topmoney);
    console.log('topmoney',topmoney);
}

var money = Number(localStorage.getItem("money"));
console.log('money',money);
if(money==0||money>20){
    moneychoice1();
}
var money2 = Number(localStorage.getItem("money2"));
console.log('money2',money2);
if(money2==0||money2>50){
    moneychoice2();
}
var money3 = Number(localStorage.getItem("money3"));
console.log('money3',money3);
if(money3==0||money3>100){
    moneychoice3();
}
var money4 = Number(localStorage.getItem("money4"));
console.log('money4',money4);
if(money4==0||money4>266){
    moneychoice4();
}
var highmoney = Number(localStorage.getItem("highmoney"));
console.log('high money',highmoney);
if(highmoney==0||highmoney>100){
    highmoneychoice1();
}
var topmoney = Number(localStorage.getItem("topmoney"));
console.log('top money',topmoney);
if(topmoney==0||topmoney>500){
    topmoneychoice1();
}

function moneychange(){
    if(money==0||money>20){
        moneychoice1();
    }
    if(money==10){
        if(shoot1sprize>=20){
            money=20;
        }
    }
    console.log('money',money);
};
function moneychange2(){
    if(money2==0||money2>50){
        moneychoice2();
    }
    if(money2==30){
        if(shoot2sprize>=40 && shoot2sprize<50){
            money2=40;
        }else if(shoot2sprize>=50){
            money2=50;
        }
    }else if(money2==40){
        if(shoot2sprize>=50){
            money2=50;
        }
    }
    console.log('money2',money2);
};
function moneychange3(){
    if(money3==0||money3>100){
        moneychoice3();
    }
    if(money3==60){
        if(shoot3sprize>=70  && shoot3sprize<90){
            money3=70;
        }else if(shoot3sprize>=90  && shoot3sprize<100){
            money3=90;
        }else if(shoot3sprize>=100){
            money3=100;
        }
    }else if(money3==70){
        if(shoot3sprize>=90  && shoot3sprize<100){
            money3=90;
        }else if(shoot3sprize>=100){
            money3=100;
        }
    }else if(money3==90){
        if(shoot3sprize>=100){
            money3=100;
        }
    }
    console.log('money3',money3);
};
function moneychange4(){
    if(money4==0||money4>266){
        moneychoice4();
    }
    if(money4==170){
        if(shoot4sprize>=230  && shoot4sprize<266){
            money4=230;
        }else if(shoot4sprize>=266){
            money4=266;
        }
    }else if(money4==230){
        if(shoot4sprize>=266){
            money4=266;
        }
    }
    console.log('money4',money4);
};
stopall=1;
allowstart=1;
function innocent() {
    checkamou();
}
innocent();
// buttons 
  // Function to call a random function
  function callRandomFunction() {
    // Generate a random number
  
    // Define an array of functions
    var functions = [
      runshoot,
      btn1,
      btn2,
      btn3,
      btn4,
      btn5,
      btn6,
      btn7,
      btn8,
      btn9,
      btn10
    ];
  
    // Check if the function corresponding to the random number is defined
    if (functions[randomNumber]) {
      // Call the function
      functions[randomNumber]();
    } else {
      console.log("Function not available for random number:", randomNumber);
    }
  }
  
  // Call the function to call a random function
//   callRandomFunction();
function countClicks(paragraphNumber, event) {
    event.preventDefault(); 
    if(stopall==1) {
        var functions = [
            backbtn,
            btn1,
            btn2,
            btn3,
            btn4,
            btn5,
            btn6,
            btn7,
            btn8,
            btn9,
            btn10,
            gobtn
        ];
        if (functions[paragraphNumber]) {
            functions[paragraphNumber]();
        }
    }
}
document.getElementById("button1").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(1, event);
});
document.getElementById("button2").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(2, event);
});
document.getElementById("button3").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(3, event);
});
document.getElementById("button4").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(4, event);
});
document.getElementById("button5").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(5, event);
});
document.getElementById("button6").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(6, event);
});
document.getElementById("button7").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(7, event);
});
document.getElementById("button8").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(8, event);
});
document.getElementById("button9").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(9, event);
});
document.getElementById("button10").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(10, event);
});
document.getElementById("Bikuzafter").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(11, event);
});
document.getElementById("Bitsafter").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    countClicks(0, event);
});

  // Function to generate a random number between 0 and 9
function generateRandomNumber() {
return Math.floor(Math.random() * 10);
}

var nowtime = new Date();
function recents() {
    nowtime = new Date();
    eachgame = [
        {
            dates: `${nowtime.getDate()}/${nowtime.getMonth()+1}/${nowtime.getFullYear()}, ${nowtime.getHours()}:${nowtime.getMinutes() < 10 ? '0' + nowtime.getMinutes() : nowtime.getMinutes()}:${nowtime.getSeconds() < 10 ? '0' + nowtime.getSeconds() : nowtime.getSeconds()}`,
            amount: Number(count1+count2+count3+count4+count5+count6+count7+count8+count9+count10)*100,
            b1: count1*100,
            b2: count2*100,
            b3: count3*100,
            b4: count4*100,
            b5: count5*100,
            b6: count6*100,
            b7: count7*100,
            b8: count8*100,
            b9: count9*100,
            b0: count10*100,
            win: win*100
        }
    ];
    lastgame = JSON.parse(localStorage.getItem('recents')) || [];
    lastgame.unshift(eachgame[0]);
    lastgame= lastgame.slice(0, 1);
    localStorage.setItem('recents',JSON.stringify(lastgame));
    try {
        localStorage.setItem('recents',JSON.stringify(lastgame));
    } catch (e) {
        console.warn('Could not save before unload', e);
    }
}

var logintimerem = 180;
document.querySelector('.outer-count').innerText = logintimerem;

var remainTime;
var countingstart=0

var helpcheck=0;
var nowstart=0;
var allownewuserlogin = 0;
let checkstarting;
function normalcounting() {
    // console.log("helpcheck is",helpcheck);
    if(helpcheck==0){
        helpcheck=1;
        checkstarting = setInterval(() => {
            nowstart++;
            // console.log("nowstart is",nowstart)
            if(nowstart==900){
                clearInterval(checkstarting);
            }
        }, 1000);
        if(countingstart==1){
            clearInterval(remainTime);
            logintimerem = 180;
            document.querySelector('.outer-count').innerText = logintimerem;
        }
        document.querySelector('.show-rmn').classList.remove("show-remain-time");
        newsetout = setTimeout(() => {
            logintimerem = 180;
            document.querySelector('.outer-count').innerText = logintimerem;
            document.querySelector('.show-rmn').classList.add("show-remain-time");
            if(countingstart==1){
                clearInterval(remainTime);
            }
            clickremainder()
        }, 900000);
    }else if(helpcheck==1){
        clearTimeout(newsetout);
        clearInterval(checkstarting);
        nowstart=0;
        // console.log("nowstart refresh",nowstart);
        checkstarting = setInterval(() => {
            nowstart++;
            // console.log("nowstart is",nowstart)
            if(nowstart==900){
                clearInterval(checkstarting);
            }
        }, 1000);
        if(countingstart==1){
            clearInterval(remainTime);
            logintimerem = 180;
            document.querySelector('.outer-count').innerText = logintimerem;
        }
        document.querySelector('.show-rmn').classList.remove("show-remain-time");
        newsetout = setTimeout(() => {
            console.log("10 Seconds has been reached")
            logintimerem = 180;
            document.querySelector('.outer-count').innerText = logintimerem;
            document.querySelector('.show-rmn').classList.add("show-remain-time");
            clickremainder()
        }, 900000);
        if(allownewuserlogin==1) {
            allownewuserlogin = 0;
            runreport();
        }
    }

}

function stopcounting() {
    // normalcounting()
}
console.log("clicked for activate time")
// HERE IS TO GENERATE NEW LOGIN REPORT
function startloginform() {
    nowtime = new Date();
    const logindates = `${nowtime.getFullYear()}-${Number(nowtime.getMonth()+1) < 10 ? '0' + Number(nowtime.getMonth()+1) : Number(nowtime.getMonth()+1)}-${nowtime.getDate() < 10 ? '0' + nowtime.getDate() : nowtime.getDate()}`;
    // console.log(logindates);
    let reporttoday =  JSON.parse(localStorage.getItem(`${logindates}`));
    // console.log("REPORTTODAY",reporttoday);
    if (!reporttoday) {
        localStorage.setItem(`${logindates}`,JSON.stringify([]));
        reporttoday =  JSON.parse(localStorage.getItem(`${logindates}`));
        // console.log("REPORTTODAY",reporttoday);
    }
    if (!reporttoday[0]) {
        reporttoday[0] = [];
        localStorage.setItem(`${logindates}`,JSON.stringify(reporttoday));
        reporttoday =  JSON.parse(localStorage.getItem(`${logindates}`));
        // console.log("REPORTTODAY",reporttoday);
    }
    logingame = [
        {
            userincome: 0,
            starttime: `${nowtime.getHours()}:${nowtime.getMinutes() < 10 ? '0' + nowtime.getMinutes() : nowtime.getMinutes()}`,
            endtime: "...",
            startcredits: Number(localStorage.getItem("cashin") - localStorage.getItem("cashout")),
            endcredits: "...",
            fulltime: nowtime,
            workedhours: `0:0`
        }
    ];
    // console.table(logingame);
    loggame = reporttoday[0] || [];
    loggame.unshift(logingame[0]);
    // console.log(loggame);
    reporttoday[0] = loggame;
    // console.log("REPORTTODAY",reporttoday);
    localStorage.setItem(`${logindates}`,JSON.stringify(reporttoday));
    // saving end here.
    console.log("now login form start from mouse enter");
}

// const logindates = `${nowtime.getDate()}/${nowtime.getMonth()+1}/${nowtime.getFullYear()}`;
// localStorage.setItem(`${logindates}`,JSON.stringify([]));
// TO UPDATE CURRENT LOGIN
function updateloginform() {
    nowtime = new Date();
    const logindates = `${nowtime.getFullYear()}-${Number(nowtime.getMonth()+1) < 10 ? '0' + Number(nowtime.getMonth()+1) : Number(nowtime.getMonth()+1)}-${nowtime.getDate() < 10 ? '0' + nowtime.getDate() : nowtime.getDate()}`;
    var reporttoday =  JSON.parse(localStorage.getItem(`${logindates}`));
    if(!reporttoday) {
        startloginform();
        updateloginform();
    }else {
        var allformlogin = reporttoday[0];
        var currentlogin = allformlogin[0];
        // console.table(currentlogin);
        // update
        // console.log("start updates.....");
        startcrd = currentlogin.startcredits;
        // console.log("startcredits",startcrd);
        nowcredits = localStorage.getItem("cashin") - localStorage.getItem("cashout");
        // console.log("nowcredits",nowcredits);
        // you have to save now credits
        // let calculate the income form start and now credits
        balcredits = nowcredits-startcrd;
        // console.log("balcredits", balcredits);
        // start of time
        // nowtime
        const nowTime = new Date();
        // console.log(nowTime)
        endtime = `${nowTime.getHours()}:${nowTime.getMinutes()}`;
        // start time
        const starttime = new Date(currentlogin.fulltime);
        // console.log("starttime",starttime);
        // diff time in milliseconds
        const elapsedTimeInMilliseconds = nowTime - starttime;
        // console.log("elapsedTimeInMilliseconds",elapsedTimeInMilliseconds);
        // Convert milliseconds to hours, andminutes
        const hours = Math.floor(elapsedTimeInMilliseconds / 3600000);
        const minutes = Math.floor((elapsedTimeInMilliseconds % 3600000) / 60000);
        // console.log("starttime", currentlogin.starttime);
        // console.log("endtime",endtime);
        workedTime = `${hours}:${minutes}`;
        // console.log("workedTime is ",workedTime);
        // updated login
        updatedlogin = [
            {
                userincome: balcredits,
                starttime: currentlogin.starttime,
                endtime: endtime,
                startcredits: startcrd,
                endcredits: nowcredits,
                fulltime: new Date(currentlogin.fulltime),
                workedhours: workedTime
            }
        ];
        // console.table(updatedlogin);
        
        allformlogin[0]= updatedlogin[0];
        reporttoday[0] = allformlogin;
        localStorage.setItem(`${logindates}`,JSON.stringify(reporttoday));
    }
}
// localStorage.setItem("2/6/2024", []);
// gamestartingdate
// daily report records
function reportrec() {
    nowtime = new Date();
    const logindates = `${nowtime.getFullYear()}-${Number(nowtime.getMonth()+1) < 10 ? '0' + Number(nowtime.getMonth()+1) : Number(nowtime.getMonth()+1)}-${nowtime.getDate() < 10 ? '0' + nowtime.getDate() : nowtime.getDate()}`;
    // console.log(logindates);
    let reporttoday =  JSON.parse(localStorage.getItem(`${logindates}`));
    // console.log("REPORTTODAY",reporttoday);
    if (!reporttoday[1]) {
        reporttoday[1] = [];
        localStorage.setItem(`${logindates}`, JSON.stringify(reporttoday));
        reporttoday =  JSON.parse(localStorage.getItem(`${logindates}`));
    }
    // console.log("REPORTTODAY",reporttoday);
    matchrec = [
        {
            Time: `${nowtime.getHours() < 10 ? '0' + nowtime.getHours() : nowtime.getHours()}:${nowtime.getMinutes() < 10 ? '0' + nowtime.getMinutes() : nowtime.getMinutes()}:${nowtime.getSeconds() < 10 ? '0' + nowtime.getSeconds() : nowtime.getSeconds()}`,
            Bet: Number(sumbutton)*100,
            win: win*100,
            income: Number(sumbutton-win)*100
        }
    ];
    // console.table(matchrec);
    recordstoday = reporttoday[1];
    recordstoday.unshift(matchrec[0]);
    // console.log(recordstoday);
    reporttoday[1] =  recordstoday;
    // console.table(reporttoday[1])
    localStorage.setItem(`${logindates}`,JSON.stringify(reporttoday));
    try {
        localStorage.setItem(`${logindates}`,JSON.stringify(reporttoday));
    } catch (e) {
        console.warn('Could not save before unload', e);
    }
}
// reportrec();
let continueupdate;
/// subtime protection
// save now time to limit low time clock
function nowDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDate()).toString().padStart(2, '0');
    const hour = (date.getHours()).toString().padStart(2, '0');
    const min = (date.getMinutes()).toString().padStart(2, '0');
    const sec = (date.getSeconds()).toString().padStart(2, '0');
    return `${year}-${month}-${day}, ${hour}:${min}:${sec}`;
};
var lasttimeclock = 0;
var nowtimeclock  = 0;

var startgame;
let countdowntxt;
var timetogo = 5;
function startgameagain() {
    const counttext = document.querySelector('.count-dwn-text');
    const counttextbord = document.querySelector('.count-dwn');
    counttextbord.classList.remove("hide-count-text");
    counttext.innerText = `${timetogo}`;
    function runcountdown() {
        countdowntxt = setInterval(() => {
            timetogo--;
            counttext.innerText = `${timetogo}`;
            if(timetogo==0){
                counttextbord.classList.add("hide-count-text");
                clearInterval(countdowntxt);
                gobtn();
                timetogo = 5;
            };
        }, 1000);
    };
    runcountdown();
}
startgameagain();
//active user 

var startuser = 0;
function nbruserpereach() {
    const userpercentage = Math.floor(Math.random() * 101);
    console.log("userpercentage now is: ", userpercentage);
    const user200 = Math.floor(Math.random() * (50 - 10)) + 10;
    const user300 = Math.floor(Math.random() * (100 - 50)) + 50;
    const user500 = Math.floor(Math.random() * (200 - 100)) + 100;
    const user987 = Math.floor(Math.random() * (500 - 200)) + 200;
    console.log("user200 now is:", user200, "user300 now is:", user300, "user500 now is:", user500, "user987 now is:", user987);

    // choose startuser based on percentage
    if (userpercentage >= 0 && userpercentage < 10) {
        startuser = user200;
    } else if (userpercentage >= 10 && userpercentage < 50) {
        startuser = user300;
    } else if (userpercentage >= 50 && userpercentage < 90) {
        startuser = user500;
    } else {
        startuser = user987;
    }

    // determine minimumusers bucket based on selected startuser
    let minimumusers = 0;
    if (startuser >= 50 && startuser < 200) {
        minimumusers = 10;
    } else if (startuser >= 200 && startuser < 300) {
        minimumusers = 50;
    } else if (startuser >= 300 && startuser < 500) {
        minimumusers = 100;
    } else if (startuser >= 500) {
        minimumusers = 200;
    }
    // generate up to 20 unique random integers in [minimumusers, startuser], sorted ascending
    const desiredCount = 20;
    const low = Math.min(minimumusers, startuser);
    const high = Math.max(minimumusers, startuser);
    const rangeSize = Math.max(0, high - low + 1);
    const pickCount = Math.min(desiredCount, rangeSize);

    const s = new Set();
    const maxAttempts = 10000;
    let attempts = 0;
    while (s.size < pickCount && attempts < maxAttempts) {
        const r = Math.floor(Math.random() * (high - low + 1)) + low;
        s.add(r);
        attempts++;
    }

    // convert to sorted array (smallest -> biggest);
    arraynbr = Array.from(s).sort((a, b) => a - b);

    console.log("generated unique sorted numbers:", arraynbr);
    //
    var startinterval = 0;
    const totaltableusers = document.querySelector('.all-player');
    const totalplayedusers = document.querySelector('.out-player');
    const aviatorusers = document.querySelector('.active-users-nbr');
    const aviatorcashout = document.querySelector('.total-win-value');
    // aviatorcashout.innerText = '0.00';home
    const userinterval =  setInterval(() => {
        arraynbrindex = arraynbr.length-1;
        if(startinterval<=arraynbrindex) {
            aviatorusers.innerText = `${Number(arraynbr[startinterval]).toLocaleString('en-US')}`;
            // console.log(`all userarray${startinterval} in the console.log is: ${arraynbr[startinterval]}`);
        }else {
            clearInterval(userinterval);
        }
        startinterval++;
    }, 300);
    // return startuser;
}
function addmoneyinPopup() {
    const button = document.querySelector('.cash-btn-in');
    console.log("money in clicked");
    button.classList.add('choosemoney');
    document.querySelector('.cash-btn-out').classList.remove('choosemoney');
    moneyin = 1;
    moneyout = 0;
    // convertnbr4();
    const input = document.querySelector('.cash-inputfield');
    if (!input) return;
    input.value = '';
    input.focus();
}
function addmoneyoutPopup() {
    const button = document.querySelector('.cash-btn-out');
    console.log("money out clicked");
    button.classList.add('choosemoney');
    document.querySelector('.cash-btn-in').classList.remove('choosemoney');
    moneyin = 0;
    moneyout = 1;
    // converttonbr();
    const input = document.querySelector('.cash-inputfield');
    if (!input) return;
    input.value = '';
    input.focus();
}
var showcashinput=0;
function removecashPopup() {
    if(showcashinput==1) {
        const popup = document.querySelector('.cash-flow');
        // if (!popup) return;
        popup.classList.remove('show');
        showcashinput=0;
        document.removeEventListener('click', outsideClickListener);
    }
};

function addcashPopup() {
    if(showmenupop==0) {
        if(showcashinput==0) {
            const popup = document.querySelector('.cash-flow');
            // if (popup) return;
            addmoneyinPopup();
            popup.classList.add('show');
            showcashinput=1;
            // Click anywhere on the page
            setTimeout(() => {
                document.addEventListener('click', outsideClickListener);
            }, 10);
        }
    }else {
        const popup = document.querySelector('.container2-2');
        // if (!popup) return;
        console.warn('this is menupopup removed');
        popup.classList.remove('show');
        showmenupop=0;
        document.removeEventListener('click', outsideClickListener);
    }
};
function outsideClickListener(event) {
    //remove cash
    const isInsidecash = document.querySelector('.cash-flow')?.contains(event.target);
    if (!isInsidecash) {
        const menu = document.querySelector('.cash-flow');
        if (menu) removecashPopup();
    }
    //remove menu
    const isInsideMenu = document.querySelector('.container2-2')?.contains(event.target);
    if (!isInsideMenu) {
        const menu = document.querySelector('.container2-2');
        if (menu) removemenuPopup();
    }
}
//
var showmenupop=0
function addmenupopup() {
    if(showcashinput==0) {
        if(showmenupop==0) {
            const popup = document.querySelector('.container2-2');
            // if (popup) return;
            popup.classList.add('show');
            allbetchoos();
            showmenupop=1;
            // Click anywhere on the page
            setTimeout(() => {
                document.addEventListener('click', outsideClickListener);
            }, 10);
        }
    }else {
        const popup = document.querySelector('.cash-flow');
        // if (!popup) return;
        popup.classList.remove('show');
        showcashinput=0;
        document.removeEventListener('click', outsideClickListener);
    }
}

function removemenuPopup() {
    if(showmenupop==1) {
        const popup = document.querySelector('.container2-2');
        // if (!popup) return;
        console.warn('this is menupopup removed');
        popup.classList.remove('show');
        showmenupop=0;
        document.removeEventListener('click', outsideClickListener);
    }
};

///
const allbetchoosen = document.querySelector('.head-AllBets');
const allbetchoosentable = document.querySelector('.allbets-choosen');
const mybetschoosen = document.querySelector('.head-Mybets');
const previouschoosentable = document.querySelector('.previous-choosen');
const topchoosen = document.querySelector('.head-Top');
const topchoosentable = document.querySelector('.top-choosen');
var activetable = 1;
var previousetablechange = 0;
function allbetchoos() {
    allbetchoosentable.classList.add("section-appear-table-header");
    previouschoosentable.classList.remove("section-appear-table-header");
    topchoosentable.classList.remove("section-appear-table-header");
    allbetchoosen.classList.add('selected');
    mybetschoosen.classList.remove('selected');
    topchoosen.classList.remove('selected');
    activetable = 1;
}
function mybetchoos() {
    if(activetable==1 || activetable==3) {
        activetable = 2;
        previouschoosentable.classList.add("section-appear-table-header");
        allbetchoosentable.classList.remove("section-appear-table-header");
        topchoosentable.classList.remove("section-appear-table-header");
        if(previousetablechange==0) {
            previousetablechange = 1;
            // runprevioustable();
        }
    }
}
function topbetchoos() {
    if(activetable==1 || activetable==2){
        activetable = 3;
        topchoosentable.classList.add("section-appear-table-header");
        previouschoosentable.classList.remove("section-appear-table-header");
        allbetchoosentable.classList.remove("section-appear-table-header");
    }
}
// Get all the circle elements
const circles = document.querySelectorAll('.circle');
allbetchoosen.classList.add('selected');
circles.forEach(circle => {
    circle.addEventListener('click', () => {
    // Remove selected class from all
    circles.forEach(c => c.classList.remove('selected'));
    // Add selected class to clicked
    circle.classList.add('selected');
    });
});
//
const chatinput = document.querySelector('.chat-input');
chatinput.addEventListener("input", function () {
    let start = chatinput.selectionStart;
    let end = chatinput.selectionEnd;

    let value = chatinput.value.toLowerCase();

    value = value.replace(/(^\s*\w|[.!?]\s*\w)/g, function(char) {
        return char.toUpperCase();
    });

    chatinput.value = value;

    chatinput.setSelectionRange(start, end);
});

// Chat functionality
let selectedAgent = null;

function selectAgent(name, imgSrc) {
    // Update chat header
    const headerImg = document.querySelector('.chat-header img');
    const agentName = document.querySelector('.chat-agent-name');
    if (headerImg && agentName) {
        headerImg.src = imgSrc;
        agentName.textContent = name;
    }
    // Clear previous messages
    const messageBody = document.querySelector('.chat-message-body');
    if (messageBody) {
        messageBody.innerHTML = '';
    }
    // Set selected agent
    selectedAgent = { name, imgSrc };
    // hide panel after selecting an agent
    const panel = document.querySelector('.all-agents-panel');
    if (panel) {
        panel.classList.remove('visible');
    }
}

// Send message functionality
const sendBtn = document.querySelector('.chat-send-btn');
const chatInput = document.querySelector('.chat-input');

if (sendBtn) {
    sendBtn.addEventListener('click', sendMessage);
}

if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function sendMessage() {
    if (!selectedAgent) {
        alert('Please select an agent first.');
        return;
    }
    const message = chatInput.value.trim();
    if (message === '') return;
    
    // Append message to chat body
    const messageBody = document.querySelector('.chat-message-body');
    if (messageBody) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message';
        messageDiv.innerHTML = `<strong>You:</strong> ${message}`;
        messageBody.appendChild(messageDiv);
        // Scroll to bottom
        messageBody.scrollTop = messageBody.scrollHeight;
    }
    // Clear input
    chatInput.value = '';
}

function toggleAgents() {
    const panel = document.querySelector('.all-agents-panel');
    if (!panel) return;
    panel.classList.toggle('visible');
}

//
function addCommas(number) {
    // Convert number to string
    let numStr = number.toString();

    // Regex to match groups of three digits
    let regex = /\B(?=(\d{3})+(?!\d))/g;

    // Insert commas at every third position from the end
    numStr = numStr.replace(regex, ',');

    return numStr;
}
const amountinput = document.querySelector('.cash-inputfield');
amountinput.addEventListener("input", function () {
    let valuenow = amountinput.value;
    // Remove all characters except numbers and limit to 7 digits
    value = valuenow.replace(/[^0-9]/g, '').slice(0, 7);
    // Prevent 0 as first number
    if (value.startsWith('0') && value.length > 1) {
        value = value.substring(1);
    }
    // Add comma after  every 3 digits
    value = addCommas(value);
    amountinput.value = value;
});

function updateMobileOrientationOverlay() {
    const overlay = document.getElementById('orientationOverlay');
    if (!overlay) return;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isPortrait = window.matchMedia('(orientation: portrait)').matches;
    if (isMobile && isPortrait) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

function tryLandscapeLock() {
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(() => {
            // Some browsers only allow lock in fullscreen or after user gesture
        }).finally(updateMobileOrientationOverlay);
    } else {
        updateMobileOrientationOverlay();
    }
}

window.addEventListener('load', () => {
    updateMobileOrientationOverlay();
    window.addEventListener('resize', updateMobileOrientationOverlay);
    window.addEventListener('orientationchange', updateMobileOrientationOverlay);
});
// transaction bar
