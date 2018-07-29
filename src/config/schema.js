//@flow
import { schema } from 'normalizr';

const wineSchema = new schema.Entity('wines');
const listSchema = (schema) => ({
    results: [schema],
});

export default {
    LIST: listSchema,
    WINE: wineSchema,
};
