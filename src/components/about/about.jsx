import React, { useState, useEffect } from "react";
import './about.css';

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

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
    // Auto-slide functionality with fade effect
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true); // Fade in the new image
            }, 500); // 500ms to match the CSS transition duration
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="about-us" id="about-us">
            <div className="about-content">
                <div className="about-text">
                    <h1>About Datasprint</h1>
                    <p>Are you ready to embark on a data-driven adventure? DataSprint is your chance to immerse yourself in the world of AI and data science. Whether you're a coding prodigy or a creative thinker, this hackathon offers a platform to showcase your skills, learn from industry experts, and collaborate with like-minded enthusiasts.</p>
                    <p>Join us for an exhilarating journey into the realm of artificial intelligence and data science at DataSprint, an extraordinary hackathon organized by the Department of <span className="ai">Artificial Intelligence and Data Science</span> at Sri Sairam Institute of Technology.</p>
                </div>
                <div className={`carousel ${fade ? 'fade-in' : 'fade-out'}`}>
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
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