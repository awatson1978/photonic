Package.describe({
  name: 'photonic:active-users-edit',
  version: '0.0.1',
  summary: 'ActiveUsers::userEditPage',
  git: 'https://github.com/awatson1978/photonic/tree/master/packages/active-users-edit',
  documentation: 'README.md'
});

Package.onUse( function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('less');

  api.addFiles('components/userEditPage/userEditPage.html', ['client']);
  api.addFiles('components/userEditPage/userEditPage.js', ['client']);
  api.addFiles('components/userEditPage/userEditPage.less', ['client']);

  api.export('userEditPage');
});

Package.onTest( function (api) {
  api.use('tinytest');
  api.use('photonic:active-users-edit');
  api.addFiles('users-edit-tests.js');
});
