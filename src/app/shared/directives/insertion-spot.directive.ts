import { ViewRef, Directive, Input, ViewContainerRef, TemplateRef, ComponentFactoryResolver, Injector, InjectDecorator, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[insertionSpot]'
})
export class InsertionSpotDirective implements OnInit, OnDestroy {


  constructor(
    private readonly _viewContainerRef: ViewContainerRef,
    private readonly _componentFactoryResolver: ComponentFactoryResolver,
    private readonly _injector: Injector,
  ) { }

  @Input() set insertionSpotContext(context: any) {

  }

  @Input() set insertionSpot(view) {
    if (!view || !view.component) return;

    this._viewContainerRef.clear();
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(view.component);     
    const component = this._viewContainerRef.createComponent(componentFactory, null, this._injector);
    
    const inputs = view.inputs;
    inputs && Object.keys(inputs).forEach(key => {
      Object.defineProperty(component.instance, key, {
        value: inputs[key],
        enumerable: true
      })
    })
  }

  ngOnInit() {

  }
 

  ngOnDestroy() {
    this._viewContainerRef.clear();
  }

}
