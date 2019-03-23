window.onload = function () {
    if (window.parent && window.parent.parent) {
        window.parent.parent.postMessage(["resultsFrame", {
            height: document.body.getBoundingClientRect().height,
            slug: "yezxdwv3"
        }], "*")
    }

    // always overwrite window.name, in case users try to set it manually
    window.name = "result"
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });