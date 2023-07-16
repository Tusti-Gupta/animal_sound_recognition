function startClassification() {
    document.getElementById("result_image").src = "listen.gif";
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/49FcWyk5r/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}