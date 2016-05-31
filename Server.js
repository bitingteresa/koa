import koa        from 'koa';
import cors       from 'kcors';
import bodyParser from 'koa-bodyparser';

const App = koa();
const Port = process.env.PORT || 8080;

// MIDDLEWARE
App.use(cors());
App.use(bodyParser());

App.listen(Port);
console.log(`App is listening on port ${Port}`);
