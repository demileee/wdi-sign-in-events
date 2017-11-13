window.addEventListener("DOMContentLoaded", function(){

  document.querySelector('.signin').addEventListener("click", function() {
    document.querySelector('.modal').className = "modal animate-opacity";
    document.querySelector('.modal').style.display = 'block';
  });

  document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.modal').className = "modal animate-opacity-off";
    setTimeout(function(){document.querySelector('.modal').style.display = 'none'}, 800);
  });

  document.querySelector('.getstarted').addEventListener("click", function(e) {
    if(e.target.classList.contains("submit")) {
    document.querySelector('#user').className = "error";
    document.querySelector('#pass').className = "error";
    };
  });

  document.querySelector('.getstarted').addEventListener("mouseover", function(e) {
    if(e.target.classList.contains("error")) {
    e.target.classList.remove("error");
    };
  });

  document.querySelector('.modal').addEventListener("click", function(e) {
    if(!e.target.classList.contains("getstarted")) {
      document.querySelector('.modal').className = "modal animate-opacity-off";
      setTimeout(function(){document.querySelector('.modal').style.display = 'none'}, 800);
    };
  });

})
