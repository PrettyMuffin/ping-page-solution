import { useState } from "react";
import FeedbackToast from "./Feedback";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // According to the regex i then will set the valid email to true or false
    if (!emailRegex.test(email)) {
      setIsValidEmail(false);
      return;
    }
    setIsValidEmail(true);

    // Time of the feedback life
    setTimeout(() => {
      setHasSubmitted(false);
    }, 3000);
    setHasSubmitted(true);

    // Clean out the input field
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col min-[612px]:flex-row gap-4 w-full"
    >
      <div className="min-[612px]:basis-3/4 space-y-1">
        <input
          placeholder="Your email address..."
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
            setIsValidEmail(true);
          }}
          className={`placeholder-paleBlue border-paleBlue focus:outline-none md:h-10 px-4 py-1 w-full h-8 text-xs rounded-full border ${
            isValidEmail ? "":"border-lightRed"}`}
        />
        {!isValidEmail && (
          <p className="text-lightRed pl-4 text-xs italic text-left">
            Please provide a valid email address
          </p>
        )}
        <FeedbackToast canSlide={hasSubmitted} />
      </div>
      <button className="bg-primary-400 md:h-10 button-shadow hover:bg-primary-300 w-full h-8 text-xs text-white min-[612px]:basis-1/4 capitalize rounded-full">
        notify me
      </button>
    </form>
  );
};

export default Form;
