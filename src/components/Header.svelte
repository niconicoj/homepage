<script>
  import Clock from "./Clock.svelte";
</script>

<header>
  <h1>HOME</h1>
  <Clock align={"right"} />
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  h1 {
    margin: 0;
    line-height: 1;
    font-size: 4rem;
    background: #83c092;
    color: #2b3339;
  }
</style>
