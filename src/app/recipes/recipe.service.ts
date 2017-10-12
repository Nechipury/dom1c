import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../Shared/ingredient.module';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A recipe', 'This A', '../assets/foto1.JPG',
            [new Ingredient('mac', 3),
                new Ingredient('das', 21)
            ]),
        new Recipe('B recipe', 'This B', '../assets/foto2.jpg',
            [new Ingredient('aser', 12),
            new Ingredient('faser', 1)])
    ];
    constructor(private slService: ShoppingListService) {
    }

    getRecipe() {
        return this.recipes.slice();
    }
    addIngredToShopingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}

