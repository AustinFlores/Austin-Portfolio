import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Server, Layout, Database, Palette, Zap } from 'lucide-react'; // Import icons
import '../../styles/landingPage/ProjectsSection.css';
import Navbar from '../Navbar';

import accLms from '../../media/acc-lms.png';
import brandDesign from '../../media/brand-design.png';
import digitalMarketing from '../../media/digital-marketing.png';

// Define reusable tool map for consistency and icon rendering
const toolMap = {
    react: { icon: Code, title: 'React JS' },
    node: { icon: Server, title: 'Node.js' },
    css: { icon: Layout, title: 'CSS' },
    mongodb: { icon: Database, title: 'MongoDB' },
    figma: { icon: Palette, title: 'Figma' },
    tailwind: { icon: Zap, title: 'Tailwind CSS' },
    database: { icon: Database, title: 'MySQL' }, // Generic placeholder
};

// --- Updated Project Data with Tool IDs ---
const projectData = [
    { 
        id: 1, 
        title: "Asian Computer College Library Management System", 
        category: "Web App", 
        description: "Modern LMS for efficient library operations.", 
        image: accLms,
        toolsUsed: ['react', 'css', 'tailwind', 'node', 'database'], // List of tool IDs
        imagePlaceholder: true 
    },
    { 
        id: 2, 
        title: "Brand Design",
        category: "design", 
        description: "Complete brand identity package.",
        image: brandDesign,
        toolsUsed: ['figma'],
        imagePlaceholder: true  
    },
    { 
        id: 3, 
        title: "Digital Marketing Pubmat", 
        category: "design", 
        description: "Complete visual brand standards.", 
        image: digitalMarketing,
        toolsUsed: ['figma'],
        imagePlaceholder: true 
    }
];


// New Component to render the list of tool icons
const ToolIconsList = ({ toolsUsed }) => (
    <div className="tool-icons-list">
        {toolsUsed.map(toolId => {
            const tool = toolMap[toolId];
            if (!tool) return null;
            const IconComponent = tool.icon;
            return (
                <div 
                    key={toolId} 
                    className="tool-icon-wrapper" 
                    title={tool.title} // Tooltip functionality via title attribute
                >
                    <IconComponent className="tool-icon-small" />
                </div>
            );
        })}
    </div>
);


const ProjectCard = ({ id, title, category, description, image, toolsUsed }) => (
    <Link to={`/project/${id}/${title.toLowerCase().replace(/\s/g, '-')}`} className="project-card-link">
        <div className="project-card">
            <div className="project-thumbnail-placeholder">
                <img src={image ? image : ""} alt="" />
            </div>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            
            {/* --- Tool Icons Rendered Here --- */}
            <ToolIconsList toolsUsed={toolsUsed} />
            {/* ------------------------------- */}
        </div>
    </Link>
);

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { label: "All", value: "all" },
        { label: "Web App", value: "Web App" },
        { label: "Design", value: "design" },
    ];

    const filteredProjects = projectData.filter(project => 
        activeFilter === 'all' || project.category === activeFilter
    );
    
    const projectsToShow = filteredProjects.slice(0, 3);

    return (
        <>
        <section className="projects-section" id='projects-section'>
            <div className="content-container">
                <h2 className="projects-title title">PROJECTS</h2>
                
                {/* --- Filter Bar --- */}
                <div className="project-filters">
                    {filters.map(filter => (
                        <button
                            key={filter.value}
                            className={`filter-button ${activeFilter === filter.value ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.value)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
                {/* ------------------ */}
                
                <div className="projects-grid">
                    {projectsToShow.length > 0 ? (
                        projectsToShow.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))
                    ) : (
                        <p style={{ gridColumn: 'span 3', textAlign: 'center', color: '#666' }}>
                            No projects found in the selected category.
                        </p>
                    )}
                </div>
            </div>
        </section>
        </>
        
    );
};

export default ProjectsSection;