import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function FeedbackCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false
        },
      },
    ],
  };

  const feedbacks = [
    {
      name: "Amey Vyas",
      role: "Pet Adoption Volunteer",
      text: "Volunteering for Petfriendlycity has been an eye-opening experience! The program's focus on finding loving homes for pets has been so rewarding.",
      image: "/pet_avatar1.jpg"
    },
    {
      name: "Suvan Agrawal",
      role: "Animal Welfare Advocate",
      text: "As an animal welfare advocate, Petfriendlycity's community outreach has truly inspired me. It’s amazing to see so many people come together to help pets in need.",
      image: "/pet_avatar2.jpg"
    },
    {
      name: "Uday Jadhav",
      role: "Volunteer Coordinator",
      text: "Helping coordinate volunteers for Petfriendlycity has been a fulfilling journey. The dedication of everyone involved makes a tangible impact on the lives of pets.",
      image: "/pet_avatar3.jpg"
    },
    {
      name: "Omkar Vyas",
      role: "Pet Foster Parent",
      text: "Fostering pets through Petfriendlycity has been a life-changing experience. It’s wonderful to see these pets thrive and get adopted into loving homes.",
      image: "/pet_avatar4.jpg"
    },
    {
      name: "Riya Patel",
      role: "Dog Walker Volunteer",
      text: "Being a dog walker for Petfriendlycity has been so fulfilling! The pets are full of energy and it's a joy to see them so happy during their walks.",
      image: "/pet_avatar5.jpg"
    },
    {
      name: "Neha Desai",
      role: "Pet Transport Volunteer",
      text: "Transporting pets to their new homes has been an incredibly rewarding role. Seeing the pets settle into their new lives is the best part of the job.",
      image: "/pet_avatar6.jpg"
    },
    {
      name: "Rahul Kumar",
      role: "Pet Wellness Advocate",
      text: "Working with Petfriendlycity to promote pet wellness and healthcare initiatives has been a privilege. It's amazing to see so many pets thrive with the right care and attention.",
      image: "/pet_avatar7.jpg"
    },
    {
      name: "Maya Sharma",
      role: "Volunteer Event Organizer",
      text: "Organizing pet adoption events with Petfriendlycity has been an absolute joy. It’s heartwarming to see families connect with pets that they can call their own.",
      image: "/pet_avatar8.jpg"
    },
    {
      name: "Vishal Reddy",
      role: "Pet Photography Volunteer",
      text: "Capturing the moments of pets waiting for adoption has been so impactful. Petfriendlycity’s mission to provide them with a new home is something I'm proud to support.",
      image: "/pet_avatar9.jpg"
    },
    {
      name: "Anjali Mehta",
      role: "Community Outreach Volunteer",
      text: "As a community outreach volunteer, I’ve seen firsthand how Petfriendlycity is making a difference in the lives of pets and pet owners alike. It’s been an amazing journey!",
      image: "/pet_avatar10.jpg"
    },
  ];
  
  

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-4 py-16 bg-gradient-to-br from-purple-50 to-white"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-left ml-10 mb-16 max-w-2xl"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-950 to-purple-700 bg-clip-text text-transparent mb-8">
           Stories!
        </h1>
        <p className="text-xl text-purple-900">
  <span className="font-semibold">Real stories, real impact!</span> Whether you're a pet lover looking to adopt or a volunteer making a difference, our community's experiences showcase the joy and fulfillment of helping pets find their forever homes.
</p>
      </motion.div>

      <Slider {...settings} className="px-2 sm:px-4 md:px-8 lg:px-12">
        {feedbacks.map((feedback, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 h-[400px]" // Added fixed height
          >
            <motion.div 
              whileHover={{ scale: 1.05, translateY: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 h-full backdrop-blur-sm bg-opacity-90 border border-purple-100 hover:border-purple-300 flex flex-col justify-between" // Added flex and justify-between
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center shadow-inner">
                    <span className="text-3xl font-semibold text-purple-700">{feedback.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-purple-950">
                      {feedback.name}
                    </h4>
                    <p className="text-purple-700 font-medium text-lg">{feedback.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed font-medium">{feedback.text}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <motion.div 
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="text-purple-500 text-3xl"
                >
                  ★
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
}

export default FeedbackCard;
