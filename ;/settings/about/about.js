
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

function backtosetting() {
    location.href = "../setting.html";
}

function gotoabout() {
    location.href = "./game/game.html";
}
//
function credits() {
    document.querySelector('.insights').classList.add("otherusers");
    document.querySelector('.keypad').classList.add("activatenewuserform");
    document.querySelector('.new-user-id-form1').classList.add("activatenewuserform");
    InputField.focus();
}
function backcredits() {
    if(passwordchange == 1) {
        document.querySelector('.backbtn'). innerText = 'BACK';
        document.querySelector('.gobtn'). innerText = 'GO';
        document.querySelector('.final-user-name3'). innerText = 'Change';
        InputField.placeholder = 'Here!';
        document.querySelector('.final-user-name1'). innerText = 'PASSWORD';
        passwordchange =0;
        InputField.value = '';
        InputField.focus();
    }else {
        if(InputField.value==''){
            document.querySelector('.insights').classList.remove("otherusers");
            document.querySelector('.keypad').classList.remove("activatenewuserform");
            document.querySelector('.new-user-id-form1').classList.remove("activatenewuserform");
            document.querySelector('.final-user-name3'). innerText = 'Change';
            InputField.value = '';
        }else {
            InputField.value = '';
            InputField.focus();
        }
        
    }
}
const InputField = document.querySelector('.user-phone-input1');
//     // keybutton
//     if(e.keyCode==191){
//         e.preventDefault();
//         InputField.value += '0';
//     }
//     if(e.keyCode==90){
//         e.preventDefault();
//         InputField.value += '9';
//     }
//     if(e.keyCode==88){
//         e.preventDefault();
//         InputField.value += '8';
//     }
//     if(e.keyCode==67){
//         e.preventDefault();
//         InputField.value += '7';
//     }
//     if(e.keyCode==86){
//         e.preventDefault();
//         InputField.value += '6';
//     }
//     if(e.keyCode==66){
//         e.preventDefault();
//         InputField.value += '5';
//     }
//     if(e.keyCode==78){
//         e.preventDefault();
//         InputField.value += '4';
//     }
//     if(e.keyCode==77){
//         e.preventDefault();
//         InputField.value += '3';
//     }
//     if(e.keyCode==188){
//         e.preventDefault();
//         InputField.value += '2';
//     }
//     if(e.keyCode==190){
//         e.preventDefault();
//         InputField.value += '1';
//     }
//     if(e.keyCode==87) {
//         backcredits();
//     };
// });
window.addEventListener("keydown", function(e){
    // keybutton
    if(e.keyCode==191){
        e.preventDefault();
        InputField.value += '0';
    }
    if(e.keyCode==90){
        e.preventDefault();
        InputField.value += '9';
    }
    if(e.keyCode==88){
        e.preventDefault();
        InputField.value += '8';
    }
    if(e.keyCode==67){
        e.preventDefault();
        InputField.value += '7';
    }
    if(e.keyCode==86){
        e.preventDefault();
        InputField.value += '6';
    }
    if(e.keyCode==66){
        e.preventDefault();
        InputField.value += '5';
    }
    if(e.keyCode==78){
        e.preventDefault();
        InputField.value += '4';
    }
    if(e.keyCode==77){
        e.preventDefault();
        InputField.value += '3';
    }
    if(e.keyCode==188){
        e.preventDefault();
        InputField.value += '2';
    }
    if(e.keyCode==190){
        e.preventDefault();
        InputField.value += '1';
    }
    if(e.keyCode==87) {
        e.preventDefault();
        countClicksdlt();
    };
});
function countClicks(number) {
    InputField.value += number;
}
function countClicksdlt() {
    if(InputField.value == '') {
        backcredits();
    }else {
        InputField.value = InputField.value.slice(0, -1);
    }
}

function infomation() {
    console.log("clicked");
    location.href = '../about/game/game.html'
}
var showps=0;
function showpass() {
    if(showps==0) {
        InputField.type = 'text';
        document.getElementById("show-pass").textContent = 'Hide';
        showps++;
    }else {
        InputField.type = 'password';
        document.getElementById("show-pass").textContent = 'Show';
        showps=0;
    }
};

var password = localStorage.getItem('resetp')||0;
console.log("password are....", password)
const defaultp = 1234;
if(password == 0) {
    console.log("password are empty....")
    localStorage.setItem('resetp', defaultp);
}
function creditsdone() {
    if(passwordchange == 1) {
        password = localStorage.getItem('resetp');
        if(InputField.value == password){
            document.querySelector('.final-user-name1'). innerText = 'New Password';
            console.log("write a new password here....");
            InputField.value = '';
            InputField.focus();
            passwordchange = 2;
        }else {
            console.log("password are worng....", password);
        }
    }else if(passwordchange == 2) {
        localStorage.setItem('resetp', InputField.value);
        document.querySelector('.insights').classList.remove("otherusers");
        document.querySelector('.keypad').classList.remove("activatenewuserform");
        document.querySelector('.new-user-id-form1').classList.remove("activatenewuserform");
        document.querySelector('.final-user-name1'). innerText = 'PASSWORD';
        InputField.value = '';
        // reset()
        console.log("password are are success full changed....");
        passwordchange = 0;
        document.querySelector('.backbtn'). innerText = 'BACK';
        document.querySelector('.gobtn'). innerText = 'GO';
    }else {
        password = localStorage.getItem('resetp');
        if(InputField.value == password){
            document.querySelector('.insights').classList.remove("otherusers");
            document.querySelector('.keypad').classList.remove("activatenewuserform");
            document.querySelector('.new-user-id-form1').classList.remove("activatenewuserform");
            InputField.value = '';
            // reset()
            console.log("password are accepted....");
            nowtime = new Date();
            const logindates = `${nowtime.getFullYear()}-${Number(nowtime.getMonth()+1) < 10 ? '0' + Number(nowtime.getMonth()+1) : Number(nowtime.getMonth()+1)}-${nowtime.getDate() < 10 ? '0' + nowtime.getDate() : nowtime.getDate()}`;        
            localStorage.setItem('startingdate',logindates);
            localStorage.setItem(`${logindates}`,JSON.stringify([]));
            // localStorage.setItem('gameincome',0);
            // localStorage.setItem('shoot1sprize',0);
            // localStorage.setItem('shoot2sprize',0);
            // localStorage.setItem('shoot3sprize',0);
            // localStorage.setItem('shoot4sprize',0);
            // localStorage.setItem('playerprize',0);
            // localStorage.setItem('cptltr', 0);
            alert("Game reset successfuly...");

        }else {
            console.log("password are worng....", password);
            InputField.value = '';
            InputField.focus();
            InputField.placeholder = "Fail";
        }
    }
};

// const logindates = `2025-02-1`;
// localStorage.setItem('startingdate',logindates);
// localStorage.removeItem("2025-02-25");
// we are going to change password
// cancelling password change
var passwordchange = 0;
function changepass() {
    if(passwordchange == 0) {
        passwordchange = 1;
        document.querySelector('.final-user-name3'). innerText = '';
        document.querySelector('.backbtn'). innerText = 'Cancel';
        document.querySelector('.gobtn'). innerText = 'Next';
        InputField.value = '';
        document.querySelector('.final-user-name1'). innerText = 'Old Password';
        InputField.focus();
    }else {
        // backcredits();
    }
}

