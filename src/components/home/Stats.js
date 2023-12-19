let Stats = ({stats, title, subtitle}) => {

    return (

        <div className={"w-full flex flex-col gap-y-16"}>

            {
                (title || subtitle) && (

                    <div className={'text-left'}>
                        <h1 className="text-[20px] md:text-[25px] font-light mb-3">
                            {title}
                        </h1>
                        <p className="text-[18px] leading-8 italic">
                            {subtitle}
                        </p>
                    </div>
                )
            }

            {/*<div className={"w-full mx-auto flex justify-center items-center flex-col md:flex-row md:gap-x-[32px] md:gap-y-0 gap-x-0 gap-y-12"}>*/}
            <div
                className={"w-full mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-x-[32px] md:gap-y-0 gap-x-0 gap-y-12"}>
                {stats.map((stat, index) => {
                    return (

                        ( stat.fields.url === '#' || stat.fields.url === '' ) ?

                            /* STAT HAS NO EXTERNAL LINK */
                            <div key={index}
                                 className={"max-w-max mx-auto text-center flex flex-col gap-y-2"}>
                                <h3 className={"w-full text-[46px] md:text-[46px] leading-[32px] text-vm-blue font-bold"}
                                    style={{WebkitTextStroke: `2px #3F47FF`, color: "transparent"}}>
                                    {stat.fields.statistic}
                                </h3>
                                <p className={"text-[16px] w-full mb-[8px] text-black leading-[24px]"}>
                                    {stat.fields.title}
                                </p>
                            </div> :

                            /* STAT HAS EXTERNAL LINK */
                            <a key={index} href={stat.fields.url}
                               className={"max-w-max mx-auto text-center flex flex-col gap-y-2"}>
                                <h3 className={"w-full text-[46px] md:text-[46px] leading-[32px] text-vm-blue font-bold"}
                                    style={{WebkitTextStroke: `2px #3F47FF`, color: "transparent"}}>
                                    {stat.fields.statistic}
                                </h3>
                                <p className={"text-[16px] w-full mb-[8px] text-black leading-[24px]"}>
                                    {stat.fields.title}
                                </p>
                            </a>
                    )
                })}
            </div>
        </div>

    )
}

export default StatsComponent;