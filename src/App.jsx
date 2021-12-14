import { KeepApp } from "./pages/KeepApp"
import './assets/style.scss';
import { AppHeader } from "./cmps/AppHeader";

export const App = () => {
    return (
        <>
            <header>
            <AppHeader/>
            </header>
            <main>
                <KeepApp />
            </main>
        </>
    )
}