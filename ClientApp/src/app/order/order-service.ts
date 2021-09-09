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

  public getAllActiveOrders(){
    return this.httpClient.get(this.apiUrl);
  }

  public acceptOrder(orderId:number){
    return this.httpClient.put(this.apiUrl+"/Accept/"+orderId, orderId);
  }

  public cancelOrder(orderId:number){
    return this.httpClient.put(this.apiUrl+"/Cancel/"+orderId, orderId);
  }
}
