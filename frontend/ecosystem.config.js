const dotenev = require('dotenv');

dotenev.config({ path: '.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
} = process.env;

module.exports = {
  apps: [
    {
    name   : "app1",
    script : "./app.js"
    },
  ],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ssh_options: "StrictHostKeyChecking=no",
      'post-deploy': 'cd frontend && npm i && npm rub build',
    },
  },
};
