/**
 * Created by pears on 11/25/2016.
 */
 import { Skill } from '../index';
 
export class Person {
  name: string;
  skills: Skill[];
  
  constructor(name?: string) {
    this.name = name || "";
    this.skills = [];
  }
}
