Package.describe({
  name:'photonic:active-record-table',
  version: '0.0.1',
  summary: 'Photonic::ActiveRecord::recordsTablePage',
  git: 'http://github.com/awatson1978/active-record/packages/active-record-table',
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

  api.addFiles('components/recordsTablePage/recordsTablePage.html', ['client']);
  api.addFiles('components/recordsTablePage/recordsTablePage.js', ['client']);
  api.addFiles('components/recordsTablePage/recordsTablePage.less', ['client']);

  api.export('recordsTablePage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-record-table');
  api.addFiles('active-record-table-tests.js');
});
