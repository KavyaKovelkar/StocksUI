import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Company } from './models/Company';
import { Stock } from './models/Stock';
import { StockmarketService } from './services/stockmarket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stocks : Stock[] = [];
  companies : Company[] =[];
  subs: Subscription[] = []
  isLoaded : boolean =false;
  constructor(private stockService: StockmarketService) {
   }
   ngOnInit() :void{
     this.getAllCompanies()
    
  }
  ngOnDestroy(){
    this.subs.forEach(sub => sub.unsubscribe())
  }
  getAllCompanies(){

    const testvalue= this.stockService.getAllCompanies().subscribe(data=>{
       this.companies=data
       console.log(this.companies)
     })
     this.subs.push(testvalue)
   }
  // companies = [
  //   {
  //     CompanyCode: "CTS", 
  //     CompanyName: "Cognizant", 
  //     CompanyCEO:"CTS", 
  //     CompanyTurnOver:10000000, 
  //     CompanyWebsite:"https://cognizant.com", 
  //    },
     
  //  {
  //   CompanyCode: "TCS", 
  //   CompanyName: "Tata", 
  //   CompanyCEO:"Ratan Tata", 
  //   CompanyTurnOver:10000000, 
  //   CompanyWebsite:"https://tcs.com", 
  //  }

  // ];
  //stocks = 
//   [{
//     StockId: 1,
//     StockPrice:10000000,
//     CompanyCode:"CTS",
//     StockDate:new Date("06-04-2022")
//   },
//   {
//     StockId: 4,
//     StockPrice:134000000,
//     CompanyCode:"CTS",
//     StockDate:new Date("08-08-2022")
//   },
//   {
//     StockId: 5,
//     StockPrice:20900000,
//     CompanyCode:"CTS",
//     StockDate:new Date("09-12-2022")
//   },
//   {
//     StockId: 2,
//     StockPrice:15000000,
//     CompanyCode:"TCS",
//     StockDate:new Date("08-08-2022")
//   },
//   {
//     StockId: 3,
//     StockPrice:16000000,
//     CompanyCode:"TCS",
//     StockDate:new Date("09-15-2022")
//   }
// ];
SelectedCompanyStocks;
SelectedCompanyDetails;
onChange(deviceValue : Event) {
  
  // alert((deviceValue.target as HTMLInputElement).value);
  var selectedCompanyValue = (deviceValue.target as HTMLInputElement).value;
  if(selectedCompanyValue){
    var selectedCompany = this.companies.find(x=>x.companyCode==selectedCompanyValue);
    this.stockService.getCompanyStockPrices(selectedCompanyValue).subscribe(data=>{
      this.SelectedCompanyStocks=data});
    //this.stocks.filter(x=>x.companyCode==selectedCompanyValue);
   // this.SelectedCompanyStocks = companyStocks;
    this.SelectedCompanyDetails = selectedCompany;
  }
  else{
    this.SelectedCompanyStocks = null;
  }
}
}
