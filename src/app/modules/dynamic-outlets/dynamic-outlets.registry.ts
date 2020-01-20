import { SharedRegistry, RegistryList } from '../../core/services/shared-registry/shared-registry.service';

// imports components
import { SwitchExpandComponent } from './components/switch-expand/switch-expand.component';


// Register component in sidebar
SharedRegistry.addRecordFor(RegistryList.Sidebar, {
  name: 'Switch expand',
  path: '**',
  type: 'app-view-left-sidebar',
  position: 0,
  component: SwitchExpandComponent
})
