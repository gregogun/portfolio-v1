import { StyledButton } from ".";

export default {
  title: "Styled Button",
  component: StyledButton,
};

const Template = (args) => <StyledButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  w: "188px",
  size: "lg",
  bg: "default.dark",
  color: "default.light",
  hoverColor: "neutral.700",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  w: "188px",
  size: "lg",
  border: "2px solid",
  bg: "default.light",
  color: "default.dark",
  hoverColor: "gray.100",
  children: "Secondary",
};
