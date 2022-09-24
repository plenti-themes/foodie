<script>
  export let title1, title2, items;
</script>
      <section class="section section-divider white promo">
        <div class="container">
          <h2 class="h2 section-title">
            {title1} <span class="span">{title2}</span>
          </h2>
          <ul class="promo-list has-scrollbar">
            {#each items as item}
            <li class="promo-item">
              <div class="promo-card">
                <div class="card-icon">
                  <img src="/assets{item.icon.url}" width="60" height="60" alt="{item.icon.alt}">
                </div>
                <h3 class="h3 card-title">{item.title}</h3>
                <p class="card-text">
                  {item.body}
                </p>
                <img src="/assets{item.image.url}" width="300" height="300" loading="lazy" alt="{item.image.alt}"
                  class="w-100 card-banner">
              </div>
            </li>
            {/each}
          </ul>
        </div>
      </section>

