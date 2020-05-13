import { SharedRegistry, Archive } from '@workflow/registry';
import { SwitchExpandComponent } from 'src/app/shared/components/switch-expand/switch-expand.component';

// imports components




// Register component in sidebar
SharedRegistry.addRecordFor(Archive.DynamicComponents, {
  name: 'Switch expand',
  path: '**',
  type: 'app-view-left-sidebar',
  position: 0,
  component: SwitchExpandComponent
})
