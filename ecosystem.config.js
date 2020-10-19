module.exports = {
  apps : [{
    script: './deploy.js',
    name: 'deploy',
  }],

  deploy : {
    production : {
      user : 'root',
      host : '62.234.27.149',
      ref  : 'origin/master',
      repo : 'https://github.com/windyoung1990/admin.git',
      path : '/home/project/admin2',
      'pre-deploy-local': '',
      'post-deploy' : 'git pull origin master && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
