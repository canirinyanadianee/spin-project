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
function backtohistory(){
    location.href = '../setting.html';
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

var Orders = JSON.parse(localStorage.getItem('recents')) || [];
// console.table(Orders);
// var usersboard = JSON.parse(localStorage.getItem('usersboardarray')) || [];
var recnbr=0;
var nbrforrec=[];
for(i=0; i<=Orders.length-1; i++){
    recnbr++;
    nbrforrec.unshift(recnbr);
}
// console.log(nbrforrec);
Orders.forEach(function(order, index) {
    const tr = document.createElement('tr');
    const trContent = `
                        <td class="rec-nam">${order.dates}</td>
                        <td class="rec-dt">${order.b1}</td>
                        <td class="rec-dt">${order.b2}</td>
                        <td class="rec-dt">${order.b3}</td>
                        <td class="rec-dt">${order.b4}</td>
                        <td class="rec-dt">${order.b5}</td>
                        <td class="rec-dt">${order.b6}</td>
                        <td class="rec-dt">${order.b7}</td>
                        <td class="rec-dt">${order.b8}</td>
                        <td class="rec-dt">${order.b9}</td>
                        <td class="rec-dt">${order.b0}</td>
                        <td class="rec-per">${order.win}</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

function cleararrasequencyloop() {
    localStorage.setItem('arrayloopsequency', JSON.stringify([]));
};

function storegamestatus() {
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
};

function gobtn() {
    localStorage.setItem('playerprize',0);
}
function infomation() {
    console.log("clicked");
    location.href = '../about/game/game.html'
}