import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'taskDate'
})
export class TaskDatePipe implements PipeTransform {

  transform(date: string): string {
    let daysBetween = moment().diff(moment(date,'DD-MM-YYYY, HH:mm:ss'),'days');
    let pattern = 'HH:mm:ss';

    switch(daysBetween){
      case 0: return'Dzisiaj o '+ moment().format(pattern);
        break;
      case 1: return 'Wczoraj o '+ moment().format(pattern);
        break;
      default: return date;
        break;
    }

  }

}
