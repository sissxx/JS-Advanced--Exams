class ArtGallery {

    constructor(creator) {
        this.creator = creator;

        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250,
        };

        this.listOfArticles = [];
        this.guests = [];

    }

    addArticle(articleModel, articleName, quantity) {
        quantity = Number(quantity);
        articleModel = articleModel.toLowerCase();


        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        };

        let obj = this.listOfArticles.find(o => o.articleName === articleName);

        if (!this.listOfArticles.find((x) => x.articleModel === articleModel)) {

            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity,
            });

        } else {
            obj.quantity += quantity;
        }


        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    };


    inviteGuest(guestName, personality) {

        if (this.guests.find(x => x.guestName === guestName)) {
            throw Error(`${guestName} has already been invited.`);
        }

        if (personality === 'Vip') {

            this.guests.push({
                guestName,
                points: 500,
                purchaseArticle: 0
            });

        } else if (personality === 'Middle') {

            this.guests.push({
                guestName,
                points: 250,
                purchaseArticle: 0
            });

        } else {
            this.guests.push({
                guestName,
                points: 50,
                purchaseArticle: 0
            });
        }

        return (`You have successfully invited ${guestName}!`)

    }

    buyArticle(articleModel, articleName, guestName) {
        let isExist = false;

        for (const key of Object.keys(this.possibleArticles)) {
            if (key === articleModel) {
                isExist = true;
                break;
            }
        }

        let article = this.listOfArticles.find(o => o.articleName === articleName && o.articleModel === articleModel);

        if (!isExist || !article) {
            throw new Error("This article is not found.");
        }
        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        };

        let guest = this.guests.find(x => x.guestName === guestName);

        if (!guest) {
            return `This guest is not invited.`;
        }

        let necesseryPoints = this.possibleArticles[articleModel];

        if ((guest.points - necesseryPoints) < 0) {

            return `You need to more points to purchase the article.`;

        } else {
            guest.points -= necesseryPoints;
            guest.purchaseArticle += 1;
            article.quantity -= 1;
        }

        return (`${guestName} successfully purchased the article worth ${necesseryPoints} points.`);
    }

    showGalleryInfo(criteria) {
        let result = '';
        if (criteria === 'article') {
            result += "Articles information:" + '\n';
            Object.values(this.listOfArticles).forEach((x) => {
                result += `${x.articleModel} - ${x.articleName} - ${x.quantity}` + '\n';
            })

        } else {
            result += 'Guests information:' + '\n';

            Object.values(this.guests).forEach((x) => {

                result += `${x.guestName} - ${x.purchaseArticle}` + '\n';
            });
        }

        return result.trim();
    }

}
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));