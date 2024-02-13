function Texto() {
    return (
        <div className="caixa">
            <div className='box w-auto h-96 relative top-52 left-60 size-5'>
            
                <div className="box-texto flex flex-col">
                    <h1 className="text-5xl font-bold flex-1 text-white leading-normal">Scale Fintech</h1>
                    <h1 className='box-text0-second text-white text-5xl font-bold flex-1 relative -top-5'>Safe And Secure</h1>
                </div>

        
            
                    
                
                <div className="box-paragrafo relative text-white text-sm max-w-sm">
                    <p>Ship your fintech products to your customers with fast and reliable processes. Secure and highly customizable. Rise Finance is the best partner for you if you want to scale your finance products worldwide. </p>
                </div>

                <div className="box-botao flex w-52 py-9 items-center justify-center border border-black bg-transparent h-16 relative top-8 rounded cursor-pointer  ">
                    <button>Conculation</button>
                </div>
            </div>

            <div className='image relative left-2/4 -top-36'>
                <img src="./src/assets/Group 15.png" alt="" />
            </div>

        </div>
    )
}

export default Texto