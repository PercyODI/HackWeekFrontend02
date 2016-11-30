/**
 * Created by pears on 11/25/2016.
 */
import { Person } from '../index';

export class Project {
  _id: string;
  name: string;
  difficulty: number;
  people_on_project: Person[];
  
  constructor(name?: string, difficulty?:number, people_on_project?:Person[])
  {
    this.name = name || "";
    this.difficulty = difficulty || 0;
    this.people_on_project = people_on_project || [];
  }
}
