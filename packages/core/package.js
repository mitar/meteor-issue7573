Package.describe({
  name: 'core',
  version: '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.0.1');

  api.addFiles([
    'test.js'
  ], 'client');

});
