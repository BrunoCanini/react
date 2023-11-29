export default function TheMain(){
    return(

        <div className=" w-[600px]  mx-auto rounded-xl mt-5 bg-white shadow-lg">
            <div className=" h-[400px] rounded-t-xl bg-gray-300 flex items-center justify-center">  
                <p className="text-5xl">600 x 400</p>
            </div>
            <div className="p-4 flex flex-col gap-4">
                <h2 className="text-lg font-bold">Titolo del post</h2>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium adipisci quas molestiae iusto maxime similique, necessitatibus reiciendis qui sed vero facilis! Ducimus perspiciatis ullam atque quia aliquam minima porro veniam.</p>
                <button className="uppercase p-3 bg-yellow-500 w-fit text-white">Leggi di più</button>
            </div>
        </div>

    )
}