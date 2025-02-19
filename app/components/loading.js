"use client";

export default function Loading({ progress = 75 }) {
    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center">
            <div className="w-1/2 max-w-md">
                <span id="ProgressLabel" className="sr-only">Loading</span>

                <span
                    role="progressbar"
                    aria-labelledby="ProgressLabel"
                    aria-valuenow={progress}
                    className="block rounded-full bg-gray-200"
                >
                    <span
                        className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500"
                        style={{ width: `${progress}%` }}
                    ></span>
                </span>
            </div>
        </div>
    )
}