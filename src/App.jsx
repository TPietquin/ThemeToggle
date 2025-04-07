import React from "react";
import { ThemeProvider } from "./theme/ThemeContext.jsx";
import { useTheme } from "./theme/useTheme.js";
import ProjectCard from "./components/ProjectCard/index.jsx";
import ThemeToggle from "./components/ThemeToggle";
import './App.css'

function ThemedApp() {
    const { theme, toggleTheme } = useTheme();

    const containerStyle = {
        backgroundColor: theme.background,
        padding: '2rem',
        minHeight: '100vh',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const paragraphStyle = {
        color: theme.textPrimary,
        fontSize: '1.2rem',
        marginBottom: '1rem',
        transition: 'color 0.3s ease'
    };

    const exampleProject = {
        title: "Mon Projet",
        description: "Description de mon projet",
        link: "https://github.com/monprojet"
    };

    return (
        <div style={containerStyle}>
            <p style={paragraphStyle}>Style me with themes!</p>
            <ThemeToggle/>
            <ProjectCard project={exampleProject} />
        </div>
    );
}


export default function App() {
    return (
        <ThemeProvider>
            <ThemedApp />
        </ThemeProvider>
    );
}