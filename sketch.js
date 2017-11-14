<!doctype html>
<html>
	<head>
		<title>Delicious Site</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<style>
            *{
	margin:0;
	padding:0;
	-webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

body{
	background:#fff;
	font-size:16px;
	font-family: 'Open Sans', sans-serif;
	font-weight:400;
	color: #717f86;
	line-height: 1.52;
}
.row:after{
	content:"";
	display:block;
	clear:both;
}
.container{
	margin:0 auto;
	overflow:hidden;
	padding:15px;
}
.container:after{
	content:"";
	display:block;
	clear:both;
}

.main-text{
	text-align:center;
	margin-bottom: 35px;
}
.main-text h1{
	color: #FFB03B;
    font-size: 46px;
    font-family: 'Satisfy', sans-serif;
    font-weight: 300;
}
.main-text p{
	color: #9699a6;
    font-size: 16px;
}

.box{
	width:50%;
	float:left;
	padding:15px;
}

.bg-color{
	background-color: RGBA(0, 0, 0, 0.61);
    min-height: 630px;
}

h1,h2{
	font-weight:500;
}
/*End of global*/

header{
	background:url('img/banner-bg.jpg') no-repeat center top;
	min-height:630px;
	background-size:cover;
	position:relative;
}


header .container{
	padding-top:30px;
}

#menu{
	float:right;
}

#menu .fa{
	color:#fff;
	font-size:30px;
}

#content-wrap{
	text-align:center;
	width:100%;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
}
#content-wrap h1{
	font-family: 'Satisfy', sans-serif;
    font-size: 65px;
    color: #FFB03B;
	font-weight: 500;
}
#content-wrap h2{
	font-family: 'Satisfy', sans-serif;
    font-size: 45px;
    color: #FFB03B;
	font-weight: 500;
}
#content-wrap p{
	font-family: 'PT Sans', sans-serif;
    color: #fcfcfc;
    font-size: 34px;
}

/*End of Header*/

#about{
	padding: 60px 0px;
}
#about .wrapper{
	width:83.3333%;
	margin:0 auto;
}
#about .wrapper:after{
	content:"";
	display:block;
	clear:both;
}

.about-info h2{
	font-family: 'Satisfy', sans-serif;
    color: #FFB03B;
    font-size: 24px;	
}
.about-info p{
	margin: 0 0 10px 0;
}
.about-info ul{
	padding-left:40px;
	list-style:none;
	margin-top:20px;
}
.fa-check{
	color:#FFB03B;
	margin-right:10px;
}

.img-frame img{
	max-width:100%;
	border: 5px solid rgb(255, 176, 59);
    border-radius: 2px;
}
/*End of about*/

#events{
	background:url('img/res02.jpg')  no-repeat;    
	background-size:cover;
}
#events .main-text{
	padding:60px 0;
}
.left-image,.details{
	width:50%;
	float:left;	
}
.left-image{
	height:308px;
}
.left-image img{
	width:100%;
	height:308px;
}
.details{
	background-color: rgba(14, 4, 4, 0.70);
    border-right: 2px solid #A87F41;
    padding: 20px 20px 30px 30px;
}
.content-holder h2{
	color: #FFB03B;
    font-size: 32px;
    padding-bottom: 15px;
    font-family: 'Satisfy', sans-serif;
}
.content-holder p{
	color: #E8E8E8;
    letter-spacing: 1px;
    font-weight: 300;
	margin-bottom:10px;
	line-height:26px
}
.content-holder address strong{
	color: #FFB03B;
    padding: 10px 0px;
}
.content-holder address{
	margin-bottom:20px;
}
.content-holder #btn-link{
	text-decoration:none;
	background: #FFB03B;
	padding:7px 19px;
	font-weight:400;
	border-radius:3px;
	text-transform:uppercase;
	color:#000;
	font-size:12px;
	display:inline-block;	
}
/*End of events*/
#menu-list{
	padding:60px 0;
}
#menu-list ul{
	list-style:none;
	text-align:center;
	margin-bottom:40px;
}
#menu-list li{
	display:inline-block;
}
#menu-list .active{
	background: #FFB03B;
    color: #fff;
	border: 1px solid #FFB03B;
}
#menu-list li a{
	text-decoration:none;
	padding:10px 25px;
	font-size: 14px;
    color: #565656;
    border-radius: 0px;
    border: 1px solid #BBBBBB;
    text-decoration: none;
    cursor: pointer;
}
#menu-list li a:hover{
	background: #FFB03B;
	color:#fff;
}
.full-menu{
	width:50%;
	float:left;	
}
.menu-items{
	padding:15px;	
}
.items{
	position:relative;
}
.items a{
	text-decoration:none;
	font-family: Montserrat,arial;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #FFB03B;
}
.items a:hover{
	text-decoration:underline;
}
.dots{
	display:inline-block;
	position: absolute;
    bottom: 6px;
	left:166px;
	right:44px;
    border-bottom: 1px dotted rgba(0,0,0,.3);
    margin-left: .6rem;
    margin-right: .6rem;
}
.item-price{
	font-weight:600;
	position:absolute;
	right:0;
}
.bottom-text{
	color: #B1B1B1;
    font-family: Satisfy,'Open Sans',arial;
    font-size: 14px;
}

/*End of Menu-list*/

#contact{
	padding:60px 0;
	background-color: rgba(221, 221, 221, 0.33);
}
.contact-info{
	width:33.3333%;
	float:left;
	padding:0 15px;
}
.form{
	width:66.6666%;
	float:left;
}
.media{
	margin-top: 20px;
	position:relative;
}

#contact .fa{
	font-size:35px;	
	position:absolute;
	top:5%;

}
#contact .main-text{
	margin-bottom:56px;
}
.fa-phone{
	color:#fff;
	background-color: #fecc17;
    padding:20px;
    border-radius:50%;
}
.fa-clock-o{
	color:#fff;
	background-color: #ccdb38;
    padding:20px;
    border-radius:50%;
}
.media-body{
	display:inline-block;
	margin-left: 70px;
    padding-left: 13px;
}

.media-body h4{
	color: #31364c;
    font-size: 24px;
    margin-top: 0;
	margin-bottom:10px;
	font-weight:400;
}
.media-body p{
	 color: #9699a6;
    font-size: 16px;
    margin-bottom: 1px;
}
.column{
	float:left;
	width:50%;
}
.column div{
	margin: 8px  9px ;
    padding-bottom: 10px;	
}
input{	
	color:inherit;
	height:30px;
	width:100%;
	outline:none;
	border:none;
	background:inherit;
	padding-bottom:10px;
	border-bottom:0.5px solid #9699a6;	
	font-size:14px;
}
textarea{
	color:inherit;
	font-family:inherit;
	width:100%;
	outline:none;
	border:none;
	outline:none;
	border-bottom:1px solid #9699a6;
	padding:40px 0px;
	background:inherit;
	font-size:17px;
	margin:8px 9px;
}
.book-btn{
	background-color: #FFB03B ;
	padding:15px 60px;
	cursor:pointer;
    border-radius: 3px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    text-transform: capitalize;
    border: 0px;
    color: #000;
	margin-top:25px;
}
/*End of contact*/

footer{
	text-align:center;
	background: #222;
	padding-top:9rem;
	padding-bottom:5rem;
}
footer h4{
	padding-bottom: 20px;
    font-family: 'Satisfy', sans-serif;
    font-size: 44px;
    color: #FFB03B;
}
footer address{
	color: #999;
    text-transform: none;
    font-style: normal;
    padding-bottom: 15px;
	margin-bottom:20px;
}
footer .fa{
	color:#fff;
	font-size:32px;
	margin:0 5px;
}
.social-icons{
	margin-bottom:20px;
}
footer p{
	 color: #999;
}
footer .copyright{
	margin-bottom:10px;
}
footer .designed a{
	text-decoration:none;
	color:#fff;
}
/*End of footer*/

#side-nav{
	background-color: #111;
	width:0px;
	height:100%;
	position:fixed;
	top:0;
	right:0;
	z-index:1;
	padding-top:60px;
	overflow:hidden;
	transition:0.5s;
}
#side-nav a{
	display:block;
	text-decoration:none;
	color: #818181;
	padding: 8px 8px 8px 32px;
	font-size:25px;
	transition:0.5s
}
#side-nav a:hover,#side-nav .fa-times:hover{
	color:#fff;
}
#side-nav .fa-times{
	color: #818181;
	font-size:20px;
	position:absolute;
	top:28px;
	right:25px;
	cursor:pointer;
	transition:0.5s
}

/*End of side nav*/


/* Media queries */
@media (max-width: 992px){
	#about .wrapper{
	  width:100%;
  }
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  } 
}
@media (min-width: 992px) {
  .container {
    width: 970px;	
  }  
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;	
  } 
}

@media (max-width: 767px){
	#about .box{
		width:100%;
		float:none;
	}
	#events .left-image,.details{
		float:none;
		width:100%;
	}
	.details{
		border:none;
		border-bottom:2px solid #A87F41;
	}
	#contact .contact-info,.form{
		float:none;
		width:100%;
	}
	#contact .column{
		float:none;
		width:100%;
	}
}

@media (max-width: 513px){
	#menu-list .full-menu{
		float:none;
		width:100%;
	}
}
@media (max-width: 450px){
	
	#content-wrap h2 , #content-wrap p{
		font-size:25px;
	}
	.main-text h1{
		font-size:35px;
	}
	.main-text p{
		font-size:14px;
	}
	#side-nav{
		padding-top:15px;
	}
	#side-nav a,#side-nav .fa-times{
		font-size:18px;		
	}
	
}
@media(max-width: 400px){
	.fix{
		margin-top:35px;
	}
}
        </style>
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Satisfy|Bree+Serif|Candal|PT+Sans">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	</head>
	
	<body>
		<header>	
			<div class="bg-color">
				<div class="container">
					<a href="#" id="menu" onClick="openNav('side-nav')"><i class="fa fa-bars" aria-hidden="true"></i></a>				
					<div id="side-nav">
						<i class="fa fa-times" aria-hidden="true" onClick="closeNav('side-nav')"></i>
						<a href="#">About</a>
						<a href="#">Event</a>
						<a href="#">Menu</a>
						<a href="#">Book a table</a>
					</div>
				</div>
				<div id="content-wrap">
					<h1>Delicious</h1>
					<h2>Food To fit your lifestyle & health.</h2>
					<p>Specialized in Indian Cuisine!!</p>
				</div>
			</div>		
		</header>
	<!--End of Header-->
	
		<section id="about">
			<div class="container">
				<div class="main-text">
					<h1>Delicious Journey</h1>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
					<br>nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
				</div>
				<div class="wrapper">
					<div class="about-info box">
						<h2>vel illum qui dolorem eum</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero impedit inventore culpa vero accusamus in nostrum dignissimos modi, molestiae. Autem iusto esse necessitatibus ex corporis earum quaerat voluptates quibusdam dicta!</p>
						<ul>
							<li><i class="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
							<li><i class="fa fa-check"></i>Quisque finibus eu lorem quis elementum</li>
							<li><i class="fa fa-check"></i>Vivamus accumsan porttitor justo sed</li>
							<li><i class="fa fa-check"></i>Curabitur at massa id tortor fermentum luctus</li>			
						</ul>
					</div>
					
					<div class="box img-frame">
						<img src="img/res01.jpg">
					</div>
				</div>
			</div>		
		</section>
	<!--End of about-->
		<section id="events">
			<div class="bg-color">
				<div class="container">
					<div class="main-text">
						<h1>Up Coming events</h1>
						<p>Decorations 100% complete here</p>
					</div>
					
					<div class="row">
						<div class="left-image">
							<img src="img/res02.jpg">
						</div>
						
						<div class="details">
							<div class="content-holder">
								<h2>Joyful party</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eos suscipit earum voluptas aliquam recusandae, quae iure adipisci, inventore quia, quos delectus quaerat praesentium id expedita nihil illo accusantium, tempora.</p>
								<address>
									<strong>Place: </strong>
									1612 Collins Str, Victoria 8007 <br>
									<strong>Time: </strong>
									07:30pm
									
								</address>
								
								<a href="#" id="btn-link">Read More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	<!--End of events-->
		
		<section id="menu-list">
			<div class="container">
				<div class="main-text">
					<h1>Menu List</h1>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy<br>nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
				</div>
				<ul>
					<li><a href="#" class="active">Show All</a></li>
					<li><a href="#"> Breakfast</a></li>
					<li><a href="#">Lunch</a></li>
					<li class="fix"><a href="#">Dinner</a></li>
				</ul>
				
				<div class="row">
					<div class="full-menu">
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
						
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
						
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
						
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
						
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
						
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
					
					</div>
					
					<div class="full-menu">
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
						
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
						
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
						
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
						
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
						
						<div class="menu-items">
							<div class="items">
								<a href="#">FOOD ITEM NAME</a>
								<span class="dots"></span>
								<span class="item-price">$20.99</span>
							</div>
							<div class="bottom-text">
								Neque porro quisquam est qui dolorem
							</div>			
						</div>
					
					</div>
				</div>
			</div>
		</section>
	<!--End of Menu list-->

		<section id="contact">
			<div class="container">
				<div class="main-text">
					<h1>Book Your table</h1>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy<br>
					nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
				</div>
				<div class="row">
					<div class="contact-info">
						<div class="media">
							<i class="fa fa-phone" aria-hidden="true"></i>
							<div class="media-body">
								<h4>Phone Numbers</h4>
								<p>+440 875369208 - Phone Booking</p>
							</div>
						</div>
						
						
						
						<div class="media">
							<i class="fa fa-clock-o" aria-hidden="true"></i>
							<div class="media-body">
								<h4>Opening Hours</h4>
								<p>Monday to Friday 09.00 - 24:00</p>
								<p>Friday and Sunday 08:00 - 03.00</p>
							</div>
						</div>
					
					</div>
					
					<div class="form">
						<form>
							<div class="row">
								<div class="column">
									<div>
										<input type="text" placeholder="Your Name">
									</div>
									<div>
										<input type="email" placeholder="Your E-mail">
									</div>
									<div>
										<input type="number" placeholder="Phone">
									</div>
								</div>
								
								<div class="column">
									<div>
										<input type="date" >
									</div>
									<div>
										<input type="time" >
									</div>
									<div>
										<input type="text" placeholder="People">
									</div>
								</div>
								<textarea placeholder="Message"></textarea>
								<button class="book-btn">Book Table</button>
							</div>		
								
						</form>
					
					</div>
				</div>
			</div>
		</section>
	<!--End of contact-->
		<footer>
			<div class="container">
				<h4>Delicious</h4>
				<address>324 Ellte Road<br>Delhi, DL 110013</address>
				<div class="social-icons">
					<a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
					<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
				</div>
				<p class="copyright"> &copy; Delicious Theme. All Rights Reserved
				<p class="designed">Designed by Free <a href="#">Bootstrap Themes</a></p>
			</div>
		</footer>		
		<script src="javascript.js"></script>
	</body>	
</html>
	
