<script>
    import Hero from './components/Hero.svelte';
</script>

<main>
    <Hero />
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