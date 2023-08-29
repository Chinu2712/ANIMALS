function startclassification(){
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/J7G6IWoJO/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error,results){
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

document.getElementById("result_label").innerHTML = 'i can hear ->' + results[0].label 
document.getElementById("result_confidence").innerHTML = 'Accuracy ->' + (results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img = document.getElementById('dog1');
img1 = document.getElementById('cat2');
img2 = document.getElementById('bird3');
img3 = document.getElementById('mouse4');
 
if(results[0].label == "BARK") {
    img.src = 'DOG_GIF.gif';
    img1.src = 'cat_01.png.png';
    img2.src = 'bird-01.png.png';
    img3.src = 'mouse-01.png.png';
} else if(results[0].label == "MEOW") {
    img.src = 'dog-01.png.png';
    img1.src = 'CAT_GIF.gif';
    img2.src = 'bird-01.png.png';
    img3.src = 'mouse-01.png.png';
} else if(results[0].label == "REPEAT") {
    img.src = 'dog-01.png.png';
    img1.src = 'cat_01.png.png';
    img2.src = 'BIRD_GIF.gif';
    img3.src = 'mouse-01.png.png';
} else {
    img.src = 'dog-01.png.png';
    img1.src = 'cat_01.png.png';
    img2.src = 'bird-01.png.png';
    img3.src = 'MOUSE_GIF.gif';
  }
 }
}