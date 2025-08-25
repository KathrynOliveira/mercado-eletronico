import { mount, flushPromises } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import IndexPage from "@/pages/index.vue";
import { mockOrder } from "./mock/order.mock";

describe("pages/index.vue", () => {
  it("renderiza dados da API corretamente", async () => {
    // Mock do fetch
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockOrder,
    }));

    const wrapper = mount(IndexPage);
    await flushPromises(); // espera o created() terminar

    expect(wrapper.vm.isLoading).toBe(false);

    // Agora o OrderCard deve existir
    const orderCard = wrapper.findComponent({ name: "OrderCard" });
    expect(orderCard.exists()).toBe(true);
    expect(orderCard.props("order")).toEqual(mockOrder);
  });

  it("exibe erro quando a API retorna falha", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    }));

    const wrapper = mount(IndexPage);
    await flushPromises();

    expect(wrapper.vm.error).toBe("Erro na requisição: 500");
  });
});
