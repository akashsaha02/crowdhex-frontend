const HowItWorks = () => {
    const steps = [
      {
        number: 1,
        title: "Create a Campaign",
        description: "Start your donation drive by creating a campaign.",
      },
      {
        number: 2,
        title: "Receive Donations",
        description: "Let people contribute to your cause effortlessly.",
      },
      {
        number: 3,
        title: "Make an Impact",
        description: "Deliver the donations and share the joy.",
      },
    ];
  
    return (
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-12">
          {steps.map((step) => (
            <div className="text-center" key={step.number}>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  