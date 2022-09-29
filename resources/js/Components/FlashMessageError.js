export default function FlashMessageError({ className, message = "" }) {
    return (
        <div
            className={`flex bg-red-200 rounded p-4 mt-4 text-sm text-black ${className}`}
        >
            {message}
        </div>
    );
}
