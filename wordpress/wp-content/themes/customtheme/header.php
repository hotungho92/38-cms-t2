<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php bloginfo( 'name' ); ?></title>

    <?php wp_head() ?>
</head>

<body <?php body_class(); ?>>
    <div class="container">
        <header class="site-header">
            <h1><a href="<?php echo home_url(); ?>"><?php bloginfo( 'name' ); ?></a></h1>
            <h4><?php bloginfo( 'description' ); ?></h4>




            <!DOCTYPE html>
            <html lang="en">

            <head>
                <title>TAO THEME </title>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

                <style>
                * {
                    box-sizing: border-box
                }

                h2 {
                    text-align: center;
                }

                /* Slideshow container */
                .slideshow-container {
                    max-width: 500px;
                    position: relative;
                    margin: auto;
                }

                /* Ẩn các slider */
                .mySlides {
                    display: none;
                }

                /* Định dạng nội dung Caption */
                .text {
                    color: #f2f2f2;
                    font-size: 15px;
                    padding: 8px 12px;
                    position: absolute;
                    bottom: 8px;
                    width: 100%;
                    text-align: center;
                }

                /* định dạng các chấm chuyển đổi các slide */
                .dot {
                    cursor: pointer;
                    height: 13px;
                    width: 13px;
                    margin: 0 2px;
                    background-color: #bbb;
                    border-radius: 50%;
                    display: inline-block;
                    transition: background-color 0.6s ease;
                }

                /* khi được hover, active đổi màu nền */
                .active,
                .dot:hover {
                    background-color: #717171;
                }

                /* Thêm hiệu ứng khi chuyển đổi các slide */
                .fade {
                    -webkit-animation-name: fade;
                    -webkit-animation-duration: 3s;
                    animation-name: fade;
                    animation-duration: 3s;
                }

                @-webkit-keyframes fade {
                    from {
                        opacity: .4
                    }

                    to {
                        opacity: 1
                    }
                }

                @keyframes fade {
                    from {
                        opacity: .4
                    }

                    to {
                        opacity: 1
                    }
                }
                </style>
            </head>

            <body>

                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Theme</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="#">Home</a></li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Blog <span
                                            class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Page blog 1</a></li>
                                        <li><a href="#">Page blog 2</a></li>
                                        <li><a href="#">Page blog 3</a></li>
                                    </ul>
                                </li>
                                <form class="navbar-form navbar-left" action="/action_page.php">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search" name="search">
                                        <div class="input-group-btn">
                                            <button class="btn btn-default" type="submit">
                                                <i class="glyphicon glyphicon-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </ul>

                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
               
                <div class="slideshow-container">
                    <div class="mySlides fade">
                        <img src="http://dungplus.com/wp-content/uploads/2018/04/hinh-nen.jpeg" style="width:100%">

                    </div>

                    <div class="mySlides fade">
                        <img src="https://picserio.com/data/out/226/purple-nature-wallpapers-and-screensavers_4398349.jpg"
                            style="width:100% ">

                    </div>

                    <div class="mySlides fade">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkoT3Yn6-uQpm-v9ucHOZAK0spFRKgWMYxm4EWb-gWaxl0j6Y"
                            style="width:100%">

                    </div>
                </div>
                <br>

                <div style="text-align:center">
                    <span class="dot" onclick="currentSlide(0)"></span>
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                </div>

            </body>

            <script>
            var slideIndex;

            function showSlides() {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }

                slides[slideIndex].style.display = "block";
                dots[slideIndex].className += " active";

                slideIndex++;
                //nếu đang ở slide cuối cùng thì chuyển về slide đầu
                if (slideIndex > slides.length - 1) {
                    slideIndex = 0
                }
                //tự động chuyển đổi slide sau 5s
                setTimeout(showSlides, 5000);
            }
            //mặc định hiển thị slide đầu tiên 
            showSlides(slideIndex = 0);


            function currentSlide(n) {
                showSlides(slideIndex = n);
            }
            </script>

            </html>