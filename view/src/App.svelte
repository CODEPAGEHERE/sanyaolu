<script>
    import Hero from './components/hero.svelte';
    import Gallery from './components/gallery.svelte';
	import Detail from './components/detail.svelte';
	import Guests from './components/guest.svelte';
	import Message from './components/message.svelte';
	import Footer from './components/footer.svelte';
</script>

<main>
    <Hero />
    <Gallery />
	<Detail />
	<Guests />
	<Message />
	<Footer />
</main>

<style>
    /* Global styles for the body and main layout */
    :global(body) {
        background-color: #D8BB6F;
        color: #F5EEE3; /* Use a light color for text to ensure readability on the dark background */
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    :global(main) {
        padding: 1rem;
    }
</style>