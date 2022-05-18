// obtain cookieconsent plugin
var cc = initCookieConsent();
// var categories = [
//     {
//         url: 'https://www.youtube.com/embed/kopoLzvh5jY',
//         domain: 'youtube.com',
//         categories: 'video'
//     }
// ]
// var cookieData = [
//     {
//         userName: 'username',
//         value: 'JOJO',
//         domain: 'testget3rd-party.orgfree.com',
//         path: '/',
//         expires: -1,
//         detected: 'http://testget3rd-party.orgfree.com/test.html',
//         type: 'javascript setCookie'
//     },
//     {
//         userName: '__cf_bm',
//         value: '6SR8_MOc7B0A0OCfXIZUtfw7lZQqzFnaH2MglIGcRlk-1652808325-0-AfHe0RVjAk10xbQkXMFaD3+DjjTp5xjt+ykh9/shgeSA6mU4M6KftwLGf+IsZQogA+kqVwvtdtCXuzakZj3MFqc=',
//         domain: '.pixabay.com',
//         path: '/',
//         expires: 1652810125.448734,
//         detected: 'http://testget3rd-party.orgfree.com/test.html',
//         type: 'http header'
//     },
//     {
//         userName: 'YSC',
//         value: 'KyRqaCOJbeY',
//         domain: '.youtube.com',
//         path: '/',
//         expires: -1,
//         detected: 'http://testget3rd-party.orgfree.com/test.html',
//         type: 'http header'
//     },
//     {
//         userName: 'VISITOR_INFO1_LIVE',
//         value: '00SnmTjRb6I',
//         domain: '.youtube.com',
//         path: '/',
//         expires: 1668360325.532171,
//         detected: 'http://testget3rd-party.orgfree.com/test.html',
//         type: 'http header'
//     }
// ]

// data cookies  https://pcubedthai.com/
var cookieData = [
    {
      userName: '_ga',
      value: 'GA1.1.394220729.1652809937',
      domain: '.pcubedthai.com',
      path: '/',
      expires: 1715881937,
      detected: 'https://pcubedthai.com/',
      type: 'javascript setCookie'
    },
    {
      userName: '_ga_BYM1FJKL9N',
      value: 'GS1.1.1652809937.1.0.1652809937.0',
      domain: '.pcubedthai.com',
      path: '/',
      expires: 1715881937,
      detected: 'https://pcubedthai.com/',
      type: 'javascript setCookie'
    },
    {
      userName: '_gat_gtag_UA_226567081_1',
      value: '1',
      domain: '.pcubedthai.com',
      path: '/',
      expires: 1652809997,
      detected: 'https://pcubedthai.com/',
      type: 'javascript setCookie'
    },
    {
      userName: '_gid',
      value: 'GA1.2.1264597766.1652809937',
      domain: '.pcubedthai.com',
      path: '/',
      expires: 1652896337,
      detected: 'https://pcubedthai.com/',
      type: 'javascript setCookie'
    }
  ]

let modal = [];
for (let i = 0; i < cookieData.length; i++) {
    modal.push({
        col1: cookieData[i].userName,
        col2: cookieData[i].domain,
        col3: cookieData[i].expires,

    });
}
// console.log(modal)

// run plugin with config object
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,                    // default: false
    cookie_name: 'cookie_onAccept',             // default: 'cc_cookie'
    cookie_expiration: 365,                     // default: 182
    page_scripts: true,                         // default: false
    force_consent: true,                        // default: false

    // auto_language: null,                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: '/',                        // default: root
    // cookie_same_site: 'Lax',
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'cloud',                    // box,cloud,bar
            position: 'bottom center',          // bottom,middle,top + left,right,center
            transition: 'slide'                 // zoom,slide
        },
        settings_modal: {
            layout: 'bar',                      // box,bar
            position: 'left',                   // right,left (available only if bar layout selected)
            transition: 'slide'                 // zoom,slide
        }
    },

    onFirstAction: function () {
        console.log('onFirstAction fired');
    },

    onAccept: function (cookie) {
        console.log('onAccept fired!')
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired!');

        // If analytics category is disabled => disable google analytics
        if (!cc.allowedCategory('analytics')) {
            typeof gtag === 'function' && gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'cookie manager',
                description: 'เราใช้คุกกี้เพื่อเพิ่มประสบการณ์และความพึงพอใจในการใช้งานเว็บไซต์ หากคุณกด “ยอมรับ” หรือใช้งานเว็บไซต์ของเราต่อ ถือว่าคุณยินยอมให้มีการใช้งานคุกกี้ <a href="https://pcubedthai.com/services/cookie-consent-management/" class="cc-link">Privacy policy</a>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'      //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Preferences',
                    role: 'settings'       //'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie settings',
                save_settings_btn: 'Save current selection',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    { col1: 'Name' },
                    { col2: 'Domain' },
                    { col3: 'Expiration' }
                ],
                blocks: [
                    {
                        title: 'Cookie usage',
                        description: 'เราใช้คุกกี้เพื่อเพิ่มประสบการณ์และความพึงพอใจในการใช้งานเว็บไซต์ หากคุณกด “ยอมรับ” หรือใช้งานเว็บไซต์ของเราต่อ ถือว่าคุณยินยอมให้มีการใช้งานคุกกี้ <a href="https://pcubedthai.com/services/cookie-consent-management/" class="cc-link">Privacy policy</a>'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: '',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true  //cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Analytics & Performance cookies',
                        description: '',
                        toggle: {
                            value: 'analytics',
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: modal
                    }, {
                        title: 'Targeting & Advertising cookies',
                        description: '',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false,
                            reload: 'on_disable'            // New option in v2.4, check readme.md
                        },
                        cookie_table: modal
                    }
                    // , {
                    //     title: 'More information',
                    //     description: LOREM_IPSUM + ' <a class="cc-link" href="https://orestbida.com/contact/">Contact me</a>.',
                    // }
                ]
            }
        }
    }
});