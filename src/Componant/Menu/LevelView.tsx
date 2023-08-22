import MenuButton from "./MenuButton";

const LevelView: React.FC = () => {

    return (
        <div className="w-full  flex items-center justify-between flex-col" id="level">
            <h2 className="text-3xl font-black mb-4">Demineur</h2>
            <div className="mb-4 relative flex flex-col justify-between text-center w-full space-y-2">
                <MenuButton densite={0.05} name="Novice" />
                <MenuButton densite={0.15} name="Amateur" />
                <MenuButton densite={0.20} name="Intermediare" />
                <MenuButton densite={0.30} name="Confirmé" />
                <MenuButton densite={0.40} name="Expert" />
            </div>
        </div>
    );
}

export default LevelView;