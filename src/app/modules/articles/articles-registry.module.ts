import { SharedRegistry, Registry } from '../../core/services/shared-registry/shared-registry.service';


// declare navigation paths
SharedRegistry.addRecordFor(Registry.Navigation, {
    name: 'articles',
    path: 'articles',
    childrens: {},
    meta: {
      icon: '',
      position: ''
    }
})
