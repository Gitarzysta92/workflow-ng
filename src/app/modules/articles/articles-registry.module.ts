import { SharedRegistry, Archive } from '../../core/services/shared-registry/shared-registry.service';


// declare navigation paths
SharedRegistry.addRecordFor(Archive.Navigation, {
    name: 'articles',
    path: 'articles',
    childrens: {},
    meta: {
      icon: '',
      position: ''
    }
})
