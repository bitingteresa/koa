import Router from 'koa-router';
import * as Services from '../Services/Service';

const UserRouter = new Router();

// GET All Users
UserRouter.get('/users', async function () {
  try {
    const result = await Services.getAllUsers();

    this.body = result;
  } catch (error) {
    this.status = 400;
    this.body = 'There was a problem fetching users';
  }
});

// GET a single User
UserRouter.get('/users/:userId', async function () {
  const { userId } = this.params;

  try {
    const result = await Services.getUser(userId);

    this.body = result;
  } catch (error) {
    this.status = 400;
    this.body = 'Not a valid user'
  }
});

export default UserRouter;
