import { GameCard } from "../../_components/GameCard"
import { List } from "../../_components/List"
import { games } from "../../_middlewares/GamesMock"



export const Home = ()=>{
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <p>This is a simple home page to test the routing.</p>


            <List >
                {games.map((item, index)=>
                    <GameCard key={index} game={item}/>
                )}
            </List>
        </div>
    )
}