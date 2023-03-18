import { motion } from "framer-motion";
import { useState } from "react";
import { Container, Stack, Heading, Text, Image } from "@chakra-ui/react";

const data = [
  {
    id: 1,
    avatar: "https://picsum.photos/200/300?random=1",
    School: "ABC School",
    class: "Class A",
    percent: "80%",
  },
  {
    id: 2,
    avatar: "https://picsum.photos/200/300?random=2",
    School: "XYZ School",
    class: "Class B",
    percent: "90%",
  },
  {
    id: 3,
    avatar: "https://picsum.photos/200/300?random=3",
    School: "PQR School",
    class: "Class C",
    percent: "75%",
  },
];

const Card = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      <Image
        h={{ base: "", sm: "40", md: "40" }}
        src={item.avatar}
        p={{ base: 2, md: 5 }}
      />

      {isHovering && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
          }}
        >
          <Heading fontSize="xl" fontWeight="bold">
            {item.School}
          </Heading>
          <Heading fontSize="md" fontWeight="semibold">
            {item.class}
          </Heading>

          <Text py="2">{item.percent}</Text>
        </motion.div>
      )}
    </motion.div>
  );
};

const AnimatedCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxW="5xl">
        <Stack
          direction={{ base: "column", md: "column" }}
          spacing={{ base: 0, md: 5 }}
          p={{ base: 0, md: 5 }}
          bg={"white"}
          rounded={"xl"}
          boxShadow={"lg"}
          overflow={"hidden"}
        >
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Stack>
      </Container>
    </motion.div>
  );
};

export default AnimatedCards;