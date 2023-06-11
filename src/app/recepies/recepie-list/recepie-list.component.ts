import { Component, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent {

  @Output() recepieWasSelected = new EventEmitter<Recepie>();

  recepies : Recepie[] = [
    new Recepie('A Test Recepie 1','This is simply a test recepie 1','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recepie('A Test Recepie 2','This is simply a test recepie 2','https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=600&quality=80'),
    new Recepie('A Test Recepie 3','This is simply a test recepie 3','https://cdn.pixabay.com/photo/2018/06/01/20/25/chicken-3447080_1280.jpg'),
    new Recepie('A Test Recepie 4','This is simply a test recepie 4','https://www.maxpixel.net/static/photo/1x/Meal-Dish-Recipe-Enjoy-The-Meal-Cook-Food-Diet-7024206.jpg')
  ];


  onRecepieSelected(recepie: Recepie){
    this.recepieWasSelected.emit(recepie);
  }
}
