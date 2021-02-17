import Circle from "./Circle";

export default {
  title: "Circle",
  component: Circle,
};

const Template = (args) => <Circle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  stroke: "#865cff",
  strokeWidth: "2px",
};
