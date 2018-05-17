window.onload = function() {
    var iframe = document.getElementById('myframe');
    var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
    innerDoc.getElementsByClassName("prev")[1].style.visibility = "hidden";
};