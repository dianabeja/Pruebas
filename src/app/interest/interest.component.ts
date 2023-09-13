import { Component } from '@angular/core';
import { InterestService } from '../services/interest.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent {
  constructor(private interestService: InterestService){

  }
  Arreglo: any = []

  ngOnInit(): void {
    this.interestService.getInterest()
    .subscribe( (data: any) => {
      this.Arreglo = data
 })
}

}
