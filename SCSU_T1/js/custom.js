(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/
// Adds the chat button
(function () {
    var lc = document.createElement('script');lc.type = 'text/javascript';lc.async = 'true';
    lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'v2.libanswers.com/load_chat.php?hash=a4592f2a9534b63440bd46eb0eed33ee';
    var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(lc, s);
})();
// End the chat button
// Journal Button fixes
app.controller('prmOpenJournalInFullController', [function () { var vm = this; vm.$onInit = function () { var resourceType = vm.parentCtrl.result.pnx.display.type[0] || ''; if (resourceType === 'journal') { vm.parentCtrl.isDirectLink = function () { return false; }; } }; }]); app.component('prmOpenJournalInFull', { bindings: { parentCtrl: '<' }, controller: 'prmOpenJournalInFullController' }); app.component('prmSearchResultAvailabilityLineAfter', { bindings: { parentCtrl: '<' }, template: '<prm-open-journal-in-full parent-ctrl="$ctrl.parentCtrl"></prm-open-journal-in-full>' });

 /* Announcement - BANNER PHF 9/9/2020 */
 app.component('scsuBannerComponent',  {
    template: `<div style="width:100%; margin: auto; text-align: center;">See the <a href="https://libguides.southernct.edu/updates">Fall 2020 Guide to Library Services</a> for SCSU's Buley Library users</div>`
})
app.component('prmTopBarBefore', {
    bindings: {parentCtrl: `<`},
    template: `<scsu-banner-component></scsu-banner-component>`
})
/* Announcement - BANNER */ 
})();