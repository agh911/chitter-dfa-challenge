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
                    <PeepForm />
                    <PeepCard />
                </div>
            </div>
        </div>
    )
}