<script>
    export let title1, title2, title3, body, link, images;
</script>
<section class="section section-divider gray delivery">
    <div class="container">

      <div class="delivery-content">

        <h2 class="h2 section-title">
          {title1} <span class="span">{title2}</span> {title3}
        </h2>

        <p class="section-text">
          {body}
        </p>

        <button class="btn btn-hover">{link.title}</button>
      </div>

      <figure class="delivery-banner">
        <img src="{images.background.url}" width="700" height="602" loading="lazy" alt="{images.background.alt}" class="w-100">

        <img src="{images.banner.url}" width="1000" height="880" loading="lazy" alt="{images.banner.alt}" class="w-100 delivery-img" data-delivery-boy="" style="transform: translateX(-81px);">
      </figure>

    </div>
  </section>