import Marquee from "react-fast-marquee";

const Review = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-5xl text-center font-bold">Customer Reviews</h2>
      <Marquee
        className="mt-10 rounded-lg"
        pauseOnHover
        gradient
        gradientColor="#ffffff"
        gradientWidth={200}
      >
        <div className="w-96 mr-10 bg-slate-500 bg-opacity-20 rounded-lg p-4">
          <h2 className="">
            <span className="text-2xl font-semibold">Samantha</span> -
            ⭐⭐⭐⭐⭐
          </h2>
          <p className="px-4 pt-2">
            Samantha{"'"}s team executed our wedding flawlessly. From decor to
            coordination, they exceeded expectations. Truly grateful for a
            magical day!
          </p>
        </div>
        <div className="w-96 mr-10 bg-slate-500 bg-opacity-20 rounded-lg p-4">
          <h2 className="">
            <span className="text-2xl font-semibold">Alex</span> - ⭐⭐⭐⭐⭐
          </h2>
          <p className="px-4 pt-2">
            Alex{"'"}s seamless coordination ensured our conference{"'"}s
            success. His expertise saved us time and allowed us to focus on our
            guests.
          </p>
        </div>
        <div className="w-96 mr-10 bg-slate-500 bg-opacity-20 rounded-lg p-4">
          <h2 className="">
            <span className="text-2xl font-semibold">Emily</span> - ⭐⭐⭐⭐⭐
          </h2>
          <p className="px-4 pt-2">
            Emily{"'"}s personalized touch elevated our anniversary celebration.
            She captured our essence beautifully, creating cherished memories we
            {"'"}ll treasure.
          </p>
        </div>
        <div className="w-96 mr-10 bg-slate-500 bg-opacity-20 rounded-lg p-4">
          <h2 className="">
            <span className="text-2xl font-semibold">Robert</span> - ⭐⭐⭐⭐⭐
          </h2>
          <p className="px-4 pt-2">
            Robert{"'"}s top-notch service made our company picnic a hit. His
            professional yet fun approach left our employees and clients
            thoroughly impressed.
          </p>
        </div>
        <div className="w-96 mr-10 bg-slate-500 bg-opacity-20 rounded-lg p-4">
          <h2 className="">
            <span className="text-2xl font-semibold">Jessica</span> - ⭐⭐⭐⭐⭐
          </h2>
          <p className="px-4 pt-2">
            Robert{"'"}s top-notch service made our company picnic a hit. His
            professional yet fun approach left our employees and clients
            thoroughly impressed.
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default Review;
