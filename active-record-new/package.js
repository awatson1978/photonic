Package.describe({
  name:'photonic:active-record-new',
  version: '0.0.1',
  summary: 'Photonic::ActiveRecord::recordNewPage',
  git: 'http://github.com/awatson1978/active-record/packages/active-record-new',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('less');

  api.addFiles('components/recordNewPage/recordNewPage.html', ['client']);
  api.addFiles('components/recordNewPage/recordNewPage.js', ['client']);
  api.addFiles('components/recordNewPage/recordNewPage.less', ['client']);

  api.export('recordNewPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-record-new');
  api.addFiles('active-record-new-tests.js');
});
