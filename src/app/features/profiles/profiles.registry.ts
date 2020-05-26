import { SharedRegistry, Archive } from '../../core/services/shared-registry/shared-registry.service';

// imports components
import { UserProfileTileComponent } from './components/containers/user-profile-tile/user-profile-tile.component';
import { TypeOfInsertionPoint } from 'src/app/app';
import { ICONS } from 'src/app/constants/icons';


SharedRegistry.addRecordFor(Archive.Navigation, {
  name: 'Your profile',
  path: 'profile',
  childrens: {},
  meta: {
    icon: ICONS.profile,
    position: ''
  }
})

// Register component in sidebar
SharedRegistry.addRecordFor(Archive.DynamicComponents, {
  name: 'User profile tile',
  path: '**',
  target: TypeOfInsertionPoint.sidebarLeft,
  position: 4,
  component: UserProfileTileComponent
})
