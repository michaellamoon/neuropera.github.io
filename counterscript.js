(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let dday = "April 30, 2021 20:00:00",
      countDown = new Date(dday).getTime(),
      x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          clearInterval(x);

          let headline = document.getElementById("headline");
          headline.innerText = "Join our live zoom performances!";


          var theoriginal = document.getElementById('ori');
          var thereplacement = document.createElement('a');
            var att = document.createAttribute("style");
            att.value = "font-size: 2vw"
            thereplacement.setAttributeNode(att);
          thereplacement.appendChild(document.createTextNode('https://calarts.zoom.us/j/8728462581'));
          thereplacement.href = "https://calarts.zoom.us/j/8728462581";
            var att2 = document.createAttribute("target");
            att2.value = "_blank";
            thereplacement.setAttributeNode(att2);
          theoriginal.replaceChild(thereplacement, theoriginal.lastChild);


          countdown.style.display = "none";
          content.style.display = "block";


        }
        //seconds
      }, 0)
  }());
