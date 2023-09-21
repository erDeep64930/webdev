

const TenderCard = () => {
  return (
    <div className="w-11/12 container mx-auto flex flex-col gap-10 ">
        {/* this is for main heading  */}

        <div>
            <h1 className="font-bold text-xl md:text-3xl text-center mx-auto p-4">Urban Development And Housing Department</h1>
        </div>

        {/* sub heading */}
        <div>
            <h1 className="font-bold text-lg md:text-xl text-center mx-auto p-4">Urban Development And Housing Department</h1>
        </div>

{/* card  */}

<div className="w-[80%] rounded-md shadow-lg mx-auto hover:shadow-xl border-gray-100 border flex flex-col p-2 mb-4">

    <div>
        <p className="font-bold ">Zsic General Insurance Limited Tender Result</p>
    </div>
{/* this is for location */}
    <div className="flex gap-4">

        <div>Icon</div>
        <div>Zambia</div>

    </div>

    {/* this is for more details of the company  */}

    <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 p-2">

        <div className="flex flex-col">
            <p>Coming soon</p>
            <p>2023-23-23</p>
        </div>
        <div className="flex flex-col">
            <p>Tender amount</p>
            <p>202393</p>
        </div>
        {/* button */}
        <div className="flex space-x-6">
           <button>Follow</button>
           <button>Download</button>
        </div>

    </div>


</div>
{/* this is for the cost  */}

<div className="w-[80%] rounded-md shadow-lg mx-auto hover:shadow-xl border-gray-100 border flex flex-col p-2 mb-4">
    <div className="bg-gray-200">
        <h4 >Cost</h4>
    </div>
    {/* this is table */}
    <div className="flex flex-col py-2 text-center w-[60%] mx-auto">
        {/* emd */}
    <div className="flex justify-between items-center border border-blue-200 p-1">
     <span>EMD</span>
     <span>8986868</span>
     </div>
     {/* doc */}
     <div className="flex justify-between items-center border border-blue-200 p-1">
     <span>Document cost</span>
     <span>8986868</span>
    </div>
    {/* tender fee */}
    <div className="flex justify-between items-center p-1 border border-blue-200">
     <span>Tender fee</span>
     <span>8986868</span>
   
    </div>
    </div>
   

</div>
{/* this is for description */}

<div className="w-[80%] rounded-md shadow-lg mx-auto hover:shadow-xl border-gray-100 border flex flex-col p-2 mb-4">
<div className="bg-gray-200">
        <h4 >Description</h4>
       
    </div>
    <div>
            <p className="w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, repellat at nesciunt accusamus dolorum odio eos quidem doloribus molestiae, fuga animi facilis ullam voluptates, numquam asperiores. Ex perspiciatis fuga facilis!</p>
        </div>

</div>

{/* this is for contact */}

<div className="w-[80%] rounded-md shadow-lg mx-auto hover:shadow-xl border-gray-100 border flex flex-col p-2 mb-4">
<div className="bg-gray-200">
        <h4>Contact</h4>

       
    </div>

    <div className="flex justify-between items-center border border-blue-200 p-1">
     <span>Tender Id</span>
     <span>8986868</span>
     </div>

     <div className="flex justify-between items-center border border-blue-200 p-1">
     <span>Tender Number</span>
     <span>8986868</span>
     </div>

     <div className="flex justify-between items-center border border-blue-200 p-1">
     <span>Tender Authority</span>
     <span>8986868</span>
     </div>

     <div className="flex justify-between items-center border border-blue-200">
     <span>Purchase Add</span>
     <span>8986868</span>
     </div>

     <div className="flex justify-between items-center border border-blue-200 p-1">
     <span>Website</span>
     <span>8986868</span>
     </div>
    </div>



</div>






        

  )
}

export default TenderCard