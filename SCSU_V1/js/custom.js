(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);
"use strict";
'use strict';
// Adds the chat button
(function () {
    var lc = document.createElement('script');lc.type = 'text/javascript';lc.async = 'true';
    lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'v2.libanswers.com/load_chat.php?hash=a4592f2a9534b63440bd46eb0eed33ee';
    var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(lc, s);
})();
// End the chat button
// Journal Button fixes
app.controller('prmOpenJournalInFullController', [function () {
    var vm = this;vm.$onInit = function () {
        var resourceType = vm.parentCtrl.result.pnx.display.type[0] || '';if (resourceType === 'journal') {
            vm.parentCtrl.isDirectLink = function () {
                return false;
            };
        }
    };
}]);app.component('prmOpenJournalInFull', { bindings: { parentCtrl: '<' }, controller: 'prmOpenJournalInFullController' });app.component('prmSearchResultAvailabilityLineAfter', { bindings: { parentCtrl: '<' }, template: '<prm-open-journal-in-full parent-ctrl="$ctrl.parentCtrl"></prm-open-journal-in-full>' });
})();