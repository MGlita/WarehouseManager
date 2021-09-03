import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Item } from 'src/app/stock_status/item';
import { StockService } from 'src/app/stock_status/stock.service';
import { Warehouse } from 'src/app/stock_status/warehouse';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'issueItem',
  templateUrl: './issue-item.component.html'
})
export class IssueItemComponent implements OnInit {

    warehouseForm: FormGroup;
    submitted: Boolean = false;
    error = "";
    loading = false;
    model = new Warehouse();
    filteredOptions: Observable<Warehouse[]>;
    myControl = new FormControl();
    itemId: number;
    options: Warehouse[];

    constructor(
        private formBuilder: FormBuilder,
        public stockService: StockService) {}

    ngOnInit(): void {
        this.resetForm();
        this.getItems();
        this.warehouseForm = this.formBuilder.group({
          amount: ['', [Validators.required, Validators.min(1)]],
          name: ['', ]
        }) 
        
    }

    private _filter(name: string): Warehouse[] {
      const filterValue = name.toLowerCase();
      return this.options.filter(option => option.item.name.toLowerCase().includes(filterValue));
    }

    displayFn(item: Warehouse): string {
      return item && item.item.name ? item.item.name : '';
    }

    getItems(){
      this.stockService.getAllItems().subscribe(res=>{
        this.options = res as Warehouse[]
        this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.item.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );
      }
        );
        
    }
    onGetItem(){
      this.resetForm();
      this.filteredOptions.subscribe(res=>this.model=res[0] as Warehouse);
    }
    onSubmit(){
        this.submitted=true;
        this.error = '';
        if (this.warehouseForm.invalid) {
          console.log("invalid form")
          return;
        }
        this.loading = true;
        this.removeItemAmount();    
      }

      get f() {return this.warehouseForm.controls; }

      removeItemAmount(){
        this.model.amount = this.f.amount.value;
        this.stockService.issueItem(this.model).subscribe(res=>{
          console.log(res);
          this.submitted=false;
          this.resetForm();
          this.getItems();
        }
        ,err=>{
          this.error="Error occurred";
          console.log(err)
          this.loading = false;
        });
      }

      resetForm(){
        this.model = {
          itemId:null,
          item:new Item(),
          amount:null
        }
        this.submitted=false;
      }
}