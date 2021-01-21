$('body').addClass('waiting');

$(document).ready(function() {
  $('body').removeClass('waiting');

  function random_rgba() {
    // var o = Math.round, r = Math.random, s = 255;
    // console.log(o(r()*s)+50);
    var r = Math.floor(Math.random() *155) + 100;
    var g = Math.floor(Math.random() *155) + 100;
    var b = Math.floor(Math.random() *155) + 100;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  var $grid = $('.go___flex').masonry({
    itemSelector: 'p',
    columnWidth: 20,
  });

  $(document).on('click','.aaa',function(){
    $('.aaa').prop('disabled',true);


    $('body').addClass('waiting');
    var href = $(this).attr('href');
    var json = href + '.json';

    color = random_rgba();

    $(this).css('background-color', color);

    $.ajax({
      url: json,
      success: function(result){

        var title = result.title;
        var text = result.text;
        var elements = result.elements;

        console.log(color);



        //project menu
        $.each(elements, function(index, item){
          images = item.image;
          if(typeof item.href == 'undefined') {
            console.log('href not existent');
          } else {
            var $elem = $('<p class="aaa href appended" href="' + item.href + '" style="background-color: ' + color + '">' + item.title + '</p>');
            $grid.prepend( $elem ).masonry( 'prepended', $elem );
          }
        });


        // only images
        if(typeof text === 'undefined' || text === '') {
          console.log('text not existent');
        } else {
          var $elem = $('<p class="text appended" style="background-color: ' + color + '">' + text + '</p>');
          $grid.append( $elem ).masonry( 'appended', $elem );
        }



        if(typeof images === 'undefined') {
          console.log('img not existent');
        } else {
          var $elem = $('<p class="image appended" style="background-color: ' + color + '"></p>');
          slider = $('<div class="slider" style="opacity: 0; transition: opacity .4s linear;"></div>');
          $grid.append( $elem ).masonry( 'appended', $elem );
          $elem.append(slider);

          $.each(elements, function(index, item){
            imageee = '<img src="' + item.image + '">';
            slider.append(imageee);

            $grid.imagesLoaded().progress( function() {
              $grid.masonry('layout');
            });
          });
        };

        $grid.imagesLoaded( function() {
          $grid.masonry('layout');
           $('.aaa').prop('disabled',false);
          if($('.slider').length > 0){
            slider.slick({
              infinite: true
            });
            slider.css('opacity', '1');
          }

          $('#reset').on( 'click', function() {
            console.log('reset');
            var appended = $('.appended');
            $grid.masonry('remove', appended);
            $grid.masonry('layout' );
          });
        });
        $('body').removeClass('waiting');


      }


    });
    console.log(href);
  });
});
