import * as components from 'formiojs/components/base/Base';
import {Formio} from 'formiojs';

const BaseComponent = components.default;
console.log('base component = ' + BaseComponent);

/**
 * An example Custom component
 */
export class CustomComponent extends BaseComponent {
  rows: string;

  constructor(component, options, data) {
    super(component, options, data);
    this.rows = '';

  }

  elementInfo() {
    const info = super.elementInfo();
    console.log('sddsd');
    info.type = 'input';
    info.changeEvent = 'input';

    return info;
  }

  build() {
    super.build();
    const ele = super.renderTemplate('<div id=\'custom\'>My simple custom component is here</div>', {});
    const element = super.getElement();
    element.appendChild(ele);
  }
}
