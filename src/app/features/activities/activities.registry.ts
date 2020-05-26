import { SharedRegistry, Archive } from '../../core/services/shared-registry/shared-registry.service';
import { ICONS } from '../../constants/icons';

// SharedRegistry.addRecordFor(Archive.InsertionSpots, {
//   dashboardTilebottomBarLeft: 'discussionWidget',
// });



// declare navigation paths
SharedRegistry.addRecordFor(Archive.Navigation, {
  name: 'activities',
  path: 'activities',
  childrens: [],
  meta: {
    icon: ICONS.activities,
    position: ''
  }
});

