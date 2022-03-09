import Banner from '../components/Banner';
import Card from '../components/Card';
// icon 
import Chat from '../assets/img/icon-chat.png';
import Money from '../assets/img/icon-money.png';
import Security from '../assets/img/icon-security.png';
// custom
import '../custom/pages/home.scss';

export default function Home() {

    const DISPLAYCARD = [
        {
            id : 1, 
            icon : Chat,
            description : 'icon-chat',
            title : 'You are our #1 priority',
            text : 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
        },
        {
            id : 2,
            icon : Money,
            description : 'icon-money',
            title : 'More savings means higher rates',
            text : 'The more you save with us, the higher your interest rate will be!'
        },
        {
            id : 3,
            icon : Security,
            description : 'icon-security',
            title : 'Security you can trust',
            text : 'We use top of the line encryption to make sure your data and money is always safe.'
        },
    ];


    return (
        <>
            <Banner/>
            <div className='features'>
                {DISPLAYCARD.map((item) => {
                    return (
                        <Card
                            key={item.id} 
                            icon={item.icon} 
                            description={item.description}
                            title={item.title} 
                            text={item.text} 
                        />
                )})} 
            </div>
        </>
    
    )
}