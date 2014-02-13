var boykot = {
    getQueryParams: function(qs) {
       qs = qs.split("+").join(" ");
        var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])]
                = decodeURIComponent(tokens[2]);
        }
        return params;
    },
    init: function(){
        document.addEventListener('DOMContentLoaded', function () {
            document.getElementById('back').addEventListener('click', function(){
                window.history.back();
            });
            document.getElementById('continue').addEventListener('click', function(){
                var params = boykot.getQueryParams(location.search);
                chrome.extension.getBackgroundPage().sessionStorage[params.pattern] = true;
                window.location = params.url;
            });
        });
    }
}

boykot.init();