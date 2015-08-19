Package.describe({
  name:'photonic:active-form-new',
  version: '0.0.1',
  summary: 'Photonic::ActiveForm::recordNewPage',
  git: 'http://github.com/awatson1978/active-record/packages/active-form-new',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('aldeed:simple-schema@1.3.3');
  api.use('aldeed:collection2@2.3.3');
  api.use('aldeed:autoform@5.3.2');

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
  api.use('photonic:active-form-new');
  api.addFiles('active-form-new-tests.js');
});
