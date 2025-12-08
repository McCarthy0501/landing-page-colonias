import img from '../../assets/img/logo_nav.png'



export const Logo_nav=()=>{
    return(<>
            <a href="/" className='text-carbon font-bold text-2xl tracking-wider'>
                    <img src={img} alt="logo" className='h-8 md:h-12 w-auto'/>
</a>
    </>)
}