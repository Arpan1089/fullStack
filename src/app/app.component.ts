import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  tweet ={
    body: '....',
    likesCount:10,
    isLiked: true
  }
}

// code of html if wanty to run the glifficon code
//<like
//[likesCount]="tweet.likesCount"
//[isActive]="tweet.isLiked"
//></like>

