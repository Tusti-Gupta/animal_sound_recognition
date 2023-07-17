function startClassification() {
    document.getElementById("result_image").src = "listen.gif";
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/49FcWyk5r/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults (error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_accuracy").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + "%";

        if (results[0].label == "Background Noise") {
            document.getElementById("result_image").src = "listen.gif";   
        } else if (results[0].label == "Cat") { 
            document.getElementById("result_image").src = "cat.jpg";
        } else if (results[0].label == "Chicken") { 
            document.getElementById("result_image").src = "chicken.png";
        } else if (results[0].label == "Cow") { 
            document.getElementById("result_image").src = "cow.jpg";
        } else if (results[0].label == "Crow") { 
            document.getElementById("result_image").src = "crow.jpg";
        } else if (results[0].label == "Dog") { 
            document.getElementById("result_image").src = "dog.png";
        } else if (results[0].label == "Elephant") { 
            document.getElementById("result_image").src = "elephant.jpg";
        } else if (results[0].label == "Lion") { 
            document.getElementById("result_image").src = "lion.jpg";
        } else if (results[0].label == "Pig") { 
            document.getElementById("result_image").src = "pig.jpg";
        }
    }
}