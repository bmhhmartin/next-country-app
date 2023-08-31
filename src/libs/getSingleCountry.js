export default async function getSingleCountry(ccn3){
    const result = await fetch(`https://restcountries.com/v3.1/alpha/${ccn3}`);
    if(result){
        return result.json();
    }else{
        return "Error in API";
    }
    
}