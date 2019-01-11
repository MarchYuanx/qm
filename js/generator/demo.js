function* listPeople(){
  let i = 0;
  yield ++i;
  yield ++i;
  yield ++i;
  yield ++i;
}




const people = listPeople();

console.log(people.next())
console.log(people.next())
console.log(people.next())
console.log(people.next())

// while (!people.next().done)
// {
//   console.log(people.next())
// }