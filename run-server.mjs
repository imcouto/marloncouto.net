import cors from 'cors';
import express from 'express';
import livereload from 'livereload';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();

// Change this based on your astro.config.mjs, `base` option.
// They should match. The default value is "/".
const base = '/';
app.use(base, express.static('dist/client/'));

app.use(ssrHandler);

app.use(cors());

app.get('/api/status', (_, res) => {
  res.json({ message: 'Server status is OK' });
});

app.listen(8080, () => console.log('Server started at http://localhost:8080'));

const lr = livereload.createServer();

lr.watch('dist/client/');

lr.server.once('connection', () => {
  setTimeout(() => {
    lr.refresh('/');
  }, 100);
});
