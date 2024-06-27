import { Field } from "./fields.js";

export interface AirtableMetaOptions {
    apiKey: string;
    baseId: string;
}

export interface BaseSchema {
    tables: Table[];
}

export interface Table {
    id: string;
    name: string;
    description?: string;

    primaryFieldId: string;

    fields: Field[];
    views: View[];
}

export interface View {
    id: string;
    name: string;
    type: string;
}