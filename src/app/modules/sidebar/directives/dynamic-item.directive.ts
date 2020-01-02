import { ViewRef, Directive, Input, ViewContainerRef, TemplateRef, ComponentFactoryResolver } from '@angular/core';

@Directive({
  selector: '[resolve]'
})
export class DynamicItemDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) { }

  @Input()
  set resolve(view) {
    this.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(view);

    console.log(componentFactory);


    this.viewContainerRef.createComponent(componentFactory);
  }

  ngOnDestroy() {
    this.viewContainerRef.clear();
  }

}
