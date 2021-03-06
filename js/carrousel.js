$(document).ready(function() {
	// on charge les images par requete Ajax



	// On définie les éléments du Carousel:
	var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
		$img = $('#carrousel img'), // on cible les images contenues dans le carrousel
		indexImg = $img.length - 1, // on définit l'index du dernier élément
		i = 0, // on initialise un compteur
		$currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

	// $img.css('display', 'none'); // on cache les images
	// $currentImg.css('display', 'block'); // on affiche seulement l'image courante
	$img.css('display', 'none'); // on cache les images
	$currentImg.css('display', 'block'); // on affiche seulement l'image courante

	// on insère les flèches de controle "<"">" de part et d'autre du carrousel
	$carrousel.before('<div class="controls"> <span class="prev"><</span> </div>');
	$carrousel.after('<div class="controls"> <span class="next">></span> </div>');

	// On définie les 2 fonctions de controle Next et Prev
	$('.next').click(function() { // image suivante
		// i++; // on incrémente le compteur => mais Pb si dépasse index max

		if (i < indexImg) { // si le compteur est inférieur au dernier index
			i++; // on l'incrémente
		} else { // sinon, on le remet à 0 (première image)
			i = 0;
		}
		$img.css('display', 'none'); // on cache les images
		$currentImg = $img.eq(i); // on définit la nouvelle image
		$currentImg.css('display', 'block'); // puis on l'affiche

	});

	$('.prev').click(function() { // image précédente

		 // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"
		if (i > 0) { // si le compteur est inférieur au dernier index
			i--; // on le décrémente
		} else { // sinon, on le remet à indexImg (dernière image)
			i = indexImg;
		}
		$img.css('display', 'none');
		$currentImg = $img.eq(i);
		$currentImg.css('display', 'block');
	});

	// défilement automatique du carrousel:

	function slideImg() {
		setTimeout(function() { // on utilise une fonction anonyme

			if (i < indexImg) { // si le compteur est inférieur au dernier index
				i++; // on l'incrémente
			} else { // sinon, on le remet à 0 (première image)
				i = 0;
			}
			// console.log(`${"photo n°"}${i}`);

			$img.css('display', 'none');

			$currentImg = $img.eq(i);
			$currentImg.css('display', 'block');

			slideImg(); // on oublie pas de relancer la fonction à la fin

		}, 3000); // on définit l'intervalle à 3000 millisecondes (3s)
	}
	slideImg(); // enfin, on lance la fonction une première fois
});



// Autre type de carrousel , sans boutons:

// (function($) {
// 	setInterval(function() {
// 		$("#carrousel ul li:first-child").animate({
// 			"margin-left": -350
// 		}, 3000, function() {
// 			$(this).css("margin-left", 0).appendTo(".slideshow ul");
// 		});
// 	}, 3500);
// })(jQuery);