import React, { useEffect, useState } from 'react';
import "./covid.css"

const Covid = () => {

    const [data , setData] = useState([]);

    const  getCovidData = async () => {
       try {
        const res =await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0])
       } catch (error) {
           console.log(error);
       }
    }

    useEffect( () => {
        getCovidData();
    } , []); 

    return (
        <>
      <section id = "show">
        <h1>🔴 Live</h1>
        <h2>COVID-19 LIVE TRACKER</h2>  

        <div>
           <div className= "row">
               <div className = "col-lg-4">
                 <div className="card">
                   <div className= "card-inner">
                    <p className= "card__name"><span>TOTAL</span> COUNTRY</p>
                    <p className= "card__total">INDIA</p>
                 </div>
                 </div>
               </div>

               <div className = "col-lg-4">
                 <div className="card">
                   <div className= "card-inner">
                    <p className= "card__name"><span>TOTAL</span> RECOVERED</p>
                    <p className= "card__total">{data.recovered}</p>
                 </div>
                 </div>
               </div>

               <div className = "col-lg-4">
                 <div className="card">
                   <div className= "card-inner">
                    <p className= "card__name"><span>TOTAL</span> CONFIRMED</p>
                    <p className= "card__total">{data.confirmed}</p>
                 </div>
                 </div>
               </div>
           </div>

           <div className= "row">
               <div className = "col-lg-4">
                 <div className="card">
                   <div className= "card-inner">
                    <p className= "card__name"><span>TOTAL</span> DEATH </p>
                    <p className= "card__total">{data.deaths}</p>
                 </div>
                 </div>
               </div>

               <div className = "col-lg-4">
                 <div className="card">
                   <div className= "card-inner">
                    <p className= "card__name"><span>TOTAL</span> ACTIVE</p>
                    <p className= "card__total">{data.active}</p>
                 </div>
                 </div>
               </div>

               <div className = "col-lg-4">
                 <div className="card">
                   <div className= "card-inner">
                    <p className= "card__name"><span>LAST</span> UPDATED</p>
                    <p className= "card__total">{data.lastupdatedtime}</p>
                 </div>
                 </div>
               </div>
           </div>


        </div>

      </section>

        </>
    )
}

export default Covid