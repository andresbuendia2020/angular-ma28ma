import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'nz-demo-button-size',
  template: 'app.component.html',
  styles: ['app.component.scss']
})
export class NzDemoButtonSizeComponent {
  size: NzButtonSize = 'large';
}
