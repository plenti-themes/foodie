<script>
    export let title1, title2, subtitle, body, items;
  </script>
<section class="section section-divider white blog" id="blog">
    <div class="container">

      <p class="section-subtitle">{subtitle}</p>

      <h2 class="h2 section-title">
        {title1} <span class="span">{title2}</span>
      </h2>

      <p class="section-text">
        {body}
      </p>

      <ul class="blog-list">
        {#each items as item}
        <li>
          <div class="blog-card">

            <div class="card-banner">
              <img src="{item.image.url}" width="600" height="390" loading="lazy" alt="{item.image.alt}" class="w-100">

              <div class="badge">{item.badge.title}</div>
            </div>

            <div class="card-content">

              <div class="card-meta-wrapper">

                <a href="{item.publish.url}" class="card-meta-link">
                  <ion-icon name="calendar-outline" role="img" class="md hydrated" aria-label="calendar outline"></ion-icon>

                  <time class="meta-info" datetime="2022-01-01">{item.publish.date}</time>
                </a>

                <a href="{item.author.url}" class="card-meta-link">
                  <ion-icon name="person-outline" role="img" class="md hydrated" aria-label="person outline"></ion-icon>

                  <p class="meta-info">{item.author.name}</p>
                </a>

              </div>

              <h3 class="h3">
                <a href="." class="card-title">{item.card.title}</a>
              </h3>

              <p class="card-text">
                {item.card.body}
              </p>

              <a href="{item.link.url}" class="btn-link">
                <span>{item.link.title}</span>

                <ion-icon name="arrow-forward" aria-hidden="true" role="img" class="md hydrated"></ion-icon>
              </a>

            </div>

          </div>
        </li>
        {/each}
      </ul>

    </div>
  </section>