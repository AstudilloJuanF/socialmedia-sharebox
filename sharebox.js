// Manipulating Styles

	var shareBox =  document.getElementById('share-section');
	var shareIcon = document.getElementById('share-icon');

	function flipIcon(){
		if(shareIcon.style.transform === 'rotateY(180deg)'){
			shareIcon.style.transform = 'none';
			shareBox.style.transform = 'translateX(-45px)';
		}else{
			shareIcon.style.transform = 'rotateY(180deg)';
			shareBox.style.transform = 'none';
		}
	}

	shareIcon.addEventListener('click', flipIcon);


// Setting share links for socialmedia

	var fbLink = document.getElementById('fb-link');
	var twLink = document.getElementById('tw-link');
	var currentUrl = document.URL;

	fbLink.href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl);
	twLink.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(currentUrl);
