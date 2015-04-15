angular.module('myApp')
.config(appConfig);

function appConfig($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'assets/js/i18n/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
}
