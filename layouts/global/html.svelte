<script>
    import Footer from './footer.svelte';
  import Head from './head.svelte';
  import Nav from './nav.svelte';

  export let content, layout, allContent, allLayouts, env;
</script>

<html lang="en">
<Head title={content.filename} {env} {...content.fields} />
<body id="top">
  <header class="header" data-header="">
    <div class="container">
      <Nav />
    </div>
  </header>
  <svelte:component this={layout} {...content.fields} {allContent} {allLayouts} {content}/>
  <Footer />
</body>
</html>