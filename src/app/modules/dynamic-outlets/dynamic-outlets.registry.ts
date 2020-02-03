import { SharedRegistry, Archive } from '@workflow/registry';

// imports components
import { SwitchExpandComponent } from './components/switch-expand/switch-expand.component';




// Register component in sidebar
SharedRegistry.addRecordFor(Archive.DynamicOutlets, {
  name: 'Switch expand',
  path: '**',
  type: 'app-view-left-sidebar',
  position: 0,
  component: SwitchExpandComponent
})
