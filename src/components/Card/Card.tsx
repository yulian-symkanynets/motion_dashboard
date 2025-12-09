

type CardProps = {
  title: string;
  children?: React.ReactNode;
};
    
function Card({ title, children }: CardProps) {
    return <div className="flex border border-white/15 flex-col h-full w-full p-5 custom-gray rounded-4xl bg-custom-gray">
        <p className="text-white font-bold text-2xl">{title}</p>
        {children}
        </div>;
}

export default Card;