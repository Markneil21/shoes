import React from "react"
import bgImage from '../assets/bgNew1.jpg'
import bgImage2 from '../assets/stairs2.jpg'
import Photo1 from '../assets/shoes5.jpg'
import Photo2 from '../assets/shoes3.jpg'
import Photo3 from '../assets/shoes4.jpg'
import Photo4 from '../assets/store.jpeg'
import Photo5 from '../assets/girl.jpg'
import Photo6 from '../assets/boy.jpg'
import bgImage1 from '../assets/bgImage2.jpg'




export default function MainContent() {
    return (
   
<div className="scroll">
    
    {/* ////////FIRST PAGE/////// */}
    <section id="home">
        <div className="background-container min-h-[600px] bg-center bg-cover bg-no-repeat bright "
             style={{
                backgroundImage: `url(${bgImage})`,
                width: '100%',
              
          }}
        >
                <div className="container text-white ">
                    <div className="pt-32">
                        <h1 className="text-6xl font-bold leading-tight sen-font">Lorem Ipsum<br></br> since 2024.</h1> 
                        <h1 className="text-1xl font-normal leading-loose pb-7 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Temporibus rem blanditiis harum enim voluptates ab porro esse <br></br> beatae voluptatibus nostrum nihil aperiam suscipit quisquam nam,<br></br> non ipsa sapiente aliquam quas. </h1>
                        <button className="  rounded-lg dark:md:hover:bg-white hover:text-black px-5 py-1 font-semibold py-none transition duration-200 border-2 border-white "> 
                        Register Now
                         </button>
                    </div>
                </div>      
        </div>   
    </section>
         
    {/* ////////SECOND PAGE/////// */}
    <section id="about">
        <div className="flex px-48 py-10 ">
            <div>
                <div className="absolute">WAYS TO SUPPORT <br></br> 
                    <span className="text-4xl font-semibold "> Support Acme Indoors.</span>  
                </div>
                <div className="absolute pl-86 mr-44">
                    <p className="padding-left sen-font">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sapiente ullam sunt accusamus sint. Quia, ratione ipsam. Quibusdam, a. Soluta accusamus itaque veritatis quidem maiores magni fugiat amet asperiores mollitia?
                    </p>
                </div>
            </div>

            {/* --------- BOX ELEMENTS ---------  */}
            <div className=" pt-32 space-x-14 text-white flex">
             <div className="columns-1">
                <div className=" bg-gray-900 size-[21rem] rounded-xl"> 
                    <div className=" text-4xl font-bold pt-10 ml-10"> 01 </div>
                    <div className=" text-center mt-11 text-4xl font-bold"> LOREM<br></br> IPSUM</div>
                </div>
                <div className="text-black sen-font mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt obcaecati nobis necessitatibus temporibus aut non qui ipsum fugiat quis ipsam minus dolor tempora itaque provident, ut, porro voluptatem vitae?</div>
             </div>
              
             <div className="columns-1">
                <div className=" bg-gray-900 size-[21rem] rounded-xl"> 
                    <div className=" text-4xl font-bold pt-10 ml-10"> 02 </div>
                    <div className=" text-center mt-14 text-4xl font-bold"> Lorem Ipsum</div>
                </div>
                <div className="text-black sen-font mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque itaque nihil quae iusto iste magnam! Itaque quibusdam sed necessitatibus minus perferendis tempore numquam. Voluptas commodi numquam consequatur officiis quis.</div>
            </div>
            
            <div className="columns-1">    
                <div className=" bg-gray-900 size-[21rem] rounded-xl "> 
                    <div className=" text-4xl font-bold pt-10 ml-10"> 03 </div>
                    <div className=" text-center mt-11 text-4xl font-bold"> LOREM <br></br> IPSUM</div>
                </div>
                <div className="text-black sen-font mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia debitis soluta voluptatem excepturi molestias atque quasi velit sequi perspiciatis rem aspernatur magni molestiae nemo esse eaque obcaecati, ab doloribus praesentium.</div>
            </div>
            </div>
        </div>
    </section> 


    {/* ////////THIRD PAGE/////// */}    
    
        <div className="background-container min-h-[500px] bg-center bg-cover bg-no-repeat"
      
                style={{
                    backgroundImage: `url(${bgImage2})`,
                    width: '100%',
                
            }}
            >
                    <div className=" text-white absolute text-right right-8">
                        <div className="pt-32">
                            <h1 className="text-6xl font-bold leading-tight sen-font">Lorem Ipsum <br></br> since 1989.</h1> 
                            <h1 className="text-1xl font-normal leading-loose pb-7 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Temporibus rem blanditiis harum enim voluptates ab porro esse <br></br> beatae voluptatibus nostrum nihil aperiam suscipit quisquam nam,<br></br> non ipsa sapiente aliquam quas. </h1>
                            <button className=" bg-white  rounded-lg text-black px-5 py-1 font-semibold py-none transition duration-200 border-2 border-white hover:bg-transparent hover:text-white hover:border-white  "> 
                            Lorem Ipsum 
                            </button>
                        </div>
                    </div>      
        </div>   
      
     {/* ////////FOURTH PAGE/////// */}       
    <section id="shop">
        <div className="px-48 py-10">
            <div>
                <div className="">SHOP PRODUCTS</div>
                <div className=" text-4xl font-bold">Open 24/7/365.</div>
            </div>
            <div className="pt-10">
                {/* --------- 3 PICTURES ELEMENTS ---------  */}
                <div className="flex grid-rows-3 gap-5 justify-center ">
                    
                <div className="FIRST PHOTO">  
                    <img 
                        src={Photo1} 
                        alt="hello"
                        className=" rounded-3xl  object-contain"
                        width={360}
                        />
                    <div className="text-black text-center mt-6 font-bold ">LOREM IPSUM <br></br> 
                        <span className="font-normal">₱200.00</span>
                    </div>
                    <div className="flex justify-center items-center pt-3">
                    <button className=" bg-slate-800 rounded-lg text-white   px-5 py-1 font-semibold py-none transition duration-200 border-2 border-white dark:md:hover:bg-black hover:text-white"> 
                            LOREM
                    </button>
                    </div>
                        
                </div>

                <div className="SECOND PHOTO">     
                    <img 
                        src={Photo2} 
                        alt="hello"
                        className=" rounded-3xl  object-contain"
                        width={360}
                        />
                    <div className="text-black text-center mt-6 font-bold ">LOREM IPSUM <br></br> 
                        <span className="font-normal">₱200.00</span>
                    </div>
                    <div className="flex justify-center items-center pt-3">
                    <button className=" bg-slate-800  rounded-lg text-white   px-5 py-1 font-semibold py-none transition duration-200 border-2 border-white dark:md:hover:bg-black hover:text-white"> 
                            LOREM
                    </button>
                    </div>
                </div>

                <div className="THIRD PHOTO"> 
                    <img 
                        src={Photo3} 
                        alt="hello"
                        className=" rounded-3xl  object-contain"
                        width={360}
                        /> 
                    <div className="text-black text-center mt-6 font-bold ">LOREM IPSUM <br></br> 
                        <span className="font-normal">₱200.00</span>
                    </div>
                    <div className="flex justify-center items-center pt-3">
                    <button className=" bg-slate-800 rounded-lg text-white   px-5 py-1 font-semibold py-none transition duration-200 border-2 border-white dark:md:hover:bg-black hover:text-white"> 
                            LOREM
                    </button>
                    </div>
                </div> 
                </div>
                
            </div>
            <div className="flex justify-center items-center pt-[40px]">
                    <button className=" bg-slate-800 rounded-lg text-white  px-5 py-1 font-semibold py-none transition duration-200 border-2 border-white dark:md:hover:bg-black"> 
                            View All Products
                    </button>
            </div>
        </div>
    </section>  
     {/* ////////FOURTH PAGE/////// */}   
    <section id="donate">
        <div className="px-48 pb-16">
                <img 
                    src={Photo4} 
                    alt="robot"   
                    className=" rounded-2xl mt-12 object-contain absolute"
                    width={360}
                >
                </img>
            <div className=" w-[58rem] h-[38rem] bg-gray-900 ml-52 rounded-md text-white">
                
            <div className=" ml-80 pl-16 mr-28 justify-normal text-justify ">
                <h1 className=" text-5xl font-semibold my  pt-12 mb-4 ">LOREM IPSUM.</h1>
                <p className="pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore dolor, sapiente veniam mollitia nostrum, iusto voluptate ipsa ipsum nesciunt laudantium excepturi nemo laboriosam, placeat maxime repudiandae aliquam. Veritatis, aut facere!</p>
                <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores, ipsum praesentium quisquam dolor omnis quo molestiae aut reprehenderit nihil doloribus ducimus deserunt accusantium? Laborum cum ratione similique harum rem?</p>
                <p className="pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi omnis sed, quia, repudiandae id quod autem fugit eaque nulla blanditiis nostrum, magnam officiis. Ut cupiditate ea assumenda temporibus nulla ab.</p>
                <hr></hr>
                <div className="font-semibold">Mary Mariel Y. Bedis <br></br> Mark Neil B. Bertiz</div>
            </div>
            
            </div>
        </div>
    </section>       
        {/* ////////FIFTH PAGE/////// */}   
        <div className="px-48 pb-16 pt-16">
            <div className="flex justify-center">

                <div className="columns-1 w-[25rem] ">
                    <img 
                        src={Photo5} 
                        alt="hello"
                        className="object-contain rounded-full mx-auto"
                        width={270}
                        />

                    <div className="CAPTION">
                        <div className="font-semibold text-center mt-6 text-lg sen-font">Mary Mariel Y. Bedis</div>
                        <div className="sen-font pt-2 text-center font-light text-base leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed ex, eum, in laborum ipsam vitae nostrum id quibusdam alias quod consectetur, tempore architecto doloremque similique modi voluptas harum inventore.</div>
                    </div>
                </div>

                <div className="px-16"></div>

                <div className="columns-1 w-[25rem] ">
                    <img 
                        src={Photo6} 
                        alt="hello"
                        className="object-contain rounded-full mx-auto"
                        width={270}
                        />

                    <div className="CAPTION">
                        <div className="font-semibold text-center  mt-6 text-lg sen-font">Mark Neil B. Bertiz</div>
                        <div className="sen-font pt-2 text-center font-light  text-base leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed ex, eum, in laborum ipsam vitae nostrum id quibusdam alias quod consectetur, tempore architecto doloremque similique modi voluptas harum inventore.</div>
                    </div>
                </div>
            </div>
        </div>
            
        {/* ////////SIXTH PAGE/////// */}   
    <section id="contact"> 
        <div className="background-container min-h-[650px] bg-center bg-cover bg-no-repeat relative"
             style={{
                backgroundImage: `url(${bgImage1})`,
                width: '100%',
              
          }}
        >
            <div className=" text-white absolute text-left left-10 pt-20 pl-20 ">
                <div className="pt-32">
                    <h1 className="text-6xl font-bold leading-tight font-sans">Need Help?</h1> 
                    <h1 className="text-1xl font-normal leading-loose pb-7 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Temporibus rem blanditiis harum enim voluptates ab porro esse <br></br> beatae voluptatibus nostrum nihil aperiam suscipit quisquam nam,<br></br> non ipsa sapiente aliquam quas. </h1>
                    <button className=" bg-transparent  rounded-lg text-white px-5 py-1 font-semibold py-none transition duration-200 border-2 border-white md:hover:bg-slate-200 hover:text-black hover:border-slate-200  "> 
                         Lorem Ipsum 
                    </button>
                </div>
            </div>
        </div>   
    </section>     
</div>
          

    )
}
