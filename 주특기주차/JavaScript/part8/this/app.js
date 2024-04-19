// console.log(this);

const calcAge = function (birthYear) {
    // console.log(this);
}

calcAge(1990);

const calcAgeArrow = (birthYear) => {
    // console.log(this);
}

calcAgeArrow(1992);

const profile = {
    firstName: 'Kevin',
    year: 1992,
    calcAge: function () {
        //console.log(this);

        const isMellenial = () => {
            console.log(this);
        };
        isMellenial(); // 해당 함수가 실행이 되는 시점에 부모 객체를 참조한다

        return 2024 - this.year;
    },
    greet: () => console.log(`안녕, ${this.firstName}야`),
    greet2: function () {console.log(`안녕, ${this.firstName}야`)}
}

profile.calcAge();
// profile.greet();
// profile.greet2();

const anotherProfile = {
    firstName: 'Sara',
    year: 1986
}

// console.log(profile.calcAge);
// console.log(anotherProfile.calcAge);
// anotherProfile.calcAge = profile.calcAge;
// console.log(anotherProfile.calcAge);
// console.log(anotherProfile.calcAge());

const foo = profile.calcAge;
// console.log(foo());
