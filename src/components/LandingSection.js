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
                <Heading as="h5" size="sm" noOfLines={7} opacity='70%' fontWeight={200} lineHeight={1.5} maxWidth="600px">
                    I was a Construction Engineer for years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience there.
                    I signed up for the META FrontEnd Engineer course and found it incredibly fun! I enrolled shortly thereafter. The next 4 months was the best - and most grueling - time in my life.
                    Since completing the course and got certified, I'm sharpening my skills in frontendmentor.io challenges. Now I’m looking for switched careers, working as a FrontEnd/Software Engineer.
                </Heading>
                <Heading as="h5" size="sm" noOfLines={8} opacity='70%' fontWeight={200} lineHeight={1.5} maxWidth="600px">
                    I enjoy developing new programs that solve complex problems. I like being reserved and thoughtful, love learning constantly and thinking through issues, real or hypothetical.
                    And being a FrontEnd/Software Engineer could implement more ideas to find new solutions that work for everyone, that tend me to feel energized.
                </Heading>
            </HStack>
        </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;