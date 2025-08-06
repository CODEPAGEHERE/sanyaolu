<script>
  import { onMount } from 'svelte';

  let name = '';
  let message = '';
  let messages = [];
  let loveCount = 0;
  let avatars = ['👦', '👧', '🌟', '👨', '🕺', '🧑', '🧔', '💖'];

  onMount(async () => {
    getMessages();
    getLoveCount();
  });

  async function sendMessage() {
    let randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          message,
          avatar: randomAvatar,
        }),
      });
      const data = await response.json();
      console.log(data);
      name = '';
      message = '';
      getMessages();
    } catch (err) {
      console.error(err);
    }
  }

  async function getMessages() {
    try {
      const response = await fetch('/api/messages');
      const data = await response.json();
      messages = data;
    } catch (err) {
      console.error(err);
    }
  }

  async function sendLove() {
    try {
      const response = await fetch('/api/love', {
        method: 'POST',
      });
      const data = await response.json();
      loveCount = data.count;
    } catch (err) {
      console.error(err);
    }
  }

  async function getLoveCount() {
    try {
      const response = await fetch('/api/love');
      const data = await response.json();
      loveCount = data.count;
    } catch (err) {
      console.error(err);
    }
  }
</script>

<div class="container mt-5">
  <div style="background-color: black; padding: 20px; border-radius: 10px;">
    <div class="row">
      <div class="col-md-6 mb-3">
        <div style="background-color: white; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <input type="text" style="width: 100%; padding: 10px; border: 2px solid #D8BB6F; font-size: 18px; border-radius: 5px;" bind:value={name} placeholder="Your Name...">
          <textarea style="width: 100%; height: 150px; padding: 10px; border: 2px solid #D8BB6F; font-size: 18px; margin-top: 10px; border-radius: 5px;" bind:value={message} placeholder="Send Good Vibes and Well Wishes ..."></textarea>
          <button type="button" style="width: 100%; margin-top: 10px; background-color: #D8BB6F; color: black; border: none; padding: 10px; border-radius: 5px;" on:click={sendMessage}>Share</button>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div style="background-color: black; color: white; padding: 20px; border: 1px solid #ddd; border-radius: 10px; height: 320px; overflow-y: auto; text-align: left;">
          {#each messages as msg}
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <span style="font-size: 40px; margin-right: 10px;">{msg.avatar}</span>
              <div>
                <p style="margin-bottom: 0;">From: {msg.name}</p>
                <p style="margin-top: 0;">Wishing: {msg.message}</p>
              </div>
            </div>
            <hr>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <button type="button" style="margin-top: 20px; background: linear-gradient(to bottom, #D8BB6F, #000); color: white; border: none; padding: 10px; border-radius: 5px;" on:click={sendLove}><b>Send Love ❤️</b></button>
  <span style="margin-left: 10px; color: black; font-weight: bold;">Love Count: {loveCount} ❤️</span>
</div>