export const people = [
    {
        id: "0",
        name: "Nicolas",
        age: 28,
        gender: "male"
    },
    {
        id: "1",
        name: "kinkyu",
        age: 14,
        gender: "male"
    },
    {
        id: "2",
        name: "kibum",
        age: 44,
        gender: "male"
    },
    {
        id: "3",
        name: "minha",
        age: 9,
        gender: "female"
    },
    {
        id: "4",
        name: "hee-young",
        age: 42,
        gender: "female"
    }
];

export const getByID = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}