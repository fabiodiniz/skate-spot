/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-transform-typescript-metadata',
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.tsx', '.ts', 'json'],
        },
      ],
    ],
  }
}
