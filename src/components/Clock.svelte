<script lang="ts">
  import Dayjs from "dayjs";
  import { onMount } from "svelte";

  let time = Dayjs();

  onMount(() => {
    const interval = setInterval(() => {
      time = Dayjs();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  export let align: "left" | "right" | "center" = "center";
</script>

<div class={["clock", align].join(" ")}>
  <div class="time">{time.format("HH:mm:ss")}</div>
  <div class="day">{time.format("DD | MM | YYYY")}</div>
</div>

<style>
  .clock {
    line-height: 1;
  }
  .time {
    font-size: 2rem;
    color: #e67e80;
    margin-bottom: 0.25rem;
  }
  .day {
    font-size: 1.5rem;
  }

  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }

  .center {
    text-align: center;
  }
</style>
