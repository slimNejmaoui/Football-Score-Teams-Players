import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {


  x: any = "";

  transform(ch: string) {


    for (let i = 0; i < ch.length; i++) {

      this.x = ch[i] + this.x;


    }

    return (this.x);
  }

}
