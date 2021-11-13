<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Quote from "../components/Quote.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Quote" component={Quote} argTypes={{}} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Quote {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />
