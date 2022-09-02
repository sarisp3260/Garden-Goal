import { useEffect, useState } from "react";
import CardFriend from '../components/Friends/CardFriend'
import { friendsGame } from '../components/Friends/friends'
import ConfigSearcher from '../components/Share/ConfigSearcher'

const Friends = () => {

  const [searching, setSearch] = useState("");

  const [findIt, setFindIt] = useState(friendsGame);

  useEffect(() => {
    if (searching !== "") {
      setFindIt(
        friendsGame.filter((item) =>
          item.username.toLowerCase().includes(searching.toString().toLowerCase())
        )
      );
    } else {
      setFindIt(friendsGame);
    }
  },[searching,friendsGame]);
  return (
    <div className='bg-blueDark'>
        <ConfigSearcher searching={searching} setSearch={setSearch}/>
        <div className='py-6 grid place-items-center grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {findIt.map((friend) =>{
            return (<CardFriend key={friend.username} friend={friend}/>);
            }
          )}
        </div>
    </div>
  )
}

export default Friends