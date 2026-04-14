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
if('BroadcastChannel' in window) {
    const channel = new BroadcastChannel('unique_channel_name');
    channel.addEventListener('message', event => {
        window.close();
    })
    channel.postMessage('element_opened');
} else {
    // console.log('Boardcast Channel API is not supported in this browser.');
}
localStorage.setItem('gametab',1);
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

function closesub() {
    location.href = "../../setting.html";
}
