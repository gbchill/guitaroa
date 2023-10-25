import { Link, useParams } from "react-router-dom";

export default function ItemPage() {
    // Get the 'action' parameter from the URL using React Router's useParams
    const { action } = useParams();

    return (
        <div>
            {action !== 'new' && (
                // Display a button to add a new place if 'action' is not 'new'
                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/selling/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add new place
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div>
                    <div className="flex justify-center">
                        <div className="">
                            <div className="text-3xl mb-4">Product Info</div>
                            <div className="max-w-xl border border-gray-300 rounded p-4 shadow-md shadow-gray-350 ">
                                <form className=" w-full max-w-lg">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3 mb-6 md:mb-0">
                                            <div className="flex">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                                    Listing Title
                                                </label>
                                                <p className="text-grey-500 text-xs italic pb-2 px-2">Required</p>
                                            </div>

                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />

                                        </div>
                                        <div className="w-full px-3 mb-6 md:mb-0 mt-2">
                                            <div className="flex">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                                    Brand
                                                </label>
                                                <p className="text-grey-500 text-xs italic pb-2 px-2">Required</p>
                                            </div>

                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                                        </div>
                                        <div className="w-full px-3 mt-3">
                                            <div className="flex">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                                    Model
                                                </label>
                                                <p className="text-grey-500 text-xs italic pb-2 px-2 ">Required</p>
                                            </div>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                                        </div>
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                                Year
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                                            <p className="text-xs mb-2 px-2"> If you don't know the exact year, use a fuzzy date like "mid-90s" or "1953-1957."</p>
                                        </div>
                                        <div className="w-full  px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                                Category
                                            </label>
                                            <div className="relative">
                                                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" placeholder="Select one..">
                                                    <option>Select one...</option>
                                                    <option>Acoustic Guitar</option>
                                                    <option>Electric Guitar</option>
                                                    <option>Basses</option>
                                                    <option>Accessories</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg clasn s="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>

                                                <div className="w-full">
                                                    <label className="block text-gray-500 font-bold mt-2">
                                                        Is this handmade?
                                                    </label>
                                                    <input className="mr-2 leading-tight border-primary" type="checkbox" />
                                                    <span class="text-sm">
                                                        I handmade this item
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-3 p-5">
                        <button className="r bg-primary text-white px-4 py-3 rounded-full ">
                            Continue
                        </button>
                    </div>
                </div>

            )}
        </div>

    );
}


// Display a form to create a new place if 'action' is 'new'
// <div>
//     <form>
//         <h1 className="text-4xl  mt-4 pb-5 ">Product Info</h1>
//         <div className=" border rounded-md border-gray-500 overflow-hidden px-4 py-1">
//             <h3 className="text-xl mt-4">Brand</h3>
//             <input className="h-full" type="text" />
//             <h2 className="text-xl mt-4">Address</h2>
//             <p className="text-gray-500 text-sm">Provide the address of your nearest city.</p>
//             <input type="text" placeholder="Address" />
//             <h2 className="text-xl mt-4">Photos</h2>
//             <p className="text-gray-500 text-sm">The more photos, the better.</p>
//             <div className="flex gap-2">
//                 <input type="text" placeholder={'Add using a link......jpg'} />
//                 <button className="bg-gray-200 grow px-4 rounded-2xl">Add &nbsp;photo</button>
//             </div>
//             <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
//                 <button className=" flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-500">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
//                     </svg>
//                     Upload
//                 </button>
//             </div>
//             <h2 className="text-xl mt-4">Description</h2>
//             <p className="text-gray-500 text-sm">description of the item</p>
//             <textarea />

//             <h2 className="text-xl mt-4">Specs</h2>
//             <p className="text-gray-500 text-sm">select all the specs of your item</p>
//         </div>
//     </form>
// </div>