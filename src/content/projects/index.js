import React from "react";
import { GitjobsImg, PortfolioImg } from "../../assets/images";

const projects = [
  {
    name: "This Site",
    info: [
      "Built with React using parcel bundler for it's no-config approach.",
      "Using Chakra UI to build the UI.",
      "Using storybook for visual testing and building reusable components.",
      "Going forward, I'm hoping to integrate Gatsby for it's SEO, MDX & SSG features.",
    ],
    media: <PortfolioImg />,
    live: null,
    // need to update to current site url once site goes public
    repo: null,
    id: 1,
  },
  {
    name: "gitjobs",
    info: [
      "Search for jobs available on the Github Jobs site, with reimagined, fully responsive design and functionality.",
      "You can search by job title/keyword, location or full time positions.",
      "Supports light/dark mode.",
    ],
    media: <GitjobsImg />,
    live: "https://go-gitjobs.netlify.app",
    repo: "https://github.com/gregogun/github-jobs-api",
    id: 2,
  },
];

export default projects;
