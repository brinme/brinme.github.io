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

export function createRideSegment(packages = [], maxPackages = 0, packagePrice = 0, currency = "") {
    return {
        packages,
        maxPackages,
        packagePrice,
        currency
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

export function createRequest(requestId, userId, rideId, packages = 0, points = []) {
    return {
        requestId,
        userId,
        rideId,
        packages,
        points, // List of Location objects
        status: RequestStatus.PENDING
    };
}
