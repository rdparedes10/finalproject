import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PowerMockService implements InMemoryDbService {
  createDb() {
    let projects = [
      { id: '1', name: 'Project1' , teamSize:'1', clientName:'Todo1'},
      { id: '2', name: 'Project2' , teamSize:'1', clientName:'BDV'},
      { id: '3', name: 'Project3' , teamSize:'1', clientName:'Bancolombia'},
      { id: '4', name: 'Project4' , teamSize:'1', clientName:'Banismo'}
    ];
    let employees = [
      { id: '1', name: 'Ruud Van Nistelrooy',company:'todo1', age:'26', birthday:'1992/05/05', favoriteColor:'red',project:'Project1'},
      { id: '2', name: 'Lionel Andres Messi',company:'todo1', age:'28', birthday:'1989/05/05', favoriteColor:'yellow',project:'Project2'},
      { id: '3', name: 'Ronaldo Nazariero', company:'todo1', age:'29', birthday:'1988/05/05', favoriteColor:'blue',project:'Project3'},
      { id: '4', name: 'Rogers Paredes' ,company:'todo1', age:'27', birthday:'1991/05/05', favoriteColor:'black',project:'Project4'}
    ];
    return {projects,employees};
  }
}