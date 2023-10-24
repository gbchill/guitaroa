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
                // Display a form to create a new place if 'action' is 'new'
                <div>
                    <form>
                        <h2 className="text-2xl mt-4">Title</h2>
                        <p className="text-gray-500 text-sm">Choose a catchy title for your place.</p>
                        <input type="text" placeholder="For example: My awesome guitar" />
                        <h2 className="text-2xl mt-4">Address</h2>
                        <p className="text-gray-500 text-sm">Provide the address of your nearest city.</p>
                        <input type="text" placeholder="Address" />
                        <h2 className="text-2xl mt-4">Photos</h2>
                        <p className="text-gray-500 text-sm">The more photos, the better.</p>
                        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                            <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-500">+</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
