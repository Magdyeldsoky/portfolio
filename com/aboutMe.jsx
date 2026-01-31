import {Briefcase, Code, User} from "lucide-react";

const AboutMe = () => {
    return (<section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate Web Development
                    </h3>
                    <p className="text-muted-foreground">
                        Code is my tool, the browser is my canvas. I build fast, interactive frontend experiences
                        that feel alive, intuitive, and built for real users.
                    </p>
                    <p className="text-muted-foreground">
                        I’m deeply passionate about frontend development — not just writing code, but shaping how
                        users feel when they interact with a product. I enjoy experimenting, refining details, and
                        constantly pushing my skills to build interfaces that truly connect with people.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-btn">
                            Get in touch
                        </a>
                    </div>

                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradiant-border p-6 card-hover">
                        <div className="flex items-start gap-4 ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Web Development
                                </h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites  with modern frameworks.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="gradiant-border p-6 card-hover">
                        <div className="flex items-start gap-4 ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    UI/UX Design
                                </h4>
                                <p className="text-muted-foreground">
Designing intuitive user interfaces and seamless user experiences                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="gradiant-border p-6 card-hover">
                        <div className="flex items-start gap-4 ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Project management
                                </h4>
                                <p className="text-muted-foreground">
Leading projects from conception to completion with agile methodologies                                </p>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>)
}
export default AboutMe
