<script>
  import Hero from './components/hero.svelte';
  import Gallery from './components/gallery.svelte';
  import Detail from './components/detail.svelte';
  import Guests from './components/guest.svelte';
  import Message from './components/message.svelte';
</script>

<main>
  <Hero />
  <Gallery />
  <Detail />
  <Guests />
  <Message />
</main>

<footer>
  <p style="text-align: center; margin-top: 2rem;"> - : Courtesy - Grandson : - </p>
  <p style="text-align: center; font-size: 12px;">This app is for personal use only. Messages and love counts are stored privately and not shared with anyone.</p>
</footer>

<style>
  /* Global styles for the body and main layout */
  :global(body) {
    background-color: #F5F5DC;
    color: #333; /* Changed text color to a darker shade for better readability */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin: 0;
    padding: 0;
  }

  :global(main) {
    padding: 0;
    max-width: 100%;
    overflow-x: hidden;
  }


  #app {
  padding: 0 !important;
  margin: 0 auto;
  max-width: 100%;
}
  footer {
    margin-top: 20px;
    color: black;
    padding: 1rem;
    text-align: center;
    width: 100%;
  }
  

  /* Mobile-friendly styles */
  @media (max-width: 768px) {
    :global(main) {
      padding: 0;
      margin: 0;
    }
    footer {
      padding: 0.5rem; /* Adjusted padding for better mobile experience */
      margin: 0;
    }
    :global(body) {
      margin: 0;
      padding: 0;
    }
    :global(main) {
      font-size: 14px;
    }
    :global(h1) {
      font-size: 24px;
    }
    :global(h2) {
      font-size: 18px;
    }
  }
</style>