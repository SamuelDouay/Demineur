import LevelView from "../Componant/Menu/LevelView";

interface MenuLayoutProps {
    setDensite: (densite: number) => void;
    setLevel: (levelName: string) => void;
}

const MenuLayout: React.FC<MenuLayoutProps> = ({ setDensite, setLevel }) => {

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const selectedLevel = event.currentTarget.level.value;
        const radio = document.getElementsByName('level');

        for (let i = 0; i < radio.length; i++) {
            if ((radio[i] as HTMLInputElement).checked) {
                const idAttribute = (radio[i] as HTMLInputElement).getAttribute('id');
                if (idAttribute !== null) {
                    setLevel(idAttribute);
                }
                setDensite(parseFloat(selectedLevel));
            }
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <LevelView />
            <input className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white" type="submit" value="JOUER" />
        </form>
    );
}

export default MenuLayout;