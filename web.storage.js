        var isWebStorageSupported = false;

        window.onload = function ()
        {
            if (typeof (Storage) !== "undefined") {
                //your browser supports web storage.
                isWebStorageSupported = true;
            }
            else {
                //your browser doesn't support web storage.
                isWebStorageSupported = false;
            }
        };

        //check whether the browser supports web storage
        //and insert to local storage
        function insertToLocalStorage(id, value) {
            if (isWebStorageSupported) {
                if (id !== "" && value !== "") {
                    localStorage.setItem(id, value);
                    alert("Saved on Local Storage");
                }
            }
        }

        //check whether the browser supports web storage
        //and insert to session storage
        function insertToSessionStorage(id, value) {
            if (isWebStorageSupported) {
                if (id !== "" && value !== "") {
                    sessionStorage.setItem(id, value);
                    alert("Saved on Session Storage");
                }
            }
        }

        //check whether the browser supports web storage
        //show all items from local storage
        function getAllFromLocalStorage() {
            if (isWebStorageSupported) {
                for (var i = 0, len = localStorage.length; i < len; i++) {
                    var key = localStorage.key(i);
                    var value = localStorage.getItem(key);
                    alert(key + "=" + value);
                }
            }
        }

        //check whether the browser supports web storage
        //show all items from session storage
        function getAllFromSessionStorage() {
            if (isWebStorageSupported) {
                for (var i = 0, len = sessionStorage.length; i < len; i++) {
                    var key = sessionStorage.key(i);
                    var value = sessionStorage.getItem(key);
                    alert(key + "=" + value);
                }
            }
        }

        //clear all items from local and session storage
        function clearStorage()
        {
            if (isWebStorageSupported) {
                sessionStorage.clear();
                localStorage.clear();
                alert("Local Storage and Session Storage Cleared.");
            }
        }
