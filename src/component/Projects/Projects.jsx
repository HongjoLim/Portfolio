import './Projects.css';
import ProjectFramework from "./ProjectFramework";
import ProjectData from '../../data/projects.json';

const Projects = () => {

    const projects = ProjectData;
    const frameworks = [...new Set(projects.map(p => p.framework))];

    return (
        <div className='p'>
            {frameworks.map(f => {
                return <ProjectFramework key={f} framework={f} projects={projects.filter(x => x.framework == f)}/>
            })}
        </div>
    );
}

export default Projects;