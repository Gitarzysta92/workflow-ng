import { ViewRef, Directive, Input, ViewContainerRef, TemplateRef, ComponentFactoryResolver, Injector, InjectDecorator, OnDestroy, Component, ComponentRef } from '@angular/core';

@Directive({
  selector: '[inject]'
})
export class InjectComponentDirective implements OnDestroy {

  private _component: ComponentRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }


  @Input() set inject(component) {
    if (!component) return;

    this.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    this._component = this.viewContainerRef.createComponent(componentFactory, null, this.injector);

  }

  @Input() set injectContext(context: any) {
  
    context && this._component && Object.keys(context).forEach(key => {
      Object.defineProperty(this._component.instance, key, {
        value: context[key],
        enumerable: true
      })
    })
  }

  ngOnDestroy() {
    this.viewContainerRef.clear();
  }

}
