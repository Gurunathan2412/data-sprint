import React from "react";
import Slider from "react-slick";
import './about.css';

const About = () => {
    // List of image links
    const images =  [
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323434/IMG-20240926-WA0008_pqcdoq.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323431/IMG-20240926-WA0011_cffg9d.jpg",
        "https://res.cloudinary.com/dh2mrevv0/image/upload/v1727326132/WhatsApp_Image_2024-09-26_at_10.15.22_b3400b92_knldab.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323428/IMG-20240926-WA0013_gagspg.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323424/IMG-20240926-WA0001_xwu1rj.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323398/IMG-20240926-WA0012_rm4hya.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323388/IMG-20240926-WA0009_mmtqrv.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323384/IMG-20240926-WA0000_vdjfwa.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323374/IMG-20240926-WA0004_v8nwry.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323371/IMG-20240926-WA0007_kkofub.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323356/IMG-20240926-WA0006_u9vfvb.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323352/IMG-20240926-WA0010_d6kxbk.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323351/IMG-20240926-WA0014_r1juy5.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323304/IMG-20240926-WA0015_vrbd22.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323302/IMG-20240926-WA0003_c4fiva.jpg",
        "https://res.cloudinary.com/dcsduqstu/image/upload/v1727323298/IMG-20240926-WA0002_a0zkmm.jpg",
    ];

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 400, // 3 seconds
        fade: true, // Enable fade transition
        cssEase: "linear"
    };

    return (
        <section className="about-us" id="about-us">
            <div className="about-content">
                <div className="about-text">
                    <h1>About Datasprint</h1>
                    <p>Are you ready to embark on a data-driven adventure? DataSprint is your chance to immerse yourself in the world of AI and data science. Whether you're a coding prodigy or a creative thinker, this hackathon offers a platform to showcase your skills, learn from industry experts, and collaborate with like-minded enthusiasts.</p>
                    <p>Join us for an exhilarating journey into the realm of artificial intelligence and data science at DataSprint, an extraordinary hackathon organized by the Department of <span className="ai">Artificial Intelligence and Data Science</span> at Sri Sairam Institute of Technology.</p>
                </div>
                <div className="carousel">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default About;


// import React from "react";
// import'./about.css'
// const About=()=>{
//     return(
//     <section className="about-us" id="about-us">
//         <h1>About Datasprint</h1>
//         <div>Are you ready to embark on a data-driven adventure? DataSprint is your chance to immerse yourself in the world of AI and data science. Whether you're a coding prodigy or a creative thinker, this hackathon offers a platform to showcase your skills, learn from industry exports, and collaborate with like-minded enthusiasts.
// <br/>
// <br/>
//         Join us for an exhilarating journey into the realm of artificial intelligence and data science at DataSprint, an extraordinary hackathon organized by the Department of <span class="ai">Artificial Intelligence and Data Science</span> at Sri Sairam Institute of Technology.</div>
//     </section>
//     )
// }
// export default About;