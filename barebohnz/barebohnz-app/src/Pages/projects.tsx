import React from 'react';
function projects() {
    return (
        <div className='container my-5'>
<h1 className='text bg-light'>Web Development Projects Showcase</h1>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '24px' }}>
    {[
        {
            title: 'Moonshine Consulting',
            description: 'A scalable healthcare affilate marketing site that uses industry knowedge by healthcare professionals to advise seniors and caregivers of how to stay in thier homes and converts blog traffic to affiliate clicks.',
            image:'.public\moonshineconsulting.png',
            link: 'https://moonshineconsulting-i391.vercel.app/'
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio to highlight your work and skills.',
            image: 'https://via.placeholder.com/300x180?text=Portfolio',
            link: '#'
        },
        {
            title: 'Booking System',
            description: 'A robust booking and scheduling system for service-based businesses.',
            image: 'https://via.placeholder.com/300x180?text=Booking+System',
            link: '#'
        }
    ].map((project, idx) => (
        <div key={idx} style={{
            width: '300px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            background: '#fff',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '16px', flex: 1 }}>
                <h2 style={{ fontSize: '1.25rem', margin: '0 0 8px' }}>{project.title}</h2>
                <p style={{ margin: 0, color: '#555' }}>{project.description}</p>
            </div>
            <a href={project.link} style={{
                display: 'block',
                padding: '12px 16px',
                background: '#0078d4',
                color: '#fff',
                textAlign: 'center',
                textDecoration: 'none',
                fontWeight: 500,
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px'
            }}>
                View Project
            </a>
        </div>
    ))}
</div>
<div style={{ marginTop: '40px' }}>
    <h2 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>My Tech Stack</h2>
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <li style={{ background: '#222', color: '#fff', padding: '8px 16px', borderRadius: '6px' }}>MERN Stack</li>
        <li style={{ background: '#222', color: '#fff', padding: '8px 16px', borderRadius: '6px' }}>Java</li>
        <li style={{ background: '#222', color: '#fff', padding: '8px 16px', borderRadius: '6px' }}>MySQL</li>
        <li style={{ background: '#222', color: '#fff', padding: '8px 16px', borderRadius: '6px' }}>Spring Web</li>
    </ul>
</div>
        </div>
    );
}

export default projects;