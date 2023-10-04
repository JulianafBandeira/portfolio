
async function fetchProfileData() {
    const url = 'https://github.com/JulianafBandeira/portfolio/blob/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
