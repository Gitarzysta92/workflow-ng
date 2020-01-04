import { SharedRegistry, RegistryList } from '../../core/services/shared-registry/shared-registry.service';


// declare navigation paths
SharedRegistry.addRecordFor(RegistryList.Navigation, {
    name: 'articles',
    path: '/articles',
    childrens: {},
    meta: {
      icon: '',
      position: ''
    }
})
