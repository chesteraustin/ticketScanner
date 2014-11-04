$(document).ready(function() {
    $("#sayThis_button").button().on( "click", function() {
        var thisText = $("#thisText").val();
        sayThis(thisText);
    });
});

function sayThis(textValue) {
    var u = new SpeechSynthesisUtterance();
    u.text = textValue;
    u.lang = 'en-US';
    speechSynthesis.speak(u);    
}