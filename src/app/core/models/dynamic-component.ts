//import { RegistryRecord } from '@workflow/registry';
import { Component } from '@angular/core'
import { TypeOfInsertionPoint } from 'src/app/app';

export class DynamicComponent {

  name: string;
  path: string;
  type: string;
  position: number;
  component: Component;
  target: TypeOfInsertionPoint;
  inputs: Array<string>;

  constructor(data) {
    this.name = data.name;
    this.path = data.path;
    this.type = data.type;
    this.target = data.target;
    this.position = data.position;
    this.component = data.component;
    this.inputs = data.inputs;
  }
}