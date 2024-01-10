import { useEffect, useState } from "react"
import { UserType } from "../../graphql"
import { api } from "../../graphql/requester"
import UserPreview from "./UserPreview"

const Members = (props: any) => {

    const [members, setMembers] = useState<Array<UserType>>()

    useEffect(() => {
        api.GetLeagueMembers( {leagueId: props.league.id}).then((response) => setMembers(response.league.members))
    }, []);

    const membersList = () => {
        return members?.map((user: any, index: any) => 
            <div key={index}>
                <UserPreview user={user}/>
            </div>
        )
    }

    return (
        <>
            <div className="pt-5">
                {membersList()}
            </div>
        </>
    )
}

export default Members