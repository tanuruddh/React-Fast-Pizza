import { useSelector } from "react-redux"

function userName() {
    const username = useSelector((state) => state.user.username);

    if (!userName) return null;
    return (
        <div className="text-sm font-semibold">
            {username}
        </div>
    )
}

export default userName
