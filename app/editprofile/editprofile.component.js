"use strict";
const editprofile = {
    template: `
    <form ng-submit="$ctrl.newProfile($ctrl.newProf)">
        <p>Name</p>
        <input type="text" placeholder="Name" ng-model="$ctrl.newProf.name">
        <p>Contact</p>
        <input type="text" placeholder="Contact" ng-model="$ctrl.newProf.contact">
        <p>Bio</p>
        <input type="textarea" placeholder="Bio"  ng-model="$ctrl.newProf.bio">
        
        <button>Update</button>
    </form>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.newProfile = function(newProf) {
            console.log("does this work");
            ProfileService.setUserProfile(newProf);
            console.log(newProf);
        }
    }]
}

angular.module("ProfileApp").component("editprofile", editprofile)