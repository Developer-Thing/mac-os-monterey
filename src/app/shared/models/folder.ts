export interface Folder {
    id: number;
    title: string;
    selected?: boolean;
    deleted?: boolean;
    parentFolderId?: number;
}
