const dotenev = require('dotenv');

dotenev.config({ path: '.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REPO,
  DEPLOY_REF,
} = process.env;

module.exports = {
  apps: [
    {
      name: 'api-mesto-backend',
      script: '.src/app.ts',
    },
  ],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      ssh_options: 'StrictHostKeyChecking=no',
      'pre-deploy-local': `scp .env .env.deploy ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': 'cd backend && npm i && npm run build',
    },
  },
};

/*
в файле, описывающем деплой бэкенда, добавлены pre-deploy и post-deploy команды.
pre-deploy копирует
env -файлы на сервер, а post-deploy устанавливает зависимости,
выполняет сборку и запускает бэкенд на
удалённом сервере;
*/
