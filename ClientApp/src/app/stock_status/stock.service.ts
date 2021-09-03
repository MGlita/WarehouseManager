import { Warehouse } from './warehouse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl: string = "https://localhost:44367/api/Warehouse";
  public formData:  Warehouse
  public itemList: Warehouse[];
  public isFormOpen: Boolean = false;
  constructor(private httpClient: HttpClient) { }

  public getAllItems(){
    return this.httpClient.get(this.apiUrl);
  }

  public addItem(item: Warehouse){
    return this.httpClient.post(this.apiUrl, item);
  }

  public issueItem(item: Warehouse){
    return this.httpClient.put(this.apiUrl+"/"+item.itemId, item)
  }
}
