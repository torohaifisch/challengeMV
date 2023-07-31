import persons from './files/persons.json';
import { orderingFn } from './helper/utils';

//punto 1
const filteredArray = persons.filter((person) => {
  if (person.address) return true;
  return false;
});

// punto 2
export const sortedArray =  () => filteredArray.sort(orderingFn);

// punto 3
export const lastArray = () => persons.filter((person) => {
  const name = person.name.toUpperCase();
  if (
    20 < person.age &&
    person.age < 30 &&
    (name.startsWith('H') || name.startsWith('L'))
  )
    return person;
});
