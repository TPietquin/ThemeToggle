ThemeToggle - Système de thème clair/sombre pour React

Un composant React réutilisable qui permet d'ajouter facilement un système de thème clair/sombre à vos applications. Ce projet utilise React Context pour gérer les thèmes à l'échelle de l'application.
🌓 Fonctionnalités

Bascule fluide entre les thèmes clair et sombre
Animation élégante de l'icône soleil/lune
Sauvegarde des préférences utilisateur dans le localStorage
Détection automatique des préférences système
Structure modulaire et réutilisable
Styles personnalisables

📦 Installation
bashCopier# Cloner le dépôt
git clone https://github.com/TPietquin/ThemeToggle.git

# Se déplacer dans le répertoire du projet
cd ThemeToggle

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
🔧 Utilisation
Pour utiliser le système de thème dans votre application React:

Enveloppez votre application avec le ThemeProvider:

jsxCopierimport { ThemeProvider } from "./theme/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <YourAppComponents />
        </ThemeProvider>
    );
}

Utilisez le hook useTheme pour accéder au thème et à la fonction de basculement:

jsxCopierimport { useTheme } from "./theme/useTheme";

function MyComponent() {
    const { theme, isDarkMode, toggleTheme } = useTheme();
    
    return (
        <div style={{ backgroundColor: theme.background, color: theme.textPrimary }}>
            <button onClick={toggleTheme}>
                {isDarkMode ? "Mode clair" : "Mode sombre"}
            </button>
        </div>
    );
}

Utilisez le composant ThemeToggle pour ajouter un bouton de basculement préconfiguré:

jsxCopierimport ThemeToggle from "./components/ThemeToggle";

function Header() {
    return (
        <header>
            <h1>Mon Application</h1>
            <ThemeToggle />
        </header>
    );
}
🎨 Personnalisation des thèmes
Vous pouvez facilement modifier les thèmes en éditant le fichier theme.js:
jsCopier// Exemple de personnalisation
export const lightTheme = {
    background: '#ffffff',
    primary: '#0078d4',
    // ajoutez vos propriétés personnalisées
};

export const darkTheme = {
    background: '#121212',
    primary: '#5ea6fd',
    // ajoutez vos propriétés personnalisées
};
📁 Structure du projet
CopierThemeToggle/
├── src/
│   ├── components/
│   │   ├── ProjectCard/       # Exemple de composant utilisant le thème
│   │   ├── ThemeToggle.css    # Styles pour le bouton de thème
│   │   └── ThemeToggle.jsx    # Composant de bascule de thème
│   ├── theme/
│   │   ├── ThemeContext.jsx   # Fournisseur de contexte pour le thème
│   │   ├── theme.js           # Définitions des thèmes clair et sombre
│   │   └── useTheme.js        # Hook pour utiliser le thème
│   ├── App.jsx                # Composant principal
│   └── main.jsx               # Point d'entrée
└── ...
📱 Responsive
Le système de thème est complètement responsive et s'adapte aux différentes tailles d'écran.
📄 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
🤝 Contribution
Les contributions sont les bienvenues! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.
