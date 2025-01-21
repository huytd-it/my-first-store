interface SectionCardProps  {
  icon: React.ReactNode,
  title: string,
  content: React.ReactNode,
  customClasses?: string
}

const SectionCard: React.FC<SectionCardProps> = ({ icon, title, content, customClasses = "" }) => {
  return (
    <div className={`flex-1 p-12 py-24  ${customClasses}`}>
      <h2 className="text-xl font-bold flex items-center space-x-2 ">
        {icon}
        <span>{title}</span>
      </h2>
      <div className="mt-4 text-gray-700">{content}</div>
    </div>
  );
};

export default SectionCard;