import { Initialize, Registry, SharedRegistry } from '@workflow/registry';

// imports components
import { SwitchExpandComponent } from './components/switch-expand/switch-expand.component';
import { OutletItem } from './models/outlet-item';



// Create new shared registry container
@Initialize<OutletRecord>(Registry.DynamicOutlets)
class OutletRecord extends OutletItem {}



// Register component in sidebar
SharedRegistry.addRecordFor(Registry.DynamicOutlets, {
  name: 'Switch expand',
  path: '**',
  type: 'app-view-left-sidebar',
  position: 0,
  component: SwitchExpandComponent
})
