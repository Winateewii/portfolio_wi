import { skillsIcon } from "./constants"
const Skills = () => {

    return (

        <div id='skill' className="bg-gray-100 flex items-center justify-center p-4">
            <div className="mx-4 my-12 flex w-full flex-col items-center justify-between gap-8 lg:max-w-[1200px] lg:flex-row lg:gap-24">
                <div className="flex w-full max-w-[550px] flex-col gap-4">
                    <h2 className="text-3xl font-bold lg:text-4xl text-gray-800">Skills</h2>
                    <p className="font-light text-gray-600">
                        Experienced in utilizing various programming languages and frameworks,
                        covering everything from frontend development, backend integration,
                        and database management to deployment.
                    </p>
                </div>
                <div className="grid w-full max-w-[550px] grid-cols-2 gap-4 font-light md:grid-cols-3">
                    {skillsIcon.map((tool, index) => {
                        const { icon, alt, title } = tool;
                        return (
                            <div key={index} className="flex items-center gap-4">
                                <img
                                    className="h-auto rounded-md"
                                    src={icon}
                                    alt={alt}
                                    width={40}
                                    height={40}
                                />
                                <p>{title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills