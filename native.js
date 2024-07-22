const members = [
    { name: 'Aman Makhija', age: 20 },
    { name: 'Suresh Jsharma', age: 40 },
    { name: 'Vijay Sahu', age: 41 },
    { name: 'Rakesh Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];

// 1. Get array of first names of everyone
const firstNamesArray = members.map(m => m.name.split(" ")[0]);
console.log(firstNamesArray);

// 2. Make everyone's last names in UPPERCASE in given array of objects
members.map(m => {
    const lastName = m.name.split(" ")[1];
    m.name = m.name.replace(lastName, lastName.toUpperCase());
});
console.log(members);

// 3. Get entries where age is between 41-60
const ageFilter = members.filter(m => m.age >= 41 && m.age <= 60);
console.log(ageFilter);

// 4. Get average age
const sumOfAge = members.reduce((prev, curr) => {
    if (curr.age !== undefined)
        return prev + curr.age;
    return prev;
}, 0);
var avgAge = sumOfAge / members.length;
var roundedAvgAge = Math.round(avgAge)
console.log(roundedAvgAge);

// 5. Get Person with maximum age
var personWithMaxAge = members.reduce((prev, curr) => {
    if (prev.age > curr.age) return prev;
    else return curr;
}, members[0]);
console.log(personWithMaxAge);

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old
const res = members.reduce((prev, curr) => {
    console.log(prev);
    if (curr.age < 35) prev.young.push(curr.name)
    else if (curr.age >= 35) prev.old.push(curr.name)
    else prev.noage.push(curr.name)
    return prev
}, {
    'young': [],
    'old': [],
    'noage': []
})
console.log(res);

// 7. add a new member to same members array instance at index 2
const newMember = { name: 'aman', age: 21 }
members.splice(2, 0, newMember);
console.log(members);

// 8. extract first and second element using destructing
const [elem1, elem2] = members;
console.log(elem1, elem2);

// 9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
const newMemberArray = [{ name: 'test', age: 30 }]
const newMembers = newMemberArray.concat(members);
console.log(newMembers);

// 10. Extract properties of object using destructuring
// const { name, age } = members[0];

// 11. Rename extracted property of object while destructing
const { name: firstname, age } = members[0];
console.log(firstname);

// 12. Destructure any property of an object and use spread operator to get remaining properties in an object
const { name, ...rest } = members[0];
console.log(name, rest);

// 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const { ...props } = members[0];
props.name = "a"
const newObj = props;
console.log(newObj);

// 14. Use reduce function on array and object
const result1 = members.reduce((prev, curr) => {
    return { name: prev.name + " " + curr.name }
});

console.log(result1.name);

const result2 = Object.keys(members[0]).reduce((prev, curr) => {
    return members[0][prev] + " " + members[0][curr];
})

console.log(result2);