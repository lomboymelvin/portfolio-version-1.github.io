//circle
document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector('.background');

    // Create three circles with different sizes
    const circleSizes = [500, 600, 700]; // Adjust sizes as needed
    circleSizes.forEach((size) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
        background.appendChild(circle);
    });

    
    function changeCircleColors() {
        const circles = document.querySelectorAll('.background .circle'); 
        const colors = ['#15239D' , '#280982', '#002080', '#18174B', '#37038D']; 
        circles.forEach((circle) => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            circle.style.backgroundColor = randomColor;
        });
    }         

    
    changeCircleColors();
    setInterval(changeCircleColors, 1000); 
});





    //navbar background
    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
    
        
        if (window.scrollY > 50) {
            navbar.classList.add('scroll');
        } else {
            navbar.classList.remove('scroll');
        }
    });
    

    

    

    document.addEventListener("DOMContentLoaded", function() {
        const boxes = document.querySelectorAll(".box");
        let delay = 0;

        boxes.forEach(box => {
            setTimeout(() => {
                box.classList.add("show");
            }, delay);
            delay += 500; // Adjust this delay as needed
        });
    });
    

    document.addEventListener("DOMContentLoaded", function() {
        const boxes = document.querySelectorAll(".box");
      
        boxes.forEach((box, index) => {
          setTimeout(() => {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
          }, index * 150); // Adjust the delay time as needed
        });
      });
      

      if (performance.navigation.type === 1) {
        // If the user refreshed the page (type 1), redirect to the desired page
        window.location.href = "index.html";
      }



//smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });




    // Check if backdrop-filter is supported
function backdropFilterSupported() {
    const el = document.createElement('div');
    el.style.backdropFilter = 'blur(10px)';
    return el.style.backdropFilter === 'blur(10px)';
  }
  
  // Apply solid black background if backdrop-filter is not supported
  if (!backdropFilterSupported()) {
    const navbar = document.getElementById('navbar');
    navbar.classList.add('no-backdrop');
  }
  

  




  const images = [
    'main.png',
    'm1.png',
    'cp.png',
    'ap.png'
    
    
    // Add more image URLs as needed
  ];
  let currentIndex = 0;
  const backgroundDiv = document.getElementById('backgroundDiv');
  
  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    const imageUrl = images[currentIndex];
    backgroundDiv.style.transform = 'scale(0.8)'; // Shrink
    setTimeout(() => {
      backgroundDiv.style.backgroundImage = `url('${imageUrl}')`;
      backgroundDiv.style.transform = 'scale(1.2)'; // Pop
      setTimeout(() => {
        backgroundDiv.style.transform = 'scale(1)'; // Restore size
      }, 250); // Wait for 0.25s after the pop
    }, 500); // Wait for 0.5s (matching the shrink transition duration)
  }
  
  // Initial call
  changeBackground();
  
  // Change background image every 7 seconds
  setInterval(changeBackground, 4000);

  window.addEventListener('scroll', function() {
    const icElements = document.querySelectorAll('.ic'); // Select all elements with the 'ic' class
    const scrollPos = window.scrollY;
    const rotationValue = scrollPos / 5; // Adjust the divisor to control rotation speed
  
    icElements.forEach(ic => {
      ic.style.transform = `rotate(${rotationValue}deg)`;
    });
  });






// Get all button elements with class openModalBtn
var btns = document.querySelectorAll('.openModalBtn');

// Loop through each button and add click event listener
btns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = btn.getAttribute('data-modal-target'); // Get the modal ID
        var modal = document.getElementById(modalId);

        // Function to open the modal and disable body scrolling
        function openModal() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling on the body
        }

        // Function to close the modal and enable body scrolling
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling on the body
        }

        // Open the modal when the button is clicked
        openModal();

        // Close the modal when the close button is clicked
        modal.querySelector('.close').onclick = closeModal;

        // Close the modal if the user clicks outside of it
        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        };
    };
});







const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.querySelector('.slider-indicators');
    let currentSlide = 0;

    function slideLeft() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
    }

    function slideRight() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }

    function updateSlider() {
      const offset = -currentSlide * 100;
      slider.style.transform = `translateX(${offset}%)`;
      updateIndicators();
    }

    function updateIndicators() {
      const indicators = document.querySelectorAll('.slider-indicator');
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
      });
    }

    // Create indicators based on the number of slides
    for (let i = 0; i < slides.length; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('slider-indicator');
      indicator.addEventListener('click', () => {
        currentSlide = i;
        updateSlider();
      });
      indicatorsContainer.appendChild(indicator);
    }

    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Disable scrolling while modal is open
    }

    function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    }

    document.querySelectorAll('.openModalBtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal-target');
        openModal(modalId);
      });
    });

    document.querySelectorAll('.closeBtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal-target');
        closeModal(modalId);
      });
    });

    updateIndicators(); // Update indicators initially
slideInterval = setInterval(slideRight, 30000);
