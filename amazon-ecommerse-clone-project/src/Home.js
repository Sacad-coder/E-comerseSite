import React from 'react';
import "./home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"  alt=""
               />

               <div className="home__row">
                   <Product 
                     id="425167887"
                     title ="Bose Sport Earbuds -Wireless Bluetooth earbuds engineered by Bose for your best workout yet - True Wireless Earphones - Bluetooth Headphones for Workouts and Running, Triple Black"
                    price="760"
                    rating={5}
                    image ="https://images-na.ssl-images-amazon.com/images/I/61k5%2Bdpy0yL._AC_SL1500_.jpg"
                   />

                
                   <Product 
                   id="2020202020202"
                   title="Huawei P40 Pro Plus 5G Dual SIM Smartphone (512 GB Storage, 8 GB RAM), Android 10 AOSP (NO Google PLAYSTORE), EMUI 10.1. Global ROM ELS-N39 - Ceramic Black" 
                    price="4090"  
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61VQD7PiuxL._AC_SL1000_.jpg"/>

                   <Product id="" title ="Dell XPS 15 7590 Laptop 15.6 inch, 4K UHD OLED InfinityEdge, 9th Gen Intel Core i7-9750H, NVIDIA GeForce GTX 1650 4GB GDDR5, 256GB SSD, 16GB RAM, Windows 10 Home, XPS7590-7572SLV-PUS, 15-15.99 inches"
                    price="6999.92"
                    rating={4}
                    image=" https://z9p9s2j5.rocketcdn.me/wp-content/uploads/2020/07/Dell-XPS-15-7590_1.jpg"/>
                   
    
               </div>
                 
               <div className="home__row">
                  <Product
                   id=""
                   title = "New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray (Latest Model)" price ={"5500"} image="https://dlb99j1rm9bvr.cloudfront.net/macbook-pro-13-inch-touch-bar-2020-4-port-skin/parts/angle-1/model/size-1000/bg.png"/>

                  <Product title="New Apple iPhone 12 Pro (128GB, Graphite)" price="4100"  rating ={2}
                   image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6Z2BlsXMmH3iSC6Iug5ZNexI2jbXCZ8FReT30y--8P03TZoimk_k&usqp=CAc"/>
                  
                  <Product title = "Lenovo Legion 5 (15) (Phantom Black" price = "3400" image="https://www.lenovo.com/medias/lenovo-laptop-legion-5-15-amd-subseries-gallery-4.png?context=bWFzdGVyfHJvb3R8NzU2MjB8aW1hZ2UvcG5nfGg3OS9oMGQvMTA4NDg3NzAxOTU0ODYucG5nfGNmZTBmZjEyYzg2ZTAzZjkwYzA3NjQ3YWQzNGYyYWNlMDFhYjk4ZjJlMGYwZTMyZTYwZWNjNzJiMWE4N2NiMzU"/>
                  
                  <Product
                  id="1029338376"
                  title = "Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Blue"
                  price = "1230"
                  rating ={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/71x8gW79x-L._AC_SL1500_.jpg"
                  />

               </div>

               <div className="home__row">
                <Product
                id=''
                title="Realme 7 5G (8GB RAM +128GB ROM) (Mist Blue)"
                price="1299"
                rating={5}
                image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPshqvFc6b6A__f4B99qIxuFm7fAQx0jCVDWXynfShCuE-4vyp_Ni4Mq-q2p_23q9tnP-aCde6anQ&usqp=CAc"
                />

                <Product
                id=''
                title="Oppo k7 5G plus (8GB RAM +128GB ROM) (Mist Blue)"
                price="1499"
                rating={5}
                image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQolHNVsR6WL-Xa1hCAQeoQVhz3sb1DBs2UyNnbsDLwBJBYl7c4roVwNq7QN11h7P1-NX_lXbQl6VU&usqp=CAc"
                />


               </div>
                   <strong><p>Gaming Products With Affordable Price😇</p></strong> 
               <div className="home__row">
                   
                   <Product
                    id='888979960'
                    title='Video Gaming Accessories and products Under' 
                    price = "299"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/319KAiGobEL._AC_SY200_.jpg"
                   />
                   <Product
                   id="1234697008"
                   title="RUNMUS Gaming Headset for PS4, Xbox One, PC Headset w/Surround Sound, Noise Canceling Over Ear Headphones with Mic & LED Light, Compatible with PS5, PS4, Xbox One, Switch, PC, PS3, Mac, Laptop"
                   price="132"
                   rating={5}
                   image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SL1500_.jpg"
                   />

               </div>


            </div>

        </div>
    );
}

export default Home
