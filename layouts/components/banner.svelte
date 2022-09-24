<script>
    export let banner1, banner2, banner3, banner4;
  </script>
<section class="section section-divider gray banner">
    <div class="container">

      <ul class="banner-list">

        <li class="banner-item banner-lg">
          <div class="banner-card">

            <img src="/assets{banner1.image}" width="550" height="450" loading="lazy" alt="{banner1.alt}" class="banner-img">

            <div class="banner-item-content">
              <p class="banner-subtitle">{banner1.subtitle}</p>

              <h3 class="banner-title">{banner1.title}</h3>

              <p class="banner-text">{banner1.body}</p>

              <button class="btn">{banner1.btn}</button>
            </div>

          </div>
        </li>

        <li class="banner-item banner-sm">
          <div class="banner-card">

            <img src="/assets{banner2.image}" width="550" height="465" loading="lazy" alt="{banner2.alt}" class="banner-img">

            <div class="banner-item-content">
              <h3 class="banner-title">{banner2.title}</h3>

              <p class="banner-text">{banner2.body}</p>

              <button class="btn">{banner2.btn}</button>
            </div>

          </div>
        </li>

        <li class="banner-item banner-sm">
          <div class="banner-card">

            <img src="/assets{banner3.image}" width="550" height="465" loading="lazy" alt="{banner3.alt}" class="banner-img">

            <div class="banner-item-content">
              <h3 class="banner-title">{banner3.title}</h3>

              <p class="banner-text">{banner3.body}</p>

              <button class="btn">{banner3.btn}</button>
            </div>

          </div>
        </li>

        <li class="banner-item banner-md">
          <div class="banner-card">

            <img src="/assets{banner4.image}" width="550" height="220" loading="lazy" alt="{banner4.alt}" class="banner-img">

            <div class="banner-item-content">
              <h3 class="banner-title">{banner4.title}</h3>

              <p class="banner-text">{banner4.body}</p>

              <button class="btn">{banner4.btn}</button>
            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>