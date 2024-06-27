type FieldType = "singleLineText" | "email" | "url" | "multilineText" | "number" | "percent" | "currency" | "singleSelect" | "multipleSelects" | "singleCollaborator" | "multipleCollaborators" | "multipleRecordLinks" | "date" | "dateTime" | "phoneNumber" | "multipleAttachments" | "checkbox" | "formula" | "createdTime" | "rollup" | "count" | "lookup" | "multipleLookupValues" | "autoNumber" | "barcode" | "rating" | "richText" | "duration" | "lastModifiedTime" | "button" | "createdBy" | "lastModifiedBy" | "externalSyncSource" | "aiText";

interface Basic {
    type: FieldType;
    id: string;
    name: string;
    description?: string;
    options?: any;
}

export interface AIText extends Basic {
    type: "aiText";
    options: {
        model: string;
    };
}

export interface Autonumber extends Basic {
    type: "autoNumber";
}

export interface Barcode extends Basic {
    type: "barcode";
}

export interface Button extends Basic {
    type: "button";
}

export interface Checkbox extends Basic {
    type: "checkbox";
}

export interface Count extends Basic {
    type: "count";
}

export interface CreatedBy extends Basic {
    type: "createdBy";
}

export interface CreatedTime extends Basic {
    type: "createdTime";
}

export interface Currency extends Basic {
    type: "currency";
}

export interface Date extends Basic {
    type: "date";
}

export interface DateTime extends Basic {
    type: "dateTime";
}

export interface Duration extends Basic {
    type: "duration";
}

export interface Email extends Basic {
    type: "email";
}

export interface ExternalSyncSource extends Basic {
    type: "externalSyncSource";
}

export interface Formula extends Basic {
    type: "formula";
}

export interface LastModifiedBy extends Basic {
    type: "lastModifiedBy";
}

export interface LastModifiedTime extends Basic {
    type: "lastModifiedTime";
}

export interface Lookup extends Basic {
    type: "lookup";
    options: {
        table: string;
    };
}

export interface MultipleAttachments extends Basic {
    type: "multipleAttachments";
}

export interface MultipleCollaborators extends Basic {
    type: "multipleCollaborators";
}

export interface MultipleLookupValues extends Basic {
    type: "multipleLookupValues";
}

export interface MultipleRecordLinks extends Basic {
    type: "multipleRecordLinks";
}

export interface MultipleSelects extends Basic {
    type: "multipleSelects";
    options: {
        choices: string[];
    };
}

export interface Number extends Basic {
    type: "number";
}

export interface Percent extends Basic {
    type: "percent";
}

export interface PhoneNumber extends Basic {
    type: "phoneNumber";
}

export interface Rating extends Basic {
    type: "rating";
}

export interface RichText extends Basic {
    type: "richText";
}

export interface Rollup extends Basic {
    type: "rollup";
    options: {
        table: string;
        field: string;
    };
}

export interface SingleCollaborator extends Basic {
    type: "singleCollaborator";
}

export interface SingleLineText extends Basic {
    type: "singleLineText";
}

export interface SingleSelect extends Basic {
    type: "singleSelect";
    options: {
        choices: string[];
    };
}

export interface SyncSource extends Basic {
    type: "externalSyncSource";
}

export interface URL extends Basic {
    type: "url";
}

export interface AirtableAttachments extends Basic {
    type: "multipleAttachments";
}

// AirtableAttachments
export type Attachements = {
    id: string;
    type: string;
    filename: string;
    url: string;

    size: number;
    width: number;
    height: number;

    thumbnails?: {
        small?: {
            url: string;
            width: number;
            height: number;
        };
        large?: {
            url: string;
            width: number;
            height: number;
        };
        full?: {
            url: string;
            width: number;
            height: number;
        };
    }
}[];

export type Field = Basic | AIText | Attachements;