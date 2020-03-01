/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.20.583 on 2020-03-01 19:09:59.

export interface FileItem {
    uuid: string;
    name: string;
}

export interface FileUpoadRequest {
    name: string;
    uuid: string;
    type: string;
    bytes: number;
    chunkFrom: number;
    chunkTo: number;
    base64Chunk: string;
}

export interface FileUpoadResponse {
    uuid: string;
    percentage: number;
}

export interface Item {
    data: ItemData[];
}

export interface ItemData {
    value: string;
    type: DataType;
    name: string;
}

export interface ItemMapper {
}

export interface ItemMapperImpl extends ItemMapper {
}

export interface QuarkusMapperConfig {
}

export interface StoreFileItem extends FileItem {
    size: number;
    md5Hex: string;
}

export interface StoreItem extends Item {
    id: string;
    modified: Date;
    created: Date;
    files: { [index: string]: StoreFileItem };
}

export interface StoreItemData extends ItemData {
}

export type DataType = "STRING" | "DATE_YYYY_MM_DD" | "NUMBER" | "DOUBLE";
