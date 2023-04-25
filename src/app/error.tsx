"use client";

export default function Error({
    error, 
    reset,
}:  { error: Error, reset: () => void }) {
    return (
        <div>
            <div>予期せぬエラーが発生しました</div>
            <div>
                <button className=" bg-red-600 rounded-md py-3 px-3" onClick={reset}>Try Again</button>
            </div>
        </div>
    )
}