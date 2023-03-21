import { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import {
  chakra,
  Container,
  Stack,
  Text,
  Box,
  Link,
  TextProps
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
const MissionSection = () => {
  useEffect(() => {
    document.title = "About me"
}, [])
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }
      }>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        {/* <Box mr={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            boxShadow="lg"
            w="100%"
            h="100%"
            minW={{ base: 'auto', md: '30rem' }}
            maxH="20rem"
            // objectFit="cover"
            src={pic}
            rounded="md"
            zoom="true"

            transition="all 0.5s"
            _hover={{ transform: 'scale(1.05)' }}
            fallback={<Skeleton />}
          />
        </Box> */}
        <Stack direction="column" spacing={6} justifyContent="center">
            <Stack direction ="row"  >
          <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
            Hey <chakra.span color="teal.400">there</chakra.span>,  </chakra.h1>

            <motion.div
 initial={{ scale: 0 }}
 animate={{ rotate: 360, scale: 1.2 }}
 transition={{
   type: "spring",
   stiffness: 260,
   damping: 40,
   duration: 30,
  repeat: "Infinity",
  repeatType: "loop",
  repeatDelay: 1

 }} >

            <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
            <chakra.span color="teal.400">👋</chakra.span>
            </chakra.h1>



            </motion.div>
          </Stack>
          <Box>
            <Content>
              I am a full stack developer and a passionate learner. I love to build things and
              explore new technologies.
            </Content>
            <Content mt={4}>
              Currently, I am a Student at Vellore Institute of Technology, Vellore. I am a
              Third-year student pursuing B.Tech in Computer Science and Engineering with a
              specialization in Bioinformatics. I like to participate in hackathons and
              contribute to open source projects.
            </Content>
            <Content mt={4}>
            I am a board member for {' Team Infinix - VIT,Vellore. '} I am responsible for the development of the platform for displaying the Telemetry details of the Rover during the Run. We participate in the annual NASA, Human Exploration Rover Challenge (HERC).
            </Content>
            <Content mt={4}>
              I am a self-taught developer and a passionate learner.
            </Content>
          </Box>
        </Stack>
      </Stack>
      </motion.div>
    </Container>
  );
};

const Content = ({ children, ...props }: PropsWithChildren<TextProps>) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      {...props}
    >
      {children}
    </Text>
  );
};

// function DottedBox() {
//   return (
//     <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
//       <svg
//         color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
//         width="350"
//         height="420"
//         fill="none"
//       >
//         <defs>
//           <pattern
//             id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
//             x="0"
//             y="0"
//             width="20"
//             height="20"
//             patternUnits="userSpaceOnUse"
//           >
//             <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
//           </pattern>
//         </defs>
//         <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
//       </svg>
//     </Box>
//   );
// }

export default MissionSection;