<script>
    let guests = [
        { name: 'C.A.C Oke Alafia' },
        { name: 'Life Way Ministry' },
        { name: 'SJ Travel & Tours'},
        { name: 'IBKEM Royal Academy'},
        { name: 'Ibukun Oluwa Community ' },
        { name: 'Good Women OlorunTedo' },
        { name: 'Mr & Mrs Kekere Festus' },
        { name: 'Afed Ewupe Zone' },
		{ name: 'More...' },
    ];
</script>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h3 class="text-center" style="font-weight: bold; font-size: 24px;">Guest List</h3>
            <ol style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; list-style-position: inside;">
                {#each guests as guest}
                    <li style="font-weight: bold;">{guest.name}</li>
                {/each}
            </ol>
        </div>
    </div>
</div>