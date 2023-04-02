import './About.css';
import me from '../../img/me.png';

const About = () => {
    return (
    <div className="a">
        <div className="a-left"> 
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img className='a-img' src={me} alt=''/>
            </div>
        </div>
        <div className="a-right">
            <div className='a-desc'>
                <h1>About me</h1>
                <hr/>
                <p>During 5 years of writing code, I believe everything is possible in programming.</p>
                <p>I love...</p>
                <p>- making my customers happy with my code</p>
                <p>- helping my colleagues solve their problems.</p>
            </div>
        </div>

    </div>
    );
}

export default About;