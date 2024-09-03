import DataUri from 'datauri/parser.js';
import path from 'path';

const getUri = (file) => {
    const dUri = new DataUri();
    return dUri.format(path.extname(file.originalname).toString(), file.buffer);
    } 

export default getUri;