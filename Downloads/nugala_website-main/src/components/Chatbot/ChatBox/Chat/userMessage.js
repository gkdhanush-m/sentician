const UserMessage = ({ content }) => {
    return (
        <div className="flex items-center justify-end mb-3">
            <p className="message-text p-2 rounded-md text-sm bg-custom-light-blue-bg text-custom-blue">
                {content}
            </p>
        </div>
    );
};

export default UserMessage;