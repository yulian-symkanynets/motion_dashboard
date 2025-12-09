
export type TaskProps = {
  // Define any props if needed in the future
  title: string;
};

function Task({ title }: TaskProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition cursor-pointer">
      <input type="checkbox" className="w-4 h-4 rounded" />
      <span className="text-white font-bold font-sans text-sm">{title}</span>
    </div>
  );
}

export default Task;
