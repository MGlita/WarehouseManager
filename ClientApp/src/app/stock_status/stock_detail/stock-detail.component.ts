import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { StockService } from '../stock.service';
import { Warehouse } from '../warehouse';

@Component({
  selector: 'stock-detail',
  templateUrl: './stock-detail.component.html'
})
export class StockDetailComponent {

    displayedColumns: string[] = ['itemId','item.name', 'amount', 'item.description'];
    dataSource = new MatTableDataSource<Warehouse>();

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private stockService: StockService) {}

    ngOnInit(): void {
        this.initTable();
    }

    initTable(){
        this.stockService.getAllItems().subscribe(res=>{
            this.stockService.itemList = res as Warehouse[];         
            this.dataSource.data = this.stockService.itemList;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sortingDataAccessor = (item, property) => {
              switch(property) {
                case 'item.name': return item.item.name;
                case 'item.description': return item.item.description;
                default: return item[property];
              }
            }; 
            this.dataSource.sort = this.sort;
        })
      }
}
