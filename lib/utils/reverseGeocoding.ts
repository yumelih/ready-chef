export const getLocation = async (
  lng: number,
  lat: number,
): Promise<string | undefined> => {
  const url: string = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&${process.env.GEOAPIFY_API_KEY}`;

  let requestOptions = {
    method: "GET",
  };

  const res = await fetch(url, requestOptions);
  const location = await res.json();
  const country = location?.features[0]?.properties?.country;
  const city = location?.features[0]?.properties?.city;
  return `${city}, ${country}`;
};
