import GifGrid from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFechGifs";
jest.mock("../../hooks/useFechGifs");

describe("Pruebas del componente <GifGrid />", () => {
  const category = "One Punch";

  test("Debe de mostrar el componente GifGrid", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar items cuando se recibe data del useFetchGifs", () => {
    //Mock
    const gifs = [
      { id: 1, title: "Title 1", url: "localhost/1.jpg" },
      { id: 2, title: "Title 2", url: "localhost/2.jpg" },
      { id: 3, title: "Title 3", url: "localhost/3.jpg" },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
