Package.describe({
  name:'photonic:active-record-list',
  version: '0.0.1',
  summary: 'Photonic::ActiveRecord::recordsListPage',
  git: 'http://github.com/awatson1978/active-record/packages/active-record-list',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('less');

  api.use('photonic:active-record-core@0.0.1');
  api.use('photonic:active-record-header@0.0.1');
  api.use('photonic:active-record-footer@0.0.1');

  api.addFiles('components/recordsListPage/recordsListPage.html', ['client']);
  api.addFiles('components/recordsListPage/recordsListPage.js', ['client']);
  api.addFiles('components/recordsListPage/recordsListPage.less', ['client']);

  api.export('recordsListPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-record-list');
  api.addFiles('active-record-list-tests.js');
});
