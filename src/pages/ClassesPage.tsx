import { Clock, Calendar, ArrowRight } from "lucide-react";
import { ClassColor, classes, schedule } from "../data/classes";

export default function ClassesPage() {
  const getColorClasses = (color: ClassColor) => {
    switch (color) {
      case "electric-blue":
        return {
          text: "text-electric-blue",
          bg: "bg-electric-blue/10",
          border: "border-electric-blue/30",
        };
      case "lime-accent":
        return {
          text: "text-lime-accent",
          bg: "bg-lime-accent/10",
          border: "border-lime-accent/30",
        };
      case "energy-orange":
        return {
          text: "text-energy-orange",
          bg: "bg-energy-orange/10",
          border: "border-energy-orange/30",
        };
      default:
        return {
          text: "text-electric-blue",
          bg: "bg-electric-blue/10",
          border: "border-electric-blue/30",
        };
    }
  };

  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Only section with animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full">
            <span className="text-electric-blue font-heading font-bold text-sm tracking-wider">GROUP FITNESS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Classes & Schedule</h1>
          <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Join our expert-led classes designed to challenge, motivate, and transform your fitness journey
          </p>
        </div>

        {/* Class Offerings - No animation */}
        <div className="mb-20 animate-fade-in-delayed">
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Our Class Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classItem, index) => {
              const colors = getColorClasses(classItem.color);
              const Icon = classItem.icon;

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border ${colors.border} p-6 hover:scale-105 transition-all duration-300`}
                >
                  <div className={`${colors.bg} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className={`text-2xl font-heading font-bold ${colors.text} mb-3`}>{classItem.name}</h3>
                  <p className="text-gray-300 font-body text-sm leading-relaxed mb-4">{classItem.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="font-body">{classItem.duration}</span>
                    </div>
                    <div className={`${colors.text} font-body font-semibold`}>{classItem.intensity}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Schedule - No animation */}
        <div className="mb-16 animate-fade-in-delayed-2">
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Weekly Schedule</h2>
          <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-2xl border border-electric-blue/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-electric-blue/10 border-b border-electric-blue/20">
                    <th className="px-6 py-4 text-left font-heading font-bold text-electric-blue">Day</th>
                    <th className="px-6 py-4 text-left font-heading font-bold text-electric-blue">Time</th>
                    <th className="px-6 py-4 text-left font-heading font-bold text-electric-blue">Class</th>
                    <th className="px-6 py-4 text-left font-heading font-bold text-electric-blue">Trainer</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((day, dayIndex) =>
                    day.sessions.map((session, sessionIndex) => (
                      <tr
                        key={`${dayIndex}-${sessionIndex}`}
                        className="border-b border-electric-blue/10 hover:bg-electric-blue/5 transition-colors"
                      >
                        {sessionIndex === 0 && (
                          <td
                            rowSpan={day.sessions.length}
                            className="px-6 py-4 font-heading font-bold text-white border-r border-electric-blue/10"
                          >
                            {day.day}
                          </td>
                        )}
                        <td className="px-6 py-4 font-body text-gray-400">{session.time}</td>
                        <td className="px-6 py-4 font-body text-white font-semibold">{session.class}</td>
                        <td className="px-6 py-4 font-body text-gray-300">{session.trainer}</td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA - No animation */}
        <div className="bg-gradient-to-br from-lime-accent/10 to-electric-blue/10 border border-lime-accent/30 rounded-2xl p-8 md:p-12 text-center">
          <Calendar className="w-16 h-16 text-lime-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Ready to Sweat?</h2>
          <p className="text-gray-300 font-body text-lg mb-6 max-w-2xl mx-auto">
            Book your first class now and experience the energy of group training at Bali Strength & Flow
          </p>
          <a
            href="https://wa.me/6281234567890?text=Hi!%20I'm%20interested%20in%20joining%20a%20class.%20Please%20provide%20more%20information."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-lime-accent text-charcoal px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-electric-blue transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Book Your First Class Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
