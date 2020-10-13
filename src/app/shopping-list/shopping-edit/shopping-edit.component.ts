import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName',{static: false}) inputTextRef: ElementRef;
  @ViewChild('inputAmount',{static: false}) inputAmmontRef: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddClick(){
    const name = this.inputTextRef.nativeElement.value;
    const amount = this.inputAmmontRef.nativeElement.value;
    this.slService.addIngredient(new Ingredient(name,amount));
    return false;
  }

}
