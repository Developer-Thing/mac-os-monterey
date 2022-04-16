import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Folder } from 'src/app/shared/models/folder';
import { FolderSelection } from 'src/app/shared/models/folder-selection';
import { Store } from 'src/app/shared/store/store';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoldersComponent {

  @Input() folders: Folder[] = [];

  @Input() isFinderOpened = false;

  constructor(private store: Store) { }

  onFolderSelected(folderSelection: FolderSelection) {
    this.store.toggleFolder(folderSelection);
  }

}
