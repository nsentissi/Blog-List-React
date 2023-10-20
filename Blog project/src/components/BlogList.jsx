import React from "react";
import Blog from "./Blog";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogList = ({ blogs, setBlogs }) => {
  const [isLongTextExpanded, setLongTextExpanded] = useState(false);

  const toggleLongText = () => {
    setLongTextExpanded(!isLongTextExpanded);
  };

  return (
    <>
      <h2 className="title-list">
        Explore the World Through Our Traveler's Eyes: A Collection of Diverse
        Travel Blogs
      </h2>
      <div className="listBlogs">
        <div className="card " style={{ width: "25rem" }}>
          <img
            src="https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE="
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title ">My trip to Paris</h5>
            <p
              className={`card-text ${
                isLongTextExpanded ? ".text" : "long-text"
              }`}
            >
              Embarking on a personal journey through the enchanting streets of
              Paris was a dream come true. From savoring delectable pastries in
              Montmartre to gazing at the shimmering lights from the Eiffel
              Tower, my Paris adventure was a tapestry of unforgettable moments.
              I roamed through the Louvre's hallowed halls, got lost in charming
              bookshops along the Seine, and felt the city's heartbeat in its
              quaint cafes. Paris became more than a destination; it became a
              part of me, etching its beauty, history, and spirit into my very
              being. Join me as I share the tales of my Parisian escapade, a
              journey that left an indelible mark on my heart.
            </p>
            <p className="card-text">04/02/2022</p>
            <p className="card-text">Joe Mcclein</p>
            <button onClick={toggleLongText} className="btn btn-info">
              {isLongTextExpanded ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://media.nomadicmatt.com/2023/madriditinerary.jpeg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title ">My trip to Madrid</h5>
            <p
              className={`card-text ${
                isLongTextExpanded ? ".text" : "long-text"
              }`}
            >
              A journey through Madrid is an enchanting experience that
              seamlessly blends rich history with vibrant modernity. The Spanish
              capital, adorned with architectural masterpieces like the Royal
              Palace and the Almudena Cathedral, offers a glimpse into its regal
              past. Strolling through the historic neighborhoods of La Latina
              and Lavapiés, one can savor the city's authentic flavors and
              immerse in its lively street culture. Madrid's world-renowned art
              scene is beautifully encapsulated at the Prado Museum, home to
              countless masterpieces, while Retiro Park provides a tranquil
              escape within the bustling metropolis. Evenings in Madrid come
              alive with the rhythm of flamenco, as the city's residents and
              visitors alike revel in the passionate dance and music. Madrid's
              warmth, artistry, and culinary delights make it a destination that
              lingers in the heart, beckoning travelers to return for another
              captivating adventure.
            </p>
            <p className="card-text">03/11/2021</p>
            <p className="card-text">Pedro Alfonso</p>
            <button onClick={toggleLongText} className="btn btn-info">
              {isLongTextExpanded ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Bogot%C3%A1_Colpatria_Night.jpg/800px-Bogot%C3%A1_Colpatria_Night.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title ">My trip to Bogota</h5>
            <p
              className={`card-text ${
                isLongTextExpanded ? ".text" : "long-text"
              }`}
            >
              Bogotá, the vibrant capital of Colombia, is a city that weaves
              together a tapestry of contrasts. Nestled high in the Andes, it's
              a place where modern skyscrapers and historic colonial
              architecture stand side by side, creating a captivating urban
              landscape. The city's cultural richness shines through its
              numerous museums, showcasing a deep appreciation for art and
              history, and the Gold Museum's pre-Columbian treasures are nothing
              short of awe-inspiring. Bogotá's bustling streets are a testament
              to its energy, with street vendors, bustling markets, and a
              thriving culinary scene. Visitors can explore the charming La
              Candelaria district's cobbled streets, where history whispers from
              every corner, and take a cable car ride up the Cerro de Monserrate
              for breathtaking views of the city. As the city transforms from
              day to night, Bogotá's dynamic nightlife offers an array of
              entertainment, from live music venues to traditional salsa clubs.
              In Bogotá, the collision of tradition and progress creates a city
              that's as diverse as it is captivating, leaving travelers
              enchanted by its unique charm.
            </p>
            <p className="card-text">18/08/23</p>
            <p className="card-text">Linda Catalina</p>
            <button onClick={toggleLongText} className="btn btn-info">
              {isLongTextExpanded ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://www.alksar.com/wp-content/uploads/2017/03/remparts-chaines-Atlas.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title ">My trip to Marrakech</h5>
            <p
              className={`card-text ${
                isLongTextExpanded ? ".text" : "long-text"
              }`}
            >
              Marrakech, a mesmerizing jewel in the heart of Morocco, is a city
              that transports visitors to an enchanting world of exotic beauty
              and vibrant culture. The historic Medina, a UNESCO World Heritage
              Site, is a maze of narrow alleys where centuries-old traditions
              thrive amidst the colorful souks, where you can haggle for spices,
              textiles, and intricate handicrafts. The grandeur of Marrakech
              comes to life at the Bahia Palace and the intricately tiled Ben
              Youssef Madrasa, showcasing the city's architectural splendor. The
              city's beating heart, Djemaa el-Fna, transforms from a bustling
              marketplace by day into an open-air theater of storytellers,
              musicians, and food vendors by night, offering an immersive
              sensory experience. Marrakech is a paradise for food lovers, with
              its aromatic tagines, fragrant couscous, and fresh mint tea. And
              when you need to unwind, there's no better place than a
              traditional riad or a hammam, where relaxation and rejuvenation
              await. Marrakech's blend of ancient allure and modern vitality
              makes it an unforgettable destination that lingers in the soul
              long after you've left its captivating embrace.
            </p>
            <p className="card-text">01/03/23</p>
            <p className="card-text">Nawfal Sentissi</p>
            <button onClick={toggleLongText} className="btn btn-info">
              {isLongTextExpanded ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        <div className="card" style={{ width: "25rem" }}>
          <img
            src="data:image/jpeg;base64,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"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title ">My trip to Cancun</h5>
            <p
              className={`card-text ${
                isLongTextExpanded ? ".text" : "long-text"
              }`}
            >
              Cancún, a paradise nestled on Mexico's Yucatán Peninsula, is a
              destination that embodies the essence of tropical bliss. Its
              powdery white sand beaches, fringed by crystal-clear turquoise
              waters, beckon sun-seekers and water enthusiasts from around the
              globe. The Riviera Maya's all-inclusive resorts offer a haven of
              relaxation, complete with luxurious spa treatments and world-class
              dining experiences. But Cancún is not just about unwinding on the
              beach; it's also a gateway to ancient Mayan wonders. The nearby
              archaeological site of Tulum perches on the cliffs, offering
              breathtaking views of the Caribbean Sea, and Chichen Itza, a
              UNESCO World Heritage Site, boasts the iconic El Castillo pyramid.
              The nightlife in Cancún is legendary, with lively clubs,
              beachfront bars, and vibrant fiestas that carry the festivities
              well into the early hours. Whether you're seeking adventure in the
              lush jungles of the region, exploring the depths of cenotes, or
              simply savoring a tranquil sunset, Cancún's natural beauty and
              lively spirit make it a dream destination that promises
              unforgettable memories under the Mexican sun
            </p>
            <p className="card-text">19/06/2023</p>
            <p className="card-text">Jessica Parker</p>
            <button onClick={toggleLongText} className="btn btn-info">
              {isLongTextExpanded ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        {blogs.map((blog) => {
          return (
            <Blog
              /* key={Date.now()} */
              blog={blog}
              blogs={blogs}
              setBlogs={setBlogs}
              isLongTextExpanded={isLongTextExpanded}
              setLongTextExpanded={setLongTextExpanded}
              toggleLongText={toggleLongText}
            />
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
