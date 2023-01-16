import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFiltre'
})
export class MyFiltrePipe implements PipeTransform {


  transform(objs: any, term: any): any {
    if (term === undefined) {
      return objs;
    }
    return objs.filter((obj: { teamone: string; teamtwo: string; }) => {
      return (obj.teamone.toLowerCase().includes(term.toLowerCase())
        || obj.teamtwo.toLowerCase().includes(term.toLowerCase()));
    });
  }




}


