// // 스코프
// function calcAge(birthYear) {
//     const age = 2024 - birthYear;

//     function printAge() {
//         const output = `${firstName}님, 당신은 ${age}살 입니다. 그리고 당신은 ${birthYear}년에 태어났습니다`;
//         console.log(output);
//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true; // var 키워드로 선언한 변수 millenial은 블록 스코프에서 선언되었지만 모든 스코프에서 접근 가능하다 (블록스코프의 영향을 받지 않는다)
//             // var 키워드로 선언한 변수는 블록 스코프를 무시하고 스코프 울타리 밖에서도 접근 가능하다
//             // var는 only 함수 스코프만 따른다
//             // 즉, var 변수는 블록 스코프에서 선언되었지만 모든 스코프에서 접근 가능하다
//             console.log(add(2,3));
//             const firstName = 'Kevin';
//             const str = `${firstName}, 당신은 밀레니얼입니다.`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//         }
//         //console.log(str); // const 키워드로 선언한 변수는 if문 안에 있는 블록스코프 이므로 Reference Error가 발생하게 된다
//         //console.log(millenial);
//         console.log(add(2,3));
//     }

//     printAge();
// }

// const firstName = 'Owen'; // 어떤 함수 바깥에서 변수가 선언되면 함수 안에서 불러오는 것은 가능하다 (스코프 체인과 관련)
// console.log(calcAge(1990));
// // console.log(age); // ReferenceError: age is not defined => age 스코프가 함수 스코프이므로 함수 안쪽에서만 접근 가능한 변수이므로 함수 바깥에서는 접근할 수 없어 Reference error가 발생



// // 스코프 체인 : 해당 블록 또는 함수에 변수가 없으면 스코프를 타고 올라가서 참조하려는 현상을 스코프 체인 이라고 한다
// const title = 'Hello';

// const firstFunction = () => {
//     const age = 28;

//     if (age >= 18) {
//         const decade = 1; // const 변수가 블록 스코프에서 선언되었기 때문에 seconFunction_ 함수 내부에서는 const 변수를 참조 할 수 없다
//         var isAdult = true;
//     }

//     function secondFunction_() {
//         const occupation = 'student';
//         console.log(`${title}, I  'am ${age}years old ${occupation}`);
//     }

//     secondFunction_();
// }

// firstFunction();


let foo = 1;
{
  //console.log(foo); // ReferenceError => foo가 블록스코프 인데 아직 변수선언및 초기화가 되지 않은 상황에서 블록스코프에서 foo를 호출하려헀기 때문에 참조할 수 없다는 에러가 발생했다
  let foo = 2;
}


// 호이스팅 때문에 선언이 끌어올려져서 오류 안남.
console.log(text); // (선언 + 초기화 된 상태)
text = 'young!'; // (선언 + 초기화 + 할당 된 상태)
var text;
console.log(text);