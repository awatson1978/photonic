Package.describe({
  name:'photonic:active-users-list',
  version: '0.0.1',
  summary: 'ActiveUsers::usersListPage',
  git: 'https://github.com/awatson1978/photonic/tree/master/packages/active-users-list',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('less');

  api.addFiles('components/usersListPage/usersListPage.html', ['client']);
  api.addFiles('components/usersListPage/usersListPage.js', ['client']);
  api.addFiles('components/usersListPage/usersListPage.less', ['client']);

  api.export('usersListPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-users-list');
  api.addFiles('users-list-tests.js');
});
