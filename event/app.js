// 태그를 가져오는 방법
//const timeElement = document.getElementById("time");
// 태그를 가져오는 다른 방법
const timeElement = document.querySelector(".time");

// 이벤트
function 클릭시_실행될_함수() {
    timeElement.style.color = "gray";
    timeElement.style.backgroundColor = "skyblue";
    timeElement.innerText = "19:00";
}

function 색깔을_바꿔주는_함수() {
    if (timeElement.style.color === "gray") {
        timeElement.style.color = "darkblue";
    } else {
        timeElement.style.color = "gray";
    }
}

function 숫자를_바꿔주는_함수() {
    timeElement.innerText = "12:00";
}

function 마우스_오버시_실행될_함수() {
    timeElement.style.color = "gray";
    timeElement.style.backgroundColor = "gray";
    timeElement.innerText = "18:00";
}

function 실행될_함수() {
    timeElement.style.color = "red";
    timeElement.style.backgroundColor = "skyblue";
    timeElement.innerText = "21:00";
}

timeElement.addEventListener('click',숫자를_바꿔주는_함수);
timeElement.addEventListener('mouseover',마우스_오버시_실행될_함수);
window.addEventListener('copy', 실행될_함수);
window.addEventListener('resize', 실행될_함수);

// html head 태그의 title 바꾸기
document.title = "javascript clock";