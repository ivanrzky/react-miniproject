type ProfileCardProps = {
    name? : string;
    year :number;
    jobs? : string;

};


const ProfileCard = (props: ProfileCardProps) =>{
    const {name , year , jobs } = props ;
    return(
    <div className="card">
            <p>Nama : {name || "??"}</p>
            <p> Birth : {year}</p>

      
            {
                props.jobs && <p>Jobs : {jobs}</p> 
            }
            
        </div>
    );
}
export default ProfileCard;