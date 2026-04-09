import Icon from "@/components/ui/icon";

const FloatingMessengers = () => {
  const whatsappNumber = "79393760505";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} className="text-white" />
      </a>
    </div>
  );
};

export default FloatingMessengers;
