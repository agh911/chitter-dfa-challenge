import { Sidebar } from "../components/Sidebar"
import { PeepForm } from "../components/PeepForm"
import { PeepCard } from "../components/PeepCard"

export const ChitterHome = () => {
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-9">
                    <h5 className="border-bottom pb-2 mt-3">Home</h5>
                    <PeepForm />
                    <h6 className="my-3">Latest peeps</h6>
                    <PeepCard />
                </div>
            </div>
        </div>
    )
}