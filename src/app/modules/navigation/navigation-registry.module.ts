import { SharedRegistry, Archive } from '../../core/services/shared-registry/shared-registry.service';

// imports components
import { MainMenuComponent } from './components/main-menu/main-menu.component';





// Register component in sidebar
SharedRegistry.addRecordFor(Archive.DynamicOutlets, {
  name: 'Main menu',
  path: '**',
  type: 'app-view-left-sidebar',
  position: 10,
  component: MainMenuComponent
})
