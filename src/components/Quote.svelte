<script lang="ts">
  import { getQuote } from "../clients/quotes";
  const quotePromise = getQuote();
</script>

<quote>
  {#await quotePromise}
    <div>...</div>
  {:then quote}
    <div>{quote.content}</div>
    <div class="author">└╴{quote.author}</div>
  {:catch error}
    <div>{error.message}</div>
  {/await}
</quote>

<style>
  .author {
    color: #9da9a0;
  }
</style>
