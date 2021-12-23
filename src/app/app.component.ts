import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SingYourSong';
  display: boolean = true;

  public toggle(){
    this.display = !this.display
    console.log(this.display);
  }
}
