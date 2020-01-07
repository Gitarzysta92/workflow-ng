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
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(view.component);     
    const component = this.viewContainerRef.createComponent(componentFactory, null, this.injector);
    Object.defineProperty(component.instance, 'gridView', {
      value: view.inputs.gridView,
      enumerable: true
    })
    
  }

  ngOnDestroy() {
    this.viewContainerRef.clear();
  }

}
