<script>
    let birthdayDate = new Date('August 10, 2025 10:00:00').getTime();
    let days, hours, minutes, seconds;
    let birthdayMessage = '';

    setInterval(() => {
        let now = new Date().getTime();
        let distance = birthdayDate - now;

        if (distance < 0) {
            days = '';
            hours = '';
            minutes = '';
            seconds = '';
            birthdayMessage = 'Happy Birthday Mrs. Sanyaolu Iranseoluwa Mary!';
            return;
        }

        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
        birthdayMessage = '';
    }, 1000);
</script>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card bg-dark text-white">
                <div class="card-body">
                    <h3 class="text-center" style="font-weight: bold; font-size: 24px;">Event Details</h3>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <p><span style="font-weight: bold;">Date:</span> Sun, 10th Aug 2025</p>
                            <p><span style="font-weight: bold;">Time:</span> 10:00 AM</p>
                        </div>
                        <div class="col-md-6">
                            <p><span style="font-weight: bold;">Venue:</span> 1, Oloke Oguniran Street, Unity Estate, Off Kantagowa Market, Abule Egba, Lagos</p>
                        </div>
                    </div>
                    {#if birthdayMessage}
                        <h1 class="text-center" style="font-size: 36px; font-weight: bold; color: #D8BB6F;">{birthdayMessage}</h1>
                    {:else}
                        <div class="row justify-content-center" style="background-color: #D8BB6F; padding: 20px; border-radius: 10px;">
                            <div class="col-md-3">
                                <div class="text-center">
                                    <h1 style="font-weight: bold;">{days}</h1>
                                    <p>Days</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="text-center">
                                    <h1 style="font-weight: bold;">{hours}</h1>
                                    <p>Hours</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="text-center">
                                    <h1 style="font-weight: bold;">{minutes}</h1>
                                    <p>Minutes</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="text-center">
                                    <h1 style="font-weight: bold;">{seconds}</h1>
                                    <p>Seconds</p>
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>