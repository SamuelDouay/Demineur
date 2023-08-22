interface MenuButtonProps {
    densite: number;
    name: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ densite, name }) => {

    return (
        <div className="my-1.5 w-72">
            <input type="radio" className="peer sr-only" id={name} tabIndex={-1} value={densite} name="level" required />
            <label htmlFor={name} tabIndex={0} className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white focus:ring focus:ring-black focus:ring-opacity-50">
                <span className="text-sm">{name}</span>
            </label>
        </div>
    );
}

export default MenuButton;