import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  constructor( private skillService: SkillsService){}

  Skill: any=[];
  ngOnInit(): void {
    this.skillService.getSkills()
    .subscribe( (data: any) => {
      this.Skill = data
      console.log("ujujuj"+data)
 })
}

}
