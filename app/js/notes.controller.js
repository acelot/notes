(function () {
    'use strict';

    angular
        .module('app')
        .constant('NOTE_MAXLENGTH', 1000)
        .controller('NotesController', NotesController);

    NotesController.$inject = ['$window', 'NOTE_MAXLENGTH', '$localStorage', 'uuidService'];

    function NotesController($window, NOTE_MAXLENGTH, $localStorage, uuid) {
        var vm = this;

        vm.NOTE_MAXLENGTH = NOTE_MAXLENGTH;
        vm.all = [];
        vm.save = save;
        vm.remove = remove;

        refreshList();

        ///

        function refreshList() {
            // Two-way binding notes to local storage
            vm.all = $localStorage.notes;
        }

        function save(form) {
            if (form.$valid) {
                // Storing note
                vm.all.push({
                    id       : uuid(),
                    body     : vm.body,
                    createdAt: $window.moment().utc().format()
                });

                // Resetting form
                vm.body = null;
                vm.search = null;
                form.$setPristine();
            }
        }

        function remove(id) {
            // Searching note by id and removing
            angular.forEach(vm.all, function(note, index) {
                if (note.id === id) {
                    vm.all.splice(index, 1);
                    return false;
                }
            });
        }
    }
})();