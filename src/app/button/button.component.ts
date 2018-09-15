import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <p>
      button works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {

  // @Input() label = 'default label';
  // private clickCt = 0;

  // @Output()
  // _action = new EventEmitter<number>();

  handleClick() {
    // this.clickCt++;
    // this._action.emit(this.clickCt);
  }

}
