import Router from 'koa-router';
import * as Services from '../Services/Service';

const UserRouter = new Router();

// GET all users
UserRouter.get('/users', async function () {
  try {
    const result = await Services.getAllUsers();

    this.body = result;
  } catch (error) {
    this.status = 400;
    this.body = 'There was a problem fetching users';
  }
});

// GET a single user
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

// PATCH a single user
// TODO: need to handle the address changes
UserRouter.patch('/users/:userId', async function () {
  const { userId } = this.params;

  try {
    const result = await Services.updateUser(
      userId, this.request.body
    );

    this.body = await result;
    this.response.message = 'User was updated Successfully'
  } catch (error) {
    this.status = 400;
    this.body = 'There was a problem updating the user';
  }
});

// DELETE a single user
// TODO: need to handle address delete base on count
UserRouter.del('/users/:userId', async function () {
  const { userId } = this.params;

  try {
    const result = await Services.deleteUser(userId);

    this.body = result;
    this.response.message = 'User was removed'
  } catch (error) {
    this.status = 400;
    this.body = 'There was a problem removing user';
  }
});

// POST a single user
UserRouter.post('/users', async function () {
  try {
    let address = await Services.findAddress(this.request.body.address);

    if (address === '') {
      address = await Services.saveAddress(this.request.body.address);
    }

    this.request.body.address = address._id;

    const result = await Services.saveUser(this.request.body);

    this.body = await result;
    this.response.message = 'User was created Successfully'
  } catch (error) {
    this.status = typeof error.status === 'number' ? error.status : 400;
    this.body = error instanceof Error ? {
      status: this.status,
      message: error.message
    } : 'There was a problem creating user';
  }
});

export default UserRouter;
