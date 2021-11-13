<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Clock from "../components/Clock.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Clock" component={Clock} argTypes={{}} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Clock {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />
