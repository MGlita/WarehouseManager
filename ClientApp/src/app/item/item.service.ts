import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../stock_status/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl: string = "https://localhost:44367/api/Item";
  public formData:  Item;
  constructor(private httpClient: HttpClient) { }

  public getAllItems(){
    this.httpClient.post(this.apiUrl,this.formData);
  }
}
