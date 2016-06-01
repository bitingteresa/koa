// import validate from 'validate.js';

const constraints = {};
    {
      firstName: 'required',
      lastName: 'required',
      address.firstLine: 'required',
      address.city: 'required',
      address.state: 'required',
      address.zip: 'required',
      address.country: 'required'

    },
    {
      firstName: 'First name is required',
      lastName: 'Last name is required',
      address.firstLine: 'Address is required',
      address.city: 'City is required',
      address.state: 'State is required',
      address.zip: 'Zip code is required',
      address.country: 'US only'
    }
  )

  if (this.validationErrors) {
    this.status = 422;
    this.body = this.validationErrors;
  } else {
    this.status = 200;
    this.body = { success: true }
  }
