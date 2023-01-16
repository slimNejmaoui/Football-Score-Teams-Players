import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {


  T = ["a", "e", "i", "o", "u", "y"]
  transform(ch: string) {

    this.T = ["a", "e", "i", "o", "u", "y"];

    let resu = "";
    for (let i = 0; i < ch.length; i++) {
      let x = ch[i];

      for (let j = 0; j < this.T.length; j++) {

        if (ch[i].toLowerCase() == this.T[j]) {

          x = "*";
          break;

        }
      }
      resu = resu + x;

    }


    return (resu);

  }


}






