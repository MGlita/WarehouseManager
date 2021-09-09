import { Order } from './../../order';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from '../../order-service';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent {

    displayedColumns: string[] = ['orderId', 'contractor', 'orderDate', 'statusId', 'items', 'price', 'accept', 'cancel'];
    dataSource = new MatTableDataSource<Order>();

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private orderService: OrderService) {}

    ngOnInit(): void {
        this.initTable();
    }

    initTable(){
        this.orderService.getAllActiveOrders().subscribe(res=>{
            this.orderService.orderList = res as Order[];         
            this.dataSource.data = this.orderService.orderList;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })
      }

    accept(order:Order){
        this.orderService.acceptOrder(order.orderId).subscribe(res => {
            this.initTable();
        })
    }

    cancel(order:Order){
        this.orderService.cancelOrder(order.orderId).subscribe(res =>{
            this.initTable();
        })
    }
}
