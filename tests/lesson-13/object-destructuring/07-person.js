const person = {
    address : {
        street: "New York",
        city: "USA",
        country: "India"
    }
}

const { address: { street }} = person
console.log(street);
