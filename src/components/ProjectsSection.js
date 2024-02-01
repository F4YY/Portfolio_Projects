// import React from "react";
// import FullScreenSection from "./FullScreenSection";
// import { Box, Heading } from "@chakra-ui/react";
// import Card from "./Card";
// import projects from '../projects.json';

// const ProjectsSection = () => {
//   return (
//     <FullScreenSection
//       backgroundColor="#14532d"
//       isDarkBackground
//       p={8}
//       alignItems="flex-start"
//       spacing={8}
//     >
//       <Heading as="h1" id="projects-section">
//         Featured Projects
//       </Heading>
//       <Box
//         display="grid"
//         gridTemplateColumns={{base:'repeat(1,minmax(0,1fr))',md:'repeat(3,minmax(0,1fr))',lg:'repeat(4,minmax(0,1fr))'}}
//         gridGap={8}
//       >
//         {projects.map((project) => (
//           <Card
//             key={project.title}
//             title={project.title}
//             description={project.description}
//             url={project.url}
//             imageSrc={project.ImageSrc}
//           />
//         ))}
//       </Box>
//     </FullScreenSection>
//   );
// };

// export default ProjectsSection;

import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Button, useMediaQuery } from "@chakra-ui/react";
import Card from "./Card";
import projects from '../projects.json';

const ProjectsSection = () => {
  const [isMobileScreen] = useMediaQuery("(max-width: 640px)");
  const [isTabletScreen] = useMediaQuery("(max-width: 991px)");

  const getInitialState = () => {
    if (isMobileScreen) {
      return 4; // Mobile screen
    } else if (isTabletScreen) {
      return 6; // Tablet screen
    } else {
      return 8; // Desktop screen
    }
  };

  const [cardsToShow, setCardsToShow] = useState(getInitialState());

  const ViewMore = () => {
    setCardsToShow(projects.length);
  };

  const ViewLess = () => {
    setCardsToShow(getInitialState());
  };

  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={{base: 4, md: 6, lg: 8}}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: 'repeat(1, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }}
        gridGap={8}
      >
        {projects.slice(0, cardsToShow).map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.ImageSrc}
          />
        ))}
      </Box>
      <Box textAlign="center" mt={4}>
        {cardsToShow < projects.length ? (
          <Button onClick={ViewMore} colorScheme="teal">
            View more...
          </Button>
        ) : (
          <Button onClick={ViewLess} colorScheme="teal">
            View less...
          </Button>
        )}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;





