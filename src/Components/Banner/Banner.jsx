import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
            <div className='w-full'>
                <img 
                className='w-full object-cover rounded-md'
                src={banner} />
            </div>
            <div className='text-center space-y-3 w-full'>
                <h1 className='text-4xl font-light'>Browse Coffees by Category</h1>
                <p className='font-light'>Choose your desired coffee category to browse through specific coffees that fit in your taste.</p>
            </div>
        </div>
    );
};

export default Banner;


