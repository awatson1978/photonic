Package.describe({
  name:'photonic:active-record-imagegrid',
  version: '0.0.1',
  summary: 'Photonic::ActiveRecord::recordImageGridPage',
  git: 'http://github.com/awatson1978/active-record/packages/active-record-imagegrid',
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

  api.addFiles('components/recordImageGridPage/recordImageGridPage.html', ['client']);
  api.addFiles('components/recordImageGridPage/recordImageGridPage.js', ['client']);
  api.addFiles('components/recordImageGridPage/recordImageGridPage.less', ['client']);

  api.export('recordImageGridPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-record-imagegrid');
  api.addFiles('active-record-imagegrid-tests.js');
});
