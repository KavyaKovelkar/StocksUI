import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/Company';
import { Observable } from 'rxjs/internal/Observable';
import { Stock } from '../models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockmarketService {

  constructor(private httpClient :HttpClient) { }

  baseUrl="https://hackfse-stockmarket20220928182912.azurewebsites.net/api/";

getAllCompanies() : any
  {
    return this.httpClient.get<Company[]>(this.baseUrl + 'market/company/getAll');
  }

  getCompanyStockPrices(companyCode) : any
  {
    return this.httpClient.get<Stock[]>(this.baseUrl + 'market/stock/get/' + companyCode + '/01-01-2020/' + '01-01-2023' );
  }
}

