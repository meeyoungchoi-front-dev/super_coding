const 맥북 = "300만원";
let 아이패드 = "100만원";
// 문제점이 있는 구식 방법 
var 아이폰 = "200만원";

console.log("(1) 아이폰은 " , 아이폰);

// 위에 이미 선언된 변수를 재선언해도 var는 에러를 내뿜지 않는다
var 아이폰 = "300만원";

console.log("(2) 아이폰은 " , 아이폰);

// let은 변수의 값을 변경할 수 있다
아이패드 = "300만원";
console.log("(2) 아이폰은 " , 아이폰);
console.log("아이패드는 " , 아이패드);

// 배열
const 내가오늘산거 = ["맥북", "아이폰", "아이패드","에어팟맥스"];

내가오늘산거[0] = "애플워치";
console.log(내가오늘산거[0]);
console.log(내가오늘산거[2]);
console.log(내가오늘산거[3]);

내가오늘산거.push("애플워치");
console.log(내가오늘산거);

// 객체
const 판교묭이 = {
    성별: "여자",
    이름: "묭이",
    소속: "회사",
    직업: "개발자"
};

판교묭이.성별 = "남자";

console.log(판교묭이.성별);

판교묭이.사는곳 = "대한민국";

console.log(판교묭이);

// 데이터구조
//true
console.log(판교묭이.사는곳 === "대한민국");
//false
console.log(판교묭이.사는곳 === "미국");
//undefined : 값이 정의되어 있지 않다
//null : 값이 비어있다


// 함수와 조건문
// 함수를 이용하면 코드를 재사용할 수 있다
function 애플워치_가격() {
    console.log("애플워치는 50만원 입니다");
    console.log("근데 오늘은 할인 이벤트가 있어서 하나 더 사시면 10% 할인해드려요");
}

function 맥북_가격() {
    console.log("맥북은 200만원 입니다");
}

console.log("애플워치 얼마에요?");
애플워치_가격();

console.log("맥북 얼마에요?");
맥북_가격();

console.log("애플워치 얼마에요?");
애플워치_가격();

// 화살표 함수
const 더하기 = (a,b) => {
    console.log("가격은", a+b + "만원입니다.");
}

console.log("애플워치랑 맥북 가격 얼마에요?");
더하기(50,200);

// 계산기 만들기
const 계산기 = {
    더하기: (a,b) => {
        return "가격은", (a + b), "만원입니다.";
    },
    곱하기: (a,b) => {
        return "가격은", (a * b), "만원입니다.";
    },
    나누기: (a,b) => {
        return "가격은", (a / b), "만원입니다.";
    },
    빼기: (a,b) => {
        return "가격은", (a - b), "만원입니다.";
    }
};

const 할인된_가격 = (기기이름, 가격) => {
    if (기기이름 === "맥북") {
        //  20%할인
        return 가격 * 0.8;
    } // 그 외 기기: 10% 할인
    else if (기기이름 === "아이폰") {
        return 가격 * 0.5;
    } else {
        return 가격 * 0.9;
    }
};

console.log(계산기.나누기(20, 2));
console.log(계산기.곱하기(5, 4));
console.log(계산기.빼기(10, 3));

console.log(할인된_가격("맥북", 2000000));

// 반복문
for (let i = 0; i < 10; i++) {
    console.log("이건 얼마냐구요!!!!");
}

for (i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " :짝수");
    } else {
        console.log(i + " :홀수");
    }
}