import { useState } from "react";
import { PawPrint, Leaf, Heart, MapPin, Users, Dog } from "lucide-react";

const objectives = [
  {
    title: "Safe Zones for Pets",
    icon: <MapPin size={28} color="#3D8361" />,
    description: "Designate safe, traffic-free zones in neighborhoods for pets to roam and play freely.",
  },
  {
    title: "Eco-Friendly Pet Spaces",
    icon: <Leaf size={28} color="#3D8361" />,
    description: "Develop green spaces and parks that support pet health and environmental sustainability.",
  },
  {
    title: "Affordable Vet Access",
    icon: <Heart size={28} color="#3D8361" />,
    description: "Ensure all pet owners have access to affordable veterinary care and emergency services.",
  },
  {
    title: "Community Engagement",
    icon: <Users size={28} color="#3D8361" />,
    description: "Create events and programs that promote responsible pet ownership and community bonding.",
  },
  {
    title: "Pet-Friendly Infrastructure",
    icon: <PawPrint size={28} color="#3D8361" />,
    description: "Incorporate pet-friendly design in public transport, housing, and local businesses.",
  },
  {
    title: "Adoption Support",
    icon: <Dog size={28} color="#3D8361" />,
    description: "Promote pet adoption programs and provide support to pet owners and shelters.",
  },
];

export default function PetFriendlyObjectives() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={wrapper}>
      <h2 style={heading}>Objectives for a PetFriendly City</h2>
      <div style={grid}>
        {objectives.map((obj, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...card,
              transform: hovered === index ? "scale(1.05)" : "scale(1)",
              boxShadow:
                hovered === index
                  ? "0 10px 20px rgba(0,0,0,0.15)"
                  : "0 6px 12px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
            }}
          >
            <div>{obj.icon}</div>
            <h3 style={title}>{obj.title}</h3>
            <p style={desc}>{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const wrapper = {
  padding: "80px 20px",
  maxWidth: 1000,
  margin: "0 auto",
};

const heading = {
  fontSize: "2rem",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "40px",
  color: "#2F3E46",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "24px",
};

const card = {
  background: "#fdfcfb",
  borderRadius: "16px",
  padding: "24px",
  textAlign: "center",
  cursor: "pointer",
};

const title = {
  fontSize: "1.1rem",
  fontWeight: "600",
  margin: "12px 0 8px",
  color: "#3D8361",
};

const desc = {
  fontSize: "0.95rem",
  color: "#555",
};
