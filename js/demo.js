
{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	
}

/*navigation menu*/
menu=$("nav ul");
toggle=$("nav ul .menu");

toggle.on("click", function(){
	if(menu.hasClass("active")){
		menu.removeClass("active");
	} else {
		menu.addClass("active");
	}
});



/*hovering button effect*/
document.querySelector('.button').onmousemove = function (e) {

	var x = e.pageX - e.target.offsetLeft;
	var y = e.pageY - e.target.offsetTop;

	e.target.style.setProperty('--x', x + 'px');
	e.target.style.setProperty('--y', y + 'px');
};



/* playing audio using web audio api*/
(function () {
  'use strict';

  const URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3';
    
  const context = new AudioContext();
  const playSpeaker1 = document.querySelector('#play');
  const playSpeaker2 = document.querySelector('#play2');
    
    
  let maryamBuffer;

  window.fetch(URL)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
	  playSpeaker1.disabled = false;
	  playSpeaker2.disabled = false;
      maryamBuffer = audioBuffer;
    });
    
    playSpeaker1.onclick = () => play(maryamBuffer);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
  playSpeaker2.onclick = () => play(maryamBuffer);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
}());

/*background image hover reveal*/
(function() {

  let magic = document.querySelector('.backgroundimage');
  let hop = document.querySelector('.yellow-section ')
  let magicWHalf = magic.offsetWidth / 2;

  document.body.addEventListener('mousemove',function(e){
    magic.style.left = e.pageX - magicWHalf+'px';
    magic.style.top =  hop - magicWHalf +'px';
  
  });

  

})();