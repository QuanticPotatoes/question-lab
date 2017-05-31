import Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
    const uri = ctx.path;
    if (uri.startsWith('/home')
     || uri.startsWith('/')) {
        ctx.body = 'coucou';
        ctx.path = '/';
    }

    await next();
});

export default app;
