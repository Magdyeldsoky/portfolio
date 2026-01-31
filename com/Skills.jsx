const skill = [
    {name: "HTML/CSS", level: "95", category: "Frontend"},
    {name: "JavaScript", level: "90", category: "Frontend"},
    {name: "TypeScript", level: "80", category: "Frontend"},
    {name: "Tailwind CSS", level: "85", category: "Frontend"},
    {name: "React", level: "75", category: "Frontend"},

]
const Skill = () => {
    return (
        <section id="Skills" className="py-24 px-4 relative bg-secondary/30  ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                    My <span className="text-primary">
        Skills
    </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skill.map((item, index) => (
                        <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover ">
                            <div className="text-left mb-4 ">
                                <h3 className="font-semibold text-lg">
                                    {item.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_105s_ease-out]" style={{width:item.level + "%"}}/>
                            </div>
                            <div className="text-right mt-1 ">
                                <span className="text-sm texr-muted-foreground">
                                   {item.level}%
                                </span>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )

}
export default Skill