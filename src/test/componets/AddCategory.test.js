import "@testing-library/jest-dom";

import AddCategory from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("Pruebas de funcionamiento para componente <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(
    <AddCategory categories={[]} setCategories={setCategories} />
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <AddCategory categories={[]} setCategories={setCategories} />
    );
  });

  test("Debe mostrar correctamente el componente <AddCategory />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("input").prop("value")).toBe(value);
  });

  test("No debe de llamar el Submit del form si la caja de texto esta vacia", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola Mundo";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
