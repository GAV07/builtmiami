let Stats = ({stats}) => {


    return (

        <div className={'w-full bg-zinc-50'}>
            <div className={"bg-zinc-50 w-[90%] mx-auto flex flex-col gap-y-16 pt-20"}>

                <div className="mx-auto max-w-7xl px-6 lg:pt-32 sm:mt-0 lg:px-8 xl:-mt-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Season 2 Overview</h1>
                </div>

                <div
                    className={"bg-zinc-50 w-full mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-x-[32px] md:gap-y-0 gap-x-0 gap-y-12"}>
                    {stats.map((stat, index) => {
                        return (

                            (stat.fields.url === '#' || stat.fields.url === '') ?

                                /* STAT HAS NO EXTERNAL LINK */
                                <div key={index}
                                     className={"max-w-max mx-auto text-center flex flex-col gap-y-2"}>
                                    <h3 className={"w-full text-[72px] md:text-[72px] leading-[32px] text-[#3F47FF] font-bold"}
                                        // style={{WebkitTextStroke: `2px #3F47FF`, color: "transparent"}}>
                                    >
                                        {stat.fields.statistic}
                                    </h3>
                                    <p className={"text-[16px] w-full mb-[8px] text-black leading-[24px]"}>
                                        {stat.fields.title}
                                    </p>
                                </div> :

                                /* STAT HAS EXTERNAL LINK */
                                <a key={index} href={stat.fields.url}
                                   className={"md:max-w-max  bg-[#3F47FF] pl-[5px] mx-auto text-center"}>
                                <span className={'bg-zinc-50 flex flex-col justify-start items-start lex-col gap-y-8 pl-5'}>
                                    <span
                                        className={"w-full text-[60px] md:text-[60px] leading-[32px] text-gray-900 font-semibold"}
                                    >
                                        {stat.fields.statistic}
                                    </span>
                                    <span className={"text-[20px] w-full mb-[8px] text-gray-600 leading-[24px]"}>
                                        {stat.fields.title}
                                    </span>
                                </span>
                                    <span>

                                </span>
                                </a>
                        )
                    })}
                </div>
            </div>
        </div>


    )
}

export default Stats;