import { getGifs } from "../../helpers/getGifs";

describe("Test del helper getGifs Fecth", () => {
  test("Debe traer diez elementos", async () => {
    const gifs = await getGifs("Dragon ball");
    expect(gifs.length).toBe(10);
  });

  test("No se envía la categoría", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
