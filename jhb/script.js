/* 导航栏滚动效果 */
window.addEventListener('scroll', function() {
	var header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

/* 相册幻灯片效果 */
var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("gallery")[0].getElementsByTagName("img");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 3000); // 切换时间为3秒
}

/* 表单