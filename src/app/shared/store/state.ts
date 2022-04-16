import { Folder } from "../models/folder";

export interface State {
    folders: Folder[];
    selectedFolderIds: number[];
    deletedFolderIds: number[];
    activeApplication: string;
}
