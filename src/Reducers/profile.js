const largeProfile = 'https://d3nn82uaxijpm6.cloudfront.net/assets/avatar/athlete/large-63758b9942e3f074c3ecb84db07928ee.png';
const mediumProfile = 'https://d3nn82uaxijpm6.cloudfront.net/assets/avatar/athlete/medium-989c4eb40a5532739884599ed662327c.png';

const handleMissingProfileLarge = (url) => {
    if (url === 'avatar/athlete/large.png') {
        return largeProfile;
    }
    return url;
}

const handleMissingProfileMedium = (url) => {
    if (url === 'avatar/athlete/medium.png') {
        return mediumProfile;
    }
    return url;
}

export {
    handleMissingProfileLarge,
    handleMissingProfileMedium
}