document.addEventListener('scroll', function(event) {
    const scrollPosition = window.pageYOffset;
    
 
    document.querySelector('.sky').style.transform = `translateY(${scrollPosition * 1.2}px)`;
    document.querySelector('.mountBg').style.transform = `translateY(${scrollPosition * 10.4}px)`;
    document.querySelector('.mountMg').style.transform = `translateY(${scrollPosition * 10.6}px)`;
    document.querySelector('.cloud2').style.transform = `translateY(${scrollPosition * 90.5}px)`;
    document.querySelector('.mountFg').style.transform = `translateY(${scrollPosition * 100.8}px)`;
    document.querySelector('.cloud1').style.transform = `translateY(${scrollPosition * 10.7}px)`;
    document.querySelector('.cloud3').style.transform = `translateY(${scrollPosition * 10.3}px)`;
  });
  