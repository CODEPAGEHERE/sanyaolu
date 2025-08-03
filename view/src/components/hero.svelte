<script>
    // No scripts needed for this static component
</script>

<style>
    /*
     * Custom CSS to match the new dark and gold theme from the provided color palette.
     * Pallete: #D8BB6F, #4B4332, #191918, #F5EEE3, #282727
     */
    .hero-container {
        /* Using the professional dark shade from the palette for the background */
        background-color: #191918;
        padding: 2.5rem;
    }

    .golden-text {
        color: #D8BB6F; /* New golden text color */
    }
    
    .primary-text {
        color: #F5EEE3; /* New light text color for paragraphs */
    }

    .golden-button {
        background-color: #D8BB6F;
        color: #191918;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-weight: 700;
        transition: background-color 0.3s ease;
    }

    .golden-button:hover {
        background-color: #4B4332; /* A darker, professional hover color */
        color: #D8BB6F;
    }

    .btn-outline-golden {
        color: #D8BB6F;
        border-color: #D8BB6F;
        transition: all 0.3s ease;
    }
    
    .btn-outline-golden:hover {
        background-color: #D8BB6F;
        color: #191918;
    }
    
    /* Outermost golden layer with a lean clip-path */
    .outermost-border {
        position: relative;
        width: 100%;
        padding-top: 125%; /* Maintain aspect ratio */
        background-color: #D8BB6F; /* Golden background */
        clip-path: polygon(10% -2%, 90% -2%, 102% 10%, 102% 90%, 90% 102%, 10% 102%, -2% 90%, -2% 10%);
    }

    /* ADJUSTMENT: Made the middle dark layer much thinner */
    .middle-dark-layer {
        position: absolute;
        top: 10px; /* A thinner margin for the gap */
        left: 10px;
        right: 10px;
        bottom: 10px;
        background-color: #191918; /* Dark background color */
        clip-path: inherit; /* Inherit the outer clip-path for a clean cut */
    }

    /* ADJUSTMENT: Made the innermost golden layer much thinner */
    .innermost-golden-layer {
        position: absolute;
        top: 10px; /* A thinner margin for the gap */
        left: 10px;
        right: 10px;
        bottom: 10px;
        background-color: #D8BB6F; /* Golden background color */
        clip-path: inherit; /* Inherit clip-path */
    }

    /* Image container, still with a small margin for a thin golden border */
    .image-frame {
        position: absolute;
        top: 5px; /* A smaller margin for a thin golden border */
        left: 5px;
        right: 5px;
        bottom: 5px;
        overflow: hidden;
        background-color: #191918; /* Dark background */
        clip-path: inherit; /* Inherit clip-path */
    }

    /* Add the subtle gold overlay on the image */
    .image-frame::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #D8BB6F; /* The golden color */
        opacity: 0.1; /* A subtle transparency */
        z-index: 1; /* Place the overlay in front of the image */
        clip-path: inherit;
    }

    .image-frame img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0; /* Place the image behind the overlay */
    }

    /* Professional, large, and bold style for the '80' text */
    .eighty-large {
        font-size: 15rem; 
        font-weight: 900; /* Bolder font weight */
        line-height: 1;
        transform: scaleY(1.3) scaleX(0.8);
        display: inline-block;
        text-shadow:
            -4px -4px 0 #4B4332, /* Dark shadow for depth */
            -8px -8px 0 #282727;
    }
</style>

<div class="container my-2">
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="hero-container shadow-lg">
                <div class="row align-items-center">
                    
                    <!-- Left Section with the new text alignment -->
                    <div class="col-md-4 d-flex flex-column justify-content-center align-items-center text-center text-md-start">
                        <h2 class="fw-bold golden-text">Granny @</h2>
                        <h1 class="fw-bold golden-text eighty-large">80</h1>
                        <p class="golden-text mt-2" style="font-size: 1.25rem;">happy diamond jubilee</p>
                    </div>

                    <!-- Center Section with Grandma's Image and the new layered borders -->
                    <div class="col-md-4 text-center">
                        <div class="outermost-border mx-auto" style="max-width: 90%;">
                            <div class="middle-dark-layer">
                                <div class="innermost-golden-layer">
                                    <div class="image-frame">
                                        <!-- Placeholder image, to be replaced by bd.png -->
                                        <img 
                                            src="granny.jpeg" 
                                            class="img-fluid" 
                                            alt="Grandma and Grandpa" 
                                            on:error={(e) => e.target.src = 'https://placehold.co/400x500/D8BB6F/191918?text=Granny@80'} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right Section with Title and Buttons -->
                    <div class="col-md-4 text-center text-md-start mt-4 mt-md-0">
                        <h2 class="fw-bold golden-text">Celebrating a Year of Love and Fulfillment</h2>
                        <p class="lead primary-text mt-3">
                            A diamond jubilee is a testament to enduring love, unwavering commitment, and a beautiful life built together.
                        </p>
                        <div class="mt-4 d-grid gap-2 d-md-block">
                            <button class="btn btn-lg golden-button">View Our Story</button>
                            <button class="btn btn-lg btn-outline-golden mt-2 mt-md-0">Leave a Wish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
