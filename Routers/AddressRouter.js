import Router from 'koa-router';
import * as Services from '../Services/Service';

const AddressRouter = new Router();

// GET all addresses
AddressRouter.get('/addresses', async function () {
  try {
    const result = await Services.getAllAddresses();

    this.body = result;
  } catch (error) {
    this.status = 400;
    this.body = 'There was a problem fetching addresses';
  }
});

export default AddressRouter;
