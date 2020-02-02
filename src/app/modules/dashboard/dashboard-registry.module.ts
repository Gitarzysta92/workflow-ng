import { SharedRegistry, Registry} from '../../core/services/shared-registry/shared-registry.service';


// declare navigation paths
SharedRegistry.addRecordFor(Registry.Navigation, 
  {
    name: 'dashboard',
    path: 'dashboard',
    childrens: [
      {
        name: 'dashboard1',
        path: 'dashboard/add',
        meta: {
          icon: '',
          position: ''
        }
      },
      {
        name: 'dashboard2',
        path: 'dashboard/add/add',
        childrens: [
          {
            name: 'dashboard2-1',
            path: 'dashboard',
            meta: {
              icon: '',
              position: ''
            }
          },
          {
            name: 'dashboard2-2',
            path: 'dashboard',
            meta: {
              icon: '',
              position: ''
            }
          }
        ],
        meta: {
          icon: '',
          position: ''
        }
      },
      {
        name: 'dashboard3',
        path: 'dashboard',
        meta: {
          icon: '',
          position: ''
        }
      },
    ],

    meta: {
      icon: '',
      position: ''
    }
  }
);

