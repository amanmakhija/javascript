const _ = require('lodash')

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
const firstNamesArray = [];
_.forEach(members, m => {
    firstNamesArray.push(m.name.split(" ")[0]);
});

// 2. Make everyone's last names in UPPERCASE in given array of objects
_.forEach(members, m => {
    const lastName = m.name.split(" ")[1];
    m.name = m.name.replace(lastName, lastName.toUpperCase());
});

// 3. Get entries where age is between 41-60
const ageFilter = _.filter(members, m => m.age >= 41 && m.age <= 60);

// 4. Get average age
var avgAge = 0;
_.forEach(m => {
    avgAge += isNaN(m.age) ? 0 : m.age;
})
avgAge /= members.length;
avgAge = _.round(avgAge);

// 5. Get Person with maximum age
var ans = members[0].name;
var maxAge = members[0].age;
_.forEach(members, m => {
    if (m.age > maxAge) {
        maxAge = m.age;
        ans = m.name;
    }
});

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old
var res = {
    'young': [],
    'old': [],
    'noage': []
};
_.forEach(members, m => {
    m.age < 35 && res['young'].push(m.name);
    m.age >= 35 && res['old'].push(m.name);
    !m.age && res['noage'].push(m.name);
});

// 7. add a new member to same members array instance at index 2
const newMember = { name: 'aman', age: 21 };


// 8. extract first and second element using destructing
const [elem1, elem2] = members;

// 9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
const newMemberArray = [{ name: 'test', age: 30 }];
const newMembers = _.concat(newMemberArray, members);

// 10. Extract properties of object using destructuring
// const { name, age } = members[0];

// 11. Rename extracted property of object while destructing
const { name: firstname, age } = members[0];
console.log(firstname);

// 12. Destructure any property of an object and use spread operator to get remaining properties in an object
// const { name, ...rest } = members[0];

// 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const { ...props } = members[0];
props.name = "a"
const newObj = props;

// 14. Use reduce function on array and object
const result1 = _.reduce(members, (prev, curr) => {
    const name = prev.name + " " + curr.name;
    return { name };
});

console.log(result1.name);

const result2 = _.reduce(Object.keys(members[0]), (prev, curr) => {
    const returnValue = members[0][prev] + " " + members[0][curr];
    return returnValue
});

console.log(result2);