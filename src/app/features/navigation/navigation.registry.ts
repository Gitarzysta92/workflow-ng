import { SharedRegistry, Archive } from '../../core/services/shared-registry/shared-registry.service';
import { MainMenuComponent } from './components/containers/main-menu/main-menu.component';
import { TypeOfInsertionPoint } from 'src/app/app';
import { FloatingMenuComponent } from './components/containers/floating-menu/floating-menu.component';
// imports components



// Register components in sidebar
SharedRegistry.addRecordsFor(Archive.DynamicComponents, [
  {
    name: 'main-menu',
    target: TypeOfInsertionPoint.sidebarLeft,
    position: 10,
    component: MainMenuComponent
  },
  // {
  //   name: 'floating-menu',
  //   target: TypeOfInsertionPoint.sidebarLeft,
  //   position: 11,
  //   component: FloatingMenuComponent
  // },
])



