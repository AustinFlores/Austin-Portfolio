import React, { useState } from 'react';
import { ChevronRight, Code, Layout, Zap, Server, Database, Globe, Palette, Feather, Star, Check } from 'lucide-react';
import '../../styles/landingPage/Skills.css';

// --- Skill Data Structure ---
const skillsData = [
    {
        id: 'frontend',
        category: "Frontend Development",
        tools: [
            { name: "React JS", icon: Code },
            { name: "HTML/CSS", icon: Layout },
            { name: "Tailwind CSS", icon: Zap },
            { name: "Figma Prototyping", icon: Palette },
        ],
    },
    {
        id: 'backend',
        category: "Backend Development",
        tools: [
            { name: "Node JS (Express)", icon: Server },
            { name: "MySQL", icon: Database },
            { name: "REST APIs", icon: Globe },
        ],
    },
    {
        id: 'design',
        category: "Graphic Design",
        tools: [
            { name: "Branding & Identity", icon: Star },
            { name: "UI/UX Concepts", icon: Check },
            { name: "Adobe Suite", icon: Feather },
        ],
    },
];

// Helper Component for the Tool Icons
const ToolIcon = ({ name, Icon }) => (
    <div className="tool-item">
        <Icon className="tool-icon" />
        <span className="tool-name">{name}</span>
    </div>
);

const Skills = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (id) => {
        setOpenCategory(openCategory === id ? null : id);
    };

    return (
        <div className="skills-container">
            
            {/* Left Column: Skills Categories */}
            <div className="skills-left-column">
                <div className="skills-list">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="category-group">
                            {/* Clickable Category Header */}
                            <button
                                onClick={() => toggleCategory(skill.id)}
                                className={`category-header ${openCategory === skill.id ? 'active' : ''}`}
                            >
                                <span className="category-name">
                                    {skill.category}
                                </span>
                                <ChevronRight 
                                    className={`category-arrow ${openCategory === skill.id ? 'rotated' : ''}`}
                                />
                            </button>

                            {/* Dropdown Content (Tools/Icons) */}
                            {openCategory === skill.id && (
                                <div className="tools-dropdown">
                                    {skill.tools.map((tool) => (
                                        <ToolIcon key={tool.name} name={tool.name} Icon={tool.icon} />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Large Header Text */}
            <div className="skills-right-column">
                <h1 className="skills-title title">
                    SKILLS
                </h1>
            </div>
        </div>
    );
};

export default Skills;