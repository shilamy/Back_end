
export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-sand pt-6 sm:justify-center sm:pt-0">
            <div>
            <div className={`text-center flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className=" text-balance text-4xl font-semibold tracking-tight text-primary sm:text-6xl">
        KR-WALLET</h1>
            </div>
</div>
            <div className="mt-6 w-full overflow-hidden bg-dimBlue px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
