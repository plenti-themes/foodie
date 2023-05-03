<script>
  import { onMount } from 'svelte';
  import Footer from './footer.svelte';
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Login from './login.svelte';

  export let content, layout, allContent, allLayouts, env, user;

  let hash;
  onMount(async () => {
    hash = window.location.hash;
  });
</script>

<html lang="en">
<Head title={content.filename} {env} {...content.fields} />
<body id="top">
  {#if user && $user.isAuthenticated}
    <svelte:component this={$user.menu} {user} bind:content={content} />
  {/if}
  <Login bind:hash {user} />
  <header class="header" data-header="">
    <div class="container">
      <Nav />
    </div>
  </header>
  <svelte:component this={layout} {...content.fields} {allContent} {allLayouts} {content}/>
  <Footer />
</body>
</html>