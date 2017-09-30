# angular2-animations
an angular2 animations library

## demo:
   * git clone     
   * https://github.com/loohopen/angular2-animations.git
   * cd angular2-animations
   * ng serve
## usage:
   * app.component.ts 
     ```
     import { animationFactory } from './animate/index';
     @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css'],
     animations: [animationFactory(750, 0, { 'fade': 'ease-in' }> )]
     })
    ```
   * app.component.html
     ```
    <div class="demo-animate-unit" *ngIf="item.show" [@animate]="item.animate" [ngStyle]="{'background-color': item.bg}">
           {{item.animate}}
     </div>
