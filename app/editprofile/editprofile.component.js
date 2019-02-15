"use strict";
const editprofile = {
    template: `
    <form ng-submit="$ctrl.newProfile($ctrl.newProf)">
        <p class="description" >Use the form below to update your profile</p>
        <p class="nameP">Name</p>
        <input class="nameInput" type="text" placeholder="Name" ng-model="$ctrl.newProf.name">
        <p class="contactP" >Contact</p>
        <input class="contactInput" type="text" placeholder="Contact" ng-model="$ctrl.newProf.contact">
        <p class="bioP">Bio</p>
        <input class="bioInput" type="textarea" placeholder="Bio"  ng-model="$ctrl.newProf.bio">
        
        <button class="updateButton">Update</button>
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