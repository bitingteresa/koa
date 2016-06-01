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

// GET a single address by id
AddressRouter.get('/addresses/:addressId', async function () {
  const { addressId } = this.params;

  try {
    const result = await Services.getAddressById(addressId);

    this.body = result;
  } catch (error) {
    this.status = 400;
    this.body = 'Not a valid address'
  }
});

// DELETE a single address for dev use
AddressRouter.del('/addresses/:addressId', async function () {
  const { addressId } = this.params;

  try {
    const result = await Services.deleteAddress(addressId);

    this.body = result;
    this.response.message = 'Address was removed'
  } catch (error) {
    this.status = 400;
    this.body = 'There was a problem removing address';
  }
});

export default AddressRouter;
