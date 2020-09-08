let projectImages = [
    {
        projectImageURI: "project_images/bearcatbot.png",
        projectDescription: "Discord Bot used to manage the UC Esports online community of 150+ active users."
    },

    {
        projectImageURI: "project_images/seedsearcher.png",
        projectDescription: "A full-stack CRUD web app that finds the best plants to grow at your location."
    }
]

window.onload = main;

function main() {

    var carousel = {

        image: document.getElementById('projectImg'),
        text: document.getElementById('projectDesc'),

        carouselCount: 0,
        

        updateCarousel: (inc) => {
            if(inc){
                carousel.carouselCount++;
            } else {
                carousel.carouselCount--;
            }

            //console.log(carousel.carouselCount)
            
        
            if(carousel.carouselCount > projectImages.length-1){
                carousel.carouselCount = 0;
            } 
            else if (carousel.carouselCount < 0){
                carousel.carouselCount = projectImages.length-1;
        
            }
        
            carousel.image.setAttribute('src', projectImages[carousel.carouselCount].projectImageURI);
            carousel.text.innerHTML = projectImages[carousel.carouselCount].projectDescription;
        }

    }
    carousel.updateCarousel(true);
    setInterval(() => {carousel.updateCarousel(true)}, 10000)
    
}



