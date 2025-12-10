// Enums
export const RideStatus = {
    IDLE: "IDLE",
    STARTED: "STARTED",
    ENDED: "ENDED",
    RATED: "RATED"
};

export const RequestStatus = {
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED",
    REJECTED: "REJECTED",
    RATED: "RATED"
};

// Factory Functions

export function createLocation(name = "", address = "", country = "", latitude = 0.0, longitude = 0.0) {
    return { name, address, country, latitude, longitude };
}

export function createProfile(photo = "", about = "", media = "", phoneNumber = "", country = "", birthday = "") {
    return { photo, about, media, phoneNumber, country, birthday };
}

export function createUser(userId, email, firstName = "", lastName = "") {
    return {
        userId,
        firstName,
        lastName,
        email,
        verification: null,
        scores: [],
        reviews: [],
        rides: [],
        requests: [],
        statistics: [0, 0],
        profile: createProfile()
    };
}

export function createRideSegment(packages = [], currency = "", maxS = 0, maxM = 0, maxL = 0, priceS = 0, priceM = 0, priceL = 0) {
    return {
        packages,
        currency,
        maxS,
        maxM,
        maxL,
        priceS,
        priceM,
        priceL
    };
}

export function createRide(rideId, ownerId, points = [], times = [], rideSegments = [], plate = "", comment = "") {
    return {
        rideId,
        ownerId,
        points, // List of Location objects
        times, // List of Strings
        rideSegments, // List of RideSegment objects
        requests: [],
        plate,
        comment,
        status: RideStatus.IDLE
    };
}

export function createRequest(requestId, userId, rideId, packages = 0, points = [], packageType = "S") {
    return {
        requestId,
        userId,
        rideId,
        packages,
        points, // List of Location objects
        status: RequestStatus.PENDING,
        packageType
    };
}
