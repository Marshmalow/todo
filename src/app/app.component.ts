import { Component, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { Interpolation } from '@angular/compiler';
import { Key } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Wish List';
  date1 = moment().format('DD-MM-YYYY, HH:mm:ss');
  text = '';


  constructor(){
    window.setInterval(()=>{ this.date1 = moment().format('DD-MM-YYYY, HH:mm:ss')}, 1000 );
  };

  wishes = [
    {
      name : 'Kurs salsy',
      date: moment().format('12-12-2019, 14:52:49')
    },
    {
      name: 'Wycieczka do Wiednia',
      date: moment().format('15-12-2019, 11:11:54')
    },
    {
      name : 'Egzamin z ekonomii',
      date: moment().subtract(1,'days')
    }
  ]; 
  

  onClickMe(input: string){
    let object: Wish = <any>{}
    object.name = input;
    object.date = this.date1;
    this.wishes.push(object);
    this.text = '';
    }

  deleteWish(wish){
    this.wishes = this.wishes.filter ( w => w.name !== wish.name);
  }
}
 
