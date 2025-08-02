<!-- view/src/App.svelte -->
<script>
    // Import the Hero component
    import Hero from './components/Hero.svelte';
</script>

<main>
    <!-- Use the Hero component for the main banner -->
    <Hero />

    <!-- Other components for the hug counter and comments section will go here -->
    <!-- For example: -->
    <!-- <HugCounter /> -->
    <!-- <CommentsSection /> -->
</main>

<style>
    /* Global styles for the body and main layout */
    :global(body) {
        background-color: #f8f9fa; /* A light background color to match Lumen theme */
        color: #212529; /* Dark text for contrast */
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    :global(main) {
        padding: 1rem;
    }
</style>
