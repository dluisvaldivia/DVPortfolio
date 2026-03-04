import { useState, useEffect } from "react";
import { getInitialTheme, setTheme } from "../../controllers/themeController.js";

export default function ThemeToggle() {
    const [theme, setThemeState] = useState(getInitialTheme());

    useEffect(() => {
        setTheme(theme);
    }, [theme])

    return (
        <button className="nav-item" onClick={() => setThemeState(theme === "light" ? "dark" : "light")}>{theme === "light" ? "🌞" : "🌙"}</button>
    )

}

