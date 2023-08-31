export default async function getSomeCountry(){
    const result = await fetch("https://restcountries.com/v3.1/all");
    return result.json();
}