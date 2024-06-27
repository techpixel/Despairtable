import dotenv from 'dotenv';
dotenv.config();

import ts from 'typescript';
import Airtable from 'airtable';

import { AirtableMetaOptions, BaseSchema } from './types.js';

class AirtableMeta {
    private apiKey: string;
    private baseId: string;

    constructor({ apiKey, baseId }: AirtableMetaOptions) {
        this.apiKey = apiKey;
        this.baseId = baseId;
    }

    public async baseSchema(): Promise<BaseSchema> {
        return await fetch(
            `https://api.airtable.com/v0/meta/bases/${this.baseId}/tables`,
            {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                },
            }
        ).then((res) => res.json());
    }
}

const metaClient = new AirtableMeta({
    apiKey: process.env.AIRTABLE_API_KEY!,
    baseId: process.env.AIRTABLE_BASE_ID!,
});

console.log(JSON.stringify(await metaClient.baseSchema(), null, 2));