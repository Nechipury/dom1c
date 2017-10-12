
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../Shared/ingredient.module';
import {ShoppingListService} from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameImput') nameImputRef: ElementRef;
  @ViewChild('amoutImput') amoutImputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

    onAddItem() {
    const igName = this.nameImputRef.nativeElement.value;
    const igAmout = this.amoutImputRef.nativeElement.value;
    const nIngredient = new Ingredient(igName, igAmout);
    this.slService.addIngredient(nIngredient);
        // this.nameImputRef.nativeElement.value  = null;
        // this.amoutImputRef.nativeElement.value = null;
    }

}
