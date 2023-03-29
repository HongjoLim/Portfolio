const Intro = ({prop}) => {
    return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h1 className='i-name'>Hongjo Lim</h1>
                <div className='i-title'>
                    <div className="i-title-wrapper">
                        <div className="i-title-item">.NET Developer</div>
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Data Analyst</div>
                        <div className="i-title-item">Python Developer</div>
                    </div>
                </div>
                <div className="i-desc">
                Description about me
                </div>
            </div>
        </div>
        <div className='i-right'>
            Right
        </div>
    </div>
    );
}

export default Intro;