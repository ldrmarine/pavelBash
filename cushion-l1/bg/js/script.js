// Find all links starting with #
const anchors = document.querySelectorAll('a[href*="#"]');

// Loop through all links
for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent standard link behavior
        // The href attribute of the link, if it does not exist then go to the body (not smoothly to the top)
        const blockID = anchor.hasAttribute("href") ?
            anchor.getAttribute("href") :
            "body";
        // Smooth scrolling to the element with id = href of the link
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}