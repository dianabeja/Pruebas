import { Component, OnInit } from '@angular/core';
import { CertificationsService } from '../services/certifications.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit{
  constructor(private certificationService: CertificationsService){
}
Certifications: any = [];

  ngOnInit(): void {
    this.certificationService.getCertification()
    .subscribe( (data: any) => {
      this.Certifications = data
      console.log("holaaa"+data)
      console.log("holaaa"+this.Certifications)
 })
}
}