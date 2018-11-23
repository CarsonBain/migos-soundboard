var soundProps = [
  {
    soundID : "bitchdab",
    soundName : "Bitch, dab"
  },
  {
    soundID : "versace",
    soundName : "Versace"
  },
  {
    soundID: "pipeitup",
    soundName: "Pipe it up"
  },
  {
    soundID: "chicken",
    soundName: "Chicken"
  },
  {
    soundID: "hannah",
    soundName: "Hannah Montana"
  },
  {
    soundID: "gah",
    soundName: "Gah, Gah, Gah"
  },
  {
    soundID: "realdeal",
    soundName: "Real Deal"
  },
  {
    soundID: "migos",
    soundName: "Migos"
  },
  {
    soundID: "leftoff",
    soundName: "Left Off"
  },
  {
    soundID: "splash",
    soundName: "Splash"
  },
  {
    soundID: "skrskr",
    soundName: "Skrr, skrr"
  },
  { 
    soundID: "slippery",
    soundName: "Slippery"
  },
  {
    soundID: "bitch",
    soundName: "Bitch!"
  }
];
soundProps.forEach(function(element) {
  var audio = document.createElement('audio');
  audio.src = 'audio/' + element.soundID +'.m4a';
  audio.id = element.soundID;
  var button = document.createElement('button');
  button.classList = element.soundID;
  button.setAttribute("input-type", "button");
  button.textContent = element.soundName;
  button.onclick = function(){
    document.getElementById(element.soundID).play();
  };
  document.body.appendChild(audio);
  document.getElementById('sound-wrap').appendChild(button);
});
