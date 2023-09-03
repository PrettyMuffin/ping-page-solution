import verified from "../assets/verified-icon.png";

const FeedbackToast = ({ canSlide }: { canSlide?: boolean }) => {
  return (
    <section
      className={`border-neutral-darkBlue-900 transition-all ${
        // if the feedbaack toast can slide out mans that everything went ok, otherwise it'll return to the original state or it will remain in the default state
        canSlide ? "translate-x-0" : "translate-x-80"
      } flex fixed right-3 bottom-3 gap-1 px-3 py-1 bg-white rounded-md border-2`}
    >
      <img src={verified} alt="" className="w-5" />
      <p className="text-sm">Subscription Competed!</p>
    </section>
  );
};

export default FeedbackToast;
