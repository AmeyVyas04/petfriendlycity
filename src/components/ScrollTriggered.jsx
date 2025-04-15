import { motion } from "framer-motion";
import { FixedSizeList as List } from "react-window"; // Importing react-window for virtualization

export default function ScrollTriggered() {
  return (
    <div style={container}>
      {/* Using react-window to virtualize the list */}
      <List
        height={600} // Set the height of the viewport
        itemCount={pets.length} // Number of items to render
        itemSize={480} // Height of each item (card)
        width="100%" // Full width of the container
      >
        {({ index, style }) => (
          <Card
            key={index}
            style={style} // Pass the style to the motion div
            image={pets[index][0]}
            hueA={pets[index][1]}
            hueB={pets[index][2]}
          />
        )}
      </List>
    </div>
  );
}

function Card({ image, hueA, hueB, style }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      style={{ ...cardContainer, ...style, willChange: "transform, opacity" }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      className="-mt-20"
      variants={cardVariants}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card}>
        <img src={image} alt="Pet" style={imgStyle} loading="lazy" />
        <div style={tag}>#PetLove</div>
      </motion.div>
    </motion.div>
  );
}

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const cardVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.95,  // Slightly smaller for initial state
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      duration: 0.4, // Faster animation duration for quick effect
    },
  },
};

const container = {
  margin: "100px auto",
  maxWidth: 800,
  padding: "0 20px 100px",
  width: "100%",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: 20,
  zIndex: 0,
  clipPath:
    'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',
};

const card = {
  width: 280,
  height: 400,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  borderRadius: 20,
  background: "#fdfcfb",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  overflow: "hidden",
  position: "relative",
  zIndex: 1,
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

const tag = {
  position: "absolute",
  bottom: 10,
  backgroundColor: "#3D8361",
  color: "white",
  padding: "6px 12px",
  borderRadius: 20,
  fontSize: "0.85rem",
  fontWeight: "600",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
};

const pets = [
  ["/pet.jpg", 140, 210],
  ["/cat.jpg", 20, 40],
  ["/dog.jpg", 60, 90],
  ["/cat1.jpg", 80, 120],
  ["/dog1.jpg", 100, 140],
  ["/cat3.jpg", 205, 245],
  ["/dog3.jpg", 260, 290],
  ["/cat4.jpg", 290, 320],
];
