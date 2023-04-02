import './Intro.css';
import { SocialIcon } from 'react-social-icons';
import Resume from '../../data/Resume.pdf'

const Intro = () => {
    
    const downloadResume = () => {
        fetch(Resume).then(res => {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }

    return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h1 className='i-name'>Hongjo Lim</h1>
                <div className='i-title'>
                    <div className="i-title-wrapper">
                        <div className="i-title-item">.NET Developer</div>
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Python Programmer</div>
                    </div>
                </div>
                <p className="i-desc">
                </p>
                <div className='i-links'>
                    <div className='i-links-resume'>
                        <button onClick={downloadResume}>Resume</button>
                    </div>
                    <div className='i-links-icons'>
                        <SocialIcon url='https://www.linkedin.com/in/hongjo-lim-a00562158/' />
                        <SocialIcon url='https://github.com/HongjoLim' />
                    </div>
                </div>
            </div>
        </div>
        <div className='i-right'>
            <div className='i-bg'></div>
        </div>
    </div>
    );
}

export default Intro;