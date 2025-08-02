// src/components/Hero.svelte

<script>
    import { onMount } from 'svelte';
    // Removed the Bootstrap and Bootswatch imports as they are in index.html
</script>

<style>
    /* Custom CSS to match the design's dark and gold theme */
    .hero-container {
        background-color: #000000;
        border-radius: 20px;
        padding: 2.5rem;
        border: 2px solid #b89c65; /* Golden border */
    }

    .golden-text {
        color: #b89c65;
    }

    .golden-button {
        background-color: #b89c65;
        color: #fff;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-weight: 700;
        transition: background-color 0.3s ease;
    }

    .golden-button:hover {
        background-color: #a0845a;
    }

    .btn-outline-golden {
        color: #b89c65;
        border-color: #b89c65;
        transition: all 0.3s ease;
    }
    
    .btn-outline-golden:hover {
        background-color: #b89c65;
        color: #fff;
    }

    .image-frame {
        border: 4px solid #b89c65;
        border-radius: 15px;
        padding: 5px;
        background-color: #b89c65;
    }
</style>

<div class="container my-5">
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="hero-container shadow-lg">
                <div class="row align-items-center">
                    
                    <!-- Left Section with Balloons and Decorative Text -->
                    <div class="col-md-3 d-none d-md-block text-center">
                        <div class="d-flex flex-column align-items-center mb-3">
                            <!-- Golden Balloons (using a simple emoji for now) -->
                            <span class="golden-text" style="font-size: 3rem;">🎈</span>
                            <span class="golden-text" style="font-size: 3rem;">🎈</span>
                            <span class="golden-text" style="font-size: 3rem;">🎈</span>
                        </div>
                        <ul class="list-unstyled text-start golden-text">
                            <li class="mb-2">SANYAOLU PROJECT</li>
                            <li class="mb-2">GOLDEN JUBILEE</li>
                            <li class="mb-2">HAPPY BIRTHDAY</li>
                            <li class="mb-2">TO OUR BELOVED</li>
                        </ul>
                    </div>

                    <!-- Center Section with Grandma's Image -->
                    <div class="col-md-5 text-center">
                        <div class="image-frame mx-auto" style="max-width: 90%;">
                            <!-- Placeholder image, to be replaced by bd.png -->
                           <img 
								src="bd.png" 
								class="img-fluid rounded-2" 
								alt="Grandma and Grandpa" 
								on:error={(e) => e.target.src = 'https://placehold.co/400x500/b89c65/000000?text=Grandma%27s+Image'} 
							/>
                        </div>
                    </div>
                    
                    <!-- Right Section with Title and Buttons -->
                    <div class="col-md-4 text-center text-md-start mt-4 mt-md-0">
                        <h1 class="display-4 fw-bold golden-text">A Love that Continues to Shine</h1>
                        <p class="lead text-white-50 mt-3">
                            A golden jubilee is a testament to enduring love, unwavering commitment, and a beautiful life built together.
                            This celebration is for the love that you have shown us all.
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