import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faBoxes, faClipboardList, faHandHolding, faPlus, faHandPointRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'mainPageBlock',
  templateUrl: './mainPageBlock.component.html',
  styleUrls: ['./mainPageBlock.component.css']
})
export class MainPageBlockComponent {

  constructor(
    private router: Router ) {}

    @Input() title: string;

    faBoxes = faBoxes
    faReceive = faHandHolding
    faOrder = faClipboardList
    faPlus = faPlus
    faHandPointRight = faHandPointRight


    public onStock(){
      this.router.navigate(["stock"]);
    }
    public onTakeOrder(){
      this.router.navigate(["take_order"]);
    }
    public onPlaceOrder(){
      this.router.navigate(["place_order"]);
    }
    public onAddItem(){
      this.router.navigate(["new_item"]);
    }
    public onIssueItem(){
      this.router.navigate(["issue_item"]);
    }
}
