<script>
    export let title1, title2, subtitle, body, items;
  </script>

<section class="section section-divider white testi">
    <div class="container">

      <p class="section-subtitle">{subtitle}</p>

      <h2 class="h2 section-title">
        {title1}<span class="span">{title2}</span>
      </h2>

      <p class="section-text">
        {body}
      </p>

      <ul class="testi-list has-scrollbar">
        {#each items as item}
        <li class="testi-item">
          <div class="testi-card">

            <div class="profile-wrapper">

              <figure class="avatar">
                <img src="/assets{item.image.url}" width="80" height="80" loading="lazy" alt="{item.image.alt}">
              </figure>

              <div>
                <h3 class="h4 testi-name">{item.reviewer.name}</h3>

                <p class="testi-title">{item.reviewer.company}</p>
              </div>

            </div>

            <blockquote class="testi-text">
              {item.comment.quote}
            </blockquote>

            <div class="rating-wrapper">
              <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
              <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
              <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
              <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
              <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
            </div>

          </div>
        </li>
        {/each}
      </ul>

    </div>
  </section>