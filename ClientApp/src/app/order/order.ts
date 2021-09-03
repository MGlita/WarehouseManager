import { Warehouse } from './../stock_status/warehouse';
export class Order{
    orderId:number;
    price:number;
    orderDate:Date;
    statusId:number;
    contractor:string;
    warehouse:Warehouse[]
}