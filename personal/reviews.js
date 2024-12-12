let reviews = localStorage.getItem('gameReviews') 
    ? JSON.parse(localStorage.getItem('gameReviews')) 
    : [
    {
        gameName: "Helldivers II",
        username: "NZtankman",
        reviewText: "One of the best multiplayer/co-op games available at the moment if you enjoy action games. It's my game of choice at the moment as it's so much fun and I love seeing if I can survive in the harder difficulty modes. They're adding new content when they can. Has a great soundtrack. Most random players will work as a team and there's plenty of new people joining if you like passing on your knowledge. COME GET SOME!!! FOR SUPER EARTH!!!!",
        imageUrl: "images/helldivers.avif"
    },
    {
        gameName: "Deep Rock Galactic",
        username: "Kenruyoh",
        reviewText: "I normally don't review games until I've 100% them but this is needed for the Labor of Love Award. This is one of the games that keeps on giving. Stardew Valley and Dota2 are all at the top of my lists but DRG has outshone them both this time. One of the main reasons that this game deserves the award is due to the past rewards claimable by any individual whose willing to play the game. It doesn't matter when you start, since you will always be able to catch up on collecting all that this game offers. Aside from the awesome coop gameplay, the community also helps in keeping this game alive thru the different mods available. Both devs and the gamers love this game which makes it really fun!",
        imageUrl: "images/DeepRock.jpg"
    }
];


export function addReview(newReview) {
    reviews.push(newReview);
    
    localStorage.setItem('gameReviews', JSON.stringify(reviews));
    return reviews;
}


export { reviews };