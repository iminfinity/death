import axios from "axios";

const updateCountry = (country) => {
  switch (country) {
    case "United States of America":
      return "usa";
    default:
      return country.toLowerCase().replaceAll(" ", "-");
  }
};

const deaths = async (country) => {
  let total;
  const updatedCountry = updateCountry(country);
  try {
    const response = await axios.get(
      `https://api.covid19api.com/total/dayone/country/${updatedCountry}/status/deaths`
    );
    const data = response.data;
    const lastItem = data[data.length - 1];
    total = lastItem.Cases;
  } catch (error) {
    console.error(error);
  } finally {
    return total;
  }
};
export default deaths;
