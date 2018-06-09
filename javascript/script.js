$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//mettre interval entre apparition de l'img et du titre
let animImg = setInterval(
		function () {
			$('img').css('display','block').addClass('bounceInLeft');
		},0
	);
let animH1 = setInterval(
		function () {
			$('h1').css('display','block').addClass('bounceInRight');
		},500
	);
//function qui prend en 1er parametre le click,2eme la cible 3eme l'icone
//puis fait un slide toggle sur la balise a afficher, et change la class de l'icone pour 
//afficher alternativement plus et moins
function animExpe(fsel,ssel,i) {
 $(fsel).click(function(){
  $(ssel).slideToggle("slow");
  $(i).toggleClass('fas fa-angle-double-right').toggleClass('fas fa-angle-double-down');
});
};
animExpe('.web','.webcom','h3.web i');
animExpe('.techa','.techcom','h3.techa i');

animExpe('.g2rt','.techno','h3.g2rt i');
animExpe('.esic','.esicfor','h3.esic i');

$('button i').click(function(){
  $('button i').toggleClass('fa-angle-double-down').toggleClass('fa-angle-double-up');
});

function toggleHover(hsel) {
 $(hsel).hover(
function(){
  $(hsel).stop(true,true).animate({
     bottom:'500px'
  },'slow');

},
function() {
  $(hsel).animate({
     bottom:'0px'
  },'slow');
});
};
toggleHover(".fa-futbol");
toggleHover(".fa-basketball-ball");
toggleHover(".bakery");

//function pour effacer donnée formulaire
function erased (formulaire) { 
  $(formulaire+' :input').not(':button, :submit, :reset').val('').removeAttr('checked').removeAttr('selected'); 
}

//ajax pour le formulaire
$("#formulaire").submit(function(event){
 

        $.ajax({
        type: 'POST',
        url: "contact.php",
        //serialize recupere les couples name="" et valeur qui ya dans des input qui sont eux meme dans une balise form
        data: $(this).serialize(),
        success : function() {
                        $("#contact").html("<p>Formulaire bien envoyé !</p>");
                    },
                    error: function() {
                        $("#contact").html("<p>Erreur d'appel, le formulaire ne peut pas fonctionner !</p>");
                    }
      });
        erased('#formulaire');
       
        //return false sert a ne pas aller sur la page contact2.php
        return false;
});





