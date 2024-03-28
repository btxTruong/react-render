module.exports = {
  apps: [
    {
      name: 'react-render',
      script: './server.cjs',
      cwd: __dirname,
      instances: 2,
      exec_mode: 'cluster',
    }
  ]
}
