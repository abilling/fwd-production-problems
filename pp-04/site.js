function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}
addEventListener("click", function()){
                      alert("Someone's at the door!") 
                      doorbell.play();
                                           }