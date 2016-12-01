/**
 * Created by pears on 11/25/2016.
 */
export class Skill {
  name: string;
  level: number;
  
  constructor(name?: string, level?: number) {
    this.name =  name || "";
    this.level = level || 0;
  }
}
