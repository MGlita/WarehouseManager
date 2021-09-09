import { OrderItem } from './orderItem';
export class Order{
    orderId:number;
    price:number;
    orderDate:Date;
    statusId:number;
    contractor:string;
    orderItem:OrderItem[]
}