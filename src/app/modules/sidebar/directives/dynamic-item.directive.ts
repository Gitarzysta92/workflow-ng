import { ViewRef, Directive, Input, ViewContainerRef, TemplateRef, ComponentFactoryResolver, Injector, InjectDecorator } from '@angular/core';

@Directive({
  selector: '[resolve]'
})
export class DynamicItemDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  @Input()
  set resolve(view) {
    this.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(view); 
    this.viewContainerRef.createComponent(componentFactory, null, this.injector);
  }

  ngOnDestroy() {
    this.viewContainerRef.clear();
  }

}
