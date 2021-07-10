<?php

session_start();

if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !==true)
{
    header("location: login.php");
}


?>


 <!-- <!doctype html>
<html lang="en">
  <head>
    Required meta tags
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    Bootstrap CSS
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Financevia</title>
  </head>
  <body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Financevia</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="register.php">Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login.php">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="logout.php">Logout</a>
      </li>

      
     
    </ul>

  <div class="navbar-collapse collapse">
  <ul class="navbar-nav ml-auto">
  <li class="nav-item active">
        <a class="nav-link" href="#"> <img src="https://img.icons8.com/metro/26/000000/guest-male.png"> <?php echo "Welcome ". $_SESSION['username']?></a>
      </li>
  </ul>
  </div>


  </div>
</nav>

<div class="container mt-4">
<h3><?php echo "Welcome ". $_SESSION['username']?>! You can now use this website</h3>
<hr>

</div>

    Optional JavaScript
    jQuery first, then Popper.js, then Bootstrap JS
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html> -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Financeiva</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
  </head>
  <body>
    <nav class="navbar">
      <div class="navbar__container">
        <a href="" id="navbar__logo">Financeiva</a>
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="navbar__menu">
          <li class="navbar__item">
            <a href="#home" class="navbar__links" id="home-page">Home</a>
          </li>
          <li class="navbar__item">
            <a href="#about" class="navbar__links" id="about-page">About</a>
          </li>
          <li class="navbar__item">
            <a href="#services" class="navbar__links" id="services-page">Services</a>
          </li>
          <li class="navbar__btn">
            <a href="#signup" class="button" id="sign-up">SignIn</a>
            <a href="" class="button" id="sign-up">SignIn</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <!-- top -->
    <div class="hero" id="home">
      <div class="hero__container">
        <h1 class="hero__heading"><span>Money often costs too much</span></h1>
@@ -49,13 +49,14 @@ <h1 class="hero__heading"><span>Money often costs too much</span></h1>
    <div class="main" id="about">
      <div class="main__container">
        <div class="main__img--container">
          <div class="main__img--card"><img src="currency.jpeg" class="currency" alt="" /></div>
          <div class="main__img--card"><img src="currency.jpeg" class="images" alt="" /></div>
        </div>
        <div class="main__content">
          <h1>What do we do?</h1>
          <h1>What do we offer?</h1>
          <h2>We help you learn better</h2>
          <p>Schedule a call to learn more about our services</p>
          <button class="main__btn"><a href="">Schedule call</a></button>
          <p>High quality curated study resources</p>
          <p>One to One mentorship Sessions</p>
          <button class="main__btn"><a href="#membership">Explore Our Plans</a></button>
        </div>
      </div>
    </div>
@@ -67,38 +68,76 @@ <h1>Our Services</h1>
      <div class="services__wrapper">
        <div class="services__card">
          <h2>Videos</h2>
          <p>AI powered technology</p>
          <div class="services__btn"><button>Get Started</button></div>
          <p>Learn from the Best</p>
          <div class="services__btn"><button onclick="window.location.href='../videoPage/index.html'">Get Started</button></div>
        </div>
        <div class="services__card">
          <h2>Blogs</h2>
          <p>Take the leap</p>
          <p>Time to explore</p>
          <div class="services__btn"><button>Get Started</button></div>
        </div>
        <div class="services__card">
          <h2>Books</h2>
          <p>100 Combinations</p>
          <p>The power of reading</p>
          <div class="services__btn"><button>Get Started</button></div>
        </div>
        <div class="services__card">
          <h2>Quiz</h2>
          <p>1000's of color</p>
          <div class="services__btn"><button>Get Started</button></div>
          <p>Time to test</p>
          <div class="services__btn"><button onclick="window.location.href='../quiz/index.html'">Get Started</button></div>
        </div>
      </div>
    </div>

    <!-- Features -->
    <div class="main" id="signup">
    <!-- App -->
    <div class="main" id="">
      <div class="main__container">
        <div class="main__content">
          <h1>Join our Team</h1>
          <h2>Sign Up Today</h2>
          <p>See what makes us different</p>
          <button class="main__btn"><a href="">Sign Up</a></button>
          <h1>Add Reminder</h1>
          <h2>App Coming Soon</h2>
          <p>Android & iOS</p>
          <button class="main__btn"><a href="">Add Reminder</a></button>
        </div>
        <div class="main__img--container">
          <div class="main__img--card"><i class="fas fa-piggy-bank"></i></div>
          <div class="main__img--card"><img src="coming-soon.jpg" class="images" alt="" /></div>
        </div>
      </div>
    </div>

    <!-- Membership -->
    <div class="services" id="membership">
      <h1>Memberships</h1>

      <div class="services__wrapper--membership">
        <div class="services__card">
          <h2>Free</h2>
          <p>Study material access</p>
          <div class="services__btn"><button>Explore More</button></div>
        </div>
        <div class="services__card">
          <h2>Gold</h2>
          <p>Personal Mentorship</p>
          <div class="services__btn"><button>Explore More</button></div>
        </div>
        <div class="services__card">
          <h2>Silver</h2>
          <p>Full quiz access</p>
          <div class="services__btn"><button>Explore More</button></div>
        </div>
      </div>
    </div>

    <!-- Bot-->
    <div class="main" id="about">
      <div class="main__container">
        <div class="main__img--container">
          <div class="main__img--card"><img src="bot.jpeg" class="images" class="images" alt="" /></div>
        </div>
        <div class="main__content">
          <h1>Discord Fans Assemble</h1>
          <h2>Bot to Keep you Motivated</h2>
          <p>Add our bot to your own discord server now</p>
          <button class="main__btn"><a href="https://discord.com/api/oauth2/authorize?client_id=860793868663652352&permissions=0&scope=bot" target="_blank">Let's Go</a></button>
        </div>
      </div>
    </div>
@@ -109,31 +148,32 @@ <h2>Sign Up Today</h2>
        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            <h2>About Us</h2>
            <a href="/sign__up">How it works</a>
            <a href="/">Testimonials</a>
            <a href="/">Careers</a>
            <a href="/">Terms of Service</a>
            <a href="#about">What we offer</a>
            <a href="../comingSoonPage/index.html">Testimonials</a>
            <a href="../comingSoonPage/index.html">Careers</a>
            <a href="../comingSoonPage/index.html">Terms of Service</a>
          </div>
          <div class="footer__link--items">
            <h2>Contact Us</h2>
            <a href="/">Contact</a>
            <a href="/">Support</a>
            <a href="/">Destinations</a>
            <a href="">Contact</a>
            <a href="">Suggestions</a>
            <a href="">Complaints</a>
          </div>
        </div>
        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            <h2>Videos</h2>
            <a href="/">Submit Video</a>
            <a href="/">Ambassadors</a>
            <a href="/">Agency</a>
            <h2>Our Team</h2>
            <a href="">Saurabh</a>
            <a href="">Omkar</a>
            <a href="">Dnyaneshwar</a>
            <a href="">Sumit</a>
          </div>
          <div class="footer__link--items">
            <h2>Social Media</h2>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Youtube</a>
            <a href="/">Twitter</a>
            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
            <a href="https://www.facebook.com/" target="_blank">Facebook</a>
            <a href="https://www.youtube.com/" target="_blank">Youtube</a>
            <a href="https://www.twitter.com/" target="_blank">Twitter</a>
          </div>
        </div>
      </div>
@@ -144,11 +184,11 @@ <h2>Social Media</h2>
          </div>
          <p class="website__rights">© All rights reserved</p>
          <div class="social__icons">
            <a href="" class="social__icon--link"><i class="fab fa-facebook"></i></a>
            <a href="" class="social__icon--link"><i class="fab fa-instagram"></i></a>
            <a href="" class="social__icon--link"><i class="fab fa-youtube"></i></a>
            <a href="" class="social__icon--link"><i class="fab fa-linkedin"></i></a>
            <a href="" class="social__icon--link"><i class="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/" class="social__icon--link" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/" class="social__icon--link" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/" class="social__icon--link" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/" class="social__icon--link" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.twitter.com/" class="social__icon--link" target="_blank"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </section>
