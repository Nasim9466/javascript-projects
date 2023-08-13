
class Person {
     constructor(name, age, id, educationField){
        this.name = name;
        this.age = age;
        this.id = id;
        this.educationField = educationField;
         }
        }
class PeopleList {
    constructor() {
      this.people = [];
           }
    addPerson(person) {
      this.people.push(person);
           }
    removePerson(person) { 
      const index = this.people.indexOf(person); 
       if (index !== -1) {
       this.people.splice(index, 1); 
               }
             }
    editPerson(index, updatedPerson) {
        if (index >= 0 && index < this.people.length) {
        this.people[index] = updatedPerson;
                 } 
             }
         }
// نمونه استفاده از کد 
    const person1 = new Person("John", 30, "12345", "Computer Science");
    const person2 = new Person("Jane", 25, "67890", "Engineering");
    const peopleList = new PeopleList();
     peopleList.addPerson(person1);
     peopleList.addPerson(person2);
     console.log(peopleList.people); 
//ویرایش فرد اول
const updatedPerson = new Person("Updated John" , 31 , "12345" , "Data Science");
peopleList.editPerson(0, updatedPerson);
console.log(peopleList.people);
//حذف فرد دوم
peopleList.removePerson(person2);
console.log(peopleList.people)