import useCamps from "../hooks/useCamps";


const PopularMedicalCamps = () => {
    const [camps] = useCamps();
    const accenCamps = camps.slice().sort((a,b)=>a.participant_count-b.participant_count)
    console.log(accenCamps)


    return (
        <div>
            <h1>this is popular medical camps</h1>
        </div>
    );
};

export default PopularMedicalCamps;