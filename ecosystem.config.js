module.exports = {
  apps : [{
    script: './deploy.js',
    name: 'deploy',
    watch: './src'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'root',
      host : '62.234.27.149',
      ref  : 'origin/master',
      key: '~/.ssh/id_rsa.pub',
      repo : 'https://github.com/windyoung1990/admin.git',
      path : '/home/project/admin',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
