git pull origin master;
npm install;
npm run build;
pm2 reload ecosystem.config.js --env production