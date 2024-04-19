let myAddress = 'Seoul';
let oldMyAddress = myAddress;
myAddress = 'Busan';
console.log(myAddress, oldMyAddress);

const profile = {
    address: 'Seoul'
}

const afterProfile = profile;
afterProfile.address = 'Busan';
console.log(profile);
console.log(afterProfile);

const profile2 = {
    address: 'Seoul',
    family: ['Tony', 'Chris']
}

// 주소가 아닌 값만 복사하는 방법 - 얕은 복사
const profile2Copy = Objext.assing({}, profile2);
profile2.address = 'Daegu';
console.log(profile2);
console.log(profile2Copy);

profile2Copy.family.push('Levin');
console.log(profile2);
console.log(profile2Copy);


// lodash - 자바스크립트에서 유틸리티성 모듈을 사용하면 굉장히 쉽고 빠르게 작업을 할 ㅜㅅ 있다
// 깊은 복사 - lodash의 clone deep 메서드 활용
const deepCopy = require("lodash.clonedeep");

const object = {
    a: "a",  
    number: {    
        one: 1,    
        two: 2,  
    },  
    arr: [1, 2, [3, 4]]
};

const copy = deepCopy(object);

copy.number.one = 3;
copy.arr[2].push(5);

console.log(object === copy); // false
console.log(object.number.one === copy.number.one); // false
console.log(object.arr === copy.arr); // false
 
console.log(object); // { a: 'a', number: { one: 1, two: 2 }, arr: [ 1, 2, [ 3, 4 ] ] }
console.log(copy); // { a: 'a', number: { one: 3, two: 2 }, arr: [ 1, 2, [ 3, 4, 5 ] ] }