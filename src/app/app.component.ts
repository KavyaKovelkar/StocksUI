import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  companies = [
    {
      CompanyCode: "CTS", 
      CompanyName: "Cognizant", 
      CompanyCEO:"CTS", 
      CompanyTurnOver:10000000, 
      CompanyWebsite:"https://cognizant.com", 
     },
   {
    CompanyCode: "TCS", 
    CompanyName: "Tata", 
    CompanyCEO:"Ratan Tata", 
    CompanyTurnOver:10000000, 
    CompanyWebsite:"https://tcs.com", 
   }

  ];
}
