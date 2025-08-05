<script>
    let images = [
        { src: 'granny.jpeg', alt: 'Image 1' },
        { src: 'granny1.jpeg', alt: 'Image 2' },
        { src: 'granny2.jpeg', alt: 'Image 3' },
        { src: 'granny3.jpeg', alt: 'Image 4' },
        { src: 'granny4.jpeg', alt: 'Image 5' },
        { src: 'granny5.jpeg', alt: 'Image 6' },
        { src: 'granny6.jpeg', alt: 'Image 7' },
        { src: 'granny7.jpeg', alt: 'Image 8' },
        { src: 'granny8.jpeg', alt: 'Image 9' },
    ];
</script>

<div class="gallery-container">
    <div class="main-image">
        <img src={images[0].src} alt={images[0].alt} />
    </div>
    <div class="side-images">
        <div class="side-image-row">
            <img src={images[1].src} alt={images[1].alt} />
            <img src={images[2].src} alt={images[2].alt} />
        </div>
        <div class="side-image-row">
            <img src={images[3].src} alt={images[3].alt} />
            <img src={images[4].src} alt={images[4].alt} />
        </div>
    </div>
    <div class="bottom-images">
        <img src={images[5].src} alt={images[5].alt} />
        <img src={images[6].src} alt={images[6].alt} />
        <img src={images[7].src} alt={images[7].alt} />
        <img src={images[8].src} alt={images[8].alt} />
    </div>
</div>

<style>
    .gallery-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 10px;
        padding: 20px;
    }

    .main-image {
        grid-column: 1;
        grid-row: 1 / 3;
    }

    .main-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .side-images {
        grid-column: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .side-image-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .side-image-row img {
        width: 45%;
        height: 150px;
        object-fit: cover;
    }

    .bottom-images {
        grid-column: 1 / 3;
        display: flex;
        justify-content: space-between;
    }

    .bottom-images img {
        width: 23%;
        height: 150px;
        object-fit: cover;
    }
</style>