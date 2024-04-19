const koreanAir = {
    airline: 'KoreanAir',
    iataCode: 'KAL',
    booking: [],
    book(flightNum, name) {
        console.log(this);
        console.log(`${name}이 ${this.airline} 항공의 ${this.iataCode}${flightNum} 예약했습니다`);
        this.booking.push({ flight: `${this.iataCode}${flightNum}`, name: `${name}`})
    },
}

koreanAir.book(123, "Owen");
koreanAir.book(456, "Kim");

const asiana = {
    airline: 'Asiana',
    iataCode: 'ASA',
    booking: [],
}

const book = koreanAir.book;
//book(23, 'Sara'); // Not Work : 

// 어떤 객체를 바인딩 할때 첫번째 인자에 this로 세팅하고 싶은 객체를 넘길 수 있다
book.call(asiana, 23, 'sara');
console.log(asiana);
book.call(koreanAir, 455, 'John');
console.log(koreanAir);

// apply - 첫번째 인자는 this로 세팅하고 두번째 인자에 넘기고 싶은 객체들을 배열에 담아 넘길 수 있다
const flightData = [222, 'George'];
book.apply(asiana, flightData);
console.log(asiana);


// bind -  
const bookASA = book.bind(asiana);
bookASA(66, "Rebeca");
console.log(bookASA);