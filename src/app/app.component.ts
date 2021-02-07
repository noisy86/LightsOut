import { Component } from '@angular/core';
import { LightService } from './light.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lightsOut';


  boolArr = new Array(5);

  createarr() {
    for (let i = 0; i < 5; i++) {
      this.boolArr[i] = new Array(5);
    }
    for (let i = 0; i < this.boolArr.length; i++) {
      for (let j = 0; j < this.boolArr[i].length; j++) {
        let randomBoolean = Math.random() >= 0.5;
        this.boolArr[i][j] = randomBoolean;
      }
    }
    console.log(this.boolArr);
    return this.boolArr;
  };

click(cell, lineIndex, cellIndex){
  this.boolArr[lineIndex][cellIndex] = !this.boolArr[lineIndex][cellIndex];
  if(lineIndex-1 >= 0 ){
    this.boolArr[lineIndex-1][cellIndex] = !this.boolArr[lineIndex-1][cellIndex];
  }
   if(cellIndex-1 >=0 ){
    this.boolArr[lineIndex][cellIndex-1] = !this.boolArr[lineIndex][cellIndex-1];

  }
   if(cellIndex+1 < this.boolArr[lineIndex].length){
    this.boolArr[lineIndex][cellIndex+1] = !this.boolArr[lineIndex][cellIndex+1];

  }
   if(lineIndex+1 < this.boolArr.length){
    this.boolArr[lineIndex+1][cellIndex] = !this.boolArr[lineIndex+1][cellIndex];
  }

  let counter = 0;
  for (let row = 0; row < this.boolArr.length; row++) {
    for (let column = 0; column < this.boolArr[row].length; column++) {
      if(this.boolArr[row][column] == false){
        counter++;
      }

    }

  }
  if(counter == 25){
    alert("You win");
  }
}

}
