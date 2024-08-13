
import HeaderSection from "../components/HeaderSection"
import HomeService from "../components/home/HomeService"


interface Props {
    
}

const Services = (props: Props) => {
    return (
        <div className="w-full">
             <HeaderSection imgUrl={''} title="" desc=" " TextLogic = {false} />
            <div className="w-full px-vw5">
                <HomeService />
            </div>
        </div>
    )
}

export default Services
