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
    {
      name:'Brock',
      team: ['Onix', 'Geodude', 'Vulpix'],
      items: ['Hard Stone', 'None', 'None']
    },
    {
      name:'Gary Oak',
      team: ['Eevee', 'Blastoise', 'Arcanine'],
      items: ['Eevee Candy', 'Blastoisinite', 'None']
    },
    {
      name:'May',
      team: ['Torchic', 'Skitty', 'Gardevoir'],
      items: ['None', 'None', 'Gardevoirite']
    }
  ]);
  //Expose signal as read-only
  trainers = this.registry.asReadonly();

}
