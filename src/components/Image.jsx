import { motion } from "framer-motion"; // Correct import for framer-motion

const images = [
  "/dog.jpg", "/cat.jpg", "/dog1.jpg", "/cat1.jpg",
  "/pet.jpg", "/cat3.jpg", "/dog3.jpg", "/cat4.jpg"
];

export default function EnterAnimation() {
  return (
    <div style={wrapper}>
      <h2 style={heading}>
        Here are some adorable faces that will inspire you to join our campaign and make a difference together!
      </h2>
      <div style={grid}>
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Pet ${index + 1}`}
            loading="lazy"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={imageStyle}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

const wrapper = {
  padding: "80px 20px",
  maxWidth: 1000,
  margin: "0 auto",
  textAlign: "center",
};

const heading = {
  fontSize: "2rem",
  fontWeight: "700",
  color: "#2F3E46",
  marginBottom: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};
