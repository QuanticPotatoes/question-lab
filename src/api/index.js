import Koa from 'koa';
import mount from 'koa-mount';
import controller from './controller';

const app = new Koa();

app.use(mount('/', controller));
app.listen(3000);

global.console.log('Server starting on port 3000');
