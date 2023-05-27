import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: rikiwendri@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/F4YY",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/rikiwendri/",
  },
  {
    icon: faCode,
    url: "https://www.frontendmentor.io/profile/F4YY",
  },
];

const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement) {
                return;
            }
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll)

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
      zIndex={1}
    >
      <Box
        color="white"
        Width={{base:'fit-content', md:'fit-content', lg:'auto'}}
        margin="0 20px">
        <HStack
          px={{base:'auto', md:'auto', lg:16}}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
           <HStack
            spacing={{base:3, md:4, lg:8}}
          >
                {socials.map(({icon, url}) => (
                <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                      icon={icon}
                      size={{base:'xl', md:'xl', lg:'2xl'}}
                      key={url}
                    />
                </a>
                ))}
            </HStack>
          </nav>
          <nav>
            <HStack
              spacing={{base:2, md:4, lg:8}}
            >
              <a href="#bio" onClick={handleClick("bio")}>
                Bio
              </a>
              <a href="#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

