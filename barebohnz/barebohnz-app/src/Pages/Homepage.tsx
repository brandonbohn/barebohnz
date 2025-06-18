import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';       

 function Homepage() {
    return (
        <div className="container my-5">
            <div className="row bg-light p-4 rounded shadow">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center text-center my-1">
                <h1>Barebohnz Dev and Consulting</h1>
                <p>
                    Welcome to Barebohnz Dev & Consulting — a solo boutique firm at the intersection of global policy, education, and tech.
                    <br /><br />
                    Founded by a former international educator and D.C. Policy Intern, Barebohnz was born on the road from Washington, D.C. to Cartagena, Beijing, and Istanbul. With firsthand teaching experience across continents and early training on Capitol Hill under leaders like Grover Norquist and David Keene, we bring a rare blend of political insight, global perspective, and hands-on technical skill.
                    <br /><br />
                    Our mission is to help INGOs, nonprofits, and global educators build digital tools that work where they are needed most — in the field. Whether you’re equipping staff in remote environments or scaling outreach across borders, we design tech that is intuitive, reliable, and ready for real-world impact — especially across the Middle East and Africa.
                </p>
                <div className="col-md-6 mb-3 mb-md-0">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
                        alt="Global Map"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
                    />
                </div>
            </div>
            <div className="text padding-10px margin-10px">
              
                <div className="mt-4">
                    <h2>Our Services</h2>
                    
                        <li>Custom website and web app development</li>
                        <li>Digital tools for NGOs and international organizations</li>
                        <li>Data visualization and dashboard solutions</li>
                        <li>Consulting on digital transformation and governance</li>
                        <li>Support for multilingual and globally distributed teams</li>
                
                    <h2>Why Choose Us?</h2>
                    
                        <li>Expertise in international development and governance projects</li>
                        <li>Personalized service for small businesses and NGOs</li>
                        <li>Experience working across cultures and continents</li>
                        <li>Flexible, scalable solutions tailored to your needs</li>
                
                    <h2 className="">Contact Us</h2>
                    <p>
                        Ready to start your project or have questions? <br />
                        <a href="mailto:info@barebohnz.com">Email us</a> to discuss how we can help your organization succeed.
                    </p>
                </div>
            </div>
                </div>
                <div className="col-12 d-flex flex-column align-items-center justify-content-center text-center my-5">
                 
                </div>
            </div>
    
    );
}

export default Homepage;
 