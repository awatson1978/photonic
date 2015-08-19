Package.describe({
  name:'photonic:active-users-table',
  version: '0.0.1',
  sumary: '',
  git: '',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('iron:router');
  api.use('less');

  api.addFiles('components/usersTablePage/usersTablePage.html', ['client']);
  api.addFiles('components/usersTablePage/usersTablePage.js', ['client']);
  api.addFiles('components/usersTablePage/usersTablePage.less', ['client']);
  api.addFiles('components/usersTablePage/jquery.tablesorter.js', ['client']);

  api.export('usersTablePage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-users-table');
  api.addFiles('users-table-tests.js');
});