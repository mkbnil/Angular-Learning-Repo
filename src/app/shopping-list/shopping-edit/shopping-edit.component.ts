import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName',{static: false}) inputTextRef: ElementRef;
  @ViewChild('inputAmount',{static: false}) inputAmmontRef: ElementRef;
  @Output() createdIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddClick(){
    const name = this.inputTextRef.nativeElement.value;
    const amount = this.inputAmmontRef.nativeElement.value;
    this.createdIngredient.emit(new Ingredient(name,amount));

  }

}
