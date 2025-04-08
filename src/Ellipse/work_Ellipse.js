export default function Work_ellipse(){
    return (
        <div className="w-[80%] h-[80%] absolute">
            <div
                className=" h-[500px] w-[500px] absolute  -left-[20%] top-[5%] rounded-full opacity-10  "
                style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(97, 255, 0, 1) 0%, rgba(50, 15, 133, 0) 100%)',
                }}
                >
            </div>
            <div
                className=" h-[500px] w-[500px] absolute  -right-[10%] -top-[5%] rounded-full opacity-10  "
                style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(97, 255, 0, 1) 0%, rgba(50, 15, 133, 0) 100%)',
                }}
                >
            </div>
        </div>
    )
}