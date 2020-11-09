let criminalFacilites = []

export const useCriminalFacilities = () => criminalFacilites.slice()

export const getCriminalFacilities = () => {
    return fetch("https://criminals.glassdale.us/criminalFacilities")
        .then(res => res.json())
        .then(apiData => criminalFacilites = apiData)
}