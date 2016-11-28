/**
 * Created by pears on 11/25/2016.
 */
import { Person } from '../index';

export class Project {
  _id: string;
  name: string;
  difficulty: number;
  people_on_project: Person[];
}
