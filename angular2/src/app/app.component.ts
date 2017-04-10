import { Component, ViewEncapsulation, ViewChildren, QueryList, AfterViewChecked } from '@angular/core';
import { RowItemComponent } from './row-item/row-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native // Use Native encapsulation to get Shadow DOM
})
export class AppComponent implements AfterViewChecked {

  @ViewChildren('rowItem') rowItems:QueryList<RowItemComponent>;
  items = [];

  ngAfterViewChecked () {
    this.scrollToBottom();
  }

  add(count: number) {
    this.items = new Array(count);
  }

  updateAll() {
    this.rowItems.forEach( (item) => item.update() );
  }

  updateSome() {
    this.rowItems.forEach( (item) => item.updateSome() );
  }

  remove() {
    this.items = [];
  }

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
