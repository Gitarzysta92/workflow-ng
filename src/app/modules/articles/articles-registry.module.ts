import { SharedRegistry, RegistryList } from '../../core/services/shared-registry/shared-registry.service';


// declare navigation paths
SharedRegistry.addRecordFor(RegistryList.Navigation, {
    name: 'articles',
    path: '',
    childrens: {},
    meta: {
      icon: '',
      position: ''
    }
})
