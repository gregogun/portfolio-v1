import lgL from "./light/portfolio_light@lg.jpg";
import mdL from "./light/portfolio_light@md.jpg";
import smL from "./light/portfolio_light@sm.jpg";
import lgD from "./dark/portfolio_dark@lg.jpg";
import mdD from "./dark/portfolio_dark@md.jpg";
import smD from "./dark/portfolio_dark@sm.jpg";

const portfolio = {
  light: [lgL, mdL, smL],
  dark: [lgD, mdD, smD],
};

console.log(portfolio);

export default portfolio;
