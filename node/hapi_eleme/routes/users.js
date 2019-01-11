const GROUP_NAME = 'users';
const axios = require('axios');
const Joi = require('joi');
const config = require('../config');
const models = require('../models');

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/wxLogin`,
    handler: async (req, reply) => {
      console.log(req);
      reply('fdff');
    },
    config: {
      tags: ['api', GROUP_NAME],
      validate: {
        payload: {
          code: Joi.string().required().description('微信用户登录的临时code'),
          encryptedData: Joi.string().required().description('微信用户信息encryptedData'),
          iv: Joi.string().required().description('微信用户信息iv')
        }
      }
    }
  }
];
