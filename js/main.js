//slide jquery plugin
$(function() {
    var Page = (function() {
        var $navArrows = $('#nav-arrows'),
            $nav = $('#nav-dots > span'),
            slitslider = $('#slider').slitslider({
                onBeforeChange: function(slide, pos) {
                    $nav.removeClass('nav-dot-current');
                    $nav.eq(pos).addClass('nav-dot-current');
                }
            }),
			
            init = function() {
                initEvents();
            },
			
			//prev and next buttons
            initEvents = function() {
                $navArrows.children(':last').on('click', function() {
                    slitslider.next();
                    return false;
                });
                $navArrows.children(':first').on('click', function() {
                    slitslider.previous();
                    return false;
                });
				
				//dots
                $nav.each(function(i) {
                    $(this).on('click', function(event) {
                        var $dot = $(this);
                        if (!slitslider.isActive()) {
                            $nav.removeClass('nav-dot-current');
                            $dot.addClass('nav-dot-current');
                        }
                        slitslider.jump(i + 1);
                        return false;
                    });
                });
            };
        return {
            init: init
        };
    })();
    Page.init();
});

//quiz jquery plugin
$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
		
		//q1
		{
            'q': 'Giant pandas are found in what part of China?',
            'options': [
                'South-central China.',
                'Northern China.',
                'Central China.',
                'Eastern China.'
            ],
            'correctIndex': 0,
            'correctResponse': 'Yes! Giant pandas are found in south-central China in Gansu, Shanxi and Sichuan Provinces.',
            'incorrectResponse': 'Not quite...Giant pandas are found in south-central China in Gansu, Shanxi and Sichuan Provinces.'
        },
		
		//q2
        {
            'q': 'What effects does rising sea temperature have on corals?',
            'options': [
                'Cause corals to dry up and shrink.',
                'Cause algaes to leave corals, leaving corals colorless and fragile.',
                'Cause the fish populations that live near corals to move away.',
                'Cause the coral to evolve into moving organisms.'
            ],
            'correctIndex': 1,
            'correctResponse': 'Correct! Rising sea tempertaure cause corals to expel the algae that lives in their tissues, leaving the corals colorless and fragile.',
            'incorrectResponse': 'Close! Corals rely on the algae that lives in their tissues to give them their vibrant colors. When sea temperature rises, corals would expel the algae, leaving it colorless and fragile.'
        },
		
		//q3
        {
            'q': 'Where do polar bears live?',
            'options': [
                'Coca-Cola Headquarter.',
                'Tropical Region.',
                'Antarctica.',
                'Artic Region.'
            ],
            'correctIndex': 3,
            'correctResponse': 'Yes! As of 2015, there are around 22,000 to 31,000 individuals found in 19 subpopulations in the Artics.',
            'incorrectResponse': 'Nope! Polar bears are found in the Artic Region. Polar bears rely on the sea ice for hunting, mating, resting, and traveling.'
        },
		
		//q4
        {
            'q': 'What effects do wildfires have on the environment?',
            'options': [
                'Destory ecosystems.',
                'Displace and kill biodiversity.',
                'Reduce air quality.',
                'All of the above.'
            ],
            'correctIndex': 3,
            'correctResponse': 'Wildfire is very harmful to the environment. Recently, the roaring wildfires in the Southwest could have caused thousands of migratory birds to drop dead out of the sky.',
            'incorrectResponse': 'Wildfire can destroy our ecosystems, kill or display animals, and reduce the air quality by releasing large numbers of toxic gas into the atmosphere.'
        },
		
		//q5
        {
            'q': 'What is one weather condition that regularly affects Madagascar?',
            'options': [
                'Tornados.',
                'Cyclones.',
                'Earthquakes.',
                'Droughts.'
            ],
            'correctIndex': 1,
            'correctResponse': 'Right. Madagascar is a country that regularly experience powerful cyclone that affects its ecosystems and the human population.',
            'incorrectResponse': 'Madagascar is regularly affected by powerful cyclones.'
        }
    ]
});

//collaspe credit jquery plugin
$('.collapsable-basic').collapsable();

$('.collapsable-toggle').collapsable({
  fx: 'toggle'
});

$('.collapsable-slide').collapsable({
  fx: 'slide',
  fxDuration: 300
});

$(document).ready(function() {
	$("#quiz-start-btn").click(function() {
        $(this).hide();
    });
});

$(document).ready(function() {
	$("#citation").click(function() {
        $(this).hide();
    });
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();