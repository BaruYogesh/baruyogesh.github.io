let projectImages = [
  {
      projectImageURI: "project_images/bearcatbot.png",
      projectDescription: "Discord Bot used to manage the UC Esports online community of 150+ active users.",
      projectDetails: "I started making this project during Fall 2019. The idea was to find problems in the UC Esports community that can be solved through technology, and present the solution in a format that the userbase is already familiar with. The screenshot shows my favorite feature, sign-in. In the past, users would have to line up to write their name on a sign-in sheet. This feature lets users sign in to club meetings digitally. I communicated between the userbase and club executives, took full ownership of the project, and wrote almost all of the code. This project was made with Node.js!"
  },

  {
      projectImageURI: "project_images/seedsearcher.png",
      projectDescription: "A full-stack CRUD web app that finds the best plants to grow at your location.",
      projectDetails: "In March, at a hackathon, a friend and I made a full-stack web app to recommend plants to grow in a user's garden. It works by matching a user's location data with climate and plant data to find the best environments for particular plants to grow. I primarily worked on the frontend with React and Boostrap, and did a bit of backend with express.js and MongoDB. Made with MERN stack!"
  }
]

window.onload = main;

function main() {

  var carousel = {

      image: document.getElementById('projectImg'),
      text: document.getElementById('projectDesc'),
      details: document.getElementById('projectDetails'),

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
          carousel.details.innerHTML = projectImages[carousel.carouselCount].projectDetails;
      }

  }
  carousel.updateCarousel(true);
  setInterval(() => {carousel.updateCarousel(true)}, 10000)

  document.getElementById('next').onclick = function () {carousel.updateCarousel(true);};
  document.getElementById('prev').onclick = function () {carousel.updateCarousel(false);};
  
}
