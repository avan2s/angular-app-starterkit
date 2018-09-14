import {Component} from '@angular/core';
import * as components from 'formiojs/components/base/Base';
import {Formio} from 'formiojs';

const BaseComponent = components.default;

@Component({
  selector: 'app-complex-custom',
  template: '<div id=\'dsfsdfds\'>My complex custom component is here</div>',
  styleUrls: ['./complex-custom.component.scss']
})
export class ComplexCustomComponent {

  constructor() {
  }
}
