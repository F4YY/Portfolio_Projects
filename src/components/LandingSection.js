import React from "react";
import { Avatar, HStack, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Riki from "./Riki.jpg";
import reactlogo from "./logo192.png";
import htmllogo from "./html.png";
import jslogo from "./js.png";
import csslogo from "./css.png";

const greeting = "Hello, I am Riki Wendri";
const bio1 = "FrontEnd / Software Engineer";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack
        spacing={14}
        pt={20}
        pb={20}
        id="bio-section"
        width={{base:'auto', md:'auto', lg:'auto'}}
        margin={{base:'0 20px', md:'auto', lg:'auto'}}
    >
        <VStack spacing={4} alignItems="center">
            <Avatar
                src={Riki}
                size="2xl"
                name="Riki Wendri"
                p={1}
                border='2px solid grey'
            />
            <Heading as="h4" size="md" noOfLines={1}>
                {greeting}
            </Heading>
        </VStack>
        <VStack
            spacing={6}
            textAlign={{base:'center', md:'auto', lg:'auto'}}
        >
            <Heading as="h1" size="2xl" noOfLines={2} lineHeight='auto' color='darkturquoise'>
                {bio1}
            </Heading>
            <HStack
                flexDirection={{base:'column',md:'row',lg:'row'}}
            >
                <HStack>
                    <Heading
                        as="h2"
                        size="lg"
                        noOfLines={{base:2, md:2, lg:1}}>
                        Specialized in <span>React</span>
                    </Heading>
                    <Avatar
                        className="App-logo"
                        src={reactlogo}
                        size="md"
                        name="react-logo"
                    />
                </HStack>
                <HStack>
                    <Avatar
                        src={htmllogo}
                        size="md"
                        name="html-logo"
                    />
                    <Avatar
                        src={jslogo}
                        size="md"
                        name="js-logo"
                    />
                    <Avatar
                        src={csslogo}
                        size="md"
                        name="css-logo"
                    />
                </HStack>
            </HStack>
        </VStack>
        <VStack
            textAlign={{base:'center', md:'left', lg:'auto'}}
        >
            <HStack
                gap={18}
                alignItems='top'
                display="flex"
                flexDirection={{base:"column", md:"column", lg:"row"}}
            >
                <Heading as="h5" size="sm" noOfLines={15} opacity='70%' fontWeight={200} lineHeight={1.5} maxWidth="600px">
                    Prior to joining the bootcamp, I had a successful career as a Construction Engineer for several years. However, I was eager to embark on a new journey and transition into the field of front-end development. Upon hearing rave reviews about the META FrontEnd Engineer course, I eagerly signed up and quickly found it to be an immensely enjoyable experience. Throughout the program, spanning a couple of months, I encountered both the most fulfilling and challenging period of my life. Since completing the course and obtaining certification, I have remained dedicated to honing my skills by actively participating in frontendmentor.io challenges.
                </Heading>
                <Heading as="h5" size="sm" noOfLines={15} opacity='70%' fontWeight={200} lineHeight={1.5} maxWidth="600px">
                    As a Front-End Engineer/Developer, I find joy in creating innovative programs that tackle intricate challenges. I appreciate the opportunity to approach problems with a reserved and thoughtful mindset, constantly learning and strategizing to find effective solutions. The ability to implement new ideas and discover solutions that benefit everyone energizes me.
                </Heading>
            </HStack>
        </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;