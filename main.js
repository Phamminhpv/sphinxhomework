const Koa = require('koa');
const calc = require('./ContainerMiddleware');

const app = new Koa();

app.use(calc.calculator);
app.use(calc.numberFilterMiddleware);
app.use(calc.calculateMiddleware);

app.listen(3210);