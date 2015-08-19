Package.describe({
  name:'photonic:active-record-edit',
  version: '0.0.1',
  summary: 'Photonic::ActiveRecord::recordEditPage',
  git: 'http://github.com/awatson1978/active-record/packages/active-record-edit',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('less');

  api.addFiles('components/recordEditPage/recordEditPage.html', ['client']);
  api.addFiles('components/recordEditPage/recordEditPage.js', ['client']);
  api.addFiles('components/recordEditPage/recordEditPage.less', ['client']);

  api.export('recordEditPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-record-edit');
  api.addFiles('active-record-edit-tests.js');
});
