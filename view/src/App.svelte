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
    <p style="text-align: center; margin-top: 2rem;"> - : Courtesy - Happycode Technologies - Wishing You Many More Years... : - </p>
</footer>

<style>
   /* Global styles for the body and main layout */
:global(body) {
  background-color: #D8BB6F;
  color: #F5EEE3;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin: 0;
  padding: 0;
}

:global(main) {
  padding: 1rem;
  max-width: 100%;
  overflow-x: hidden;
}

footer {
  background-color: #000;
  color: #fff;
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
    padding: 0;
    margin: 0;
  }
  :global(body) {
    margin: 0;
    padding: 0;
  }
}
</style>