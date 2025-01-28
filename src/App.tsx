
import HeaderCustom from "./components/HeaderCustom";
// import ProfileCard from "./components/ProfileCard";
import Welcomes from "./components/Welcomes";
import Counter from "./components/Counter";
import FooterCustom from "./components/FooterCustom";
import Like from "./components/Like";


// type Teacher = {
//   name : string;
//   job: string ;
//   year: number;
//   id : number; 
// }

// const teachers : Teacher[] = [
//   {
//   job: "Dosen",
//   name: "Samsil",
//   year : 2023,
//   id : 1
//   },
//   {
//     name: "Hadi",
//     year : 2222,
//     job : "Mandi",
//     id : 2
//   },
//   {
//     name: "rahmat",
//     year : 1220,
//     job : "pengangguran",
//     id : 3
//   }
  
// ]
function App() {
  return (
    <>
    <div style={{ padding : "16px 32px" }}>   
    <HeaderCustom />
      {/*<div style={{ gap : "10px" , display : "flex" , flexDirection : "row"}}>
      {
      teachers.map((teacher)=>{
        return <ProfileCard 
          name={teacher.name} 
          year = {teacher.year}
          jobs = {teacher.job}
          key = {teacher.id}
        />
      })
        
      
      }  
    
    </div>*/}
    
    <Counter />
    <Like />
    <Welcomes />
    <FooterCustom />
    
    </div>


    
    </>
    
  );
}

export default App
