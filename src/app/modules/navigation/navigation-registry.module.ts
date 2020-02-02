import { Initialize, SharedRegistry, Registry } from '../../core/services/shared-registry/shared-registry.service';

// imports components
import { MainMenuComponent } from './components/main-menu/main-menu.component';

import { NavigationItem } from './models/navigation-item';


// @Initialize<NavigationItem>(Registry.Navigation)
// class NavigationRecord extends NavigationItem {}



// Register component in sidebar
SharedRegistry.addRecordFor(Registry.DynamicOutlets, {
  name: 'Main menu',
  path: '**',
  type: 'app-view-left-sidebar',
  position: 10,
  component: MainMenuComponent
})
