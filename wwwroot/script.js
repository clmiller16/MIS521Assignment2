var len;
var results = '';
function apiSearchLucky() {
    results = ''
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "9faa20049a6443f69ddc438e77f00c42");
        },
        type: "GET",
    })

        .done(function (data) {
            window.open(data.webPages.value[0].url)
        })
}
function apiSearch() {
    results = ''
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "9faa20049a6443f69ddc438e77f00c42");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            results += "<button class=btn btn-primary>   <a href=" + data.webPages.value[0].url + ">Feeling Lucky?</a>  </button>"
            for (i = 0; i < len; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
                console.log(data.webPages.value[i].name)
                //console.log(results)
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog({
                width: window.innerWidth * 0.85,
                modal: true,
                resizable: true,
                dialogClass: "success-dialog",
            });
        })
        .fail(function () {
            alert("error");
        });
}
function handleOnLoad() {
    localStorage.setItem('background', true)
    console.log(localStorage.getItem('background'))

}
function changeBackground() {
    if (localStorage.getItem('background') == 'true') {
        document.getElementById('background').style = 'background-image: url(https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        localStorage.setItem('background', false)
    } else {
        document.getElementById('background').style = 'background-image: url(https://images.unsplash.com/photo-1682687218982-6c508299e107?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        localStorage.setItem('background', true)
    }
}

function getTime() {
    //let currentTime = new Date().toJSON().slice(11, 16)
    let fullTime = new Date().toLocaleTimeString()

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    console.log(hours)
    console.log(minutes)
    console.log(fullTime)
    //console.log(fullTime)
    //console.log(altTime)

    //document.getElementById('time').innerHTML = currentTime

    // CHECK THIS, RETURNS A WEIRD THING FOR HOURS

    $('#dialog').html("<p>Current time: " + hours + ":" + minutes + "</p>");
    $('#dialog').dialog({
        width: window.innerWidth * 0.85,
        modal: true,
        resizable: true,
        dialogClass: "success-dialog",
    });

    $("#TIME").click(function () {
        $("#dialog").dialog("open")
    })
}

function dialog() {
    // it is never calling this function
    console.log('dialog function called')
    document.getElementById('dialog').dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });
}


function Open() {
    //document.getElementById('opener').on("click", function () {
    document.getElementById('dialog').dialog("open")
}
