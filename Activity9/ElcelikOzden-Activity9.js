$(document).ready(function() {
    // preload images
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });
    
    // set up event handlers for links    
    $("#image_list a").click(function(evt) {
        // Store a reference to the clicked anchor element
        var clickedAnchor = $(this);
        
        // fade out caption and image
        $("#caption, #image").fadeOut(1000, function() {
            // Retrieve the href attribute value of the clicked thumbnail
            var imageURL = clickedAnchor.attr("href");
            $("#image").attr("src", imageURL);
                    
            var caption = clickedAnchor.attr("title");
            $("#caption").text(caption);
            
            // fade in caption and image
            $("#caption, #image").fadeIn(1000);
        });
        
        // cancel the default action of the link
        evt.preventDefault();
    }); // end click
    
    // move focus to first thumbnail
    $("li:first-child a").focus();
}); // end ready
