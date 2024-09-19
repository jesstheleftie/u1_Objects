//Javascript Object Notation -> JSON

const car = {
    make: 'Toyota',
    model: 'Camry',
    color: 'blue',
    hp: 4000,
    year: 1989,
    mileage: 180000,
    mpg: 25.5,
    inStock: true,
    availableOptions: ['Ac','Stereo','GPS']

}

// console.log(`I have a ${car.year} ${car.make} ${car.model}`)

// const carMpg = car.mpg
// console.log(carMpg)

//How to console into an array in an obj.
console.log(car.availableOptions[1])
 //or
 const carStereo = car.availableOptions[1]
 console.log(carStereo)

 //You do section --> Make a mock FB profile model
 //Key value pairs and their Data types

 const mockProfile = {
    name: 'Jessica',
    friends: 345,
    birthday: 'May 7th',
    gender: 'Female',
    location: {
        city: 'Vancouver',
        country: 'Canada'
    },
 }
 console.log (mockProfile)

 //CRUD =>

    //create
    //read
    //update
    //delete

    const house ={
        color: 'blue',
        noOfBedrooms: 4,
        noOfBathrooms: 2.5,
        hasMortgage: true,
        isForSale: true,
        price: 450000
    }
    house.hasGarage = true
    house.color = 'white'

    delete house.price
    console.log(house)

    // user.isVaccinatedForCovid = true
    // user.wasBoosterShottedForCovid = true
    // user.dateOfLastBoosterShot = "some date"
    // user.typeOfBoosterShot = "some brand"

    const evens = [2,4,6,8]
    const moreEvens =[10,12,14,16]

    const evenNumbers = [...evens, ...moreEvens]

    const odds = [1,3,5,7,9]
    const moreOdds = [...odds,11,13,15,17]

    const numberArray = [...evenNumbers, ...moreOdds]
  
    console.log(numberArray)

    //Deconstructuring Objects
    //Allows us to pull indivisual key value properties
    //without having to repeat ourselves too much

    const person={
        firstName: "Jeremy",
        lastName: "Taubman",
        location: "Hartford, CT",
        age: 37

    }

    const { firstName, lastName, location} = person
    console.log(location)