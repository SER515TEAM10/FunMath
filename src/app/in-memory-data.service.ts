import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, userid: 11, name: 'Asmi', password: 'Asmi', role: 0 },
      { id: 12, userid: 12, name: 'Dhananjay', password: 'Dhananjay', role: 0 },
      { id: 13, userid: 13, name: 'Sharad', password: 'Sharad', role: 0 },
      { id: 14, userid: 14, name: 'Naren', password: 'Naren', role: 0 },
      { id: 15, userid: 15, name: 'Satyen', password: 'Satyen', role: 0 }
    ];
    // const heroes = [
    //   { id: 11, name: 'Dr Nice' },
    //   { id: 12, name: 'Narco' },
    //   { id: 13, name: 'Bombasto' },
    //   { id: 14, name: 'Celeritas' },
    //   { id: 15, name: 'Magneta' },
    //   { id: 16, name: 'RubberMan' },
    //   { id: 17, name: 'Dynama' },
    //   { id: 18, name: 'Dr IQ' },
    //   { id: 19, name: 'Magma' },
    //   { id: 20, name: 'Tornado' }
    // ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.userid)) + 1 : 11;
  }
}