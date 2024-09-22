import React from "react";
import Slider from "react-slick";
import './about.css';

const About = () => {
    // List of image links
    const images = [
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763442/Copy_of_DSC_2569_kdxair.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763428/Copy_of_DSC_2566_p0az8i.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763428/Copy_of_DSC_3160_osjhr3.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763428/Copy_of_DSC_2973_aunzck.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763425/Copy_of_DSC_2564_nt3ocv.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763425/Copy_of_DSC_3043_av7pr9.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763425/Copy_of_DSC_2568_mkee0j.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763421/Copy_of_DSC_2866_ecdcls.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763419/Copy_of_DSC_2824_t9uw3y.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763419/Copy_of_DSC_2818_ytq4a1.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763413/Copy_of_DSC_2572_msucne.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763413/Copy_of_DSC_2565_kn15oa.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763410/Copy_of_DSC_2810_tgwwgo.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763407/Copy_of_DSC_3254_vsagev.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763407/Copy_of_DSC_2804_uwykuz.jpg',
        'https://res.cloudinary.com/dh2mrevv0/image/upload/v1726763401/Copy_of_DSC_2573_b71phx.jpg'
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, // 3 seconds
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