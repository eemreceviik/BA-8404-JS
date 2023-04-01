let laptop = {
    color: 'dark grey',
    model: 'MSI',
    sizeInch: 14,
};

// DOT NOTATION
// const size = laptop.sizeInch
// laptop.sizeInch = 13
// laptop.hasRgb = true;

// BRACKET NOTATION
// const size = laptop['sizeInch'];
// console.log(size);
// laptop['sizeInch'] = 13;
// laptop['hasRgb'] = true;
// console.log(laptop)

// const key = 'model'
// const size = laptop[key]
// const size = laptop.key
// console.log(size);
// console.log(laptop);

let motorcyle = {
    model: 'Svartpilen',
    cc: 250,
    origin: 'Sweden',
    skills: ['ABS', 'Great Balance', 'Good Looking'],
    // fireEngine: function () {
    //     console.log('ÇALIŞTI');
    // },
    fireEngine() {
        console.log('ÇALIŞTI');
    },
    // stopEngine: function () {
    //     console.log('DURDU');
    // },
    stopEngine() {
        console.log('DURDU');
    },
    // logSkills: () => {
    //     console.log(this);
    //     // for (let i = 0; i < this.skills.length; i++) {
    //     //     console.log(this.skills[i]);
    //     // }
    // },
    logSkills() {
        console.log(this);
        for (let i = 0; i < this.skills.length; i++) {
            console.log(this.skills[i]);
        }
    },
};

// console.log(motorcyle.model);

// motorcyle.fireEngine();
// motorcyle.stopEngine();
// console.log(this);
// motorcyle.logSkills()

// console.log('selam')

// let list = [];
// list.forEach();

// FUNCTTION VS METHOD TEKRAR
// const logProperty = () => {
//     console.log(1);
// };

// logProperty();

// let _name = 'Korhan';
// _name = _name.toUpperCase();
// console.log(_name);

// Nesne Methodları

// let result = motorcyle.hasOwnProperty('origin');
// let result = motorcyle.hasOwnProperty('size');
// let result = motorcyle.hasOwnProperty('logSkills');

let extremeSports = ['Snowboard', 'Rafting', 'Paragliding', 'Scuba diving'];

// console.log(extremeSports.hasOwnProperty(4))

const result = Object.entries(motorcyle);

// result.forEach((value, index) => {
//     console.log(value);
// });

// const result = Object.keys(motorcyle);
// const result = Object.values(motorcyle);
// const result = Object.freeze(motorcyle);
// const result = Object.seal(motorcyle)
// console.log(motorcyle);
// motorcyle.cc = 650;
// motorcyle.hasLight = true;

// console.log(result);

// FOR IN & FOR OF

// console.log(extremeSports)
// console.log(extremeSports[1])
// for (const key in extremeSports) {
//     // console.log(key);
//     console.log(extremeSports[key])
// }

// for (const key in motorcyle) {
//     // console.log(item);
//     console.log(motorcyle[key])
// }

// for (const iterator of extremeSports) {
//     console.log(iterator)
// }

for (const [key, value] of Object.entries(motorcyle)) {
    console.log(key, value);
}
