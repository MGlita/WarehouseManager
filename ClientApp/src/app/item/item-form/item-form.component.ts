import { Warehouse } from './../../stock_status/warehouse';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockService } from 'src/app/stock_status/stock.service';
import { Item } from 'src/app/stock_status/item';

@Component({
  selector: 'itemForm',
  templateUrl: './item-form.component.html'
})
export class ItemFormComponent implements OnInit {

    itemForm: FormGroup;
    submitted: Boolean = false;
    error = "";
    loading = false;

  constructor(
    private formBuilder: FormBuilder,
    public stockService: StockService) {}

    ngOnInit(): void {
        this.resetForm();
        this.itemForm = this.formBuilder.group({
          item_name: ['', [Validators.required,Validators.maxLength(50)]],
          item_description: ['', [Validators.maxLength(50)]],
          amount: ['', [Validators.min(0)]]
        }) 
      }
      
    model = new Warehouse();

    get f() {return this.itemForm.controls; }
  
    openForm(){;
      this.stockService.isFormOpen=!this.stockService.isFormOpen;
    }

    onSubmit(){
        this.submitted=true;
        this.error = '';
        if (this.itemForm.invalid) {
          return;
        }
        this.loading = true;
        this.addItem();    
      }

      addItem(){
        console.log(this.model);
        this.model.item = new Item();
        this.model.item.name = this.f.item_name.value;
        this.model.item.description = this.f.item_description.value;
        this.model.amount = this.f.amount.value;
        console.log(this.model);
        this.stockService.addItem(this.model).subscribe(res=>{
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

      resetForm(){
        this.stockService.formData={
          itemId:null,
          item:new Item(),
          amount:null
        }
        this.submitted=false;
      }
}