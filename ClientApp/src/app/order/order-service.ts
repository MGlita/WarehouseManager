import { Order } from './order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl: string = "https://localhost:44367/api/Order";
  public formData:  Order
  public orderList: Order[];
  constructor(private httpClient: HttpClient) { }

  public createOrder(order: Order){
    return this.httpClient.post(this.apiUrl, order);
  }

  public get(){
    return this.httpClient.get(this.apiUrl);
  }
}
