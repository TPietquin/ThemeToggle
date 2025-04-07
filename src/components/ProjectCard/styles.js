export const createStyles = (theme) => {
    return {
        card: {
            backgroundColor: theme.surface,
            color: theme.textPrimary,
            border: `1px solid ${theme.border}`,
            borderRadius: '6px',
            padding: '1rem',
            marginBottom: '1rem',
            boxShadow: theme.shadow,
            transition: 'all 0.3s ease',
            maxWidth: '400px',
            width: '100%',
        },

        title: {
            color: theme.primary,
            fontSize: '1.2rem',
            marginBottom: '0.5rem'
        },

        description: {
            color: theme.textSecondary,
            marginBottom: '1rem'
        },

        link: {
            color: theme.secondary,
            textDecoration: 'none',
            fontWeight: 'bold'
        }
    };
};