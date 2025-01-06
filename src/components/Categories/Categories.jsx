import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

import businessIcon from "../../assets/client-experience.png";
import personalIcon from "../../assets/personal-network.png";
import creativeIcon from "../../assets/creative.png";
import startupIcon from "../../assets/startup-icon.png";

const Categories = () => {
    const categories = [
        {
            name: "Business",
            icon: businessIcon,
        },
        {
            name: "Personal",
            icon: personalIcon,
        },
        {
            name: "Creative",
            icon: creativeIcon,
        },
        {
            name: "Startup",
            icon: startupIcon,
        },
    ];

    // Animation variants for each category card
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.2 }, // Add stagger effect
        }),
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
            <SectionTitle title="Categories" />
            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 justify-center items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} // Trigger animation each time 30% of the component is visible
            >
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        className="flex flex-col justify-center items-center border border-gray-200 dark:border-gray-700 rounded-xl p-4"
                    >
                        <Link to={`/campaigns`}>
                            <div className="w-16">
                                <img src={category.icon} alt={category.name} className="w-full" />
                            </div>
                            <p className="text-center text-lg font-semibold mt-2 outfit">
                                {category.name}
                            </p>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Categories;
