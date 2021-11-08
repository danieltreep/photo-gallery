
function searchFilter() {
    
    // Gets the value typed in the searchbar and converts to lower case
    let input = document.getElementById("search");
    input = input.value.toLowerCase();

    // Checking if there is an input value
    console.log(input);

    // Creates a variable for the image
    let image = document.querySelectorAll("a");

        for (let i = 0; i < image.length; i++) {

            let caption = image[i].getAttribute("data-caption");
            caption = caption.toLowerCase();
    
            if (caption.includes(input)) {
                image[i].style.display = "block";
            } else {
                image[i].style.display = "none";
            }
    }
}