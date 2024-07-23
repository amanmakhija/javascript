import { _ } from 'lodash'

type User = {
    name: string
    age?: number
}

const members: User[] = [
    { name: 'Aman Makhija', age: 20 },
    { name: 'Suresh Jsharma', age: 40 },
    { name: 'Vijay Sahu', age: 41 },
    { name: 'Rakesh Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];

// 1. Get array of first names of everyone
const firstNamesArray = _.map(members, (m: User) => m.name.split(" ")[0]);
console.log(firstNamesArray);

// 2. Make everyone's last names in UPPERCASE in given array of objects
_.forEach(members, (m: User) => {
    const [lastName] = _.tail(_.split(m.name, ' '));
    m.name = _.replace(m.name, lastName, lastName.toUpperCase());
});
console.log(members);

// 3. Get entries where age is between 41-60
const ageFilter = _.filter(members, (m: User) => m.age && m.age >= 41 && m.age <= 60);
console.log(ageFilter);

// 4. Get average age
var sumOfAge = _.sumBy(members, 'age');
var avgAge = _.divide(sumOfAge, _.size(members));
var roundedAvgAge = _.round(avgAge);
console.log(roundedAvgAge);

// 5. Get Person with maximum age
var personWithMaxAge = _.maxBy(members, 'age');
console.log(personWithMaxAge);

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old
const res = _.reduce(members, (prev: { 'young': string[], 'old': string[], 'noage': string[] }, curr: User) => {
    if (curr.age) {
        if (curr.age < 35) prev.young.push(curr.name)
        else if (curr.age >= 35) prev.old.push(curr.name)
        else prev.noage.push(curr.name)
    }
    return prev
}, {
    'young': [],
    'old': [],
    'noage': []
});
console.log(res);

// 7. add a new member to same members array instance at index 2
// const newMember = { name: 'aman', age: 21 };

// 8. extract first and second element using destructing
const [elem1, elem2] = members;
console.log(elem1, elem2);

// 9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
const newMemberArray = [{ name: 'test', age: 30 }];
const newMembers = _.concat(newMemberArray, members);
console.log(newMembers);

// 10. Extract properties of object using destructuring
// const { name, age } = _.head(members);

// 11. Rename extracted property of object while destructing
const { name: firstname, age } = _.head(members);
console.log(firstname, age);

// 12. Destructure any property of an object and use spread operator to get remaining properties in an object
const { name, ...rest } = _.head(members);
console.log(name, rest);

// 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const { ...props } = _.head(members);
props.name = "a"
const newObj = props;
console.log(newObj);

// 14. Use reduce function on array and object
const result1 = _.reduce(members, (prev: User, curr: User) => {
    return { name: _.add(_.get(prev, 'name'), _.add(" ", _.get(curr, 'name'))) };
});
console.log(result1.name);

const result2 = _.reduce(Object.keys(_.head(members)), (prev: string, curr: string) => {
    return _.add(_.get(_.head(members), prev), _.add(" ", _.get(_.head(members), curr)));
});
console.log(result2);