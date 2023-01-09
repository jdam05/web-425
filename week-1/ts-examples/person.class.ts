/**
 * Title: perosn.class.ts
 * Date: January 8, 2023
 * Author: Jamal Eddine Damir
 * Description: File containing the Person class
 *
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

//Importing IPerson interface
import { IPerson } from "./person.interface";

// Person class implementing IPerson interface
class Person implements IPerson {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

// Instantiating a new Person object
let myName = new Person("Jamal", "Damir");

// Outputs the Peron object's values
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
