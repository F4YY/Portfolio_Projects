import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Space Tourism Multipage Website",
    description:
      "This project is a collaboration between FrontEnd Mentor, Scrimba, and Kevin Powell. One of Intermediate level challenge in frontendmentor.io, is to build out the multi-page space tourism website.",
    ImageSrc: () => require("./images/spacetourism.jpg"),
    url:'https://spacetourism-multipage.netlify.app/'
  },
  {
    title: "Job Listings with Filtering",
    description:
      "In this challenge, you'll be using JavaScript to filter out jobs based on selected categories. We provide a local JSON file to help you practice working with JSON data.",
    ImageSrc: () => require("./images/Joblistings.jpg"),
    url:'https://joblistings-filtering.netlify.app/'
  },
  {
    title: "Loopstudios Landing page",
    description:
      "One of Junior level challenge in frontendmentor.io, is to build out the Loopstudios landing page website responsive design for each device screen. 🔥️",
    ImageSrc: () => require("./images/loopstudioslanding.jpg"),
    url:'https://loopstudioz-landing.netlify.app'
  },
  {
    title: "Sunnyside Agency Landing page",
    description:
      "A grid base display challenge in frontendmentor.io, is to build out the Sunnyside Agency landing page website responsive design for each device screen",
    ImageSrc: () => require("./images/sunnysideagency.jpg"),
    url:'https://sunnyside-agency-landings.netlify.app'
  },
  {
    title: "Blogr Landing page",
    description:
      "Flex your layout muscles with this landing page challenge. You'll mostly be working with HTML & CSS for this project with a tiny bit of JS for the mobile menu",
    ImageSrc: () => require("./images/blogrlanding.jpg"),
    url:'https://blogrlandingpages.netlify.app'
  },
  {
    title: "Age Calculator App",
    description:
      "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
    ImageSrc: () => require("./images/age-calculator.jpg"),
    url:'https://aging-calculator.netlify.app'
  },
  {
    title: "Intro section with dropdown navigation",
    description:
      "This challenge will test your ability to create dropdown navigation menus, a common pattern on larger sites. It will also provide some nice basic layout challenges.",
    ImageSrc: () => require("./images/introsectiondropdown.jpg"),
    url:'https://introdropdown-nav.netlify.app'
  },
  {
    title: "Testimonials grid section",
    description:
      "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it! 🔥️",
    ImageSrc: () => require("./images/testimonialsgrid.jpg"),
    url:'https://testimonials-grids-section.netlify.app'
  },
  {
    title: "Intro component with sign-up form",
    description:
      "Practice building out a sign-up form complete with client-side validation using JavaScript.",
    ImageSrc: () => require("./images/introsignupform.jpg"),
    url:'https://introsignupformik.netlify.app'
  },
  {
    title: "News homepage",
    description:
      "This news homepage will be an excellent opportunity to practice your CSS Grid skills. There will be lots of tricky decisions to make and plenty of learning opportunities!",
    ImageSrc: () => require("./images/newshomepage.jpg"),
    url:'https://news-homepager.netlify.app'
  },
  {
    title: "Time tracking dashboard",
    description:
      "A perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch, we provide a JSON data file to practice working with data.",
    ImageSrc: () => require("./images/timetracking.jpg"),
    url:'https://timetrackings-dashboard.netlify.app'
  },
  {
    title: "Pricing component with toggle",
    description:
      "This challenge will get you thinking about building an accessible custom toggle control and also test your layout skills. 🔥️",
    ImageSrc: () => require("./images/pricingwithtoggle.jpg"),
    url:'https://pricingwithtoggle.netlify.app'
  },
  {
    title: "Clipboard landing page",
    description:
      "Put your layout skills to the test with this HTML & CSS landing page challenge. This challenge includes a design for hover states.",
    ImageSrc: () => require("./images/clipboardlanding.jpg"),
    url:'https://clipboard-landings.netlify.app'
  },
  {
    title: "FAQ accordion card",
    description:
      "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
    ImageSrc: () => require("./images/faqaccordion.jpg"),
    url:'https://faqs-accordion.netlify.app'
  },
  {
    title: "Base Apparel coming soon page",
    description:
      "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
    ImageSrc: () => require("./images/baseapparel.jpg"),
    url:'https://baseapparelcoming.netlify.app'
  },
  {
    title: "Interactive rating component",
    description:
      "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript! 🔥️",
    ImageSrc: () => require("./images/interactiverating.jpg"),
    url:'https://interactives-rating.netlify.app'
  },
  {
    title: "3-column preview card component",
    description:
      "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
    ImageSrc: () => require("./images/3columncards.jpg"),
    url:'https://3columns-preview-card.netlify.app'
  },
  {
    title: "Results summary component",
    description:
      "This challenge has something for everyone. It’s a HTML and CSS only project, but we’ve also provided a JSON file of the test results for anyone wanting to practice JS.",
    ImageSrc: () => require("./images/resultsummary.jpg"),
    url:'https://result-summaries.netlify.app'
  },
  {
    title: "Social proof section",
    description:
      "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
    ImageSrc: () => require("./images/socialproof.jpg"),
    url:'https://socialsproofsection.netlify.app'
  },
  {
    title: "Article preview component",
    description:
      "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well. 🔥️",
    ImageSrc: () => require("./images/articlepreview.jpg"),
    url:'https://article-previewer.netlify.app'
  },
  {
    title: "Project tracking intro component",
    description:
      "Some interesting layout and code challenges are baked into this design. Perfect if you're a beginner who is starting to get a bit more confident with your layouts.",
    ImageSrc: () => require("./images/projecttracking.jpg"),
    url:'https://project-tracking-intros.netlify.app'
  },
  {
    title: "Stats preview card component",
    description:
      "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
    ImageSrc: () => require("./images/statspreview.jpg"),
    url:'https://stats-previewer-card.netlify.app'
  },
  {
    title: "Order summary component",
    description:
      "A perfect project for newbies who are starting to build confidence with layouts!",
    ImageSrc: () => require("./images/order-summary.jpg"),
    url:'https://ordered-summary.netlify.app/'
  },
  {
    title: "Profile card component",
    description:
      "This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!",
    ImageSrc: () => require("./images/Profile-card.jpg"),
    url:'https://profiler-card.netlify.app/'
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{base:'repeat(1,minmax(0,1fr))',md:'repeat(3,minmax(0,1fr))',lg:'repeat(4,minmax(0,1fr))'}}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.ImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;