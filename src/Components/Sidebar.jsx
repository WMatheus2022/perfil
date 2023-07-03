import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworksContainer';

import Avatar from '../img/1679718024280.jpg' 

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
        <aside id="sidebar">
        <img src={Avatar} alt="Wander Matheus" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">
            Download currículo
        </a>
    </aside>
    );

};

export default Sidebar;