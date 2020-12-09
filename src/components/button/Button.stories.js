import StyledButton from ".";

export default {
  title: "Styled Button",
  component: StyledButton,
};

const Template = (args) => <StyledButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  w: "188px",
  size: "md",
  bgColor: "default.dark",
  textColor: "default.light",
  hoverColor: "neutral.700",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  w: "188px",
  size: "md",
  variant: "ghost",
  border: "2px solid",
  bgColor: "default.light",
  textColor: "default.dark",
  hoverColor: "gray.100",
  children: "Primary",
};
