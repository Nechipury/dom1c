import {Ingredient} from '../Shared/ingredient.module';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Bat', 2)
    ];

    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredient(ninredient: Ingredient) {
        this.ingredients.push(ninredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}