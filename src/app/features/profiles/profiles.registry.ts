import { SharedRegistry, Archive } from '../../core/services/shared-registry/shared-registry.service';

// imports components
import { UserProfileTileComponent } from './widgets/user-profile-tile/user-profile-tile.component';
import { TypeOfInsertionPoint } from 'src/app/app';


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
SharedRegistry.addRecordFor(Archive.DynamicComponents, {
  name: 'User profile tile',
  path: '**',
  target: TypeOfInsertionPoint.sidebarLeft,
  position: 4,
  component: UserProfileTileComponent
})
