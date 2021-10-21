import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midtermproject';

  name = 'Rate The Avengers Endgame Movie';
  rate = 0;

  movTitle = 'Avengers EndGame';
  par = 'Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. ... In the film, the surviving members of the Avengers and their allies attempt to reverse the destruction caused by Thanos in Infinity War.';

  bgk:string = "assets/images/123.jfif"
  images:string = "assets/images/avengers.jpg";

}
