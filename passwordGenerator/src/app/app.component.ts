import { Component, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('tooltip')
  tooltip!: MatTooltip;

  title = 'passwordGenerator';

  passwordLength = 15;


  arrayOfCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '$', 'ß', '&', '<', '>', '?', '!', '%', '=', '+', '/', '-', '*', '#'];

  first: [string] = [""];
  second: [string] = [""];
  third: [string] = [""];
  fourth: [string] = [""];

  constructor(private clipboard: Clipboard) { }

  randomCharacterGenerator(): number {
    return Math.floor(Math.random() * this.arrayOfCharacters.length);
  }

  startGenerate() {
    if ((<HTMLInputElement>document.getElementById("passwordLength")).value !== "") {
      this.passwordLength = parseInt((<HTMLInputElement>document.getElementById("passwordLength")).value);
    }
    for (let i = 0; i < this.passwordLength; i++) {

      this.first.push(this.arrayOfCharacters[this.randomCharacterGenerator()]);
      this.second.push(this.arrayOfCharacters[this.randomCharacterGenerator()]);
      this.third.push(this.arrayOfCharacters[this.randomCharacterGenerator()]);
      this.fourth.push(this.arrayOfCharacters[this.randomCharacterGenerator()]);
    }

    (<HTMLInputElement>document.getElementById('firstPassword')).innerText = this.first.join('');
    (<HTMLInputElement>document.getElementById('secondPassword')).innerText = this.second.join('');
    (<HTMLInputElement>document.getElementById('thirdPassword')).innerText = this.third.join('');
    (<HTMLInputElement>document.getElementById('fourthPassword')).innerText = this.fourth.join('');

    this.first = [""];
    this.second = [""];
    this.third = [""];
    this.fourth = [""];

  }

  putFirstTextContentToClipboard() {
    this.clipboard.copy((<HTMLInputElement>document.getElementById('firstPassword')).innerText);
  }
  putSecondTextContentToClipboard() {
    this.clipboard.copy((<HTMLInputElement>document.getElementById('secondPassword')).innerText);
  }
  putThirdTextContentToClipboard() {
    this.clipboard.copy((<HTMLInputElement>document.getElementById('thirdPassword')).innerText);
  }
  putFourthTextContentToClipboard() {
    this.clipboard.copy((<HTMLInputElement>document.getElementById('fourthPassword')).innerText);
  }

}
