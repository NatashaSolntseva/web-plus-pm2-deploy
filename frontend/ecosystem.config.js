const dotenev = require('dotenv');

dotenev.config({ path: '.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_REF,
  DEPLOY_REPO,
  DEPLOY_PATH,
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
      path: DEPLOY_PATH,
      'post-deploy': 'cd frontend && npm i && npm run build && cd build && pm2 serve build 8082 --spa',
    },
  },
};
