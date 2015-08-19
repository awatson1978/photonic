Package.describe({
  name: 'photonic:active-layout',
  version: '0.0.1',
  summary: 'ActiveLayout',
  git: 'https://github.com/awatson1978/photonic/tree/master/packages/active-layout',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('active-layout.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('photonic:active-layout');
  api.addFiles('active-layout-tests.js');
});
