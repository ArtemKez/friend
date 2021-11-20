class Friend {
    constructor(сandyCount=0,...friends) {
        this.сandyCount = сandyCount
        this.friends = friends
    }
    friendsCandyCount() {
        return this.friends.reduce((acc, friend) => {
            return acc + friend.сandyCount
        },0)
    }
}