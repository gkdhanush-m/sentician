import { MdOutlineSend } from "react-icons/md";

const InputContainer = ({ userMessage, setUserMessage, inputTypeDisabled, handleSend, }) => {

    return (
        <div className="flex items-center p-2 w-[100%]">
            <input
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder={inputTypeDisabled ? "Choose an options" : "Write a message"}
                className={`${inputTypeDisabled && "cursor-not-allowed"} w-[90%] bg-custom-light-blue-bg h-12 py-4 px-2 border border-custom-light-blue rounded-lg outline-none`}
            />
            <button
                className="w-[10%] flex justify-center items-center ml-2"
                onClick={handleSend}
            >
                <MdOutlineSend className="text-custom-blue w-6 h-6" />
            </button>
        </div>
    )
}

export default InputContainer;