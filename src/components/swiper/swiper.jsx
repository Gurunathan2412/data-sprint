import React from "react";
import './swiper.scss'
import Countdown from "../timer/timer";
// import "../timer/timer.scss"
// import "./temp.css"
import Type from "../type/type";
const Card=()=>{
  const dt=[
    {
      "title": "AI-Powered IoT Solutions",
      "challenge": "Revolutionize IoT with AI",
      "desc": "The fusion of AI and IoT is creating smarter, more responsive systems. Your challenge is to develop an AI-powered IoT solution that enhances connectivity and automation. How can we integrate AI to enable real-time data analysis, autonomous decision-making, and seamless device interaction? Build a smart IoT application that leverages AI to optimize performance and provide actionable insights, driving innovation in connected environments.",
      "id": "DS-01"
    },
    {
      "title": "Augmented Reality / Virtual Reality (AR / VR)",
      "challenge": "Innovate AR/VR Experiences with AI",
      "desc": "Augmented Reality (AR) and Virtual Reality (VR) are transforming digital interactions, and AI can elevate these experiences further. Your challenge is to create an AI-enhanced AR/VR application that offers immersive and interactive experiences. How can we use AI to improve real-time object recognition, environment mapping, or user interactions? Develop an AR/VR solution that integrates AI to provide richer, more intuitive, and engaging virtual experiences.",
      "id": "DS-02"
    },
    {
      "title": "Financial Technology (FinTech)",
      "challenge": "Innovate the Future of Finance",
      "desc": "In the rapidly evolving world of finance, traditional systems are being outpaced by innovative technologies. Your challenge is to develop an AI-driven solution that transforms financial operations. How can we leverage machine learning to enhance fraud detection, automate trading strategies, or provide personalized financial recommendations? Design a cutting-edge FinTech application that optimizes financial transactions, improves security, and delivers a superior user experience.",
      "id": "DS-03"
    },
    {
      "title": "Forecasting / Recommendation System",
      "challenge": "Enhance Prediction and Personalization with AI",
      "desc": "Accurate forecasting and personalized recommendations are crucial for many industries. Your task is to develop an AI-driven system that improves prediction accuracy or enhances user recommendations. How can we use machine learning to analyze data trends, predict future outcomes, and offer tailored suggestions? Create a solution that leverages AI to deliver precise forecasts and personalized recommendations, optimizing decision-making and user engagement.",
      "id": "DS-04"
    },
    {
      "title": "Generative AI",
      "challenge": "Push the Boundaries of Creativity",
      "desc": "Generative AI is revolutionizing content creation across multiple domains. Your task is to create an AI solution that can generate novel and engaging content—whether text, images, or audio. How can we harness deep learning to produce creative outputs that rival human ingenuity? Develop a generative AI model that creates innovative and high-quality content, demonstrating the potential of AI to enhance creativity and expand possibilities.",
      "id": "DS-05"
    },
    {
      "title": "ML Applications in Defense, Agriculture, Medicine & Image Classification",
      "challenge": "Apply ML to Real-World Challenges",
      "desc": "Machine Learning (ML) offers transformative potential across various sectors. Your challenge is to create an ML application that addresses critical needs in medicine, defense, agriculture, or image classification. How can we use AI to improve diagnostics, enhance security, optimize farming practices, or refine image recognition? Design a solution that leverages ML to solve complex problems and drive significant advancements in these fields.",
      "id": "DS-06"
    },
    {
      "title": "Natural Language Processing and Its Applications",
      "challenge": "No Equivalent Challenge Available in Provided Data",
      "desc": "No Equivalent Challenge Available in Provided Data",
      "id": "DS-07"
    },
    {
      "title": "Robotics / Autonomous System",
      "challenge": "Build Intelligent Autonomous Solutions",
      "desc": "Autonomous systems and robotics are transforming industries by bringing advanced automation and intelligence to physical tasks. Your challenge is to design an AI-powered robotics solution that excels in performing complex tasks or navigating dynamic environments. How can we integrate AI to make robots more adaptive, efficient, and capable? Develop an autonomous system that pushes the boundaries of what robots can achieve, enhancing productivity and safety.",
      "id": "DS-08"
    }
  ]
  
  
//   const dt=[
//   {
//     "img":"",
//     "title":"AI in renewable energy.",
//     "desc":"Applying AI to enhance renewable energy systems, optimizing efficiency and sustainability in power generation and distribution.",
//     "id":"DS-01"
//   },
//   {
//   "img":"",
//      "title":"Track wildlife habitats and foretell the extinction of endangered animal species.",
//     "desc":"Monitoring ecosystems, predicting endangered species' survival using AI to safeguard biodiversity and prevent extinction.",
//     "id":"DS-02"

//   },
//   {
  
//   "img":"",
//      "title":"Virtual Assistant support for health care",
//     "desc":"AI-powered virtual assistant aiding healthcare professionals and patients with medical information and support.",
//     "id":"DS-03"
//   },
//   {
//   "img":"",
//      "title":"Report and assist senior population on financial fraud and risk .",
//     "desc":"Utilizing AI to detect and prevent financial fraud and risks for elderly individuals with FinTech platforms.",
//     "id":"DS-04"

//   },
//   {
  
//   "img":"",
//      "title":"Forecast weather and historical impact to choose the best crop based on geo-location.",
//     "desc":" Predicting ideal crops using AI-driven weather forecasts and historical data, optimizing agricultural productivity based on location.",
//     "id":"DS-05"

//   },
//   {
  
//   "img":"",
//      "title":"Social media moderation to avoid cyber crimes against women.",
//     "desc":"Employing AI for moderating social media, preventing cybercrimes targeting women, ensuring online safety.",
//     "id":"DS-06",

//   },
//   {
  
//   "img":"",
//      "title":"Image Processing for Early Detection of Diseases.",
//     "desc":"Utilizing image processing and AI for early disease identification, improving medical diagnosis and patient outcomes.",
//     "id":"DS-07"

//   }
// ]
  return(
    dt.map((i)=>{return(
    <li class="crdss_item" id="item_salad">
    <div class="crds">
      <div class="crds_content">
        <h2 class="crds_title">{i.title}</h2>
        <span class="id">{i.challenge}</span>
        <div><span class="id">{i.id}</span></div>
        <div class="crds_text">
          <p>{i.desc}</p>
        </div>
      </div>
    </div>
  </li>)})
  )
}

const Cardlist=()=>{
  return(
    <div class="main" >
  <ul class="crdss" style={{paddingLeft:"0"}}>
    <Card/>
  </ul>
</div>
  )
}
//to be added when registration opens//
const style={
  "padding-top":"13%",
  "position":"relative",
  "text-align":"center",
  "height":"600px",
  "display":"flex",
  "justify-content":"center",
  "align-items":"center",
}
const cmt={
  "position":"relative",
  "color":"white",

}
// const Cardlist=()=>{
//   return(
//     <div className=".cnt" style={style}>
//       <div className='cmt' style={cmt}>
//         <h1 class="he1"> <Type dt={["Problems will be updated soon!","Stay tuned"]}/></h1>
//       <Countdown/>
//       <h1 class="abt">until Hackaton</h1>
//     </div>
//     </div>
//   )
// }
export default Cardlist;