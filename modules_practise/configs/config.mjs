export default {
    supplies: {
        water: {
            amount: 30000,
            unit: 'liters',
            pricePerUnit: 20, // all in UAH
            deliveryPrice: 400,
        },
        iceCream: {
            amount: 3000,
            unit: 'kilograms',
            pricePerUnit: 100,
            deliveryPrice: 300,
        },
        sugar: {
            amount: 1000,
            unit: 'kilograms',
            pricePerUnit: 40,
            deliveryPrice: 300,
        },
        toiletPaper: {
            amount: 500,
            unit: 'pieces',
            pricePerUnit: 15,
            deliveryPrice: 250,
        },
        grassManure: {
            amount: 4000,
            unit: 'kilogram',
            pricePerUnit: 50,
            deliveryPrice: 350,
        }
    },
    employees: [
        {
            salary: 8000,
            job: 'security',
            willStartAfter: 0, // month
            amount: 1
        },
        {
            salary: 5000,
            job: 'cleaner',
            willStartAfter: 1,
            amount: 2,
        },
        {
            salary: 15000,
            job: 'technic',
            willStartAfter: 1,
            amount: 5,
        },
        {
            salary: 11000,
            job: 'gardener',
            willStartAfter: 4,
            amount: 4,
        },
        {
            salary: 13000,
            job: 'attractionOperator',
            willStartAfter: 0,
            amount: 4,
        },
    ],
    attractions: [
        {
            name: 'Crazy catapult',
            needsServiceEach: 3, // month
            countOfPlaces: 2,
            pricePerPerson: 150,
        },
        {
            name: 'Hills race',
            needsServiceEach: 2, // month
            countOfPlaces: 16,
            pricePerPerson: 80,
        },
        {
            name: 'Flying wings',
            needsServiceEach: 4, // month
            countOfPlaces: 20,
            pricePerPerson: 50,
        },
        {
            name: 'Observing wheel',
            needsServiceEach: 6, // month
            countOfFreePlaces: 80,
            pricePerPerson: 25,
        },
    ]
}