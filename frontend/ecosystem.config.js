const dotenev = require('dotenv');

dotenev.config({ path: '.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_REF,
  DEPLOY_REPO,
} = process.env;

module.exports = {
  apps: [
    {
    name   : "mesto-frontend",
    script : ".src/index.js"
    },
  ],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ssh_options: "StrictHostKeyChecking=no",
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      'post-deploy': 'cd frontend && npm i && npm rub build',
    },
  },
};
