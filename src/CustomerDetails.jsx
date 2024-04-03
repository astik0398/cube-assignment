import React, { useEffect, useState } from 'react'

const CustomerDetails = ({activeIndex}) => {

    const [data, setData] = useState([])

    useEffect(()=> {
        let response = fetch('https://jsonplaceholder.typicode.com/photos?_limit=200')
        response.then(function(res){
            return res.json()
        })
        .then(function(res){
            setData(res.map(item=> item.url))
            console.log(data);
        })
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setData(prevData => {
                const randomIndex = Math.floor(Math.random() * Math.random());
                const randomImage = prevData[randomIndex];
                return prevData.filter((_, index) => index !== randomIndex).concat(randomImage);
            });
        }, 10000);

        return () => clearInterval(intervalId);
    }, [data]);

  return (
    <div>
        <div style={{width:'90%', margin:'auto'}}>
        <h2>Customer {activeIndex+1} Details Here</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla aliquam ex porro odit provident, eum aspernatur unde itaque voluptatem consequuntur ut consectetur distinctio illum incidunt aut quas facilis doloribus at.
        Maiores est, possimus quaerat numquam incidunt in cumque corporis aperiam. Ipsa architecto qui velit quibusdam, neque non tempora aperiam doloribus fugit consectetur a atque assumenda explicabo laudantium reiciendis dolorem ducimus!
        </p>
    </div>

    <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'25px', width:'90%', margin:'auto', marginTop:'40px'}}>
    {data?.slice(0, 9).map((item, index) => (
                    <div key={index}>
                        <img style={{ width: '250px', borderRadius: '25px' }} src={item} alt="" />
                    </div>
                ))}
    </div>
    </div>
  )
}

export default CustomerDetails