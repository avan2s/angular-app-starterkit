import * as components from 'formiojs/components/base/Base';
import {Formio} from 'formiojs';

const BaseComponent = components.default;

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
    info.type = 'input';
    info.changeEvent = 'input';

    return info;
  }

  build() {
    super.build();
    // Here i would like to render prime ng if possible - maybe there will be a better way...
    const ele = super.renderTemplate('<div id=\'custom\'>My simple custom component is here</div>'
      + '<div id=\'complex\'></div><custom-button label="firstValue"></custom-button>', {});
    const element = super.getElement();
    element.appendChild(ele);
  }
}
