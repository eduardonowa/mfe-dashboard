const { merge } = require('webpack-merge') //DA UM MERGE NAS CFGS DO COMMON COM ESSA
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')


const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js'
      },
      // shared: ['react', 'react-dom'] //usar isso para evitar carregar múltiplas vezes a mesma lib, usar em todos lugares onde se quer evitar isso
      shared: packageJson.dependencies //usa todas dependencias do package.json
    }),
  ],
};
module.exports = merge(commonConfig, devConfig) //segundo parâmetro vai ter prioridade sobre quaisquer opções em comum com a common