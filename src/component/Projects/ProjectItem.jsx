const ProjectItem = ({project}) => {
    console.log(project);
    return (
        <h1 className='p-item'>{project.title}</h1>
    );
}

export default ProjectItem;