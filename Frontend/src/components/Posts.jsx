import React, { useState } from "react";
import Turkey from "../images/Turkey.jpg";
import Greece from "../images/Greece.jpg";
import Jordan from "../images/Jordan.jpg";
import Dubai from "../images/Dubai.jpg";
import Mexico from "../images/Mexico.jpg";
import Paris from "../images/Paris.jpg";
import Goa from "../images/Goa.jpg";
import Rajasthan from "../images/Rajasthan.jpg";
import Khazaksthan from "../images/Khazaksthan.jpg";
import PostItem from "./PostItem";
import "../css/Posts.css";

const blogs_posts = [
  {
    id: "1",
    thumbnail: Turkey,
    category: "Asia",
    title: "Exploring Turkey: A Culinary and Cultural Odyssey",
    description:
      "Turkey, a transcontinental country bridging Europe and Asia, boasts a rich tapestry of history, culture, and natural beauty. From the ancient ruins of Ephesus to the stunning landscapes of Cappadocia, and the vibrant bazaars of Istanbul, Turkey offers a captivating blend of tradition and modernity, making it a must-visit destination.",
    authorID: "3",
  },
  {
    id: "2",
    thumbnail: Greece,
    category: "Europe",
    title: "Discovering the Wonders of Greece: From Mythology to Magnificence",
    description:
      "Greece, birthplace of democracy and ancient civilization, enchants visitors with its picturesque islands, ancient ruins, and delectable cuisine. From the iconic Acropolis of Athens to the sun-drenched beaches of Santorini, Greece offers a timeless journey through history and beauty.",
    authorID: "3",
  },
  {
    id: "3",
    thumbnail: Jordan,
    category: "Asia",
    title: "Journey Through Time: Exploring the Mysteries of Jordan",
    description:
      "Jordan, a land steeped in history and legend, beckons with its ancient wonders and dramatic landscapes. From the rose-red city of Petra to the vast desert of Wadi Rum, Jordan captivates travelers with its timeless beauty and warm hospitality.",
    authorID: "5",
  },
  {
    id: "4",
    thumbnail: Dubai,
    category: "Asia",
    title: "Dubai: A Modern Marvel in the Heart of the Desert",
    description:
      "Dubai, a city of superlatives, dazzles visitors with its futuristic skyline, extravagant shopping malls, and luxurious resorts. From the world's tallest building, the Burj Khalifa, to the man-made islands of Palm Jumeirah, Dubai offers a glimpse into the future amidst the Arabian desert.",
    authorID: "6",
  },
  {
    id: "5",
    thumbnail: Mexico,
    category: "North America",
    title: "Discovering Mexico: A Mosaic of Culture, Cuisine, and Color",
    description:
      "Mexico, land of ancient civilizations and vibrant traditions, enchants visitors with its diverse landscapes, rich history, and mouthwatering cuisine. From the majestic pyramids of Teotihuacan to the pristine beaches of Cancun, Mexico offers an unforgettable journey through time and culture.",
    authorID: "7",
  },
  {
    id: "6",
    thumbnail: Paris,
    category: "Europe",
    title: "Paris: The City of Lights and Love",
    description:
      "Paris, the epitome of romance and sophistication, captivates visitors with its iconic landmarks, world-class museums, and charming streets. From the majestic Eiffel Tower to the bohemian neighborhood of Montmartre, Paris offers a timeless allure that continues to inspire and enchant.",
    authorID: "1",
  },
  {
    id: "7",
    thumbnail: Goa,
    category: "Asia",
    title: "Goa: A Tropical Paradise of Sun, Sand, and Serenity",
    description:
      "Goa, India's smallest state, entices travelers with its golden beaches, lush landscapes, and vibrant culture. From the Portuguese colonial architecture of Old Goa to the lively beach parties of North Goa, this coastal paradise offers a perfect blend of relaxation and adventure.",
    authorID: "9",
  },
  {
    id: "8",
    thumbnail: Rajasthan,
    category: "Asia",
    title: "Rajasthan: A Journey Through India's Royal Heritage",
    description:
      "Rajasthan, the land of kings, enchants visitors with its majestic forts, opulent palaces, and colorful festivals. From the romantic lakeside city of Udaipur to the golden sands of Jaisalmer, Rajasthan offers a glimpse into India's rich cultural heritage and regal past.",
    authorID: "1",
  },
  {
    id: "9",
    thumbnail: Khazaksthan,
    category: "Asia",
    title: "Kazakhstan: Discovering the Hidden Gems of Central Asia",
    description:
      "Kazakhstan, the ninth largest country in the world, mesmerizes travelers with its vast steppes, rugged mountains, and ancient Silk Road cities. From the futuristic skyline of Nur-Sultan to the historic beauty of Almaty, Kazakhstan offers a fascinating blend of tradition and modernity.",
    authorID: "10",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(blogs_posts);

  return (
    <>
      <div className="pre-text">
        <h5 className="blog-heading-text">Read Our Blogs</h5>
        <p>•••</p>
      </div>
      <section className="posts">
        <div className="post_container">
          {posts.map(
            ({ id, thumbnail, category, title, description, authorId }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={authorId}
              />
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Posts;
