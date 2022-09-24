<script>
    export let title1, title2, subtitle, body, tabs, items;
  </script>
<section class="section food-menu" id="food-menu">
    <div class="container">

      <p class="section-subtitle">{subtitle}</p>

      <h2 class="h2 section-title">
        {title1} <span class="span">{title2}</span>
      </h2>

      <p class="section-text">
        {body}
      </p>

      <ul class="fiter-list">

        <li>
          <button class="filter-btn  active">{tabs.all}</button>
        </li>

        <li>
          <button class="filter-btn">{tabs.pizza}</button>
        </li>

        <li>
          <button class="filter-btn">{tabs.burger}</button>
        </li>

        <li>
          <button class="filter-btn">{tabs.drinks}</button>
        </li>

        <li>
          <button class="filter-btn">{tabs.sandwich}</button>
        </li>

      </ul>

      <ul class="food-menu-list">
        {#each items as item}
        <li>
          <div class="food-menu-card">

            <div class="card-banner">
              <img src="/assets{item.image.url}" width="300" height="300" loading="lazy" alt="{item.image.alt}" class="w-100">

              <div class="badge">{item.badge}</div>

              <button class="btn food-menu-btn">{item.button.title}</button>
            </div>

            <div class="wrapper">
              <p class="category">{item.category}</p>

              <div class="rating-wrapper">
                <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
              </div>
            </div>

            <h3 class="h3 card-title">{item.title}</h3>

            <div class="price-wrapper">

              <p class="price-text">{item.price.text}</p>

              <data class="price">{item.price.amount}</data>

              <del class="del" value="{item.price.value}">{item.price.deleted}</del>

            </div>

          </div>
        </li>
        {/each}
      </ul>


    </div>
  </section>