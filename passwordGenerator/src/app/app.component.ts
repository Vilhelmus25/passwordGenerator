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

  arrayOfCharacters: string[] = [];

  passwordLength = 15;

  selectedCharacterArray = { selection: "-" };
  lengthOfPassword = { password: "15" };

  All = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '$', 'ß', '&', '<', '>', '?', '!', '%', '=', '+', '/', '-', '*', '#'];

  NoSpecials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  NoCapitals = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '$', 'ß', '&', '<', '>', '?', '!', '%', '=', '+', '/', '-', '*', '#'];

  NoDigits = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '$', 'ß', '&', '<', '>', '?', '!', '%', '=', '+', '/', '-', '*', '#'];

  NoDigitsNoSpecials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  NoDigitsNoCapitals = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '$', 'ß', '&', '<', '>', '?', '!', '%', '=', '+', '/', '-', '*', '#'];

  NoSpecialsNoCapitals = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  OnlyNonCapitals = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ];


  first: [string] = [""];
  second: [string] = [""];
  third: [string] = [""];
  fourth: [string] = [""];

  constructor(private clipboard: Clipboard) { }

  randomCharacterGenerator(): number {
    return Math.floor(Math.random() * this.arrayOfCharacters.length);
  }

  startGenerate() {

    if (this.selectedCharacterArray.selection == "All") {
      this.arrayOfCharacters = this.All
    }
    if (this.selectedCharacterArray.selection == "NoSpecials") {
      this.arrayOfCharacters = this.NoSpecials
    }
    if (this.selectedCharacterArray.selection == "NoCapitals") {
      this.arrayOfCharacters = this.NoCapitals
    }
    if (this.selectedCharacterArray.selection == "NoDigits") {
      this.arrayOfCharacters = this.NoDigits
    }
    if (this.selectedCharacterArray.selection == "NoDigitsNoSpecials") {
      this.arrayOfCharacters = this.NoDigitsNoSpecials
    }
    if (this.selectedCharacterArray.selection == "NoDigitsNoCapitals") {
      this.arrayOfCharacters = this.NoDigitsNoCapitals
    }
    if (this.selectedCharacterArray.selection == "NoSpecialsNoCapitals") {
      this.arrayOfCharacters = this.NoSpecialsNoCapitals
    }
    if (this.selectedCharacterArray.selection == "OnlyNonCapitals") {
      this.arrayOfCharacters = this.OnlyNonCapitals
    }

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

    this.arrayOfCharacters = [];
    this.selectedCharacterArray = { selection: "-" };

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
