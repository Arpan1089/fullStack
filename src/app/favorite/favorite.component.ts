import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

@Input() isFavourite: boolean;

  constructor() { }


  
  ngOnInit() {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
  }
}
