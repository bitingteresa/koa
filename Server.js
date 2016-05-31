import koa           from 'koa';
import cors          from 'kcors';
import bodyParser    from 'koa-bodyparser';
import UserRouter    from './Routers/UserRouter';
import AddressRouter from './Routers/AddressRouter';

const App = koa();
const Port = process.env.PORT || 8080;

// MIDDLEWARE
App.use(cors());
App.use(bodyParser());

// ROUTES
App.use(UserRouter.routes());
App.use(AddressRouter.routes());

App.listen(Port);
console.log(`App is listening on port ${Port}`);
