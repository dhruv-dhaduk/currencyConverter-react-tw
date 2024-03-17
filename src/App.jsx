import { useCurrencies } from "./hooks";

function App() {

    // const [from, rates, changeBase, convertCurrency] = useCurrencies("USD");

    return (
        <div 
            className="w-full h-dvh p-4 relative flex justify-center items-center"
        >
            <div
                className="w-full h-full absolute inset-0 m-auto bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center opacity-40"
            >   
            </div>
            
            <div
                className="w-full max-w-120 aspect-square p-4 bg-white text-black bg-opacity-30 backdrop-blur-sm rounded-xl border-slate-300 border-2"
            >

            </div>

        </div>
    );
}

export default App;
