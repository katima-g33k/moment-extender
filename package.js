/* eslint prefer-arrow-callback: 0 */
Package.describe({
  name: 'jlchapelle:moment',
  version: '1.0.0',
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'momentjs:moment@2.12.0',
    'jlachapelle:chance@1.0.0',
  ]);

  api.addFiles([
    'lib/function.js',
    'lib/moment.js',
  ], ['client', 'server']);

  api.export([
    'momentFunctions',
  ], ['client', 'server']);
});
