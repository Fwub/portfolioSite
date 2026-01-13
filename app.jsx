const { useState } = React;

// Navigation Component
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 glass-effect">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-blue-400">TC</span>
                    </div>
                    
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 px-3 py-2 transition">Home</button>
                            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 px-3 py-2 transition">Projects</button>
                            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 px-3 py-2 transition">Skills</button>
                            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 px-3 py-2 transition">About</button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 px-3 py-2 transition">Contact</button>
                            <a href="resume.html" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition">Resume</a>
                        </div>
                    </div>
                    
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-blue-400">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            {isOpen && (
                <div className="md:hidden glass-effect">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 block px-3 py-2 w-full text-left">Home</button>
                        <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 block px-3 py-2 w-full text-left">Projects</button>
                        <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 block px-3 py-2 w-full text-left">Skills</button>
                        <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 block px-3 py-2 w-full text-left">About</button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 block px-3 py-2 w-full text-left">Contact</button>
                        <a href="resume.html" className="text-gray-300 hover:text-blue-400 block px-3 py-2">Resume</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

// Hero Section
const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
                    Trevor Cooley
                </h1>
                <p className="text-xl md:text-2xl text-blue-300 mb-8">
                    Full Stack Developer | Problem Solver | Tech Enthusiast
                </p>
                <div className="flex gap-4 justify-center">
                    <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition transform hover:scale-105">
                        View My Work
                    </button>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="glass-effect text-blue-300 px-8 py-3 rounded-lg transition transform hover:scale-105">
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

// Projects Section
const Projects = () => {
    const projects = [
        {
            title: "AI Music Database Recommendation System",
            description: "A data-intensive full-stack web application that analyzes over one million songs to deliver fast, thematic music recommendations using optimized database design and clustering algorithms.",
            tech: ["Python", "Flask", "PostgreSQL", "HTML", "CSS", "Javascript"],
            link: "https://ai-music-database.onrender.com/"
        },
        {
            title: "Ecommerce InventoryShop App",
            description: "An e-commerce platform with advanced filtering, payment integration, admin dashboard, and scalable API-driven inventory synchronization.",
            tech: ["C#", ".NET MAUI", "MVVM Architecture", "REST APIs", "Swagger / OpenAPI", "Distributed Systems", "CRUD"],
            link: "fastidious-cobbler-f86af4.netlify.app"
        },
        {
            title: "Sports Bar Manager Linux Kernel Module",
            description: "A low-level systems project implementing a concurrent sports bar management simulation. \n\n(Private app link not available)",
            tech: ["C", "Linux Kernel Development", "System Calls", "Mutex Locks", "Kernel Threads (kthreads)"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-18">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">My Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-effect p-6 rounded-lg hover:transform hover:scale-105 transition duration-300">
                            <h3 className="text-2xl font-bold text-blue-400 mb-3">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className="text-blue-400 hover:text-blue-300 transition">
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Skills Section
const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend",
            skills: ["React", "Next.js", "C#", ".NET (MAUI, Core)", "TypeScript", "Tailwind CSS", "Javascript", "HTML/CSS", "React Native", "XAML", "XML"]
        },
        {
            category: "Backend",
            skills: ["C/C++", "Node.js", "Express", "Python", "RESTful APIs", "GraphQL", "Flask", "Java"]
        },
        {
            category: "Database",
            skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "SQL", "NoSQL"]
        },
        {
            category: "Tools & Others",
            skills: ["Git", "Github", "Docker", "AWS", "Azure", "Kubernetes", "CI/CD", "Agile", "Linux/Unix", "Numpy"]
        }
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-15">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass-effect p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-blue-400 mb-4">{category.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-4 py-2 rounded-lg">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// About Section
const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-15">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">About Me</h2>
                    <div className="glass-effect p-8 rounded-lg">
                    <div>
                                        <p className="text-gray-300 text-lg mb-4">
                        I design and build full-stack applications, work
                          directly with databases and data pipelines, and develop performant
                          software across multiple platforms and languages that deliver exceptional user experiences.
                        </p>
                        <p className="text-gray-300 text-lg mb-4">
                        I’m constantly learning, refining, and experimenting — whether that means
                          architecting backend systems, optimizing performance, staying at the forefront of web development or building native
                          and low-level applications.
                            When I'm not coding, you can find me contributing to open-source projects or experimenting with the 
                            latest frameworks and tools.
                        </p>
                        <p className="text-gray-300 text-lg">
                            Let's build something amazing together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact Section
const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-15">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Get In Touch</h2>
                <div className="glass-effect p-8 rounded-lg">
                    <p className="text-gray-300 text-lg mb-8 text-center">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="mailto:trevordcooley@gmail.com" 
                           className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-center transition transform hover:scale-105">
                            Email Me
                        </a>
                        <a href="https://github.com/CodingTC" 
                           target="_blank"
                           className="glass-effect text-blue-300 px-8 py-3 rounded-lg text-center transition transform hover:scale-105">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/tdcooley" 
                           target="_blank"
                           className="glass-effect text-blue-300 px-8 py-3 rounded-lg text-center transition transform hover:scale-105">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer
const Footer = () => {
    return (
        <footer className="glass-effect py-6">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-400">
                    © 2025 Trevor Cooley. Built with React & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

// Main App Component
const App = () => {
    return (
        <div className="font-sans">
            <Navigation />
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};


// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
