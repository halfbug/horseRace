import AppRouter from './config/AppRouter'
import { gql, useQuery } from '@apollo/client';


function App() {

  const GET_RES = gql`
 {
  get_race_results{
    edges {
      cursor
      node {
        country
        city
        name
        length
        start_time
        fee
        race_id
        weather
        status
        class
        prize_pool {
          first
          second
          third
        }
        horses {
          horse_id
          finish_time
          final_position
          name
          gate
          owner_address
          bloodline
          gender
          breed_type
          gen
          coat
          hex_color
          img_url
          class
          stable_name
        }
      }
    }
  }
}

`;

const { loading, error, data } = useQuery(GET_RES,
//   {variables: {
// 	"first": 2,
// 	"input": {
// 		"onlyMyRacehorses": false,
// 		"distance": {
// 			"from": 1000,
// 			"to": 2400
// 		}
// 	}
// }}
);
console.log("🚀 ~ file: App.js ~ line 16 ~ loading", loading)
console.log("🚀 ~ file: App.js ~ line 16 ~ error", error)
console.log("🚀 ~ file: App.js ~ line 16 ~ data", data);

  return (
    <div className="view view-main">
      <div className="pages">
        <div data-page="about" className="page">
          <div className="page-content">
            
              <AppRouter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
