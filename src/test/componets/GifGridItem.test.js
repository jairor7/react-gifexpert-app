import shallow from "enzyme/shallow";
import GifGridItem from "../../components/GifGridItem";

describe("Test to component GifGridItem", () => {
  const title = "Title";
  const url = "http://localhost/algo.gif";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Should show correct GifGridItem", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should show correct title", () => {
    const textTitle = wrapper.find("p").at(0).text().trim();
    expect(textTitle).toBe(title);
  });

  test("Should show correct props of the image", () => {
    const img = wrapper.find("img");
    // const propsImg = img.props();  //Para buscar cada pros se puede usar propsImg.src
    const textUrl = img.prop("src");
    const textTitle = img.prop("alt");
    expect(textUrl).toBe(url);
    expect(textTitle).toBe(title);
  });

  test("Img should have class animate__animated", () => {
    const classAnimated = "animate__animated";
    const div = wrapper.find("div");
    const propsDiv = div.prop("className");
    expect(propsDiv.includes(classAnimated)).toBe(true);
  });
});
