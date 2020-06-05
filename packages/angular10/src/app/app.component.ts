import { Component, ViewChild } from '@angular/core';
import { DxButtonComponent } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(DxButtonComponent, { static: true })
  buttonComponent?: DxButtonComponent = undefined;
}
