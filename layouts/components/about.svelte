<script>
    export let title1, title2, body, link, items, image1, image2;
</script>

      <section class="section section-divider gray about" id="about">
        <div class="container">

          <div class="about-banner">
            <img src="{image1.url}" width="509" height="459" loading="lazy" alt="{image1.alt}"
              class="w-100 about-img">

            <img src="{image2.url}" width="216" height="226" alt="{image2.alt}"
              class="abs-img scale-up-anim">
          </div>

          <div class="about-content">

            <h2 class="h2 section-title">
              {title1}
              <span class="span">{title2}</span>
            </h2>

            <p class="section-text">
              {body}
            </p>

            <ul class="about-list">
            {#each items as item}
              <li class="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>

                <span class="span">{item.list.title}</span>
              </li>
              {/each}
            </ul>

            <button class="btn btn-hover">{link.title}</button>

          </div>

        </div>
      </section>
