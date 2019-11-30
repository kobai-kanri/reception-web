(function() {
    console.log('loaded');
})();

var mainNode;
window.onload = function() {
    mainNode = document.querySelector('#main-container');
};

function GoHelp() {
    document.querySelector('#title').innerText = '依頼';
    changeMain('template-help');
}

function changeMain(templateId) {
    var t = document.querySelector('#' + templateId);
    var clone = document.importNode(t, true);
    mainNode.innerHTML = clone.innerHTML;
}
