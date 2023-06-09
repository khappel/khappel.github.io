export class showViewData {
    constructor(showJSON) {
        this.showJSON = showJSON;
        //this.shows = this.GetShowsData();
    }
    GetShowsData() {
        let itemShows = new Map();

        for (var i = 0; i < this.showJSON.length; i++) {
            let showItem = new showResults();
            showItem = this.showJSON[i];
            itemShows.set(showItem.show, showItem);
        }


        return itemShows;
    }
    ReturnHorseResults() {
        let itemHorses = new Map();

        for (var i = 0; i < this.showJSON.length; i++) {
            let showItem = new showResults();
            showItem = this.showJSON[i];
            for (var c = 0; c < showItem.classes.length; c++) {
                let clsItem = new classes();
                clsItem = showItem.classes[c];

                for (var p = 0; p < clsItem.placings.length; p++) {
                    let placeItem = new placings();
                    placeItem = clsItem.placings[p];

                    if (itemHorses.has(placeItem.registrationNumber)) {
                        var foundHorse = itemHorses.get(placeItem.registrationNumber);

                        foundHorse.shows.push({
                            "show": showItem.show,
                            "horseCount": showItem.horseCount,
                            "class": clsItem.class,
                            "placing": placeItem.placing,
                            "championshipPoints": placeItem.ChampionshipPoints,
                            "placingPoints": placeItem.placingPoints
                        })
                    }
                    else {
                        var newHorse = {
                            "registrationNumber": placeItem.registrationNumber,
                            "horseName": placeItem.horseName,
                            "owner": placeItem.owner,
                            "sire": placeItem.sire,
                            "dam": placeItem.dam,
                            "shows": [{
                                "show": showItem.show,
                                "horseCount": showItem.horseCount,
                                "class": clsItem.class,
                                "placing": placeItem.placing,
                                "championshipPoints": placeItem.ChampionshipPoints,
                                "placingPoints": placeItem.placingPoints,
                                "pointsTotal": ""
                            }]
                        };
                        itemHorses.set(placeItem.registrationNumber, newHorse)
                    }
                }
            }
        }

        return itemHorses;

    }
    ReturnOwnerResults() {
        let itemOwners = new Map();

        for (var i = 0; i < this.showJSON.length; i++) {
            let showItem = new showResults();
            showItem = this.showJSON[i];
            for (var c = 0; c < showItem.classes.length; c++) {
                let clsItem = new classes();
                clsItem = showItem.classes[c];

                for (var p = 0; p < clsItem.placings.length; p++) {
                    let placeItem = new placings();
                    placeItem = clsItem.placings[p];

                    if (itemOwners.has(placeItem.owner)) {
                        var foundOwner = itemOwners.get(placeItem.owner);

                        foundOwner.shows.push({
                            "show": showItem.show,
                            "horseCount": showItem.horseCount,
                            "class": clsItem.class,
                            "registrationNumber": placeItem.registrationNumber,
                            "horseName": placeItem.horseName,
                            "sire": placeItem.sire,
                            "dam": placeItem.dam,
                            "placing": placeItem.placing,
                            "championshipPoints": placeItem.ChampionshipPoints,
                            "placingPoints": placeItem.placingPoints
                        })
                    }
                    else {
                        var newOwner = {
                            "owner": placeItem.owner,
                            "shows": [{
                                "show": showItem.show,
                                "horseCount": showItem.horseCount,
                                "class": clsItem.class,
                                "registrationNumber": placeItem.registrationNumber,
                                "horseName": placeItem.horseName,
                                "sire": placeItem.sire,
                                "dam": placeItem.dam,
                                "placing": placeItem.placing,
                                "championshipPoints": placeItem.ChampionshipPoints,
                                "placingPoints": placeItem.placingPoints,
                                "pointsTotal": ""
                            }]
                        };
                        itemOwners.set(placeItem.owner, newOwner)
                    }
                }
            }
        }

        return itemOwners;

    }
}

class showResults {
    constructor(show, horseCount, classes) {
        this.show = show;
        this.horseCount = horseCount;
        this.classes = classes;
    }
}

class classes {
    constructor(_class, placings) {
        this._class = _class;
        this.placings = placings;
    }
}

class placings {
    constructor(placing, registrationNumber, horseName, owner, sire, dam, championshipPoints, placingPoints) {
        this.placing = placing;
        this.registrationNumber = registrationNumber;
        this.horseName = horseName;
        this.owner = owner;
        this.sire = sire;
        this.dam = dam;
        this.championshipPoints = championshipPoints;
        this.placingPoints = placingPoints;
        this.placingTotal = this.PlacingTotal;
    }
    PlacingTotal() {
        return (this.placingPoints * 4) + this.championshipPoints;
    }
}