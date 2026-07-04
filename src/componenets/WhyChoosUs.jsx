import { Zap, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Booking",
    desc: "Reserve your ideal study space in minutes and start studying right away.",
  },
  {
    icon: Users,
    title: "Verified Hosts",
    desc: "All study spaces are verified to ensure quality and safety standards.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    desc: "Book for hours or days that work best for your schedule.",
  },
  {
    icon: Award,
    title: "Top Rated",
    desc: "Real reviews from verified users help you find the best spaces.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose StudyNook?
      </h2>

      <div className="md:container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-xl shadow p-6 text-center"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="text-blue-500" size={22} />
            </div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-500 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;