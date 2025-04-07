import React from 'react';
import { useTheme } from "../../theme/useTheme.js";
import { createStyles } from './styles.js';

function ProjectCard({project}) {
    const { theme } = useTheme();
    const styles = createStyles(theme);

    return (
        <div style={styles.card}>
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>
            <a
                href={project.link}
                style={styles.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                Voir le projet
            </a>
        </div>
)
}

export default ProjectCard;