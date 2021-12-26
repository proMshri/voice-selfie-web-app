var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    
    if(Content == "take my selfie"){
        console.log("taking your selfie------")
        speak();
    }
}

function speak() {
    var synth=window.speechSynthesis;   //speechSynthesis will conver the text into speech
    var speakData="takeing your selfie in 5 seconds ";
    var utterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
camera=document.getElementById("camera");
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='output' src='"+data_uri+"'>";
    });
}
function save() {
    image=document.getElementById("output").src;
    document.getElementById("link").href=image;
    document.getElementById("link").click();
}