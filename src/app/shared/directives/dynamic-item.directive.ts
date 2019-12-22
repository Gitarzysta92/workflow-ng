import { ViewRef, Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[resolve]'
})
export class DynamicItemDirective {

  constructor(private vcRef: ViewContainerRef) { 
    console.log('view');
  }

  @Input()
  set view(view: ViewRef) {
    console.log(view);

    this.vcRef.clear();
    this.vcRef.insert(view);
  }

  ngOnDestroy() {
    this.vcRef.clear();
  }

}
