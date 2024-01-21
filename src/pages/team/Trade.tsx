import Sidebar from "../../components/Sidebar";
import TeamMenu from "../../components/TeamMenu";
import TradeComponent from "../../components/TradeComponent";

const Trade = () => {
    return (
        <div className="flex bg-white">
            <Sidebar page="team"/>
            <div className="p-16 w-full">

                <TeamMenu page="trade"/>

                <div className="bg-white rounded-lg border mt-16 p-5">
                    <p className="text-black font-bold text-xl">Trade Players</p>

                    <div className="space-y-5 mt-10 mb-10">
                        <TradeComponent number="One"/>
                        <TradeComponent number="Two"/>
                        <TradeComponent number="Three"/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Trade