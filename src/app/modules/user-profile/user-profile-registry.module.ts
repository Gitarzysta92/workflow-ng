import { SharedRegistry, Archive } from '../../core/services/shared-registry/shared-registry.service';

// imports components
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileTileComponent } from './components/user-profile-tile/user-profile-tile.component';


SharedRegistry.addRecordFor(Archive.Navigation, {
  name: 'Your profile',
  path: 'profile',
  childrens: {},
  meta: {
    icon: '',
    position: ''
  }
})


// Register component in sidebar
SharedRegistry.addRecordFor(Archive.DynamicOutlets, {
  name: 'User profile tile',
  path: '**',
  type: 'app-view-left-sidebar',
  position: 4,
  component: UserProfileTileComponent
})
