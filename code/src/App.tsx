import img from "./assets/illustration-dashboard.png";
import logo from "./assets/logo.svg";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <main className="flex flex-col gap-8 justify-evenly items-center mx-auto w-4/5 max-w-md min-h-screen">
      <section className="flex flex-col gap-8 justify-center items-center mx-auto space-y-7 max-w-lg">
        <div className="flex flex-col items-center space-y-7 w-full text-center">
          <img className="max-w-fit w-[20%]" src={logo} alt="" />
          <div className="space-y-3">
            <h1 className="text-neutral-gray sm:text-3xl md:text-4xl text-xl font-light">
              We are launching
              <strong className="text-neutral-darkBlue-900 font-bold">
                {" "}
                soon!
              </strong>
            </h1>
            <p className="text-xs font-light">Subscribe and get notified</p>
          </div>
          <Form />
        </div>
        <img src={img} className="w-full max-w-full" alt="" />
      </section>
      <Footer />
    </main>
  );
}

export default App;
