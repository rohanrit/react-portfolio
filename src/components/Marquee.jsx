const Marquee = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-yellow-200 py-2">
      <div className="inline-block animate-marquee text-red-600 font-semibold">
        {text}
      </div>
    </div>
  );
};

export default Marquee;
