import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import HelloWorld from "@/components/HelloWorld.vue";

describe("App.vue", () => {
  it("shows correct HelloWorld text", () => {
    const app = mount(App);

    expect(app.getComponent(HelloWorld).find("h1").text()).toBe(
      "Hello Vue 3 + TypeScript + Vite + Tailwind"
    );
  });
});
