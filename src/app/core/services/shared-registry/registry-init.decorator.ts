import { SharedRegistry } from './shared-registry';


export function Registry(archiveName) {
  return function(archiveClass) {
    let isInvalid = false;
    if (typeof archiveClass != 'function') isInvalid = true;
    if (!archiveClass.hasOwnProperty('archive')) isInvalid = true;
    if (!archiveClass.hasOwnProperty('recordModel')) isInvalid = true;
    if (isInvalid) return;

    SharedRegistry.createArchive(archiveName, archiveClass);
  }
}