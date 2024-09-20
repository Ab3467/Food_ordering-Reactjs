

export default function Meals() {

    async function fetchApi(url) {
        try {
          let response = await fetch("");
          let data = await response.json();
          console.log("Fetched data: ", data);
        } catch (error) {
          console.log("Error fetching data: ", error);
        }
      }
    
  return (
    <div>
      <ul id="meals">
        
      </ul>
    </div>
  )
}
