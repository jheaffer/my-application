import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerServiceService {
  //Defining 5 Trainers with teams and items
  private registry = signal([
    {//1 record in my registry
      name: 'Ash Ketchum',
      team: ['Pikachu', 'Charizard'],
      items: ['Light Ball', 'Charizardite Y']
    },
    {
      name:'Misty',
      team: ['Starmie', 'Psyduck', 'Gyarados'],
      items: ['Mystic Water', 'None', 'Gyaradosite']
    }//Add 3 more trainers
  ]);
  //Expose signal as read-only
  trainers = this.registry.asReadonly();
  
}
