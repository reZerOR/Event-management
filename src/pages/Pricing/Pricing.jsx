const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center my-10">
        Our Service Price
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 justify-items-center ">
        <div className="max-w-xs rounded-xl p-4 bg-neutral text-center text-white">
          <h2 className="text-2xl font-bold">Essential Elegance</h2>
          <p className="text-xl font-medium my-4">Price: $2,500</p>
          <div className=" w-full h-[2px] bg-white"></div>
          <ul className="p-4 space-y-2 list-disc text-left">
            <li>
              Suitable for smaller events such as birthdays, anniversaries, and
              intimate gatherings.
            </li>
            <li>Includes event planning and coordination.</li>
            <li>Up to 50 guests.</li>
            <li>Venue selection assistance.</li>
            <li>Basic decoration and lighting.</li>
            <li>Vendor recommendations.</li>
            <li>1 planning meeting.</li>
            <li>8 hours of on-site coordination.</li>
            <li>Additional services available at an extra cost.</li>
          </ul>
        </div>
        <div className="max-w-xs rounded-xl p-4 bg-neutral text-center text-white">
          <h2 className="text-2xl font-bold">Signature Soiree</h2>
          <p className="text-xl font-medium my-4">Price: $5,000</p>
          <div className=" w-full h-[2px] bg-white"></div>
          <ul className="p-4 space-y-2 list-disc text-left">
            <li>
              Perfect for medium-sized events like weddings, engagement parties,
              and corporate functions.
            </li>
            <li>Comprehensive event planning and coordination.</li>
            <li>Up to 150 guests..</li>
            <li>Venue selection and booking.</li>
            <li>Customized decor and lighting..</li>
            <li>Vendor coordination and negotiation.</li>
            <li>2 planning meeting.</li>
            <li>12 hours of on-site coordination.</li>
            <li>Additional services available at an extra cost.</li>
          </ul>
        </div>
        <div className="max-w-xs rounded-xl p-4 bg-neutral text-center text-white">
          <h2 className="text-2xl font-bold"> Grand Gala</h2>
          <p className="text-xl font-medium my-4">Price: Custom Quote</p>
          <div className=" w-full h-[2px] bg-white"></div>
          <ul className="p-4 space-y-2 list-disc text-left">
            <li>
              Tailored for large-scale events like gala dinners, festivals, and
              high-profile corporate events.
            </li>
            <li>Full-service event planning and coordination.</li>
            <li>No guest limit..</li>
            <li>Venue selection, negotiation, and management.</li>
            <li>Luxury decor and lighting design.</li>
            <li>Extensive vendor management.</li>
            <li>Unlimited on-site coordination hours.</li>
            <li>Additional premium services available..</li>
            <li>VIP treatment for clients and guests.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
