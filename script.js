document.addEventListener('scroll', function() {
  const reveals = document.querySelectorAll('.reveal');
  
  for (const reveal of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 5;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('visible');
    } else {
      reveal.classList.remove('visible');
    }
  }
});



function form(){
    document.getElementById("modal").style.display="block";
}


function ham(){
    const nav = document.getElementById("nav");

    if(nav.style.display=="none"){
        nav.style.display="flex";
        document.getElementById("one").style.transform="rotate(45deg)";
        document.getElementById("one").style.transitionDuration="1s";
        document.getElementById("one").style.margin="0";
        document.getElementById("two").style.display="none";
        document.getElementById("three").style.transform="rotate(-45deg)";
        document.getElementById("three").style.transitionDuration="1s";
        document.getElementById("three").style.margin="0";
        document.getElementById("one").style.width="40px";
        document.getElementById("three").style.width="40px";
    }else{
        nav.style.display="none";
        document.getElementById("one").style.width="30px";
        document.getElementById("two").style.width="30px";
        document.getElementById("three").style.width="30px";
        document.getElementById("one").style.transform="rotate(0deg)";
        document.getElementById("one").style.transitionDuration="1s";
        document.getElementById("two").style.display="block";
        document.getElementById("three").style.transform="rotate(0deg)";
        document.getElementById("three").style.transitionDuration="1s";
    }
}

function startCounter(elementId, maxCount) {
    let count = 0;
    let duration = 3000;
    let steps = maxCount;
    let interval = duration / steps;

    let countetr = document.getElementById(elementId);
    let timer = setInterval(() => {
        countetr.textContent = count;
        if(count >= maxCount){
            clearInterval(timer)
        }
        count++;
    }, interval);
}

startCounter("counter1", 100);
startCounter("counter2", 80);
startCounter("counter3", 60);
startCounter("counter4", 50);
startCounter("counter5", 80);

document.addEventListener('scroll',function(){
    const reveals = document.querySelectorAll('reveal');

    for(const reveal of reveals){
        const windowsHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 5;

        if(elementTop< windowHeight - elementVisible){
            reveal.classList.add('visible');
        }else{
            reveal.classList.remove('visible')
        }
    }
})


