export default function Services() {
  const services = [
    "Web Development",
    "Mobile Apps",
    "Automation",
    "Custom Software",
    "Maintenance & Support",
  ];

  return (
    <section id="services" className="py-20 px-4 bg-[#1C1917]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="card animate-scale-in">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                {service}
              </h3>
              <p className="text-gray-400">
                High-quality {service.toLowerCase()} tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}