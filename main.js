function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true, video : true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/UeFvj21EL/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults)
}