import { SharedRegistry, RegistryList } from '../../core/services/shared-registry/shared-registry.service';


// declare navigation paths
SharedRegistry.addRecordFor(RegistryList.Navigation, {
    name: 'dashboard',
    path: 'dashboard',
    childrens: {},
    meta: {
      icon: '',
      position: ''
    }
})
