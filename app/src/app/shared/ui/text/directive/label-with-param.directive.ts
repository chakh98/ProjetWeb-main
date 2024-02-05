import { Directive } from '@angular/core';

@Directive({
  selector: '[appLabelWithParam]',
  standalone: true
})
export class LabelWithParamDirective {

  constructor() { }

}
