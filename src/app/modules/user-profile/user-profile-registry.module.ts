import { SharedRegistry, RegistryList } from '../../core/services/shared-registry/shared-registry.service';

// imports components
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileTileComponent } from './components/user-profile-tile/user-profile-tile.component';


SharedRegistry.addRecordFor(RegistryList.Navigation, {
  name: 'Your profile',
  path: 'profile',
  childrens: {},
  meta: {
    icon: '',
    position: ''
  }
})


// Register component in sidebar
SharedRegistry.addRecordFor(RegistryList.Sidebar, {
  name: 'User profile tile',
  path: '**',
  type: 'app-view-left-sidebar',
  component: UserProfileTileComponent
})
