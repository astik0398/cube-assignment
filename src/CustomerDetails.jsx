import React, { useEffect, useState } from "react";
import "./CustomerDetails.css";

const CustomerDetails = ({ activeIndex }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let response = fetch(
      "https://api.thedogapi.com/v1/images/search?limit=50&api_key=live_4H0yIoDnY1r7wZLAfPkuDAZg2mqxbm5bnojCmooMnBoziXUieogmW6kL8YT37vgs"
    );
    response
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        setData(res.map((item) => item.url));
        setLoading(false);
        console.log(data);
      });
  }, [activeIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData((prevData) => {
        const randomIndex = Math.floor(Math.random() * Math.random());
        const randomImage = prevData[randomIndex];
        return prevData
          .filter((_, index) => index !== randomIndex)
          .concat(randomImage);
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <div>
      <div className="customer-details">
        <h2>Customer {activeIndex + 1} Details Here</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          aliquam ex porro odit provident, eum aspernatur unde itaque voluptatem
          consequuntur ut consectetur distinctio illum incidunt aut quas facilis
          doloribus at. Maiores est, possimus quaerat numquam incidunt in cumque
          corporis aperiam. Ipsa architecto qui velit quibusdam, neque non
          tempora aperiam doloribus fugit consectetur a atque assumenda
          explicabo laudantium reiciendis dolorem ducimus!
        </p>
      </div>

      {loading ? (
        <div class="loader"></div>
      ) : (
        <div className="image-container">
          {data?.slice(0, 9).map((item, index) => (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
