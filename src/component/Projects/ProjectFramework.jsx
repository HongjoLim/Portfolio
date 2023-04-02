import ProjectItem from "./ProjectItem";

const ProjectFramework= ({framework, projects}) => {
    return (
        <>        
        <h1>{framework}</h1>
        {
            projects.map(p => {
                return <ProjectItem key={p.title} project={p} />
            })
        }
        </>
    );
}

export default ProjectFramework;