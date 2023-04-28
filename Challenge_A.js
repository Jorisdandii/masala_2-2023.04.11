
// Classda Challenge 1

// Parent
// class Car {
//     // STATE

//   #soat_tezlik = 260;
//   #stop = "tormizni bosing";

//   constructor(name) {
//     this.name = name;
//   }

//   startCar() {
//     console.log(`mashinani ishga tushur ${this.name}`);
//   }

//   Car_tezligi() {
//     console.log(
//       `${this.name} ${this.#stop}`
//     );
//   }

//   max_speed(speed) {
//   if(speed < 260) {
//     console.log(`${this.name} tezligi maxm tezlikga chiqmadi`)
//     }else if(speed <= 260) {
//     console.log(`${this.name}ning tezligi maxm ${this.#soat_tezlik}km/h chiqdi`);
//     } else {
//       console.log(`${this.name}ning tezligini ${this.#soat_tezlik}km/h tezlikdan boshqa ko'tarolmaysiz`)
//     }
//   }
//   min_speed() {
//     console.log(`Mashinani to'xtating`)
//   }
// }
// class bugatti extends Car {
//   // STATE

//   constructor(name, tezlik, mator_kuch, yili, rangi) {
//     super(name, tezlik, mator_kuch);
//     this.tezlik = tezlik;
//     this.mator_kuch = mator_kuch;
//     this.yili = yili;
//     this.rangi = rangi;
//   }
//   // METHOD
//    bugatti_tezlik() {
//     console.log(`${this.name} tezligi ${this.tezlik}km max tezlikda yura oladi`);
//    }

//    bugatti_matori () {
//     console.log(`${this.name} mator kuchi ${this.mator_kuch} ot kuchiga teng`);
//    }
// }

// const myBugatti = new bugatti("Bugatti", 260, 3.4, 2023, "qora");
// console.log(myBugatti);
// myBugatti.max_speed(260);
// myBugatti.startCar();
// myBugatti.min_speed();
// myBugatti.bugatti_tezlik();
// myBugatti.bugatti_matori();
// myBugatti.Car_tezligi();