<script>
    export let title1, title2, body, link, images;
</script>

<section class="section section-divider white cta" style="background-image: url('/assets{images.background.url}')">
    <div class="container">

      <div class="cta-content">

        <h2 class="h2 section-title">
          {title1}
          <span class="span">{title2}</span>
        </h2>

        <p class="section-text">
          {body}
        </p>

        <button class="btn btn-hover">{link.title}</button>
      </div>

      <figure class="cta-banner">
        <img src="/assets{images.banner.url}" width="700" height="637" loading="lazy" alt="{images.banner.alt}" class="w-100 cta-img">

        <img src="/assets{images.sale.url}" width="216" height="226" loading="lazy" alt="{images.sale.alt}" class="abs-img scale-up-anim">
      </figure>

    </div>
  </section>