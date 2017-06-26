<template>
  <div id="app">
    <link rel="shortcut icon" href="img/favicon.png">
    <link rel="stylesheet" href="../static/css/font-awesome.min.css">
    <link rel="stylesheet" href="../static/css/materialize.min.css">
    <link rel="stylesheet" href="../static/css/style.css">	
    	<!-- script -->
	<div class="navbar">
		<div class="container">
			<div class="site-title">
				<a href="#" class="logo"><h1>Company </h1></a>
			</div>
		</div>
	</div>
    <router-view></router-view>
    	<!-- footer -->
	<footer>
		<div class="container">
			<h6>Find & follow us</h6>
			<ul class="icon-social">
				<li class="facebook"><a href=""><i class="fa fa-facebook"></i></a></li>
				<li class="twitter"><a href=""><i class="fa fa-twitter"></i></a></li>
				<li class="google"><a href=""><i class="fa fa-google"></i></a></li>
				<li class="instagram"><a href=""><i class="fa fa-instagram"></i></a></li>
				<li class="rss"><a href=""><i class="fa fa-rss"></i></a></li>
			</ul>
			<div class="tel-fax-mail">
				<ul>
					<li><span>Tel:</span> 900000002</li>
					<li><span>Fax:</span> 0400000098</li>
					<li><span>Email:</span> luisjnk@gmail.com</li>
				</ul>
			</div>
			<div class="ft-bottom">
				<span> </span>
			</div>
		</div>
	</footer>
	<!-- end footer -->
	
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

</style>
