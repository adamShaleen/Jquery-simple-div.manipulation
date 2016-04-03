$(document).ready(function() {

    // TARGET 1
    // When clicked target1 dissappears.
    $('.target1').on('click', function() {
        $(this).css({visibility: 'hidden'});
    })
    // When dblclick target2, target1 reappears.
    $('.target2').on('dblclick', function() {
        $('.target1').css({visibility: 'visible'});
    })

    //---------------------------------------------
    // TARGET 2
    // When clicked target2 changes color.
    $('.target2').on('click', function() {
        $(this).css({backgroundColor: 'purple'});
    })
    // When dblclick target2 changes color back.
    $('.target2').on('dblclick', function() {
        $(this).css({backgroundColor: 'red'});
    })
    //---------------------------------------------
    // TARGET 3
    // When clicked target3 gets larger.
    $('.target3').on('click', function() {
        $(this).css({height: '300px', width: '300px'});
    })
    // When dblclik target3 gets smaller.
    $('.target3').on('dblclick', function() {
        $(this).css({height: '200px', width: '200px'});
    })
    //---------------------------------------------
    // TARGET 4
    // When click target4 prepends target1
    $('.target4').on('click', function() {
      $(this).prependTo('body');
    })
    // When dblclick target4 moves back to first position.
    $('.target4').on('dblclick', function() {
        $(this).appendTo('body');
    })

    //-----------------------------------------------
    // on click reset reverts all targets to default
    $('.reset').on('click', function() {
        $('.target1').css({visibility: 'visible'});
        $('.target2').css({backgroundColor: 'red'});
        $('.target3').css({height: '200px', width: '200px'});
        $('.target4').appendTo('body');
    })


})  // Closing document tag
