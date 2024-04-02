import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import PostAuthor from "../PostAuthor";
import "../../css/PostDetail.css";
import { Link } from "react-router-dom";
import Turkey from "../../images/Turkey.jpg";

const PostDetail = () => {
  return (
    <>
      <Header />
      <section className="post_detail">
        <div className="post-detail_container">
          <div className="post-detail_header">
            <PostAuthor />
            <div className="post-deatil_buttons">
              <Link to={`/posts/werwer/edit`} className="btn-edit">
                Edit
              </Link>
              <Link to={`/posts/werwer/delete`} className="btn-delete">
                Delete
              </Link>
            </div>
          </div>
          <h1>Exploring Turkey: A Culinary and Cultural Odyssey</h1>
          <div className="post-detail_thumbnail">
            <img src={Turkey} alt="Turkey" />
          </div>
          <div className="post-detail-paratext">
            <p>
              <b>Introduction: Discovering the Treasures of Turkey </b> <br />
              Welcome to the land where East meets West, where ancient ruins
              whisper tales of civilizations long past, and where the aroma of
              spices fills the air. *Turkey*, a country rich in history,
              culture, and cuisine, offers a treasure trove of experiences for
              the intrepid traveler. Join us on a journey through the vibrant
              streets of *Istanbul*, the surreal landscapes of *Cappadocia*, and
              the sun-kissed beaches of the Aegean coast as we uncover the
              wonders of this fascinating destination. <br /> <br />
              <b> Istanbul: Where East Meets West </b>
              <br />
              Step into the heart of *Istanbul*, where the majestic domes of the
              *Hagia Sophia* and the Blue Mosque dominate the skyline. Lose
              yourself in the labyrinthine streets of the *Grand Bazaar*, where
              merchants hawk their wares amidst a cacophony of colors and
              sounds. Indulge your taste buds in the city's culinary delights,
              from succulent *kebabs* to decadent *baklava*. Don't forget to
              take a leisurely cruise along the *Bosphorus*, where Europe and
              Asia converge, offering breathtaking views of the city's iconic
              landmarks. <br /> <br />
              <b>Cappadocia: A Land of Fairy Chimneys and Hot Air Balloons</b>
              <br />
              Journey to the otherworldly landscapes of *Cappadocia*, where
              towering rock formations known as fairy chimneys stand sentinel
              over the land. Explore ancient cave dwellings carved into the soft
              volcanic rock, marvel at the intricate frescoes adorning the walls
              of the *Goreme Open-Air Museum*, and embark on a
              once-in-a-lifetime hot air balloon ride at sunrise, where the sky
              is ablaze with color and the landscape below is bathed in golden
              light. End your day with a traditional Turkish dinner under the
              stars, surrounded by the magical scenery that defines this. <br />{" "}
              <br />
              <b> Conclusion: Embracing the Allure of Turkey</b>
              <br />
              As our journey through Turkey comes to an end, we are left with
              memories of bustling bazaars, breathtaking landscapes, and
              mouthwatering cuisine. From the ancient streets of Istanbul to the
              ethereal landscapes of Cappadocia, Turkey has captured our hearts
              with its rich tapestry of culture and history. Whether you're
              exploring its vibrant cities, relaxing on its sun-soaked beaches,
              or venturing off the beaten path, Turkey promises an unforgettable
              experience that will linger in your memory long after you've said
              goodbye. So, what are you waiting for? Embark on your own Turkish
              adventure and discover the magic of this enchanting destination
              for yourself. <br /> <br />
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PostDetail;