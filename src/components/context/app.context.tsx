import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ThemeContextType = "light" | "dark";

interface IAppContext {
    theme: ThemeContextType,
    setTheme: (t: ThemeContextType) => void
}

const AppContext = createContext<IAppContext | null>(null);

type TProps = {
    children: ReactNode
}

export const AppContextProvider = (props: TProps) => {
    const [theme, setTheme] = useState<ThemeContextType>(() => {
        const initialTheme = localStorage.getItem("theme") as ThemeContextType || "light";
        return initialTheme;
    });

    useEffect(() => {
        const mode = localStorage.getItem("theme") as ThemeContextType;
        if (mode) {
            setTheme(mode);
            document.documentElement.setAttribute('data-bs-theme', mode);
        }
    }, [])

    return (
        <AppContext.Provider value={{
            theme, setTheme
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentApp = () => {
    const currentAppContext = useContext(AppContext);

    if (!currentAppContext) {
        throw new Error(
            "useCurrentApp has to be used within <AppContext.Provider>"
        );
    }

    return currentAppContext;
};
