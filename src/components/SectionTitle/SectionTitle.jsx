const SectionTitle = ({ title, subtitle }) => {
    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-teal-300 text-teal-600">
              {title}
            </h2>
            <p className="text-center mt-2 text-lg dark:text-gray-300 text-gray-600">
                {subtitle}
            </p>
        </div>
    )
}

export default SectionTitle
