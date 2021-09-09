import { Item } from '../../../stock_status/item';
import { OrderItem } from '../../orderItem';
import { Warehouse } from '../../../stock_status/warehouse';
import { Order } from '../../order';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../order-service';
import { StockService } from 'src/app/stock_status/stock.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent implements OnInit {

    orderForm: FormGroup;
    submitted: Boolean = false;
    error = "";
    loading = false;
    options: Warehouse[];
    filteredOptions: Observable<Warehouse[]>;
    items: Warehouse[];
    newItems: OrderItem[];
    myControl = new FormControl();

  constructor(
    private formBuilder: FormBuilder,
    public orderService: OrderService,
    public stockService: StockService) { }


    ngOnInit(): void {
      this.resetForm();
      this.getItems();
      this.orderForm = this.formBuilder.group({
        price: ['', [Validators.required, Validators.min(0)]],
        contractor: ['', [Validators.required, Validators.maxLength(50)]]
        });
        console.log(this.items);
    }

  model = new Order();

  get f() {return this.orderForm.controls; }

  addItem(){
    this.items.push({
        itemId:0,
        item: new Item(),
        amount:null
      });
      this.newItems.push({
        orderId:0,
        itemId:0,
        amount:0
      })
  }
  deleteItem(){
    if(this.items.length>1)
    {
      this.items.pop();
      this.newItems.pop();
    }
  }
  onSubmit(){
    this.submitted=true;
    this.error = '';
    if (this.orderForm.invalid) {
        console.log("Invalid Model");
        console.log(this.orderForm);

      return;
    }
    this.loading = true;
    this.addOrder();
  }

  addOrder(){
    this.model.price = this.f.price.value;
    this.model.orderDate = new Date();
    this.model.contractor = this.f.contractor.value;
    this.model.orderItem = this.newItems;
    this.model.statusId = 1;
    
    console.log(this.model);
    console.log("Model^");
    console.log(this.items);
    console.log("Items^");
    this.orderService.createOrder(this.model).subscribe(res=>{
      console.log(res);
      this.submitted=false;
      this.resetForm();
    }
    ,err=>{
      this.error="Error occurred";
      console.log(err)
      this.loading = false;
    });
  }
  
  private _filter(name: string): Warehouse[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.item.name.toLowerCase().includes(filterValue));
  }

  onGetItem(item:Warehouse, index:number){
    console.log(item);
    this.items[index] = null;
    this.items[index] = item;
    this.newItems[index].amount = item.amount;
    this.newItems[index].itemId = item.itemId;
    console.log(this.items);
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

  resetForm(){
    this.orderService.formData={
      orderId:null,
      price:null,
      orderDate:null,
      statusId:null,
      contractor:"",
      orderItem:null
    }
    this.orderService.orderList=[]
    this.submitted=false;
    this.items = new Array({
      itemId:0,
      item:new Item(),
      amount:null
    });
    this.newItems = new Array({
      orderId: 0,
      itemId: 0,
      amount: 0
    });
  }
}
