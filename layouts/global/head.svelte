<script>
  export let env;
</script>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Foodie - Supper delicious Burger in town!</title>

  <base href="{env.baseurl}">
  <script type="module" src="spa/ejected/main.js"></script>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

  <link rel="icon" type="image/svg+xml" href="logo.svg">
  <link rel='stylesheet' href='spa/bundle.css'>

  <!-- 
    - favicon
  -->
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">

  <!-- 
    - custom css link
  -->
  <link rel="stylesheet" href='global.css'>

  <!-- 
    - google font link
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- 
    - preload images
  -->
  <link rel="preload" as="image" href="media/hero-banner.png" media="min-width(768px)">
  <link rel="preload" as="image" href="media/hero-banner-bg.png" media="min-width(768px)">
  <link rel="preload" as="image" href="media/hero-bg.jpg">

</head>