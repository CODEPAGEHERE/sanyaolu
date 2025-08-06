<script>
    // No scripts needed for this static component in hero.svelte
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
        position: relative; /* Set position context for absolute children like the balloon */
        overflow: hidden; /* This is the key change to clip the balloon */
        border-radius: 1rem;
    }

    .golden-text {
        color: #D8BB6F; /* New golden text color */
    }
    
    .primary-text {
        color: #F5EEE3; /* New light text color for paragraphs */
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
    
    /* KEYFRAMES FOR THE FLOATING ANIMATION */
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
        100% { transform: translateY(0) rotate(0deg); }
    }

    /* Updated CSS for a more realistic balloon look and animation */
    .balloon {
        width: 60px;
        height: 80px;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        position: relative;
        margin: -15px; /* Overlap the balloons */
        box-shadow: inset -5px -5px 5px rgba(0,0,0,0.1);
        transform-origin: bottom center;
        /* Adding a glossy highlight with a radial gradient */
        background: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.5) 0%, transparent 50%);
        /* APPLYING THE ANIMATION HERE */
        animation: float 6s ease-in-out infinite;
    }

    .balloon::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 10px;
        height: 10px;
        background: inherit;
        transform: translateX(-50%) rotate(45deg);
        box-shadow: inset -2px -2px 2px rgba(0,0,0,0.1);
    }

    /* Balloon string effect */
    .balloon::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 50px; /* The length of the string */
        background-color: #F5EEE3; /* Light color for the string */
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
    }

    .golden-balloon {
        background-color: #D8BB6F;
    }

    .white-balloon {
        background-color: #F5EEE3;
    }
    
    /* Styling for the single, larger, floating balloon at the right-center */
    .single-balloon-right {
        position: absolute; 
        top: 50%; 
        right: -20px;
        /* Kept the original transform as it gives a good sideways tilt */
        transform: translateY(-50%) rotate(25deg);
        z-index: 10;
        width: 90px;
        height: 120px;
        border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
        box-shadow: inset -8px -8px 8px rgba(0,0,0,0.1);
        /* Different animation properties for a more natural effect */
        animation: float 7s ease-in-out infinite;
    }

    /* Styling for the single, larger, floating balloon at the top-left */
    .single-balloon-top-left {
        position: absolute; 
        top: -40px; 
        left: -20px;
        z-index: 10;
        width: 90px;
        height: 120px;
        /* Corrected rotation to face diagonally left */
        transform: rotate(-45deg);
        border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
        box-shadow: inset -8px -8px 8px rgba(0,0,0,0.1);
        /* Different animation properties for a more natural effect */
        animation: float 8s ease-in-out infinite;
    }
    
    /* Styling for the single, larger, floating balloon at the bottom-right */
    .single-balloon-bottom-right {
        position: absolute; 
        bottom: -40px; 
        right: -20px;
        z-index: 10;
        width: 90px;
        height: 120px;
        /* Corrected rotation to face diagonally right */
        transform: rotate(45deg);
        border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
        box-shadow: inset 8px 8px 8px rgba(0,0,0,0.1);
        /* Different animation properties for a more natural effect */
        animation: float 7.5s ease-in-out infinite;
    }
    
    /* Adjust string and knot for all single balloons */
    .single-balloon-top-left::before,
    .single-balloon-right::before,
    .single-balloon-bottom-right::before {
        height: 80px; 
        bottom: -80px;
        background-color: rgba(245, 238, 227, 0.1); 
    }
    
    .single-balloon-top-left::after,
    .single-balloon-right::after,
    .single-balloon-bottom-right::after {
        bottom: -8px;
    }

    /* Updated styling for the balloon cluster */
    .balloon-cluster-left-bottom {
        display: flex; /* Use flexbox to easily arrange the balloons */
        justify-content: center;
        align-items: center;
        margin-top: 2rem; /* Add some space below the text */
        position: relative;
    }

    /* Individual balloons within the cluster */
    .balloon-cluster-left-bottom .balloon {
        position: relative;
        width: 80px; /* Bigger size */
        height: 100px; /* Bigger size */
        box-shadow: inset -5px -5px 5px rgba(0,0,0,0.1);
        margin: -15px; /* Overlap them again */
        animation: float 6s ease-in-out infinite; /* Apply animation to cluster balloons */
    }

    /* Adjusting positions and z-index for the overlapping effect */
    .balloon-cluster-left-bottom .balloon:nth-child(1) {
        transform: rotate(-15deg); 
        z-index: 3;
        animation-delay: 0.5s; /* Add a delay to stagger the animation */
    }

    .balloon-cluster-left-bottom .balloon:nth-child(2) {
        transform: rotate(5deg);
        z-index: 2;
        animation-delay: 0s;
    }
    
    .balloon-cluster-left-bottom .balloon:nth-child(3) {
        transform: rotate(20deg);
        z-index: 1;
        animation-delay: 1s;
    }

    /* Remove the individual strings and knots for the cluster balloons */
    .balloon-cluster-left-bottom .balloon::before,
    .balloon-cluster-left-bottom .balloon::after {
        content: none;
    }
    


/* Add these media queries to your existing CSS */

@media (max-width: 768px) {
    .hero-container {
        padding: 1.5rem;
    }

    .eighty-large {
        font-size: 8rem;
    }

    .balloon-cluster-left-bottom {
        margin-top: 1rem;
    }

    .balloon-cluster-left-bottom .balloon {
        width: 60px;
        height: 80px;
    }
}

@media (max-width: 576px) {
    .hero-container {
        padding: 1rem;
    }

    .eighty-large {
        font-size: 6rem;
    }

    .balloon-cluster-left-bottom {
        margin-top: 0.5rem;
    }

    .balloon-cluster-left-bottom .balloon {
        width: 40px;
        height: 60px;
    }

    .single-balloon-right {
        width: 60px;
        height: 80px;
    }

    .single-balloon-top-left {
        width: 60px;
        height: 80px;
    }

    .single-balloon-bottom-right {
        width: 60px;
        height: 80px;
    }
}

@media (max-width: 768px) {
    .balloon-cluster-left-bottom {
        justify-content: flex-start;
        margin-left: 20px;
    }
}
@media (max-width: 576px) {
    .balloon-cluster-left-bottom {
        margin-right:100px;
		margin-top: 5px;
	}

    .balloon-cluster-left-bottom .balloon {
        width: 50px;
        height: 70px;
    }
}
</style>

<div class="container my-2">
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="hero-container shadow-lg">
                <!-- Single white balloon at the top-left -->
                <div class="balloon white-balloon single-balloon-top-left"></div>
                <!-- Single golden balloon at the bottom-right -->
                <div class="balloon golden-balloon single-balloon-bottom-right"></div>
                <!-- Single golden balloon at the right-center -->
                <div class="balloon golden-balloon single-balloon-right"></div>
                <div class="row align-items-center">
                    
                    <!-- Left Section with the new text alignment and balloon cluster -->
                    <div class="col-md-4 d-flex flex-column justify-content-center align-items-center text-center text-md-start position-relative">
                        <h2 class="fw-bold golden-text">Granny @</h2>
                        <h1 class="fw-bold golden-text eighty-large">80</h1>
                        <p class="golden-text mt-2" style="font-size: 1.25rem;">Happy Birthday To You!</p>
                        
                        <!-- NEW: Larger, tied balloon cluster placed under the text -->
                        <div class="balloon-cluster-left-bottom">
                            <div class="balloon golden-balloon"></div>
                            <div class="balloon white-balloon"></div>
                            <div class="balloon golden-balloon"></div>
                        </div>
                    </div>

                    <!-- Center Section with Grandma's Image and the new layered borders -->
                    <div class="col-md-4 text-center position-relative">
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
						<h2 class="fw-bold golden-text">Honoring 8 Decades of Love, Wisdom, and Devotion</h2>
						<p class="lead primary-text mt-3">
						Join us as we celebrate the incredible life and legacy of our <b>beloved Mother and Grandmother, Mrs. Sanyaolu Iranseoluwa Mary.</b> As she marks her <b>Oak Jubilee,</b> we come together to cherish memories, share stories, and honor the <b>love, wisdom, and devotion </b> that have touched countless lives.
						</p>
						<div class="mt-4 d-flex justify-content-center justify-content-md-start gap-3">
							<button class="btn" style="background: linear-gradient(to bottom, #D8BB6F, #282727); color: #191918; border: none; padding: 0.5rem 1rem; font-weight: 600;">Gallery</button>
							<button class="btn" style="background: linear-gradient(to bottom, #191918, #282727); color: #D8BB6F; border: none; padding: 0.5rem 1rem; font-weight: 600;">Details</button>
						</div>
					</div>
                </div>
            </div>
        </div>
    </div>
</div>