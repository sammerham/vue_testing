import { render, screen, fireEvent } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import MyPokemon from "@/components/my-pokemon.vue";
import { assert } from "console";

// it.only --> to run this certain test
// it.skip -->> to skip this certain test
// --coverage
describe("My-pokemon", () => {
  it("render span correctly ", async () => {
    //arrange
    render(MyPokemon);
    const pokemonBtn = await screen.findByText("Get Pokemon");
    //assertions
    await fireEvent.click(pokemonBtn);
    const value = await screen.findByText('Sam');
    // assert
    expect(value.innerHTML).toBe('Sam');
  });
});
