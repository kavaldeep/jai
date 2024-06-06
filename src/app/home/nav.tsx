import { GsapMagnetic } from "./animations/magnetics";
import { Button1 } from "./hero/buttons";

export  function Nav() {
    const liStyle = "text-white small-scale"
    return (
        <div className=" container h-[100px] py-9 
        flex justify-between">
            <div className="">
                <h2 className="text-2xl font-bold text-web-red"> Jai</h2>
            </div>

            <div className="">
                <ul className="flex justify-between space-x-8 ">
                    <GsapMagnetic>
                    <li className={liStyle}>How it Works </li>
                    </GsapMagnetic>
                    <GsapMagnetic>
                    <li className={liStyle}> Cryptos </li>
                    </GsapMagnetic>
                    <GsapMagnetic>
                    <li className={liStyle}> Features </li> 
                    </GsapMagnetic>
                    <GsapMagnetic>
                    <li className={liStyle}> Testimonial </li>
                    </GsapMagnetic>
                    <GsapMagnetic>
                    <li className={liStyle}> University  </li>
                    </GsapMagnetic>
                    <GsapMagnetic>
                    <li className={liStyle}> Login  </li>
                    </GsapMagnetic>
                </ul>
            </div>

        </div>
    )
}