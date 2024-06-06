
interface ButtonProps {
    label: string;
    color?: string;
    outlineColor?: string;
}
export  function Button1({ label , color, outlineColor }: ButtonProps) {
    return (
        <button
            className={`bg-${color} text-[16px] text-white font-bold px-4 py-2 w-176 h-55 rounded-l-full rounded-r-full
            ${outlineColor && `border-2 border-${outlineColor}`}`
            }
        >
            {label}
        </button>
    );

    

}