export default function Hero_ellipse(){
    return (
        <div className="w-full h-full absolute">
            <div
                className=" h-[500px] w-[500px] absolute  -left-[20%] -bottom-[5%] rounded-full opacity-20  "
                style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(97, 255, 0, 1) 0%, rgba(50, 15, 133, 0) 100%)',
                }}
                >
            </div>
            <div
                className=" h-[500px] w-[500px] absolute  -right-[20%] -top-[20%] rounded-full opacity-20  "
                style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(97, 255, 0, 1) 0%, rgba(50, 15, 133, 0) 100%)',
                }}
                >
            </div>
        </div>
    )
}