import NodeCache from 'node-cache';

const day = 60 * 60 * 24;
const cache = new NodeCache({ stdTTL: day });

export default cache;
