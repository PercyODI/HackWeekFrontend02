/**
 * Created by pears on 11/25/2016.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project, Person } from '../index';

@Injectable()
export class ProjectService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private projectsUrl = "http://ec2-52-89-175-116.us-west-2.compute.amazonaws.com/hackWeek/HackWeekBackend1/api/projects";

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }

  getProjects(): Promise<Project[]> {
    return this.http.get(this.projectsUrl)
      .toPromise()
      .then(response => response.json() as Project[])
      .catch(this.handleError);
  }

  getProject(id: string): Promise<Project> {
    return this.http.get(`${this.projectsUrl}/${id}`)
      .toPromise()
      .then(response => response.json() as Project)
      .catch(this.handleError);
  }
  
  addProject(project: Project): Promise<Project> {
    return this.http.post(`${this.projectsUrl}`, project, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Project)
      .catch(this.handleError);
  }

  deleteProject(project: Project): Promise<void> {
    return this.http.delete(`${this.projectsUrl}/${project._id}`)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // createProject(name: string, difficulty: number):

  updateProject(project: Project): Promise<Project> {
    return this.http.put(`${this.projectsUrl}/${project._id}`, project, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Project)
      .catch(this.handleError)
  }
  
  addPersonToProject(id: string, person: Person): Promise<void> {
    return this.http.post(`${this.projectsUrl}/${id}/people`, person, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }
}
