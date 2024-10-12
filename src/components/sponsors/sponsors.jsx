import React from "react";
import "./sponsors.css"
const Sponsors=()=>{
    return(
        <section className="spnsors" id="sponsors">
        <h1>Our Sponsors</h1>
        <div className="company-btns">
        <div >
            { <a target="_blank" href="https://www.thozhil.co.in/" className="company-btn" data-aos="zoom-in"><img src="https://res.cloudinary.com/dh2mrevv0/image/upload/v1728662592/tholil_mbz8ox.jpg" alt=""/></a> }
            { <div className="spoName">Thozhil</div> }
           
                       
        </div>
        <div >
            { <a target="_blank" href="https://oneyesinfotechsolutions.com/" className="company-btn" data-aos="zoom-in"><img src="https://res.cloudinary.com/dh2mrevv0/image/upload/v1728662591/oneyes_pyndzy.jpg" alt=""/></a> }
            { <div className="spoName">OneYes</div> }
           
                       
        </div> <div >
            { <a target="_blank" href="https://www.idacreations.com/" className="company-btn" data-aos="zoom-in"><img src="https://res.cloudinary.com/dh2mrevv0/image/upload/v1728662591/ida_zkhkrb.jpg" alt=""/></a> }
            { <div className="spoName">IDA</div> }
           
                       
        </div>
        <div >
            { <a target="_blank" href="https://www.idacreations.com/" className="company-btn" data-aos="zoom-in"><img src="https://res.cloudinary.com/dh2mrevv0/image/upload/v1728750100/WhatsApp_Image_2024-10-12_at_20.27.36_dc002bdc_kwecv7.jpg" alt=""/></a> }
            { <div className="spoName">Wewin Industrial Automations</div> }
           
                       
        </div>
        <div >
            { <a target="_blank" href="https://www.idacreations.com/" className="company-btn" data-aos="zoom-in"><img src="https://res.cloudinary.com/dh2mrevv0/image/upload/v1728750100/WhatsApp_Image_2024-10-12_at_20.27.37_4baa50ed_pof44r.jpg" alt=""/></a> }
            { <div className="spoName">Aghanya Technology</div> }
           
                       
        </div>
        {/* <div>
        <a target="_blank" href="https://www.hyundai.com/in/en" className="company-btn" data-aos="zoom-in"><img src="" alt=""/></a>
            <div className="spoName">Hyundai Motors aa India</div>
        </div> */}
        </div>
        
    </section>
    )
}
export default Sponsors;