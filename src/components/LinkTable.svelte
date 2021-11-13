<script lang="ts">
  import { categories } from "../lib/links";
</script>

<div class="container">
  {#each categories as category}
    <div class="col">
      <div style={"color: " + category.headerColor} class="title">
        {category.label}
      </div>
      {#each category.links as link}
        <a href={link.url} class="link">{link.label}</a>
      {/each}
    </div>
  {/each}
</div>

<style>
  .title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  .col {
    display: flex;
    flex-direction: column;
  }

  a {
    margin-bottom: 0.5rem;
  }
</style>
