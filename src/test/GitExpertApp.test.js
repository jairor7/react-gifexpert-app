import { shallow } from "enzyme";
import GitExpertApp from "../GifExpertApp";

describe("Pruebas al componente <GitExpertApp />", () => {
  test("Debe de mostrar el componente correctamente", () => {
    const wrapper = shallow(<GitExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar una lista de categorias", () => {
    const categories = ["One Punch", "Samurai X", "Dragon Ball"];
    const wrapper = shallow(<GitExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
