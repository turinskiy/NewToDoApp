export const localStorageProvider = () => {
    
    const storageAvailable = (type) => {
        try {
            var storage = window[type];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    const load = () => {
        // console.log('load');
        if (storageAvailable('localStorage')) {
            const localStorage = window['localStorage'];
            const stringifyList = localStorage.length > 0 ? localStorage.getItem('toDoList') : '[]';
            
            return JSON.parse(stringifyList);
        }
        else {
            console.error('Too bad, no localStorage for us');
        }
    }

    function save(items) {
        // console.log('save', items);
        if (storageAvailable('localStorage')) {
            const localStorage = window['localStorage'];
            localStorage.setItem('toDoList', JSON.stringify(items));
        }
        else {
            console.error('Too bad, no localStorage for us');
        }
    }

    return {
        save,
        load
    };
}