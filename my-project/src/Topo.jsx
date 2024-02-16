function Topo() {
    return (
        <div className="box-topo flex flex-col xl:flex-row   w-[100%] justify-around items-center relative top-5">
            <div className='box-image relative  '>
                <img class=' xl:w-[100%]' src= "./src/assets/Group 10.png" alt="" />

                
            </div>

            

            <div className='box-navegacao xl:flex xl:flex-row text-white xl:text-white flex flex-col relative hidden'>
                <a href="#" className="mr-4">Company</a>
                <a href="#" className="mr-4">Features</a>
                <a href="#" className="mr-4">Pricing</a>
                <a href="#">Insights</a>
            </div>

            

        </div>
    )
}

export default Topo