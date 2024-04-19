// 호이스팅
console.log(me);
//console.log(job); // ReferenceError => let은 초기화 되기전까지 TDZ에 머물러있는데, 아직 초기화 되지 않았는데 호출하려고 했으므로 job 변수를 참조할 수 없어 에러가 발생하게 된다

var me = 'Owen';
let job = 'engineer';
const year = 1993;

// console.log(addDecl(2,3));
//console.log(addExpr(2,3)); // ReferenceError => const는 초기화 되기전까지 DZ에 머물러있는데, 아직 초기화 되지 않았는데 addExpr 함수를 호출하려고 했기 때문에 참조할 수 없어 에러가 발생하게 된다
//console.log(addArrow(2,3));// ReferenceError => const는 초기화 되기전까지 DZ에 머물러있는데, 아직 초기화 되지 않았는데 addExpr 함수를 호출하려고 했기 때문에 참조할 수 없어 에러가 발생하게 된다

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

console.log(numProducts); // 호이스팅 때문에 var 변수가 선언 + 할당이 이미 되어 undefined가 출력된다 => truthy 값으로 바뀌어 deleteShoppingCart 함수가 실행되게 된다
if (!numProducts) {
    deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
    console.log("모든 상품 삭제");
}