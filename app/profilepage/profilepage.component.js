"use strict";
const profilepage = {
    template: `
    <section class="profileContainer">
        <div class="imageContainer">
            <img class="hedgehog" src="hedgehog.jpg">
        </div>

        <div class="contentContainer">
            <p class="name">{{$ctrl.newProf.name}} </p>
            <p class="contact">{{$ctrl.newProf.contact}} </p>
            <p class="bio">{{$ctrl.newProf.bio}} </p>
            <button class="editButton" ng-click="$ctrl.pathToEdit()">Edit</button>
        </div>
    </section>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.newProf = ProfileService.getUserProfile();
        vm.pathToEdit = function() {
            ProfileService.editProfile();
        }
    }]
}

angular
    .module("ProfileApp")
    .component("profilepage", profilepage);