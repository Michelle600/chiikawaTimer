let countdown; 


function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60); 
  let secondsLeft = seconds % 60;

 
  return `${minutes}:${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`;
}


function startTimer(minutes) {
  
  if (countdown) {
    clearInterval(countdown);
  }

  let timeLeft = minutes * 60; 
  const timeDisplay = document.getElementById('timeDisplay'); 

  timeDisplay.textContent = formatTime(timeLeft);

  countdown = setInterval(() => {
    timeLeft--; 

 
    timeDisplay.textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdown); 
      timeDisplay.textContent = 'Time’s up!';
      playSound(); 
    }
  }, 1000); 
}


function playSound() {
  const audio = new Audio('chiikawaUsagiSinging.mp3');
  audio.play(); 
}
