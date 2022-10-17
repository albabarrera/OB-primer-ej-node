const myData = {
    name : "Alba",
    lastName: "Barrera",
    age: 37,
    height: 158,
    isDeveloper: "in progress"
};

const myAge = myData.age;
const friendsData = [
    {
        name : "Alba",
        lastName: "Barrera",
        age: 37,
        height: 158,
        isDeveloper: "in progress"
    },
    {
        name : "Jennifer",
        lastName: "Sotillo",
        age: 38,
        height: 157,
        isDeveloper: false
    },
    {
        name : "Gerard",
        lastName: "Lopez",
        age: 38,
        height: 167,
        isDeveloper: true
    }
]

friendsData.sort((a, b)=> a.age - b.age) 

console.log(friendsData);