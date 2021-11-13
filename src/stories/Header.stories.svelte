<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Header from "../components/Header.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Header" component={Header} argTypes={{}} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Header {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />
