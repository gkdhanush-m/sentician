import NLogo from '../../../../assets/N-logo.png'

const BotMessage = ({ content }) => {
    return (
        <div className="flex items-start justify-start mb-3">
            <img
                src={NLogo}
                alt="N Logo"
                className="rounded-full w-7 h-7 mr-3"
            />
            <p className="message-text p-2  rounded-bl-xl rounded-tr-xl rounded-br-xl  text-sm border-2 border-custom-blue text-custom-blue">
                {content}
            </p>
        </div>
    );
};

export default BotMessage