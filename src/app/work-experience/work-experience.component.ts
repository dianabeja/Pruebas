import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {


  constructor( private workService: WorkExperienceService) { }

  Experiencia: any = [];
  Puesto: string = "fake";
  Empresa: string = "fake";
  Fecha_Inicio: string = "fake";
  Fecha_Fin: string = "fake";
  Pais: string = "fake";
  Ciudad: string = "fake";
  Logros: any = [];

  ngOnInit(): void {
    this.workService.getWork()
    .subscribe( (data: any) => {
      this.Experiencia = data
      console.log(data)
 })


  constructor( private workService: WorkExperienceService) { }

  Experiencia: any = [];
  Puesto: string = "fake";
  Empresa: string = "fake";
  Fecha_Inicio: string = "fake";
  Fecha_Fin: string = "fake";
  Pais: string = "fake";
  Ciudad: string = "fake";
  Logros: any = [];

  ngOnInit(): void {
    this.workService.getWork()
    .subscribe( (data: any) => {
      this.Experiencia = data
      console.log(data)
 })
}

}