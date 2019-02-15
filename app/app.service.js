"use strict";
function ProfileService($location) {
    const self = this;
    self.newProf = {
        name: "Grant Chirpus",
        contact: "cool@dog",
        bio: "I am an awesome student. I love to code and learn!"
    }
    self.getUserProfile = function() {
        return self.newProf;
    };
    self.setUserProfile = function(newProf) {
        self.newProf = newProf;
        $location.path("/profilepage")
    }
    self.editProfile = function() {
        $location.path("/editprofile");
    }
}

angular
    .module("ProfileApp")
    .service("ProfileService", ProfileService);