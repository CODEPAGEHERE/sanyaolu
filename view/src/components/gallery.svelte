<script>
    let images = [
        { src: 'granny.jpeg', alt: 'Image 1' },
        { src: 'granny1.jpeg', alt: 'Image 2' },
        { src: 'granny2.jpeg', alt: 'Image 3' },
        { src: 'granny3.jpeg', alt: 'Image 4' },
        { src: 'granny4.jpeg', alt: 'Image 5' },
        { src: 'granny5.jpeg', alt: 'Image 6' },
        { src: 'granny1.jpeg', alt: 'Image 7' },
        { src: 'granny3.jpeg', alt: 'Image 8' },
        { src: 'granny2.jpeg', alt: 'Image 9' },
    ];

    import { onMount } from 'svelte';

    onMount(() => {
        const imagesDom = document.querySelectorAll('.gallery-image');
        const overlay = document.getElementById('overlay');
        const overlayImage = document.getElementById('overlay-image');

        imagesDom.forEach((image) => {
            image.addEventListener('click', () => {
                overlayImage.src = image.src;
                overlay.style.display = 'flex';
            });
        });

        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    });
</script>

<div class="parent">
    {#each images as image, i}
        <img src={image.src} alt={image.alt} style={`grid-column: ${i % 3 + 1} / ${i % 3 + 2}; grid-row: ${Math.floor(i / 3) + 1} / ${Math.floor(i / 3) + 2};`} class="gallery-image" />
    {/each}
</div>

<div class="overlay" id="overlay">
    <img src="" alt="" id="overlay-image" />
</div>

<style>
    .parent {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 200px);
        grid-column-gap: 14px;
        grid-row-gap: 14px;
    }

    .parent img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        cursor: pointer;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: none;
        justify-content: center;
        align-items: center;
    }

    .overlay img {
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    }
	
	 .parent img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        cursor: pointer;
        filter: grayscale(100%);
        transition: filter 0.3s;
    }

     .overlay img {
        filter: sepia(30%) saturate(150%);
    }
</style>