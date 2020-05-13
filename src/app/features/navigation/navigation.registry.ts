import { SharedRegistry, Archive } from '../../core/services/shared-registry/shared-registry.service';
import { MainMenuComponent } from './components/containers/main-menu/main-menu.component';
import { TypeOfInsertionPoint } from 'src/app/app';

// imports components






// Register component in sidebar
SharedRegistry.addRecordFor(Archive.DynamicComponents, {
  name: 'Main menu',
  path: '**',
  target: TypeOfInsertionPoint.sidebarLeft,
  position: 10,
  component: MainMenuComponent
})
