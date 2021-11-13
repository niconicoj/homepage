<script lang="ts">
  import LinkTable from "./components/LinkTable.svelte";
  import Header from "./components/Header.svelte";
  import Quote from "./components/Quote.svelte";
</script>

<main>
  <div class="col picture">
    <img alt="keyboard cat" src="catkeyboard.png" />
  </div>
  <div class="col content">
    <Header />
    <LinkTable />
    <Quote />
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    padding: 20vh 10vw;
    box-sizing: border-box;
  }

  .picture {
    flex: 1 1 0%;
    margin-right: 8rem;
    justify-content: center;
  }

  .content {
    flex: 2 1 0%;
    justify-content: space-between;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  img {
    object-fit: cover;
    width: 100%;
  }
</style>
