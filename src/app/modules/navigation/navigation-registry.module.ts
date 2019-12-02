import { SharedRegistry, RegistryList } from '../../core/services/shared-registry/shared-registry.service';

// imports components
import { MainMenuComponent } from './components/main-menu/main-menu.component';


// Register component in sidebar
SharedRegistry.addRecordFor(RegistryList.Sidebar, {
  name: 'Main menu',
  path: 'sidebar-left/*',
  component: MainMenuComponent
})
