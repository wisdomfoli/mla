
function BackToTop() {
    return (
        <>
            <div className="fixed bottom-6 right-6 flex flex-col items-center">
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <span className="text-xs mt-1 text-gray-600">BACK<br />TO TOP</span>
            </div>
        </>
    );
}

export default BackToTop;