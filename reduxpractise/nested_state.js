const Immer = require("immer")

const produce = Immer.produce

const temp = {
    name: 'mani',
    phNo: 9999999999,
    address: {
        street: 'main street',
        place: 'main place',
        city: 'main village'
    }

}

const modTemp = produce(temp, draft => { draft.address.street = 'second main' })

console.log(modTemp)
// {
//     name: 'mani',
//     phNo: 9999999999,
//     address: { street: 'second main', place: 'main place', city: 'main village' }
// }