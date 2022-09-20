const timer = document.querySelector('.timer');

  function timerInit(wrapper) {
    const hourseCount = wrapper.querySelector('.timer-hours');
    const minutesCount = wrapper.querySelector('.timer-minutes');
    const secondsCount = wrapper.querySelector('.timer-seconds');

    let time = (Number(hourseCount.dataset.timerHours * 60 * 60) + Number(minutesCount.dataset.timerMinutes * 60) + Number(secondsCount.dataset.timerSeconds))  ;


    let intervalTimer = setInterval(() => {
      let hourse = Math.floor(time / 60 / 60);
      let minutes = Math.floor(time / 60) - (hourse * 60);
      let seconds = Math.floor(time % 60);

      hourseCount.textContent = hourse < 10 ? `0${hourse}` : hourse;
      minutesCount.textContent = minutes < 10 ? `0${minutes}` : minutes;
      secondsCount.textContent = seconds < 10 ? `0${seconds}` : seconds;
      time--;

      if (time < 0) {
        console.log(time);
        console.log('end')
        clearInterval(intervalTimer);
      }

    }, 1000)
    
  }

  timerInit(timer);