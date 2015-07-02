Package.describe({
  name: 'jss:jstree-dark-theme',
  summary: 'Dark theme for jss:jstree.',
  version: '3.1.1',
  git: 'https://github.com/JSSolutions/meteor-jstree-dark-theme'
});

Package.onUse(function(api) {

  api.addFiles([
    'theme/style.css'
  ], 'client');

  api.addFiles([
    'theme/32px.png',
    'theme/40px.png',
    'theme/throbber.gif'
  ], 'client', {isAsset: true});

});