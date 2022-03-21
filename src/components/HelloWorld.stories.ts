import { Component } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "HelloWorld",
  component: HelloWorld,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    msg: { control: "text" },
  },
};

interface StoryTemplate<T> {
  (args: T): Component;
  args?: T;
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const CreateTemplate: () => StoryTemplate<{ msg?: string }> = () => (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HelloWorld },
  args: args,
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<HelloWorld v-bind="args" />',
});

export const Default = CreateTemplate();
Default.args = {
  msg: "Hello Vue 3 + TypeScript + Vite + Tailwind + Storybook",
};

export const Alternative = CreateTemplate();
Alternative.args = { msg: "Alternative text" };
