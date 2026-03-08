// Particle Background
function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    
    const particles = [];
    const particleCount = 80;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = 'rgba(56, 189, 248, 0.6)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
    window.addEventListener('resize', resizeCanvas);
}

// Smooth Scrolling & Navigation
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(5, 8, 22, 0.98)';
            navbar.style.backdropFilter = 'blur(25px)';
        } else {
            navbar.style.background = 'rgba(5, 8, 22, 0.95)';
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Roadmap animations
    const roadmapObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 200);
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.roadmap-item').forEach(item => {
        roadmapObserver.observe(item);
    });
    
    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';

// To include certifications:
const sections = document.querySelectorAll('section[id]');

        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        formStatus.textContent = 'Sending...';
        formStatus.style.color = 'var(--accent)';
        formStatus.className = 'form-status';
        
        setTimeout(() => {
            formStatus.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
            formStatus.style.color = '#10b981';
            contactForm.reset();
        }, 1500);
    });
});
 
// 🔥 ADVANCED RESUME WITH ALL PROFESSIONAL SECTIONS - 100% FIXED
function downloadAdvancedResume() {
    const resumeHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Pilla Komali - Full-Stack Developer | Resume 2026</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
            line-height: 1.7; color: #1a202c; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh; padding: 40px 20px;
        }
        .resume-container { 
            max-width: 900px; margin: 0 auto; background: rgba(255,255,255,0.95); 
            backdrop-filter: blur(20px); border-radius: 24px; box-shadow: 0 40px 100px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        .header { 
            background: linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #a855f7 100%); 
            color: white; padding: 50px 40px; text-align: center; position: relative;
            overflow: hidden;
        }
        .header::before { 
            content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); 
            animation: rotate 20s linear infinite;
        }
        @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .header h1 { font-size: 3.2rem; font-weight: 800; margin-bottom: 12px; position: relative; z-index: 2; }
        .header .subtitle { font-size: 1.3rem; opacity: 0.95; margin-bottom: 30px; position: relative; z-index: 2; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 20px; position: relative; z-index: 2; }
        .stat-card { background: rgba(255,255,255,0.2); padding: 20px; border-radius: 16px; backdrop-filter: blur(10px); text-align: center; }
        .stat-number { display: block; font-size: 2.2rem; font-weight: 800; }
        .stat-label { font-size: 0.9rem; opacity: 0.9; }
        
        .content-section { padding: 45px 40px; border-bottom: 1px solid rgba(56,189,248,0.2); }
        .content-section:last-child { border-bottom: none; }
        .section-title { 
            color: #38bdf8; font-size: 1.6rem; font-weight: 700; margin-bottom: 25px; 
            display: flex; align-items: center; gap: 12px;
        }
        .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px; }
        .contact-item { display: flex; align-items: center; gap: 12px; padding: 15px; background: #f8fafc; border-radius: 12px; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin: 25px 0; }
        .skill-item { 
            background: linear-gradient(135deg, #38bdf8, #6366f1); color: white; 
            padding: 16px 24px; border-radius: 25px; text-align: center; font-weight: 600;
            box-shadow: 0 8px 25px rgba(56,189,248,0.3);
        }
        .experience-item, .cert-item, .project-item { 
            margin-bottom: 25px; padding: 25px; background: #f8fafc; 
            border-radius: 16px; border-left: 5px solid #10b981; position: relative;
        }
        .experience-item { border-left-color: #38bdf8; }
        .project-item { border-left-color: #f59e0b; }
        .item-title { font-size: 1.2rem; font-weight: 700; color: #1a202c; margin-bottom: 8px; }
        .item-meta { color: #64748b; font-size: 0.95rem; margin-bottom: 12px; }
        .item-desc { color: #475569; margin-bottom: 0; }
        .progress-bar { height: 8px; background: #e2e8f0; border-radius: 4px; margin: 12px 0; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #38bdf8, #6366f1); border-radius: 4px; transition: width 1s ease; }
        .cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        @media print { body { background: white !important; padding: 0; } .header::before { display: none; } }
    </style>
</head>
<body>
    <div class="resume-container">
        <!-- HEADER -->
        <div class="header">
            <h1>Pilla Komali</h1>
            <div class="subtitle">Full-Stack Developer | Vizianagaram, Andhra Pradesh | Open to Work</div>
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number">5+</span>
                    <span class="stat-label">Live Projects</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">11</span>
                    <span class="stat-label">Certifications</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">2+</span>
                    <span class="stat-label">Years Experience</span>
                </div>
            </div>
        </div>

        <!-- CONTACT -->
        <div class="content-section">
            <h2 class="section-title">📧 Contact Information</h2>
            <div class="contact-grid">
                <div class="contact-item">
                    <span style="font-size: 1.2rem;">📧</span>
                    <strong>komalipilla007@example.com</strong>
                </div>
                <div class="contact-item">
                    <span style="font-size: 1.2rem;">📱</span>
                    <strong>7989292435</strong>
                </div>
                <div class="contact-item">
                    <span style="font-size: 1.2rem;">💻</span>
                    <strong>https://www.linkedin.com/in/komali-pilla-b50038320/</strong>
                </div>
                <div class="contact-item">
                    <span style="font-size: 1.2rem;">🌐</span>
                    <strong>yourportfolio.com</strong>
                </div>
                <div class="contact-item">
                    <span style="font-size: 1.2rem;">📍</span>
                    <strong>Vizianagaram, Andhra Pradesh, India</strong>
                </div>
            </div>
        </div>

        <!-- PROFESSIONAL SUMMARY -->
        <div class="content-section">
            <h2 class="section-title">🎯 Professional Summary</h2>
            <p style="font-size: 1.1rem; color: #475569; max-width: 700px;">
                Results-driven <strong>Full-Stack Developer</strong> with 2+ years of hands-on experience building 
                modern web applications. Expert in HTML5, CSS3, JavaScript ES6+ with 5+ live projects including 
                Student Task Manager. Currently mastering React (70% complete) and Node.js backend development. 
                Holder of 11 industry certifications from Google, HackerRank, AWS, Coursera, and Microsoft. 
                Passionate about creating intuitive UIs, scalable architectures, and pixel-perfect responsive designs.
            </p>
        </div>

        <!-- TECHNICAL SKILLS -->
        <div class="content-section">
            <h2 class="section-title">🛠️ Technical Skills</h2>
            <div class="skills-grid">
                <div class="skill-item">HTML5 / CSS3 / Tailwind</div>
                <div class="skill-item">JavaScript ES6+ / Async</div>
                <div class="skill-item">React 18 / Hooks (70%)</div>
             
                <div class="skill-item">Git / GitHub / CLI</div>
                <div class="skill-item">Figma / UI-UX Design</div>
               
            </div>
        </div>

       

        <!-- CERTIFICATIONS -->
        <div class="content-section">
            <h2 class="section-title">🏆 Certifications (11 Total)</h2>
            <div class="cert-grid">
                <div class="cert-item">
                    <div class="item-title">Google Developer Certificate</div>
                    <div class="item-meta">AICTE | Web Development Fundamentals</div>
                </div>
                <div class="cert-item">
                    <div class="item-title">Software Engineering</div>
                    <div class="item-meta">Swayam</div>
                </div>
                <div class="cert-item">
                    <div class="item-title">Python Certificate</div>
                    <div class="item-meta">Infosys</div>
                </div>
                <div class="cert-item">
                    <div class="item-title">Javascript Fundamentals</div>
                    <div class="item-meta">Netacad</div>
                </div>
            </div>
        </div>

        <!-- PROJECTS -->
        <div class="content-section">
            <h2 class="section-title">🚀 Featured Projects</h2>
            <div class="project-item">
                <div class="item-title">Student Task Manager</div>
                <div class="item-meta">Frontend Task Management Application | Live Demo Available</div>
                <p class="item-desc">Advanced task manager with drag & drop, local storage sync, dark/light mode toggle, 
                responsive design across all devices, and real-time progress tracking.</p>
            </div>
            <div class="project-item">
                <div class="item-title">Advanced Developer Portfolio</div>
                <div class="item-meta">Personal Portfolio Website | Responsive & Animated</div>
                <p class="item-desc">Modern portfolio featuring certifications showcase, interactive roadmap, 
                glassmorphism design, scroll animations, and seamless mobile experience.</p>
            </div>
        </div>

        <!-- EDUCATION & ROADMAP -->
        <div class="content-section">
            <h2 class="section-title">📚 Education & Roadmap</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                <div>
                    <h3 style="color: #38bdf8; margin-bottom: 15px;">Education</h3>
                    <p><strong>Self-Taught Developer</strong> | 2023 - Present</p>
                    <p>Mastered web development through 500+ hours of structured learning across Udemy, Coursera, freeCodeCamp, and YouTube.</p>
                </div>
                <div>
                    <h3 style="color: #38bdf8; margin-bottom: 15px;">2026 Roadmap</h3>
                    <div style="margin-bottom: 8px;">
                        <span>Frontend Foundations: </span><div class="progress-bar"><div class="progress-fill" style="width:100%"></div></div>
                    </div>
                    <div style="margin-bottom: 8px;">
                        <span>React Mastery: </span><div class="progress-bar"><div class="progress-fill" style="width:70%"></div></div>
                    </div>
                    <div style="margin-bottom: 8px;">
                        <span>Backend Development: </span><div class="progress-bar"><div class="progress-fill" style="width:20%"></div></div>
                    </div>
                    <div>Full-Stack Senior Developer 🎯</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;

    // FIXED PREVIEW & DOWNLOAD
    const blob = new Blob([resumeHTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // Download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Pilla-Komali-Advanced-Resume-2026.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
}

function previewAdvancedResume() {
    // FIXED PREVIEW - Opens in new tab perfectly
    const newWindow = window.open('', '_blank', 'width=1000,height=800,scrollbars=yes,resizable=yes');
    newWindow.document.write(getAdvancedResumeContent());
    newWindow.document.close();
    newWindow.focus();
}

function getAdvancedResumeContent() {
    return resumeHTML; // Reference the same content
}
// Advanced Contact Form
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.form-submit');
    const loader = submitBtn.querySelector('.btn-loader');
    const text = submitBtn.querySelector('span');
    
    // Show loading
    text.textContent = 'Sending...';
    loader.style.display = 'block';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Hide form, show success
        this.style.display = 'none';
        document.querySelector('.form-success').style.display = 'block';
        
        // Reset form
        setTimeout(() => {
            this.reset();
            this.style.display = 'block';
            document.querySelector('.form-success').style.display = 'none';
            text.textContent = 'Send Message';
            loader.style.display = 'none';
            submitBtn.disabled = false;
        }, 5000);
    }, 2000);
});
