import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  workExperience : Array<any>= [];

  constructor(){}

  ngOnInit(): void{
    let work1 = {
      fecha: "", 
      ubicacion: "",
      empresa: "",
      logros: [
        {descripcion:""},
        {descripcion:""}
      ]
    }
  }

}
