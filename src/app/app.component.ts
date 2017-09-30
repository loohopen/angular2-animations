import { Component, OnInit } from '@angular/core';
import { animationFactory } from './animate/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animationFactory(750, 0, { 'fade': 'ease-in' })]
})
export class AppComponent implements OnInit {
  tt: any[];
  allOutState: any[];
  allInState: any[];
  showAll: boolean = true;
  ngOnInit() {
    this.tt = animationFactory(500, 0, { 'fade': 'ease-in' }).definitions;
    this.allOutState = this.getAllOutState(this.tt);
    this.allInState = this.getAllInState(this.allOutState);
  }
  allShow(){
    this.allInState.forEach( item => {
      item.show = this.showAll ? false : true;
    });
    this.showAll = !this.showAll;
  }
  getAllOutState(arr: any[]): string[] {
    let _arr: string[] = [];
    arr.forEach( item => {
      if (typeof(item) === 'object' && item.hasOwnProperty('name')) {
        _arr.push(item['name'])
      }
    })
    return _arr;
  }
  getAllInState(arr: any[]): object[] {
    let _arr: object[] = [];
    arr.forEach( item => {
      _arr.push({
        animate: item.replace(/Out/g, 'In'),
        bg: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        show: true
      })
    })
    return _arr;
  }
}
