Package.describe({
  name:'photonic:active-users-preview',
  version: '0.0.1',
  summary: 'ActiveUsers::userPreviewPage',
  git: 'https://github.com/awatson1978/photonic/tree/master/packages/active-users-preview',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('less');

  api.addFiles('components/userPreviewPage/userPreviewPage.html', ['client']);
  api.addFiles('components/userPreviewPage/userPreviewPage.js', ['client']);
  api.addFiles('components/userPreviewPage/userPreviewPage.less', ['client']);

  api.export('userPreviewPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-users-preview');
  api.addFiles('users-preview-tests.js');
});
