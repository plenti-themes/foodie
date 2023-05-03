<script>
    export let title, subtitle, body, link, image;
</script>
<section class="hero" id="home" style="background-image: url('{image.hero.url}')">
    <div class="container">

      <div class="hero-content">

        <p class="hero-subtitle">{subtitle}</p>

        <h2 class="h1 hero-title">{title}</h2>

        <p class="hero-text">{body}</p>

        <button class="btn">{link.title}</button>

      </div>

      <figure class="hero-banner">
        <img src="{image.background.url}" width="820" height="716" alt="{image.background.alt}" aria-hidden="true"
          class="w-100 hero-img-bg">

        <img src="{image.banner.url}" width="700" height="637" loading="lazy" alt="{image.banner.alt}"
          class="w-100 hero-img">
      </figure>
    </div>
</section>