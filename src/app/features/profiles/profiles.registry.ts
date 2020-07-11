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
SharedRegistry.addRecordsFor(Archive.DynamicComponents, [
  {
    name: 'User profile tile',
    target: TypeOfInsertionPoint.sidebarLeft,
    position: 4,
    component: UserProfileTileComponent
  },
  // {
  //   name: 'User profile shorcut',
  //   target: TypeOfInsertionPoint.dashboardTile,
  //   position: 1,
  //   component: 
  // }
])
