import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,

  useDisclosure,
  Button,


} from '@chakra-ui/react';
import Pic from '../../images/podium-radius.webp';
import { Flex } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub, FaFile } from 'react-icons/fa';
import Resume from '../../data/Resume.pdf';


const ArticleList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  return (
    <Container maxW={'7xl'}>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={Pic}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>

          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Welcome to My Portfolio
            </Link>

          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Hey I am Shreyaan Pradhan, a final year Computer Science student at the Vellore Institute of Technology, Vellore (Undergraduate). I am a full stack developer with a passion for building beautiful and functional applications.
          </Text>
          <Flex marginTop="20" alignItems="center" justifyContent="space-between">
            <HStack spacing="3" display="flex" alignItems="center">
              <a href="https://github.com/Shreyaanp">
                <Tag size="md" variant="solid" colorScheme="orange">
                  <FaGithub />
                  <Text marginLeft="2">Github</Text>
                </Tag>
              </a>
              <a href="https://www.linkedin.com/in/shreyaan-pradhan/">
                <Tag size="md" variant="solid" colorScheme="orange">
                  <FaLinkedin />
                  <Text marginLeft="2">LinkedIn</Text>
                </Tag>
              </a>
                <Tag size="md" variant="solid" colorScheme="orange"
                ref={btnRef} onClick={onOpen}
                // onhover change the cursor to pointer
                onMouseEnter={() => {
                  document.body.style.cursor = "pointer";
                }}
                onMouseLeave={() => {
                  document.body.style.cursor = "default";
                }
                }
                >
                  <FaFile />
                  <Text marginLeft="2">Resume</Text>
                </Tag>


              <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}

                size="6xl"
                isCentered

              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Resume</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      title="PDF Viewer"
                      src={Resume}
                      width="100%"
                      height="500px" // You can adjust the height as needed
                    />
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={() => {
                        window.open(Resume);
                      }}
                    >
                      Download
                    </Button>
                    <Button onClick={
                      () => {
                        onClose();
                      }
                    }>
                      Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Container >
  );
};



export default ArticleList;