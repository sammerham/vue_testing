// src/mocks/handlers.js

//https:mswjs.io/docs/getting-started/install
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { pokemonResponse } from "./components/__tests__/mockPokemon";

// Handles a GET /user request

// req, an information about a matching request;
// res, a functional utility to create the mocked response;
// ctx, a group of functions that help to set a status code, headers, body, etc.of the mocked response.

export const restHandlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(pokemonResponse)
    );
  }),
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`)
  }),
];
const server = setupServer(...restHandlers);
// Start server before all tests
//Establishes a request interception instance previously configured via setupServer.
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
//Cleans up any agumented native request issuing classes and stops request interception.
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
// The .resetHandlers() function is useful as a clean up mechanism between multiple
// test suites that leverage runtime request handlers
afterEach(() => server.resetHandlers());
// use();Prepends given request handlers to the current server instance.
//restoreHandlers()
// Marks all used one-time request handlers as unused, allowing them to affect network again.
// printHandlers();
// Prints the list of currently active request handlers into the stdout of the running process.

// Methods of this namespace represents REST API request methods:

// rest.get()
// rest.post()
// rest.put()
// rest.patch()
// rest.delete()
// rest.options()
