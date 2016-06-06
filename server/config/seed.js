/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'One card for all',
      info: 'The digital card can be used to register in public facilities, transportations, hotels, etc'
    }, {
      name: 'Easy ticketing',
      info: 'Use it to purchase an order'
    }, {
      name: 'Smart Card',
      info: 'The card belong to one user and valid through the nation'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@idkad.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@idkad.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
