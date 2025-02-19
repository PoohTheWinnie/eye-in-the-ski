"use client";

export default function Error({ error }) {
    return (
        <div className="flex h-screen flex-col bg-white">
            <img
                src="https://images.unsplash.com/photo-1546801136-9bf4a54a1a52?q=80&w=4398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1548&q=80"
                alt=""
                className="h-[50vh] w-full object-cover"
            />

            <div className="flex flex-1 items-center justify-center">
                <div className="mx-auto max-w-xl px-4 py-8 text-center">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    There was an error: {error?.message || 'unknown'}
                </h1>
                <a
                    href="/"
                    className="mt-6 inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
                >
                    Go Back Home
                </a>
                </div>
            </div>
        </div>
    )
}