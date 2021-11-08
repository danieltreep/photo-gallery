
function searchFilter() {
    
    // Gets the value typed in the searchbar and converts to lower case
    let input = document.getElementById("search");
    input = input.value.toLowerCase();

    // Checking if there is an input value
    console.log(input);

    // Creates a variable for the photos
    let photos = document.querySelectorAll("a");

    // Target the data-caption attribute and converts it to lower case
    let caption = photos[0].getAttribute("data-caption");
    caption = caption.toLowerCase();
    
    // Checking if let caption targets data-caption attribute
    console.log(caption);

    for (let i = 0; i < caption.length; i++) {
        
        if (caption.includes(input)) {
            photos[i].style.display = "block";
        } else {
            photos[i].style.display = "none";
        }
    }
}