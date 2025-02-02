

const NewsLetterBox = () => {

    const onsubmitHandler = (event)=>{
        event.preventDefault();
    }

  return (
    <div className=" text-center">
        <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% Off</p>
        <p className="text-gray-400 mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi adipisci quidem. Cupiditate illum, eius corrupti consequuntur consectetur blanditiis placeat qui aperiam quae facere aliquid, voluptatum optio laborum odit quis.</p>
        <form onSubmit={onsubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3" >
                <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your Email"  required/>
                <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox;