Package.describe({
  name:'photonic:active-users-new',
  version: '0.0.1',
  summary: 'ActiveUsers::userNewPage',
  git: 'https://github.com/awatson1978/photonic/tree/master/packages/active-users-new',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('less');

  api.addFiles('components/userNewPage/userNewPage.html', ['client']);
  api.addFiles('components/userNewPage/userNewPage.js', ['client']);
  api.addFiles('components/userNewPage/userNewPage.less', ['client']);

  api.export('userNewPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-users-new');
  api.addFiles('users-new-tests.js');
});
