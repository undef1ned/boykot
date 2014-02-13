var boykot = {
    _shit: [
        "*://*.i.ua/*",
        "*://*.bigmir.net/*",
        "*://*.oll.tv/*",
        "*://*.tochka.net/*",
        "*://*.korrespondent.net/*", "*://*.forbes.ua/*", "*://*.football.ua/*", "*://*.isport.ua/*", "*://*.ugmk.info/*", "*://*.comments.ua/*", "*://*.vesti.ua/*", "*://*.podrobnosti.ua/*", "*://*.golos.ua/*", "*://*.kyivweekly.com/*", "*://*.segodnya.ua/*", "*://*.ura-inform.com/*", "*://*.kanalukraina.tv/*", "*://*.inter.ua/*", "*://*.avtoradio.ua/*", "*://*.topmall.ua/*", "*://*.epicentrk.com.ua/*", "*://*.bankbb.com.ua/*", "*://*.nadrabank.ua/*", "*://*.terrabank.ua/*", "*://*.pivdencombank.com/*", "*://*.pumb.ua/*", "*://*.fidobank.ua/*", "*://*.imexbank.com.ua/*", "*://*.megabank.net/*", "*://*.forum.ua/*", "*://*.konti.com/*", "*://*.krimart.com/*", "*://*.vegatele.com/*", "*://*.life.ua/*", "*://*.trimob.ua/*", "*://*.triolan.com/*", "*://*.ukrtelecom.ua/*", "*://*.wog.ua/*"
    ],
    init: function(){
        this._shit.forEach(function(pattern){
            chrome.webRequest.onBeforeRequest.addListener(function(details) {
                    console.log(details);
                    switch (details.type){
                        case "main_frame": {
                            return sessionStorage[pattern] ? {
                                cancel: false
                            } : {
                                redirectUrl: chrome.extension.getURL("html/error.html") + "?url="+encodeURIComponent(details.url) + '&pattern=' + encodeURIComponent(pattern)
                            }
                        };
                        default: {
                            return {
                                cancel: sessionStorage[pattern] ? false : true //TODO !!
                            };
                        }
                    }
                },{
                    urls: [pattern]
                },
                ["blocking"]
            );
        });
    }
}.init();