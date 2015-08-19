Package.describe({
  name: 'photonic:active-users-imagegrid',
  version: '0.0.1',
  summary: 'ActiveUsers::userImageGridPage',
  git: 'https://github.com/awatson1978/photonic/tree/master/packages/active-users-imagegrid',
  documentation: 'README.md'
});

Package.onUse( function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('less');

  api.addFiles('components/userImageGridPage/userImageGridPage.html', ['client']);
  api.addFiles('components/userImageGridPage/userImageGridPage.js', ['client']);
  api.addFiles('components/userImageGridPage/userImageGridPage.less', ['client']);

  api.export('userImageGridPage');
});

Package.onTest( function (api) {
  api.use('tinytest');
  api.use('photonic:active-users-imagegrid');
  api.addFiles('users-image-grid-tests.js');
});
