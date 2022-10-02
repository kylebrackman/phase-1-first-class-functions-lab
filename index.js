// practice below

const returnFirstTwoDrivers = function (x) {
    return x.slice(0, 2)
}

const returnLastTwoDrivers = function (x) {
    return x.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (x) {
     return (fare) => fare * x
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverList, y) {
    return y(driverList)
}








// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

// const returnFirstTwoDrivers = function(x) {
//     return x.slice(0,2);
// }
// returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

// const returnLastTwoDrivers = function(x) {
//     return x.slice(2);
// }
// returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier(fare) {
//     return function(x) {
//         return x * fare
//     }
// }
// const fareDoubler = createFareMultiplier(2);
// const fareTripler = createFareMultiplier(3);

// function selectDifferentDrivers(drivers, y) {
//     return y(drivers)
// }