export function getInitialTheme(): string {
    return localStorage.getItem("theme") || "light";
}

export function setTheme(theme: string): void {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme)
}