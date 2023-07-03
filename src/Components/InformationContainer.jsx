import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/InformationContainer.sass'

const InformationContainer = () => {
    return (
        <section id='information'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Telefone</h3>
                <p>(21)99999-6117</p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id='mail-icon' />
            <div>
                <h3>E-mail</h3>
                <p>matheus4@gmail.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>Localização</h3>
                <p>Rio de janeiro - RJ</p>
            </div>
        </div>
    </section>
    );
}

export default InformationContainer;
